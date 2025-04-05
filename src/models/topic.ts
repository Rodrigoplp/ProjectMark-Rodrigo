export interface Topic {
  id: number
  name: string
  content: string
  createdAt: string
  updatedAt: string
  version: number
  parentTopicId?: number

  update(name:string, content: string, parentTopicId: number): Topic
}

export class TopicNode implements Topic {
  id: number
  name: string
  content: string
  createdAt: string
  updatedAt: string
  version: number
  parentTopicId?: number

  constructor(
    name: string,
    content: string,
    id?: number,
    createdAt?: string,
    version?: number,
    parentTopicId?: number
  ) {
    this.id = id ?? Date.now()
    this.name = name
    this.content = content
    this.parentTopicId = parentTopicId ?? undefined
    this.createdAt = createdAt ?? new Date().toString()
    this.updatedAt = new Date().toString()
    this.version = version ? version++ : 1
  }

  update(name: string, content: string, parentTopicId: number) {
    const newName = name ?? this.name
    const newContent = content ?? this.content
    const newVersion = this.version + 1
    const newParentTopicId = parentTopicId ?? this.parentTopicId

    const newTopic = new TopicNode(
      newName,
      newContent,
      this.id,
      this.createdAt,
      newVersion,
      newParentTopicId
    )

    topics.push(newTopic)

    return (newTopic)
  }
}

export const topics: Topic[] = [];
