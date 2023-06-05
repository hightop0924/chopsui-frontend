export interface LinkData {
  title: string;
  sublinks?: LinkData[];
  link: string;
}

export interface UserDataProp {
  username: string;
  email: string;
}
