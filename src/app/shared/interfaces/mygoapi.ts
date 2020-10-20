export interface IMygoUser {
  _id: string;
  name: string;
  email: string;
  username: string;
}

export interface IMygoCardImage {
  id: number;
  image_url: string;
  image_url_small: string;
}

export interface IMygoCard {
  id: number;
  name: string;
  type: string;
  desc: string;
  atk: number;
  def: number;
  level: number;
  race: string;
  attribute: string;
  archetype: string;
  scale: number;
  linkVal: number;
  linkMarkers: number;
  card_images: Array<IMygoCardImage>;
  count: number;
}

export interface IMygoDeck {
  _id: string;
  userId: string;
  name: string;
  createdBy: string;
  main: IMygoCard[];
  extra: IMygoCard[];
  side: IMygoCard[];
}
