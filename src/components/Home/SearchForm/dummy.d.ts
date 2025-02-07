declare interface User {
  _id: string;
  image: string; // 프로필 이미지
  fullName: string;
  role: string;
  coverImage?: string; // 커버 이미지
  emailVerified?: boolean; // 사용되지 않음
  banned?: boolean; // 사용되지 않음
  isOnline?: boolean;
  posts?: [];
  likes?: [];
  comments?: [];
  followers?: [];
  following?: [];
  notifications?: [];
  messages?: [];
  email?: string;
  createdAt?: string;
  updatedAt?: string;
}

declare module 'dummy' {
  declare const dummy: Array<User>;
}
