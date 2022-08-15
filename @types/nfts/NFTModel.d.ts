export interface NFTModel {

    name: string;

    image: any;

    artist: {
        avatar: any;
        name: string
    };

    owner: {
        avatar: any;
        name: string
    };

    description: string;

    tags: string[];

    ethPrice: string | number;

    dollarPrice: string | number;

}