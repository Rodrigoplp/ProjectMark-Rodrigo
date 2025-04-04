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
