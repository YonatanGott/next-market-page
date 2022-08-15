export interface ArtistWorkModel {
    id: number;

    name: string;

    image: any;

    artist: {
        avatar: any;
        name: string
    };

    currentBid : string | number;

    endIn: string;

}