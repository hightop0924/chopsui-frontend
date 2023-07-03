export interface LinkData {
  title: string;
  sublinks?: LinkData[];
  link: string;
}

export interface UserDataProp {
  username: string;
  email: string;
}

export interface DataType {
  item: string;
  value: string;
}

export interface TokenDataType {
  name: string;
  symbol: string;
  image: string;
}
