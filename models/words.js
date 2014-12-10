module.exports.random_adjective = function() {
    return random_from_array([
        'lazy',
        'stupid',
        'insecure',
        'idiotic',
        'slimy',
        'slutty',
        'smelly',
        'pompous',
        'communist',
        'dicknose',
        'pie-eating',
        'racist',
        'elitist',
        'white trash',
        'drug-loving',
        'butterface',
        'tone deaf',
        'ugly',
        'creepy'
    ]);
};

module.exports.random_noun_one = function() {
    return random_from_array([
        'douche',
        'ass',
        'turd',
        'rectum',
        'butt',
        'cock',
        'shit',
        'crotch',
        'bitch',
        'snatch',
        'prick',
        'slut',
        'taint',
        'fuck',
        'dick',
        'boner',
        'shart',
        'nut',
        'sphincter'
    ]);
};

module.exports.random_noun_two = function() {
    return random_from_array([
        'pilot',
        'canoe',
        'captain',
        'pirate',
        'hammer',
        'knob',
        'box',
        'jockey',
        'nazi',
        'waffle',
        'goblin',
        'blossom',
        'biscuit',
        'clown',
        'socket',
        'monster',
        'hound',
        'dragon',
        'balloon'
    ]);
};

function random_from_array(array) {
    var randomInt = getRandomInt(0, array.length - 1);
    return array[randomInt];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}