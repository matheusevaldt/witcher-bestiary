import beasts_bear01_image from '../../assets/images/monsters/beasts_bear_01.png';
import beasts_bear02_image from '../../assets/images/monsters/beasts_bear_02.png';
import beasts_dog01_image from '../../assets/images/monsters/beasts_dog_01.png';
import beasts_dog02_image from '../../assets/images/monsters/beasts_dog_02.png';
import beasts_panther01_image from '../../assets/images/monsters/beasts_panther_01.png';
import beasts_panther02_image from '../../assets/images/monsters/beasts_panther_02.jpg';

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
        "tactics": [
            "Bears possess great vitality, amazing strength and are quick to anger if you find yourself within their territory. It is best to avoid a head on attack with a bear, try and dodge the swipes of their claws and cut at their flanks.",
            "The signs Igni and Yrden are not necessarily weaknesses, however they do have their uses when going up against a bear. Igni can be used to light the bear on fire, which will temporarily stun it and allow you to move in for flanking strikes. Yrden can be used to slow the bear down just enough to make it easier on you to evade their paws.",
            "Axii is a perfect choice against a bear since bears are almost always found alone. One cast and it's stunned, letting you get in a couple of good hits before it counterattacks."
        ],
        "images": [
            beasts_bear01_image,
            beasts_bear02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Bear | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Bear"
            }
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