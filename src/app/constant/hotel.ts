export interface Hotel {
    name: string;
    lat: number;
    lng: number;
    desc: string;
    tags: string[];
    marker?: google.maps.Marker;
};