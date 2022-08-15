import { NFTModel } from "_types/nfts/NFTModel";
import Geometrical from '_assets/nftImgs/Geometrical.svg'
import placeholder from '../../assets/avatars/placeholder.svg'

export const geometricalNft: NFTModel = {
    name: 'Geometrical heart-fire dispersion',
    image: Geometrical,
    artist: {
        avatar: placeholder,
        name: 'CameronWill'
    },
    owner: {
        avatar: placeholder,
        name: 'Williamson'
    },
    description: 'A fragmental dispersion of the heart. I used many photoshop geometrical brushes with different random size and opacity, in order to emphatize the contrast between front and background spaces, enhancing better the main subject exposure.',
    tags: ['Blue Color', 'Cold', 'Crypto Art', 'Blue Filter', 'Defragmentation', 'Hexagon', 'Light', 'Motion', 'Sparks', 'Edition 1 of 1'],
    ethPrice: '0.4435',
    dollarPrice: '$1,231'
} 