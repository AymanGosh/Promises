const getRandomWord = function () {
    let words = [ 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             console.log("getRandomWord =>"+words[0])
            resolve(words[0])
        }, 1000);
    })
}

const getSynonyms = function (word) {
    let thesauraus = {
        'Astute': ['Sharp', 'Poignant', 'Clever'],
        'Elusive': ['Slick', 'Slippery', 'Ethereal', 'Loose'],
        'Hindrance': ['Bother', 'Disturbance', 'Problematic'],
        'Phonic': ['Soundful'],
        'Polaroid': ['Photograph'],
        'Yonder': ['There', 'Away', 'Far', 'Afar']
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getSynonyms =>"+thesauraus[word][0])
            resolve(thesauraus[word][0])
        }, 5000);
    })
}
const getSentiment = function (word) {
    let wordSentiment = {
        'Definitive': 1,
        'Sharp': 1,
        'Blue': 0,
        'Luminous': 1,
        'Plethora': 1,
        'Slick': -1,
        'Destroy': -1,
        'Bother': -1,
        'Soundful': 0,
        'Plan': 0,
        'Photograph': 0,
        'Bark': -1,
        'There': -1,
        'Elusive':1
    }
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
              console.log("getSentiment =>"+wordSentiment[word])
           resolve(wordSentiment[word])
        }, 1000);
    })
}

const getSentimentDescription = function (sentiment) {
    const r= sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"
    console.log("getSentimentDescription => "+r)
}


getRandomWord().then(getSynonyms).then(getSentiment).then(getSentimentDescription)
/*
getRandomWord =>Elusive
getSynonyms =>Slick
getSentiment =>-1
getSentimentDescription => Negative
*/

getRandomWord()
    .then((wordParam) => {
        let synonymsPromise = getSynonyms(wordParam)
        let sentimentPromise = getSentiment(wordParam)
        return Promise.all([synonymsPromise, sentimentPromise])
    })
    .then((promiseResults) => {
        
        
        console.log(promiseResults)
    })
/*
getRandomWord =>Elusive
getSentiment =>1
getSynonyms =>Slick
[ 'Slick', 1 ]
*/
    
// getRandomWord()
//     .then((word) => {
//         return getSynonyms(word)
//     })
//     .then((synonyms) => {
//         return getSentiment(synonyms)
//     })
//     .then((sentiment) => {
//         const sentimentDescription = getSentimentDescription(sentiment)
//         console.log(sentimentDescription)
//     })
    
    
