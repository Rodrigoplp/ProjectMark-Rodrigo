export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export let users: User[] = []
