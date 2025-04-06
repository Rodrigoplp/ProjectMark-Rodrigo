import { topics, Topic } from './models/topic'

class TopicNode {
  node: Topic
  childNode?: [TopicNode?]

  constructor(node: Topic, childNode: TopicNode) {
    this.node = node
    this.childNode = childNode ? [childNode] : []
  }
}

// Search all topics' children and return them as a tree
export const finder = (id: number) => {
  const recursive = (topics: Topic[], id: number, node?: TopicNode) => {
    const topic = topics.find((i) => i.id === id)
    if (!node) {
      node = new TopicNode(topic, null)
    }
    const topicChildren = topics.filter((i) => i.parentTopicId === id)

    topicChildren.forEach(t => {
      const turn = recursive(topics, t.id)
      node.childNode.push(turn)
    })

    return (node)
  }

  const result = recursive(topics, id)

  return (result)
}

// Find the shortest path between topics in a tree
export const shortestPath = (idA: number, idB: number) => {
  try {
    // Find topics of each input id
    const topicA = topics.find(t => t.id === idA)
    const topicB = topics.find(t => t.id === idB)

    if (!topicA || !topicB) throw new Error('Topic not found')

    // Create arrays to hold paths from both topics up to their roots
    const pathA = [topicA]
    const pathB = [topicB]

    // Create array  to hold solution
    let shortestPath = []

    // Function to build paths from topic to its root
    const buildPath = (topic: Topic, path: string) => {
      if (topic.parentTopicId) {
        const parent = topics.find(t => t.id === topic.parentTopicId)
        if (path === 'a') pathA.push(parent)
          if (path === 'b') pathB.push(parent)
            buildPath(parent, path)
      } else {
        return
      }
    }

    // Build both paths
    buildPath(topicA, 'a')
    buildPath(topicB, 'b')

    // If there is a path linking both topics, save it as solution
    pathA.forEach((p: Topic, i: number) => {
      if (pathB.map(p => p.id).indexOf(p.id) !== -1) {
        shortestPath = pathA.slice(0, i)
        pathB.reverse()
        shortestPath = shortestPath.concat(pathB.slice(pathB.indexOf(p)))
      }
    })

    return (shortestPath)
  } catch (error) {
    return (error)
  }
}
