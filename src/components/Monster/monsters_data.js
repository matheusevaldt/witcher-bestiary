import beasts_bear01_image from '../../assets/images/monsters/beasts_bear_01.png';
import beasts_bear02_image from '../../assets/images/monsters/beasts_bear_02.png';
import beasts_dog01_image from '../../assets/images/monsters/beasts_dog_01.png';
import beasts_dog02_image from '../../assets/images/monsters/beasts_dog_02.png';
import beasts_panther01_image from '../../assets/images/monsters/beasts_panther_01.png';
import beasts_panther02_image from '../../assets/images/monsters/beasts_panther_02.jpg';

// add 'combat tactics' and 'references'

export const monsters_data = [
    {
        "id": "Bears",
        "name": "Bear",
        "information": [
            "Bears are generally found far from human habitation, either in the high mountains or in the deep woods.",
            "Opposite of dogs and wolves, bears are solitary creatures, which is probably for the best considering how strong a killing machine they are. It is simple enough a thing to avoid fighting a bear, but that is not always the case.",
            "Bears are omnivores – meaning men find a place in their diet beside berries, roots and salmon. When they snack on humans, they most frequently partake of the meat of travelers unwittingly trespassing on their territory, or else that of hunters for whom besting such a creature is a lifelong ambition."
        ],
        "quote": [
            `Know that ditty about the bear "climbing the mountain, to see what he could see?" Biggest load of rubbish I've ever heard. When a bear climbs a mountain, it's not to see. It's to hunt. To kill.`,
            "– Jahne Oldak, royal huntsman"
        ],
        "images": [
            beasts_bear01_image,
            beasts_bear02_image
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
            beasts_dog01_image,
            beasts_dog02_image
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
            beasts_panther01_image,
            beasts_panther02_image
        ]
    }
];

export default monsters_data;