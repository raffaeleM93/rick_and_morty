export interface Personaggio {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    location: {name: string, url: string}
    image: string;
    episode: [];  
    created: string;  
}
