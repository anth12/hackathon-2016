﻿var guid = require('node-uuid');
var userDataStore = require('./DataAccess/UserDataStore');
var User = require('../Domain/User');
var UserSession = require('../Domain/UserSession');

var animalNames = ["Aardvark","Albatross","Alligator","Alpaca","Ant","Anteater","Antelope","Ape","Armadillo","Donkey","Baboon","Badger","Barracuda","Bat","Bear","Beaver","Bee","Bison","Boar","Buffalo","Butterfly","Camel","Capybara","Caribou","Cassowary","Cat","Caterpillar","Cattle","Chamois","Cheetah","Chicken","Chimpanzee","Chinchilla","Chough","Clam","Cobra","Cockroach","Cod","Cormorant","Coyote","Crab","Crane","Crocodile","Crow","Curlew","Deer","Dinosaur","Dog","Dogfish","Dolphin","Donkey","Dotterel","Dove","Dragonfly","Duck","Dugong","Dunlin","Eagle","Echidna","Eel","Eland","Elephant","Elephant-seal","Elk","Emu","Falcon","Ferret","Finch","Fish","Flamingo","Fly","Fox","Frog","Gaur","Gazelle","Gerbil","Giant-panda","Giraffe","Gnat","Gnu","Goat","Goose","Goldfinch","Goldfish","Gorilla","Goshawk","Grasshopper","Grouse","Guanaco","Guinea-fowl","Guinea-pig","Gull","Hamster","Hare","Hawk","Hedgehog","Heron","Herring","Hippopotamus","Hornet","Horse","Human","Hummingbird","Hyena","Ibex","Ibis","Jackal","Jaguar","Jay","Jellyfish","Kangaroo","Kingfisher","Koala","Komodo-dragon","Kookabura","Kouprey","Kudu","Lapwing","Lark","Lemur","Leopard","Lion","Llama","Lobster","Locust","Loris","Louse","Lyrebird","Magpie","Mallard","Manatee","Mandrill","Mantis","Marten","Meerkat","Mink","Mole","Mongoose","Monkey","Moose","Mouse","Mosquito","Mule","Narwhal","Newt","Nightingale","Octopus","Okapi","Opossum","Oryx","Ostrich","Otter","Owl","Ox","Oyster","Panther","Parrot","Partridge","Peafowl","Pelican","Penguin","Pheasant","Pig","Pigeon","Polar-bear","Pony","Porcupine","Porpoise","Prairie-dog","Quail","Quelea","Quetzal","Rabbit","Raccoon","Rail","Ram","Rat","Raven","Red-deer","Red-panda","Reindeer","Rhinoceros","Rook","Salamander","Salmon","Sand-dollar","Sandpiper","Sardine","Scorpion","Sea-lion","Sea-urchin","Seahorse","Seal","Shark","Sheep","Shrew","Skunk","Snail","Snake","Sparrow","Spider","Spoonbill","Squid","Squirrel","Starling","Stingray","Stinkbug","Stork","Swallow","Swan","Tapir","Tarsier","Termite","Tiger","Toad","Trout","Turkey","Turtle","Vicuña","Viper","Vulture","Wallaby","Walrus","Wasp","Water-buffalo","Weasel","Whale","Wolf","Wolverine","Wombat","Woodcock","Woodpecker","Worm","Wren","Yak","Zebra"];
var adjectives = ["Aback","Abaft","Abandoned","Abashed","Aberrant","Abhorrent","Abiding","Abject","Ablaze","Able","Abnormal","Aboard","Aboriginal","Abortive","Abounding","Abrasive","Abrupt","Absent","Absorbed","Absorbing","Abstracted","Absurd","Abundant","Abusive","Acceptable","Accessible","Accidental","Accurate","Acid","Acidic","Acoustic","Acrid","Actually","Ad hoc","Adamant","Adaptable","Addicted","Adhesive","Adjoining","Adorable","Adventurous","Afraid","Aggressive","Agonizing","Agreeable","Ahead","Ajar","Alcoholic","Alert","Alike","Alive","Alleged","Alluring","Aloof","Amazing","Ambiguous","Ambitious","Amuck","Amused","Amusing","Ancient","Angry","Animated","Annoyed","Annoying","Anxious","Apathetic","Aquatic","Aromatic","Arrogant","Ashamed","Aspiring","Assorted","Astonishing","Attractive","Auspicious","Automatic","Available","Average","Awake","Aware","Awesome","Awful","Axiomatic","Bad","Barbarous","Bashful","Bawdy","Beautiful","Befitting","Belligerent","Beneficial","Bent","Berserk","Best","Better","Bewildered","Big","Billowy","Bite-sized","Bitter","Bizarre","Black","Black-and-white","Bloody","Blue","Blue-eyed","Blushing","Boiling","Boorish","Bored","Boring","Bouncy","Boundless","Brainy","Brash","Brave","Brawny","Breakable","Breezy","Brief","Bright","Bright","Broad","Broken","Brown","Bumpy","Burly","Bustling","Busy","Cagey","Calculating","Callous","Calm","Capable","Capricious","Careful","Careless","Caring","Cautious","Ceaseless","Certain","Changeable","Charming","Cheap","Cheerful","Chemical","Chief","Childlike","Chilly","Chivalrous","Chubby","Chunky","Clammy","Classy","Clean","Clear","Clever","Cloistered","Cloudy","Closed","Clumsy","Cluttered","Coherent","Cold","Colorful","Colossal","Combative","Comfortable","Common","Complete","Complex","Concerned","Condemned","Confused","Conscious","Cooing","Cool","Cooperative","Coordinated","Courageous","Cowardly","Crabby","Craven","Crazy","Creepy","Crooked","Crowded","Cruel","Cuddly","Cultured","Cumbersome","Curious","Curly","Curved","Curvy","Cut","Cute","Cute","Cynical","Daffy","Daily","Damaged","Damaging","Damp","Dangerous","Dapper","Dark","Dashing","Dazzling","Dead","Deadpan","Deafening","Dear","Debonair","Decisive","Decorous","Deep","Deeply","Defeated","Defective","Defiant","Delicate","Delicious","Delightful","Demonic","Delirious","Dependent","Depressed","Deranged","Descriptive","Deserted","Detailed","Determined","Devilish","Didactic","Different","Difficult","Diligent","Direful","Dirty","Disagreeable","Disastrous","Discreet","Disgusted","Disgusting","Disillusioned","Dispensable","Distinct","Disturbed","Divergent","Dizzy","Domineering","Doubtful","Drab","Draconian","Dramatic","Dreary","Drunk","Dry","Dull","Dusty","Dusty","Dynamic","Dysfunctional","Eager","Early","Earsplitting","Earthy","Easy","Eatable","Economic","Educated","Efficacious","Efficient","Eight","Elastic","Elated","Elderly","Electric","Elegant","Elfin","Elite","Embarrassed","Eminent","Empty","Enchanted","Enchanting","Encouraging","Endurable","Energetic","Enormous","Entertaining","Enthusiastic","Envious","Equable","Equal","Erect","Erratic","Ethereal","Evanescent","Evasive","Even","Excellent","Excited","Exciting","Exclusive","Exotic","Expensive","Extra-large","Extra-small","Exuberant","Exultant","Fabulous","Faded","Faint","Fair","Faithful","Fallacious","False","Familiar","Famous","Fanatical","Fancy","Fantastic","Far","Far-flung","Fascinated","Fast","Fat","Faulty","Fearful","Fearless","Feeble","Feigned","Female","Fertile","Festive","Few","Fierce","Filthy","Fine","Finicky","First","Five","Fixed","Flagrant","Flaky","Flashy","Flat","Flawless","Flimsy","Flippant","Flowery","Fluffy","Fluttering","Foamy","Foolish","Foregoing","Forgetful","Fortunate","Four","Frail","Fragile","Frantic","Free","Freezing","Frequent","Fresh","Fretful","Friendly","Frightened","Frightening","Full","Fumbling","Functional","Funny","Furry","Furtive","Future","Futuristic","Fuzzy","Gabby","Gainful","Gamy","Gaping","Garrulous","Gaudy","General","Gentle","Giant","Giddy","Gifted","Gigantic","Glamorous","Gleaming","Glib","Glistening","Glorious","Glossy","Godly","Good","Goofy","Gorgeous","Graceful","Grandiose","Grateful","Gratis","Gray","Greasy","Great","Greedy","Green","Grey","Grieving","Groovy","Grotesque","Grouchy","Grubby","Gruesome","Grumpy","Guarded","Guiltless","Gullible","Gusty","Guttural","Habitual","Half","Hallowed","Halting","Handsome","Handsomely","Handy","Hanging","Hapless","Happy","Hard","Hard-to-find","Harmonious","Harsh","Hateful","Heady","Healthy","Heartbreaking","Heavenly","Heavy","Hellish","Helpful","Helpless","Hesitant","Hideous","High","Highfalutin","High-pitched","Hilarious","Hissing","Historical","Holistic","Hollow","Homeless","Homely","Honorable","Horrible","Hospitable","Hot","Huge","Hulking","Humdrum","Humorous","Hungry","Hurried","Hurt","Hushed","Husky","Hypnotic","Hysterical","Icky","Icy","Idiotic","Ignorant","Ill","Illegal","Ill-fated","Ill-informed","Illustrious","Imaginary","Immense","Imminent","Impartial","Imperfect","Impolite","Important","Imported","Impossible","Incandescent","Incompetent","Inconclusive","Industrious","Incredible","Inexpensive","Infamous","Innate","Innocent","Inquisitive","Insidious","Instinctive","Intelligent","Interesting","Internal","Invincible","Irate","Irritating","Itchy","Jaded","Jagged","Jazzy","Jealous","Jittery","Jobless","Jolly","Joyous","Judicious","Juicy","Jumbled","Jumpy","Juvenile","Kaput","Keen","Kind","Kindhearted","Kindly","Knotty","Knowing","Knowledgeable","Known","Labored","Lackadaisical","Lacking","Lame","Lamentable","Languid","Large","Last","Late","Laughable","Lavish","Lazy","Lean","Learned","Left","Legal","Lethal","Level","Lewd","Light","Like","Likeable","Limping","Literate","Little","Lively","Lively","Living","Lonely","Long","Longing","Long-term","Loose","Lopsided","Loud","Loutish","Lovely","Loving","Low","Lowly","Lucky","Ludicrous","Lumpy","Lush","Luxuriant","Lying","Lyrical","Macabre","Macho","Maddening","Madly","Magenta","Magical","Magnificent","Majestic","Makeshift","Male","Malicious","Mammoth","Maniacal","Many","Marked","Massive","Married","Marvelous","Material","Materialistic","Mature","Mean","Measly","Meaty","Medical","Meek","Mellow","Melodic","Melted","Merciful","Mere","Messy","Mighty","Military","Milky","Mindless","Miniature","Minor","Miscreant","Misty","Mixed","Moaning","Modern","Moldy","Momentous","Motionless","Mountainous","Muddled","Mundane","Murky","Mushy","Mute","Mysterious","Naive","Nappy","Narrow","Nasty","Natural","Naughty","Nauseating","Near","Neat","Nebulous","Necessary","Needless","Needy","Neighborly","Nervous","New","Next","Nice","Nifty","Nimble","Nine","Nippy","Noiseless","Noisy","Nonchalant","Nondescript","Nonstop","Normal","Nostalgic","Nosy","Noxious","Null","Numberless","Numerous","Nutritious","Nutty","Oafish","Obedient","Obeisant","Obese","Obnoxious","Obscene","Obsequious","Observant","Obsolete","Obtainable","Oceanic","Odd","Offbeat","Old","Old-fashioned","Omniscient","One","Onerous","Open","Opposite","Optimal","Orange","Ordinary","Organic","Ossified","Outgoing","Outrageous","Outstanding","Oval","Overconfident","Overjoyed","Overrated","Overt","Overwrought","Painful","Painstaking","Pale","Paltry","Panicky","Panoramic","Parallel","Parched","Parsimonious","Past","Pastoral","Pathetic","Peaceful","Penitent","Perfect","Periodic","Permissible","Perpetual","Petite","Petite","Phobic","Physical","Picayune","Pink","Piquant","Placid","Plain","Plant","Plastic","Plausible","Pleasant","Plucky","Pointless","Poised","Polite","Political","Poor","Possessive","Possible","Powerful","Precious","Premium","Present","Pretty","Previous","Pricey","Prickly","Private","Probable","Productive","Profuse","Protective","Proud","Psychedelic","Psychotic","Public","Puffy","Pumped","Puny","Purple","Purring","Pushy","Puzzled","Puzzling","Quack","Quaint","Quarrelsome","Questionable","Quick","Quickest","Quiet","Quirky","Quixotic","Quizzical","Rabid","Racial","Ragged","Rainy","Rambunctious","Rampant","Rapid","Rare","Raspy","Ratty","Ready","Real","Rebel","Receptive","Recondite","Red","Redundant","Reflective","Regular","Relieved","Remarkable","Reminiscent","Repulsive","Resolute","Resonant","Responsible","Rhetorical","Rich","Right","Righteous","Rightful","Rigid","Ripe","Ritzy","Roasted","Robust","Romantic","Roomy","Rotten","Rough","Round","Royal","Ruddy","Rude","Rural","Rustic","Ruthless","Sable","Sad","Safe","Salty","Same","Sassy","Satisfying","Savory","Scandalous","Scarce","Scared","Scary","Scattered","Scientific","Scintillating","Scrawny","Screeching","Second","Second-hand","Secret","Secretive","Sedate","Seemly","Selective","Selfish","Separate","Serious","Shaggy","Shaky","Shallow","Sharp","Shiny","Shivering","Shocking","Short","Shrill","Shut","Shy","Sick","Silent","Silent","Silky","Silly","Simple","Simplistic","Sincere","Six","Skillful","Skinny","Sleepy","Slim","Slimy","Slippery","Sloppy","Slow","Small","Smart","Smelly","Smiling","Smoggy","Smooth","Sneaky","Snobbish","Snotty","Soft","Soggy","Solid","Somber","Sophisticated","Sordid","Sore","Sore","Sour","Sparkling","Special","Spectacular","Spicy","Spiffy","Spiky","Spiritual","Spiteful","Splendid","Spooky","Spotless","Spotted","Spotty","Spurious","Squalid","Square","Squealing","Squeamish","Staking","Stale","Standing","Statuesque","Steadfast","Steady","Steep","Stereotyped","Sticky","Stiff","Stimulating","Stingy","Stormy","Straight","Strange","Striped","Strong","Stupendous","Stupid","Sturdy","Subdued","Subsequent","Substantial","Successful","Succinct","Sudden","Sulky","Super","Superb","Superficial","Supreme","Swanky","Sweet","Sweltering","Swift","Symptomatic","Synonymous","Taboo","Tacit","Tacky","Talented","Tall","Tame","Tan","Tangible","Tangy","Tart","Tasteful","Tasteless","Tasty","Tawdry","Tearful","Tedious","Teeny","Teeny-tiny","Telling","Temporary","Ten","Tender","Tense","Tense","Tenuous","Terrible","Terrific","Tested","Testy","Thankful","Therapeutic","Thick","Thin","Thinkable","Third","Thirsty","Thirsty","Thoughtful","Thoughtless","Threatening","Three","Thundering","Tidy","Tight","Tightfisted","Tiny","Tired","Tiresome","Toothsome","Torpid","Tough","Towering","Tranquil","Trashy","Tremendous","Tricky","Trite","Troubled","Truculent","True","Truthful","Two","Typical","Ubiquitous","Ugliest","Ugly","Ultra","Unable","Unaccountable","Unadvised","Unarmed","Unbecoming","Unbiased","Uncovered","Understood","Undesirable","Unequal","Unequaled","Uneven","Unhealthy","Uninterested","Unique","Unkempt","Unknown","Unnatural","Unruly","Unsightly","Unsuitable","Untidy","Unused","Unusual","Unwieldy","Unwritten","Upbeat","Uppity","Upset","Uptight","Used","Useful","Useless","Utopian","Utter","Uttermost","Vacuous","Vagabond","Vague","Valuable","Various","Vast","Vengeful","Venomous","Verdant","Versed","Victorious","Vigorous","Violent","Violet","Vivacious","Voiceless","Volatile","Voracious","Vulgar","Wacky","Waggish","Waiting","Wakeful","Wandering","Wanting","Warlike","Warm","Wary","Wasteful","Watery","Weak","Wealthy","Weary","Well-groomed","Well-made","Well-off","Well-to-do","Wet","Whimsical","Whispering","White","Whole","Wholesale","Wicked","Wide","Wide-eyed","Wiggly","Wild","Willing","Windy","Wiry","Wise","Wistful","Witty","Woebegone","Womanly","Wonderful","Wooden","Woozy","Workable","Worried","Worthless","Wrathful","Wretched","Wrong","Wry","Yellow","Yielding","Young","Youthful","Yummy","Zany","Zealous","Zesty","Zippy","Zonked"];


var userService = {
    
    //#region Query
    
    getBySession: function(sessionId) {
    
        return new Promise(function (resolve, reject) {
        
            userDataStore.find({ 'Sessions.ClientId': sessionId }, function (err, docs) {
            
                resolve(docs[0]);
            })

        });
    },

    get: function(id) {

        return new Promise(function (resolve, reject) {

            userDataStore.find({ Id: id }, function(err, docs) {

                resolve(docs);
            })

        });
    },
    
    //#endregion

    createUser: function () {

        return new Promise(function (resolve, reject) {

            var user = new User(guid.v4(), userService.createName());

            userDataStore.insert(user, function(err, doc) {

                resolve(doc);
            });
        }); /* Promise */
    },
    
    createSession: function (userId, ipAddress) {
        
        return new Promise(function (resolve, reject) {
            

            var session = new UserSession(guid.v4(), ipAddress);

            userDataStore.update({ Id: userId }, { '$push': { Sessions: session } }, function(err, docs, test) {

                resolve(session);
            });


        }); /* Promise */
    },

    createName: function() {

        var name = adjectives[parseInt(Math.random() * adjectives.length)];
        name += ' ' + animalNames[parseInt(Math.random() * animalNames.length)];

        return name;
    }
}

module.exports = userService;