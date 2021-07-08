import beasts_bear01_image from '../../assets/images/monsters/beasts_bear_01.png';
import beasts_bear02_image from '../../assets/images/monsters/beasts_bear_02.png';
import beasts_dog01_image from '../../assets/images/monsters/beasts_dog_01.png';
import beasts_dog02_image from '../../assets/images/monsters/beasts_dog_02.png';
import beasts_panther01_image from '../../assets/images/monsters/beasts_panther_01.png';
import beasts_panther02_image from '../../assets/images/monsters/beasts_panther_02.jpg';
import beasts_wolf01_image from '../../assets/images/monsters/beasts_wolf_01.png';
import beasts_wolf02_image from '../../assets/images/monsters/beasts_wolf_02.jpg';
import beasts_wildBoar01_image from '../../assets/images/monsters/beasts_wild_boar_01.png';
import beasts_wildBoar02_image from '../../assets/images/monsters/beasts_wild_boar_02.jpg';
import cursedOnes_archespore01_image from '../../assets/images/monsters/cursed_ones_archespore_01.png';
import cursedOnes_archespore02_image from '../../assets/images/monsters/cursed_ones_archespore_02.jpg';
import cursedOnes_berserker01_image from '../../assets/images/monsters/cursed_ones_berserker_01.png';
import cursedOnes_berserker02_image from '../../assets/images/monsters/cursed_ones_berserker_02.jpg';
import cursedOnes_botchling01_image from '../../assets/images/monsters/cursed_ones_botchling_01.png';
import cursedOnes_botchling02_image from '../../assets/images/monsters/cursed_ones_botchling_02.jpg';
import cursedOnes_ulfhedinn01_image from '../../assets/images/monsters/cursed_ones_ulfhedinn_01.png';
import cursedOnes_ulfhedinn02_image from '../../assets/images/monsters/cursed_ones_ulfhedinn_02.png';
import cursedOnes_werewolf01_image from '../../assets/images/monsters/cursed_ones_werewolf_01.png';
import cursedOnes_werewolf02_image from '../../assets/images/monsters/cursed_ones_werewolf_02.png';
import draconids_basilisk01_image from '../../assets/images/monsters/draconids_basilisk_01.png';
import draconids_basilisk02_image from '../../assets/images/monsters/draconids_basilisk_02.jpeg';
import draconids_cockatrice01_image from '../../assets/images/monsters/draconids_cockatrice_01.png';
import draconids_cockatrice02_image from '../../assets/images/monsters/draconids_cockatrice_02.jpg';
import draconids_forktail01_image from '../../assets/images/monsters/draconids_forktail_01.png';
import draconids_forktail02_image from '../../assets/images/monsters/draconids_forktail_02.jpg';
import draconids_royalWyvern01_image from '../../assets/images/monsters/draconids_royal_wyvern_01.png';
import draconids_royalWyvern02_image from '../../assets/images/monsters/draconids_royal_wyvern_02.jpg';
import draconids_slyzard01_image from '../../assets/images/monsters/draconids_slyzard_01.png';
import draconids_slyzard02_image from '../../assets/images/monsters/draconids_slyzard_02.jpg';
import draconids_wyvern01_image from '../../assets/images/monsters/draconids_wyvern_01.png';
import draconids_wyvern02_image from '../../assets/images/monsters/draconids_wyvern_02.png';
import elementa_djinn01_image from '../../assets/images/monsters/elementa_djinn_01.png';
import elementa_djinn02_image from '../../assets/images/monsters/elementa_djinn_02.jpg';
import elementa_earthElemental01_image from '../../assets/images/monsters/elementa_earth_elemental_01.png';
import elementa_earthElemental02_image from '../../assets/images/monsters/elementa_earth_elemental_02.jpg';
import elementa_fireElemental01_image from '../../assets/images/monsters/elementa_fire_elemental_01.png';
import elementa_fireElemental02_image from '../../assets/images/monsters/elementa_fire_elemental_02.jpg';
import elementa_gargoyle01_image from '../../assets/images/monsters/elementa_gargoyle_01.png';
import elementa_gargoyle02_image from '../../assets/images/monsters/elementa_gargoyle_02.jpg';
import elementa_golem01_image from '../../assets/images/monsters/elementa_golem_01.png';
import elementa_golem02_image from '../../assets/images/monsters/elementa_golem_02.jpg';
import elementa_iceElemental01_image from '../../assets/images/monsters/elementa_ice_elemental_01.png';
import elementa_iceElemental02_image from '../../assets/images/monsters/elementa_ice_elemental_02.jpg';

export const monsters_data = [
    {
        "id": "Bear",
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
        "id": "Dog",
        "name": "Dog",
        "information": [
            "It is fairly common knowledge what a dog is. Generally speaking, a dog would not be a target for a witcher.",
            "For the most part, dogs are domesticated pets, if they are treated well by their masters, they respond with loyalty and trust. However, dogs that are ill-treated will respond in kind.",
            "Dogs usually attack in packs, choosing isolated victims, especially ones in whom they sense some kind of weakness."
        ],
        "quote": [
            "They say a dog's a man's best friend... But in these foul times one best be wary, even of his friends.",
            "– Alfred Pankratz, beggar from Novigrad"
        ],
        "tactics": [
            "The Aard sign is good for pushing back a dog, or pack of dogs.",
            "Dogs are also fairly susceptible to Igni, frequently catching fire due to their fur. Fighting a single dog is not much of a threat at all; it's a pack of them surrounding you that is the problem.",
            "You have to drop each one quickly while simultaneously dodging out of range of his friends coming at you from the sides and behind. Dogs are also particularly fast on their feet, while they aren't all that strong, their speed can more than make up for it if a Witcher is careless."
        ],
        "images": [
            beasts_dog01_image,
            beasts_dog02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Dog | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Dog"
            }
        ]
    },
    {
        "id": "Panther",
        "name": "Panther",
        "information": [
            "Panthers are a type of large cat that primarily live in Toussaint.",
            "Panthers are dangerous predators found in forests and other woodlands. They are quick, agile and, like all cats, diabolically cunning.",
            "In many less-than-thoroughly-urbanized areas, folk still believe panthers are the stranded souls of those who die in their sleep. Superstition thus holds anyone perishing in this way should be dragged to the nearest woods and left there without a burial. The panther-spirit of the deceased may then devour its own body, thereby passing on to the nether realms."
        ],
        "quote": [
            `Pussy cat, pussy cat, where have you been? 
            I've been to Cintra to look at the queen
            Pussy cat, pussy cat, what did you there?
            Run, fool, that's not a cat but a panther!`,
            "– rare variant of a traditional folk rhyme"
        ],
        "tactics": [
            "Panthers are incredibly swift and able to sneak up on prey undetected to gain the advantage of surprise.",
            "As soon as they enter open terrain, they leap to attack with astonishing speed, mauling their prey with their sharp claws, long teeth and the sheer force of their momentum.",
            "Panthers are known to retreat mid-fight, yet do not let yourself be fooled into a false sense of security. This is but a ruse to allow them to attack again, by surprise. Never drop your guard until you see the animal drop dead."
        ],
        "images": [
            beasts_panther01_image,
            beasts_panther02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Panther | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Panther"
            }
        ]
    },
    {
        "id": "Wild Boar",
        "name": "Wild Boar",
        "information": [
            "Wild Boars are dangerous beasts that inhabit the forests in the Northern Realms. The wild boar features prominently in Skellige and Nordling cultures, many of which saw the animal as embodying warrior virtues.",
            "Actual attacks on humans are rare, but can be serious, resulting in multiple piercing injuries to the lower part of the body.",
            `Boars have hard, club-like snouts, which some peasants call their "whistles," though no boar has ever been heard to make such a noise. Instead, they emit a characteristic grunt, which sounds to some like the snoring of an extremely overweight man.`
        ],
        "quote": [
            `How doth the little wild boar,
            Improve his shining tusks,
            And rut them 'gainst the forest floor,
            And on the trees' rough husks!
            How cheerfully he seems to grin,
            How neatly spreads his claws,
            And welcomes little lasses in,
            With gently smiling jaws!`,
            "– Louis of Charolle, author and poet"
        ],
        "tactics": [
            "Wild boars can appear in groups or alone, depending on the circumstances. They are usually found deep within the Gustfields region and the wilds of Toussaint.",
            "They will circle around you at high speed and charge straight at you occasionally. Unlike wolves, wild boars do not slow down or pause after a lunge.",
            "To fight efficiently, you will have to find a way to slow them down or stop them on their tracks altogether. Yrden can be used to slow their movements and Igni is efficent to briefly stun them."
        ],
        "images": [
            beasts_wildBoar01_image,
            beasts_wildBoar02_image,
        ],
        "references": [
            {
                "id": "1",
                "reference": "Wild Boar | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Wild_boar"
            }
        ]
    },
    {
        "id": "Wolf",
        "name": "Wolf",
        "information": [
            "Wolves are an aggressive and carnivorous species of wild animal, related to the domesticated dogs found in human settlements. Wolves can be found throughout the mainland and on the Skellige Isles.",
            "Once upon a time wolves were the absolute rulers of the forest. Men used them to frighten children, while adults, too, trembled at the sound of their howling. Post-Conjunction monsters not only pushed wolves into the deepest wilds but also took over their place in human nightmares.",
            "Wolves do not have a drop of magic within them, breathe no fire and spit no acid, but that in no way stops them from killing unwary travelers and hunters."
        ],
        "quote": [
            `Friend of mine used to say that with all these griffins and basilisks and whatnot, good old fashioned wolves weren't nothing to worry about... Then the damned beasts devoured half his flock.`,
            "– Yngvar, shepherd"
        ],
        "tactics": [
            "Wolves usually feed in packs counting from a handful to over a dozen members, though some particularly strong males hunt alone.",
            "If one finds themselves surrounded, you can use Igni and Aard to try and drive the pack off, even if just for a moment, which allows the you to regain control over the fight.",
            "When fighting them one must be especially careful not to become surrounded. The presence of wolves can also signal more serious trouble – these predators often share their hunting grounds with werewolves and leshens."
        ],
        "images": [
            beasts_wolf01_image,
            beasts_wolf02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Wolf | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Wolf_(creature)"
            }
        ]
    },
    {
        "id": "Archespore",
        "name": "Archespore",
        "information": [
            "Archespores look like gigantic, aesthetically unpleasing flowers with some of the traits of exceptionally cruel and bloodthirsty sundews. ",
            "Their peculiar appearance makes them practically impossible to discern amidsts other plants. By the time one draws close enough to realize what they are, it is often too late to flee.",
            "According to popular belief, archespores are cursed plants grown in soil fertilized by the blood of the dying. They are most often found in places which in the past saw pogroms, bloody rituals or cruel murders."
        ],
        "quote": [
            `Looks like a flower to me. A hideous, disgusting flower.`,
            "– Blasco Tennerbe, last words"
        ],
        "tactics": [
            "Archespores have several deadly techniques. From a distance, they shoot venom that not only causes substantial damage, but also deals additional poison damage after striking. Their pods can explode, releasing an explosive poison that deals extremely high damage.",
            "The creature will also lunge forward if you get too close. They also have the ability to quickly sink into the ground and sprout from any nearby pods currently on the ground.",
            "Archespores are extremely vulnerable to fire, which is one of the most effective methods of fighting them."
        ],
        "images": [
            cursedOnes_archespore01_image,
            cursedOnes_archespore02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Archespore | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Archespore"
            }
        ]
    },
    {
        "id": "Berserker",
        "name": "Berserker",
        "information": [
            "Werebears, also known as Berserkers in the Skellige Isles, are therianthropes who transform into bears or half-bears.",
            `The "arctanthropy" can be acquired either as a result of a curse or inherited from werebear parents. Werebears are exceptionally strong, even tougher and more relentless than real bears.`,
            "Skellige legends speak of men who transform into bears when overwhelmed by battle rage. In doing so, they lose all self-awareness and are driven by a bloodlust which they must satiate in order to return to human form."
        ],
        "quote": [
            `Now finish your soup, or a berserker'll come and swallow ye whole.`,
            "– Skellige mother scolding a child."
        ],
        "tactics": [
            "A berserker starts out as a human, when filled with the rage of battle, it transforms into a berserker. While in human form, the steel sword works well against them. However, once they are transformed into their bear form, a silver sword will work best.",
            "Beyond the anatomical differences, a berserker's bear form should be treated just like fighting a true-born bear, save that these bears are much harder to kill.",
            "Like werewolves and lycanthropes, they are particularly vulnerable to oils that harm cursed creatures."
        ],
        "images": [
            cursedOnes_berserker01_image,
            cursedOnes_berserker02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Berserker (Werebear) | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Werebear"
            }
        ]
    },
    {
        "id": "Botchling",
        "name": "Botchling",
        "information": [
            "A Botchling is a small creature that resembles a highly deformed fetus that preys on pregnant women. It is created from the improper burial of unwanted, stillborn infants.",
            "While hiding beneath beds, botchlings sap the expectant mother of strength and once she is completely defenseless it will latch on and directly feed off blood, killing both her and the unborn child.",
            "Botchlings can be transformed into a Lubberkin after successfully going through a specific elven naming ritual known as Aymm Rhoin. Once the ritual is over the creature can receive a proper burial beneath the family's threshold."
        ],
        "quote": [
            `Saying a botchling's ugly is like saying shit's not particularly tasty: can't say it's a lie, but it doesn't exactly convey the whole truth, either.`,
            "– Lambert, witcher of the Wolf School"
        ],
        "tactics": [
            "A botchling stands around a foot and a half in height, but, when threatened and if gorged with blood, it can change form. At such times it grows into a deformed man, hunched over and striding, ape-like, on its forearms.",
            "Stronger and fiercer after this alteration, it hurls itself into direct, physical combat, gnashing at its opponent or attacking him with sharp claws.",
            "While fighting a botchling, the Axii sign can be used to retract the creature's spikes for a short time, allowing you to safely strike it."
        ],
        "images": [
            cursedOnes_botchling01_image,
            cursedOnes_botchling02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Botchling | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Botchling"
            }
        ]
    },
    {
        "id": "Ulfhedinn",
        "name": "Ulfhedinn",
        "information": [
            "Ulfhedinn is a stronger type of werewolf which can be found in the Skellige Isles.",
            "The harsh and barren conditions of Skellige might explain why they primarily hunt men and are stronger than their continental brethren.",
            "Only a few daring warriors in Skellige history have managed to defeat an ulfhedinn, and each one of them is commemorated in ballads as a hero to this day."
        ],
        "quote": [
            `Ulfhedinn? What's that, some kind of fish?`,
            "– Professor Artibus Joannes Rack, geographer, disappeared during a surveying expedition in Skellige"
        ],
        "tactics": [
            "Ulfhedinns are active at night, particularly when the moon is at its fullest. Fast, strong and amazingly resilient, these creatures kill with disturbing ease.",
            "These breeds of cursed ones are some of the fastest and most lethal. They can leap great distances at such speeds that it can be a challenge defending against them.",
            "Setting these foes alight can force them to stay still long enough to score critical strikes on their flanks. Fire, bleeding, and poison effects can be used to slow the regeneration of these creatures."
        ],
        "images": [
            cursedOnes_ulfhedinn01_image,
            cursedOnes_ulfhedinn02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Ulfhedinn | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Ulfhedinn"
            }
        ]
    },
    {
        "id": "Werewolf",
        "name": "Werewolf",
        "information": [
            "Werewolves are therianthropes who transform into wolves or half-wolves. As other such creatures, they are hardly hurt by steel but very vulnerable to silver.",
            "Werewolves are creatures with both men and wolves inside them. When in beastly form, they take the worst traits of each: the wolf's drive to kill and hunger for raw flesh and the man's cruel and calculating intelligence.",
            "Werewolves are active at night, particularly when the moon is full. Though they hunt alone, when threatened they will summon wolves to aid them. Werewolves rarely feel the need to flee, for few adversaries put up much of a fight against them. They strike as swiftly as lightning with claws sharp as razors and regenerate any damage received in mere moments."
        ],
        "quote": [
            `Wolves aren't as bad as they're made out to be. Werewolves, though – they're every bit as bad and worse.`,
            "– Elsa Vilge, archer"
        ],
        "tactics": [
            "These breeds of cursed creatures are quite fast and very lethal. They can jump great distances and at such high speeds that defending yourself against one can be challenging at best.",
            "The Yrden sign can be utilize to slow them down, making close quarter combat safer. Igni and Axii can also be used to stop the werewolf on its tracks momentarily, leaving enough windows for a few heavy attacks.",
            "Fire, bleeding and poison effects can be used to slow their regeneration down, although inflicting these statuses upon the werewolf are quite a challenge in itself, considering their speed."
        ],
        "images": [
            cursedOnes_werewolf01_image,
            cursedOnes_werewolf02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Werewolf | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Werewolf"
            }
        ]
    },
    {
        "id": "Basilisk",
        "name": "Basilisk",
        "information": [
            "Basilisk is a draconid which sometimes terrorizes communities. They have birdlike beaks, webbed wings, hooked talons, and crimson dewlaps.",
            "Basilisks love dark, damp places such as cellars, caves and city sewers. They hunt by day, waiting patiently in hiding for their prey to come, then jump out in a flash to unleash a deadly attack.",
            "Basilisk leather is a highly-valued material used to make fashionable shoes and women's handbags. For this reason many men, their courage girded by goldlust, take to hunting them. Most of these hunts end in disaster, but some do manage to bag their prey, which has led to a drastic decline in this creature's numbers in recent years."
        ],
        "quote": [
            `In memory of the noble knight Roderick, slain during a valiant struggle against a basilisk. Let's hope the beast choked on his bones.`,
            "– Gravestone inscription, Vizima cemetery."
        ],
        "tactics": [
            "Contrary to popular belief, basilisks cannot turn anything to stone with their gaze. That is small comfort, however, given that their acid, venom, claws and teeth provide them many other ways to kill.",
            "When preparing to fight such a creature one should drink Golden Oriole, which will provide resistance to its venom.",
            "Basilisks are vulnerable to Igni and any other means of fire. A well timed Dancing Star bomb or burst of Igni can not only bring down a flying basilisk to ground level, but distract the beast from being able to properly defend itself."
        ],
        "images": [
            draconids_basilisk01_image,
            draconids_basilisk02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Basilisk | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Basilisk"
            }
        ]
    },
    {
        "id": "Cockatrice",
        "name": "Cockatrice",
        "information": [
            "Cockatrice, also known as a Skoffin and Kurolishek, is an ornithosaur. According to scholars, it's also the only creature to belong to the order of ornithoreptile.",
            "Foolish superstitions claim cockatrices, like basilisks, can kill with their gaze alone. That is utter nonsense. One should instead watch out for its sharp beak and long tail.",
            "Cockatrices thrive in dark caves, abandoned ruins, cobwebbed dungeons and old basements. These creatures are capable of killing anyone who stumbles across them in a dark corridor."
        ],
        "quote": [
            `Had meself eight heifers, five of 'em milchers. Then this cockatrice sprung up nearby, and now all's I got left's dried patties in an empty field.`,
            "– Jethro, peasant from Pindal"
        ],
        "tactics": [
            "A cockatrice effectively combines the speed, flight and ferocity of a Harpy with some of the power and toughness of a Golem.",
            "Cockatrices do not shun direct fights, in which they strike furiously with wing and tail in an attempt to exhaust their foes. Blows from their beaks are especially dangerous, as they aim with deadly precision at exposed flesh and vital organs and leave bleeding, life-threatening wounds.",
            "A Witcher should always have the swallow potion ready in order to counteract any wounds sustained."
        ],
        "images": [
            draconids_cockatrice01_image,
            draconids_cockatrice02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Cockatrice | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Cockatrice"
            }
        ]
    },
    {
        "id": "Forktail",
        "name": "Forktail",
        "information": [
            "Forktail is a creature related to dragons, but smaller and not intelligent. Just as the name suggests, it can be recognized by its forked tail.",
            "Forktails owe their quaint name to the long sharp growths at the tip of their tails. A blow from this weapon can slice an oaken shield in two – along with the arm that was carrying it. Thus, though its name conjures images of cutlery, fighting a forktail is nothing like a dinner party and ends in death rather than dessert.",
            "Forktails are active by day. They usually hunt alone or, more rarely, in pairs. They attack big game, including domesticated animals, mainly cattle and pigs, and even humans from time to time."
        ],
        "quote": [
            `Forktails... Bah! Fuckers' tails're more like cleavers.`,
            "– Yavinn Buck, veteran of the Mahakaman Volunteer Regiment"
        ],
        "tactics": [
            "A forktail is more than a capable flier, though it can be brought to the ground with Crossbow bolts. They are as aggressive as Wyverns and make use of their foot talons in order to slash and kick at their prey.",
            "Once the forktail is on the ground, they are somewhat less mobile but still quite dangerous. They turn to other tactics centered around their massive size and spike-covered tails.",
            "The singers on the tip of their tail are highly poisonous. Because of this the Golden Oriole potion is essential while fighting one."
        ],
        "images": [
            draconids_forktail01_image,
            draconids_forktail02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Forktail | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Forktail"
            }
        ]
    },
    {
        "id": "Royal Wyvern",
        "name": "Royal Wyvern",
        "information": [
            "Royal wyvern is a larger and more dangerous breed of wyvern that is highly aggressive and venomous. The creature is particularly terrifying because it has no fear of even throngs of peasants armed with pikes and pitchforks.",
            "These creatures live in the wilderness, often in the mountains, as they like to build their nests on precipices. They attack any creature entering their territory.",
            "The female royal wyvern is smaller but more cunning and venomous than her male counterpart. She can be aggressive towards both males and other females. She is a perfect example of how gender relations among humans have their source in the animal world. This is altogether not surprising."
        ],
        "quote": [
            `Most dangerous of all are the royal wyverns. Or, as they're called in some circles, the royal pains in the arse.`,
            "– Albina Tottelkampf, lecturer in natural sciences at Aretuza"
        ],
        "tactics": [
            "Royal Wyverns have strong resistance to stun attempts and are immune to poison.",
            "Generally fearless, these creatures are more clever than common wyverns and thus harder to defeat.",
            "A single blow from a royal wyvern is enough to kill a Witcher, which is why one must avoid its charge at all costs."
        ],
        "images": [
            draconids_royalWyvern01_image,
            draconids_royalWyvern02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Royal Wyvern | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Royal_wyvern"
            }
        ]
    },
    {
        "id": "Slyzard",
        "name": "Slyzard",
        "information": [
            "Slyzards, also known as Dracolizards, are a large, grey-colored flying reptile, sometimes as big as a dragon, for which they are sometimes mistaken.",
            "Slyzards are often mistaken for wyverns or forktails. Yet make no mistake: slyzards are nasty, terribly dangerous beasts, and confusing them for wyverns will end very badly for the confuser. While a wyvern can tear apart and devour an untrained man in seconds, only a slyzard can first bake him to a crisp with a waft of fiery breath.",
            "It is said that Crinfrid Reavers made sure that all members of this species were killed in Redania."
        ],
        "quote": [
            `Some peasants once offered me a king's ransom to slay a slyzard. A damned hefty purse, chock full o' gold... But I turned 'em down. Coin's no good if you're dead. And a slyzard, that's no fuckin' forktail.`,
            "– Zator, one of the Crinfrid Reavers"
        ],
        "tactics": [
            "Slyzards are keenly aggressive and attack from both ground and air. Their goal during a fight is to get close enough to their foe to injure it with a breath of fire or knock it down with a sonic blast. Like wyverns, slyzards also attack with venom-spiked tails.",
            "Slyzards like to disengage mid-fight to fly into the air and plummet down at high speed while spewing out balls of fire.",
            "Right before these igneous missiles emerge, you can observe a fiery ball forming in the monster's maw. While airborne, a slyzard can also attack with its claws and teeth."
        ],
        "images": [
            draconids_slyzard01_image,
            draconids_slyzard02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Slyzard | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Dracolizard"
            }
        ]
    },
    {
        "id": "Wyvern",
        "name": "Wyvern",
        "information": [
            "Wyverns are great flying reptiles with snake-like necks and long tails that end in a venomous trident. Swooping down from the sky, they easily snatch their prey and carry it off to their nest.",
            "Wyverns are often mistaken for dragons. Though they are much smaller than their more famous kin and do not breathe fire, they are likewise extremely dangerous monsters.",
            "These creatures are highly adaptable and have been sighted across the entire Continent as well as in the Skellige Isles."
        ],
        "quote": [
            `It were huge. And those teeth, ugh! We barely escaped.
            Wonder if it killed the traders... Whoresons sure had it coming.`,
            "– Conversation overheard in Velen"
        ],
        "tactics": [
            "A wyvern will typically attack from the air, attempting to knock its prey down using its wings. After it lands it will attack with its tooth-filled beak in an attempt to draw attention away from its most deadly weapon, the stinger that can be found at the end of its long tail.",
            "Wyverns are quite venomous. They are able to spit their venom from a distance and even inject it directly into its victim through the stinger. The use of the Golden Oriole potion can prevent it from incapacitating you.",
            "The Aard sign and the Grapeshot bomb can bring a wyvern to the ground. Once on the ground a wyvern will prefer to strike with the talons on its feet, its teeth and its tail. It is possible to parry the bites, but if unsuccessful the consequences can be deadly."
        ],
        "images": [
            draconids_wyvern01_image,
            draconids_wyvern02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Wyvern | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Wyvern"
            }
        ]
    },
    {
        "id": "Djinn",
        "name": "Djinn",
        "information": [
            "Djinn, D'jinni or Djinniah is the name given to an elemental genie of Air.",
            "Much the same as in fairy tales, djinns are powerful creatures that are capable of great feats. Once captured, they are bound to the captor and have to fulfill three wishes. Following their completion, they are free once more.",
            "Unusually powerful mages can capture and tame these beings. The mage can then draw on its energy, using it to cast spells without having to call on power from traditional sources. Only a sparse handful have managed this feat, however, for djinns fight to avoid such a fate with stubborn determination."
        ],
        "quote": [
            `The pitcher emitted a puff of glowing red smoke. The smoke pulsated, then gathered up into an irregular sphere floating in front of the poet's head...`,
            "– The First Longing, a Tale Fantastic in All Ways"
        ],
        "tactics": [
            "Fighting a djinn is extraordinarily difficult. They can fling off spells in an instant that the most accomplished human mages could never cast with years of preparation. What's more, by manipulating the element of air they can summon powerful storms, hurricanes, and gales.",
            "A djinn can teleport short distances to escape harm, even after being affected by Dimeritium bombs. A witcher must be able to quickly react to this and continue to pressure the djinn.",
            "The closer a djinn is to death or capture, the more dangerous it becomes. The massive area-of-effect spells it can cast come faster, and it may teleport more often the more desperate it becomes."
        ],
        "images": [
            elementa_djinn01_image,
            elementa_djinn02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Djinn | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Djinn"
            }
        ]
    },
    {
        "id": "Earth Elemental",
        "name": "Earth Elemental",
        "information": [
            "Earth elementals are made of mud, clay, sand and rock dust clumped together with water and brought alive with magic.",
            "While seemingly slow and ponderous, these creatures are nevertheless dangerous and should be avoided at all costs.",
            "Earth elementals can withstand a tremendous amount of punishment. Due to their enormous mass they are virtually impossible to knock off balance. They do not bleed nor feel any pain from poison or even fire."
        ],
        "quote": [
            `How to survive an encounter with an earth element? Simple. Run. Fast as you can.`,
            "– Nino Murk, bounty hunter"
        ],
        "tactics": [
            "Earth elementals are a test of strength and endurance. Even with a silver sword coated in elementa oil, earth elementals can resist impressive amounts of punishment before crumbling, while being able to dish out frighteningly powerful blows with their fists.",
            "These creatures kill men with astonishing ease – whether by smashing them with their fists or hurling enormous stones at them. Their only weakness is their vulnerability to dimeritium dust.",
            "If an earth elemental jumps off the ground, move away as quickly as possible. The resulting shockwave knocks down any nearby victims and also creates a ring of rock around the both of you at a certain range, preventing you from escaping or getting too far away from the elemental."
        ],
        "images": [
            elementa_earthElemental01_image,
            elementa_earthElemental02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Earth Elemental | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Earth_Elemental"
            }
        ]
    },
    {
        "id": "Fire Elemental",
        "name": "Fire Elemental",
        "information": [
            "Fire is the most destructive of the elements, thus the aggressive lethality of the creature that embodies its essence should come as no surprise.",
            "Fire elementals are forged in complicated magic rituals for one purpose: destruction. And they pursue this with murderous determination.",
            "A fire elemental, similarly to post-conjunction creatures, comes from another reality, and our world is alien to it. According to philosophers, it does not have emotions and does not think the way even trolls and other familiar creatures do. Totally controlled by magic, it obediently carries the sorcerer's orders out."
        ],
        "quote": [
            `The first fire elemental was created by Ransant Alvaro. Sadly, flames engulfed his entire laboratory, burning it - along with every other building on his block - to ash.`,
            `– Tarvix Sandoval, "Origins of Magic Arcana"`
        ],
        "tactics": [
            "Fire elementals can use similar abilities to an earth elemental, with the key difference that fire enhances and empowers them. Being harmed by a fire elemental has effects beyond the immediate harm sustained, since they can light clothes and armor on fire.",
            "Simply drawing close to a fire elemental is dangerous, due to the intense heat they constantly generate. The flames can be temporarily extinguished by the Aard sign.",
            "Avoid the Igni sign at all costs, this only empowers a fire elemental and re-ignites its flames. Northern Wind bombs are highly effective, freezing the elemental in place. Dimeritium bombs can prevent it from using certain attacks."
        ],
        "images": [
            elementa_fireElemental01_image,
            elementa_fireElemental02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Fire Elemental | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Fire_Elemental"
            }
        ]
    },
    {
        "id": "Gargoyle",
        "name": "Gargoyle",
        "information": [
            "Gargoyles are stone statues brought to life by magic in order to guard mages' laboratories and lairs from intruders.",
            "Their appearance alone has scared off more than one prospective burglar. Those who do not take fright at the sight of these horned and winged monstrosities usually die shortly thereafter, torn to shreds by stony claws.",
            "Gargoyles are extremely dangerous opponents. Etched out of granite or marble, they are able to withstand tremendous amounts of damage and exhibit superhuman strength. One blow dealt from their boulder-like fists will crush even a man clad in heavy armor."
        ],
        "quote": [
            `It just me, or is that gargoyle ogling us?`,
            "– Lara Estevann, burglar from Loc Muinne"
        ],
        "tactics": [
            "A gargoyle is nearly as sturdy as any earth elemental, but significantly faster, more versatile, and seemingly more intelligent. Aard, Axii and Igni are almost entirely useless.",
            "Yrden can slow a gargoyle down, making it easy to evade their melee attacks, and allow a witcher to strike back. Do not linger in front of the gargoyle for long. They can counter overly aggressive witchers by using their poisonous breath.",
            "The safety of range is fleeting versus a gargoyle. They can not only throw rocks with a great degree of accuracy and power, but they can leap into the air and crash down atop or next to a witcher with terrifying speed. Both attacks serve to harm and stun victims. A gargoyle can also stomp the ground with such force that they can stun and partially blind nearby threats."
        ],
        "images": [
            elementa_gargoyle01_image,
            elementa_gargoyle02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Gargoyle | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Gargoyle"
            }
        ]
    },
    {
        "id": "Golem",
        "name": "Golem",
        "information": [
            "Golems are mindless matter brought to life by a spell. They obey their creator's orders without question.",
            "Their boundless strength, ability to withstand pain, endless patience and the fact that they don't need one jot of food or drink makes them the best servants or guards anyone could ask for.",
            "Once provoked, golems will not tire of battle until they have either crushed their opponent or themselves crumbled to dust."
        ],
        "quote": [
            `If you want us to break through this wall, we're gonna need twenty sappers, seven mules and a hundredweight of saltpeter. Or one golem.`,
            "– Vilmir Brass, foreman at Mount Carbon"
        ],
        "tactics": [
            "Defeating a golem is extraordinarily difficult: for obvious reasons it does not bleed, it feels no fear or mercy and it is invulnerable to fire and poison.",
            "Golems use no weapons, for they have no need – their fists, weighing over a hundred pounds each, can crush solid granite with one hit. A blow from a golem should thus be avoided at all costs – there is no shield that can stop it, nor sword that can parry it.",
            "Yrden is useful when going toe-to-toe with a golem, but remember that the golem is merely slowed, not helpless. They can still fight despite Yrden's effects, and can still interrupt a witcher's swordplay with a single crushing blow."
        ],
        "images": [
            elementa_golem01_image,
            elementa_golem02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Golem | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Golem"
            }
        ]
    },
    {
        "id": "Ice Elemental",
        "name": "Ice Elemental",
        "information": [
            "An ice elemental is a mass of frozen water animated by magic. Deprived of consciousness or independent will, this elemental is boundlessly obedient to the orders of the mage who created it.",
            "Gifted with incredible strength, they are completely invulnerable to poison and fire, deprived of sensitive organs, hard as permafrost and all in all incredibly difficult opponents.",
            "A witcher's only chance at tipping the scales towards victory is to toss a Dimeritium bomb – shrapnel made of this metal interferes with the workings of the spell that gives this creature life."
        ],
        "quote": [
            `I thought to myself - what's a hunk of ice doing in the middle of some lab? And then that hunk of ice got up and broke my legs.`,
            "– Yannick Lovt, burglar"
        ],
        "tactics": [
            "Ice elementals fight similarly to earth elementals. They can strike with their massive fists, stomp on the ground to knock over their targets, or send a ripple of ice carving through the terrain at their foes.",
            "As with other elementals, avoid attacking the elemental from the front and dodge its attacks as they cannot be parried. The Yrden sign can be used extensively to slow the creature down."
        ],
        "images": [
            elementa_iceElemental01_image,
            elementa_iceElemental02_image
        ],
        "references": [
            {
                "id": "1",
                "reference": "Ice Elemental | Witcher Wiki",
                "link": "https://witcher.fandom.com/wiki/Ice_Elemental"
            }
        ]
    }
];

export default monsters_data;