const verbs = ['singing', 'listening', 'playing', 'dancing', 'remixing']
const nouns = ['guitar', 'saxophone', 'piano', 'radio', 'tempo', 'rhythm']
const adjectives = ['loud', 'soft', 'pleasant', 'inspiring']

// This function randomly selects a verb, noun, and or an adjective
const grammerSelector = () => {
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    return {
        noun: randomNoun,
        verb: randomVerb,
        adjective: randomAdjective,
    };
}

/**
 *  this line is added to call and generate the random words needed,
 * without this line grammerSelector object properties are undefined
 * reference can be seen in test: console.log(grammerSelector.noun);
 * */ 
let selectedGrammer = grammerSelector(); 

const genericSenteceA = () => {
    let noun = selectedGrammer.noun
    let verb = selectedGrammer.verb
    return `This ${noun} is ${verb}`;
} 

const genericSentenceB = () => {
    let noun = selectedGrammer.noun
    let verb = selectedGrammer.verb
    let adjective = selectedGrammer.adjective
    return `A ${adjective} ${noun} was ${verb}`;
}

//Testing
console.log(genericSenteceA())
// console.log(nouns[Math.floor(Math.random() * nouns.length)]);
// console.log(verbs[Math.floor(Math.random() * verbs.length)]);
// console.log(grammerSelector.noun);