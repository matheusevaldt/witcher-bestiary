import beasts_bearImage from '../../assets/images/monsters/beasts_bear.png';
import beasts_dogImage from '../../assets/images/monsters/beasts_dog.png';
import beasts_pantherImage from '../../assets/images/monsters/beasts_panther.png';

export const monsters_data = [
    {
        "id": "Bears",
        "name": "Bear",
        "information": [
            "Bears are generally found far from human habitation, either in the high mountains or in the deep woods. 1",
            "Bears are generally found far from human habitation, either in the high mountains or in the deep woods. 2",
            "Bears are generally found far from human habitation, either in the high mountains or in the deep woods. 3"
        ],
        "images": [
            beasts_bearImage,
            beasts_bearImage
        ]
    },
    {
        "id": "Dogs",
        "name": "Dog",
        "information": [
            "It is fairly common knowledge what a dog is. Generally speaking a dog would not be a target for a witcher. 1",
            "It is fairly common knowledge what a dog is. Generally speaking a dog would not be a target for a witcher. 2",
            "It is fairly common knowledge what a dog is. Generally speaking a dog would not be a target for a witcher. 3"
        ],
        "images": [
            beasts_dogImage,
            beasts_dogImage
        ]
    },
    {
        "id": "Panthers",
        "name": "Panther",
        "information": [
            "Panthers are a type of large cat that primarily live in Toussaint. 1",
            "Panthers are a type of large cat that primarily live in Toussaint. 2",
            "Panthers are a type of large cat that primarily live in Toussaint. 3"
        ],
        "images": [
            beasts_pantherImage,
            beasts_pantherImage
        ]
    }
];

export default monsters_data;