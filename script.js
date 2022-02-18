// const verbs = 
// const nouns = 
// const adjectives = 

// optionally, components of the sentence can be sotred in an object
const sentenceComponents =  {
    nouns: ['guitar', 'saxophone', 'piano', 'radio', 'tempo', 'rhythm', 'voice'],
    verbs: ['singing', 'listening', 'playing', 'dancing', 'remixing'],
    adjectives: ['loud', 'soft', 'pleasant', 'inspiring', 'harmonious'],
    sentenceTemplates: [
        "Such a adjective skill in verb noun",
        "Kofi has a adjective noun"
    ],

    get _noun (){
        return this.nouns[Math.floor(Math.random() * this.nouns.length)]
    },
    get _verb (){
        return this.verbs[Math.floor(Math.random() * this.verbs.length)]
    },
    get _adjective (){
        return this.adjectives[Math.floor(Math.random() * this.adjectives.length)]
    }
}

// This function randomly selects a verb, noun, and or an adjective
const grammerSelector = () => {
    let randomNoun = sentenceComponents._noun;
    let randomVerb = sentenceComponents._verb;
    let randomAdjective = sentenceComponents._adjective;
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

const genericSentenceA = () => {
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


// generate a random message
const generateSentence = () => {
    // add generic sentences to sentenceTemplate
    sentenceComponents.sentenceTemplates.push(genericSentenceA());
    sentenceComponents.sentenceTemplates.push(genericSentenceB());

    let randomSelector = Math.floor(Math.random() * 4);
    let sentenceTemplate = sentenceComponents.sentenceTemplates[randomSelector];

    if (sentenceTemplate.includes("adjective")) {
            sentenceTemplate = sentenceTemplate.replace("adjective",selectedGrammer.adjective)
        }
    if (sentenceTemplate.includes("noun")) {
            sentenceTemplate = sentenceTemplate.replace("noun",selectedGrammer.noun)
        }
    if (sentenceTemplate.includes("verb")) {
            sentenceTemplate = sentenceTemplate.replace("verb",selectedGrammer.verb)
        }
        
    
    return sentenceTemplate;
}

//Testing
// console.log(generateSentence())
console.log(generateSentence())
// console.log(nouns[Math.floor(Math.random() * nouns.length)]);
// console.log(verbs[Math.floor(Math.random() * verbs.length)]);
console.log(sentenceComponents.sentenceTemplates);