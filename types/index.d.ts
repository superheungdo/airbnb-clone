export interface Explore {
  img: string;
  location: string;
  distance: string;
}

export interface Live {
  img: string;
  title: string;
}

export interface Search {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

export interface Map {
  longitude: number;
  latitude: number;
  zoom: number;
}
