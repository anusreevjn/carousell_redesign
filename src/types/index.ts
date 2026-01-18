export interface Listing {
  id: string;
  image: string;
  price: number;
  title: string;
  location: string;
  timeAgo: string;
  userId: string;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
}
