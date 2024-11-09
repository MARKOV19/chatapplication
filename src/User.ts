// users.ts

export interface User {

    id: number;
  
    name: string;
  
    avatar: string | null;
  
  }
  
  
  export const users: User[] = [
  
    { id: 1, name: 'Alice', avatar: 'https://example.com/alice.jpg' },
  
    { id: 2, name: 'Bob', avatar: 'https://example.com/bob.jpg' },
  
    { id: 3, name: 'Charlie', avatar: null }, // Pas d'avatar, affichera les initiales
  
  ];