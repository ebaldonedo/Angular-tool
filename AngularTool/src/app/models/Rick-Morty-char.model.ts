export interface responseRickMortyApi {
  results: RickMortyChar[];
}

export interface RickMortyChar {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    location: any;
}
