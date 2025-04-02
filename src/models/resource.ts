export interface Resource {
  id: number;
  topicId: string;
  url: string;
  description: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export let resources: Resource[] = [];
