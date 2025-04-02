export interface Topic {
  id: number;
  name: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  version: number;
  parentTopicId: number;
}

export let topics: Topic[] = [];
