import { ArtistWorkModel } from "_types/nfts/NFTsArtistWorkModel";
import placeholder from '../../assets/avatars/placeholder.svg'
import Girl from '_assets/nftImgs/3d-girl.svg'
import Diamond from '_assets/nftImgs/diamond-helmet.svg'
import Virtual from '_assets/nftImgs/virtual-internet.svg'

export const nftWorks: ArtistWorkModel[] = [
    {
        id: 0,

        name: 'Inner State : Pink',

        image: Girl,

        artist: {
            avatar: placeholder,
            name: 'Cameron Williamson'
        },

        currentBid: '0.4435',

        endIn: '10h 12m 32s'
    },
    {
        id: 1,

        name: 'Inner State : Joy',

        image: Diamond,

        artist: {
            avatar: placeholder,
            name: 'Cameron Williamson'
        },

        currentBid: '0.4435',

        endIn: '10h 12m 32s'
    },
    {
        id: 2,
        
        name: 'Inner State : Ariel',

        image: Virtual,

        artist: {
            avatar: placeholder,
            name: 'Cameron Williamson'
        },

        currentBid: '0.4435',

        endIn: '10h 12m 32s'
    },
]