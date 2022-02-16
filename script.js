const verbs = ['singing', 'listening', 'playing', 'dancing', 'remixing']
const nouns = ['guitar', 'saxophone', 'piano', 'radio', 'tempo', 'rhythm']
const adjectives = ['loud', 'soft', 'pleasant']

// This function randomly selects a verb, noun, and or an adjective
const grammerSelector = (noun, verb, adjective) => {
    let randomNoun = noun[Math.floor(Math.random() * noun.length)];
    let randomVerb = verb[Math.floor(Math.random() * verb.length)];
    let randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
    return {
        noun: randomNoun,
        verb: randomVerb,
        adjective: randomAdjective,
    };
}


const genericSenteceA = () => {
    noun = grammerSelector.noun
    verb = grammerSelector.verb
    return `This ${noun} is ${verb}`;
} 

const genericSentenceB = () => {
    noun = grammerSelector.noun
    verb = grammerSelector.verb
    adjective = grammerSelector.adjective
    return `A ${adjective} ${noun} was ${verb}`;
}

//Testing
console.log(genericSenteceA())