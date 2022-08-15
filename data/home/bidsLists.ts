import { IBids } from "_types/home/bids";
import YellowCard from '../../assets/avatars/yellow-card.svg'
import YellowPink from '../../assets/avatars/yellow-pink.svg'
import Block from '../../assets/avatars/concept-blockchain.svg'
import Jump from '../../assets/avatars/men-jump.svg'
import Ball from '../../assets/avatars/beach-ball.svg'
import White from '../../assets/avatars/white.svg'
import Red from '../../assets/avatars/red.svg'
import Blue from '../../assets/avatars/blue.svg'

export const bidsList: IBids[] = [
    {
        name: "Cameron Williamson",
        bid: 1,
        date: "June 20 2021, 06:30 AM",
        avatar: YellowCard
    },
    {
        name: "Esther Howard",
        bid: 1,
        date: "June 20 2021, 06:30 AM",
        avatar: YellowPink
    },
    {
        name: "Jenny Wilson",
        bid: 1,
        date: "June 20 2021, 06:30 AM",
        avatar: White,
    },
    {
        name: "Marvin McKinney",
        bid: 1,
        date: "June 20 2021, 06:30 AM",
        avatar: Block
    },
]

export const historyBids: IBids[] = [
    {
        name: "Cameron Williamson",
        bid: 1,
        date: "June 20 2021, 06:30 AM",
        avatar: Jump
    },
    {
        name: "Esther Howard",
        bid: 1.5,
        date: "June 20 2021, 06:35 AM",
        avatar: Red,
    },
    {
        name: "Jacob Jones",
        bid: 1.7,
        date: "June 20 2021, 06:47 AM",
        avatar: Blue,
    },
    {
        name: "Jenny Wilson",
        bid: 1.4,
        date: "June 20 2021, 06:55 AM",
        avatar: Ball
    },
]