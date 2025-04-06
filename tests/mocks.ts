export interface Topic {
  id: number
  name: string
  content: string
  createdAt: string
  updatedAt: string
  version: number
  parentTopicId?: number
}

export const topicMocks: Topic[] = [
  {
    "id": 1743738847018,
    "name": "First topic",
    "content": "Topic content",
    "createdAt": "Fri Apr 04 2025 00:54:07 GMT-0300 (Brasilia Standard Time)",
    "updatedAt": "Fri Apr 04 2025 00:54:07 GMT-0300 (Brasilia Standard Time)",
    "version": 1
  },
  {
    "id": 1743738900320,
    "name": "Second topic",
    "content": "Topic content",
    "createdAt": "Fri Apr 04 2025 00:55:00 GMT-0300 (Brasilia Standard Time)",
    "updatedAt": "Fri Apr 04 2025 00:55:00 GMT-0300 (Brasilia Standard Time)",
    "version": 1
  },
  {
    "id": 1743738900599,
    "name": "Third topic",
    "content": "Topic content",
    "createdAt": "Fri Apr 04 2025 00:55:00 GMT-0300 (Brasilia Standard Time)",
    "updatedAt": "Fri Apr 04 2025 00:55:00 GMT-0300 (Brasilia Standard Time)",
    "version": 1,
    "parentTopicId": 1743738900320
  },
  {
    "id": 1743738900800,
    "name": "Fourth topic",
    "content": "Topic content",
    "createdAt": "Fri Apr 04 2025 00:55:00 GMT-0300 (Brasilia Standard Time)",
    "updatedAt": "Fri Apr 04 2025 00:55:00 GMT-0300 (Brasilia Standard Time)",
    "version": 1,
    "parentTopicId": 1743738900599
  },
  {
    "id": 1743739100103,
    "name": "Fifth topic",
    "content": "Topic content",
    "createdAt": "Fri Apr 04 2025 00:55:00 GMT-0300 (Brasilia Standard Time)",
    "updatedAt": "Fri Apr 04 2025 00:55:00 GMT-0300 (Brasilia Standard Time)",
    "version": 1,
    "parentTopicId": 1743738900320
  }
];
