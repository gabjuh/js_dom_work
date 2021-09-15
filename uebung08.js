'use strict'

const $ = q => document.querySelector(q)
const $$ = q => Array.from(document.querySelectorAll(q))

const countLetters = art => art.innerText.length

// const getLengthOfArticle = () => {
//     let nrOfLetters = 0
//     $$('#content p').forEach(p => 
//         nrOfLetters += countLetters(p)    
//     )
//     return nrOfLetters
// }

const contentLength = () => $('#content').innerText.length

// const setClassDependentOfLength = length => {
//     if (length <= 3000) {
//         setClassToH1('coffe_break_article')
//     } else if (length <= 9000) {
//         setClassToH1('normal_length_article')
//     } else if (length > 9000) {
//         setClassToH1('long_weekend_article')
//     }
// }

const setClassDependentOfLength = contentLength => {
    if (contentLength <= 3000) return 'coffe_break_article'
    if (contentLength <= 9000) return 'normal_length_article'
    return 'lone_weekend_article'
}

// const setClassToH1 = className => $('h1').classList.add(className)

// setClassDependentOfLength(contentLength())

$('h1').classList.add(setClassDependentOfLength(contentLength()))

// console.log(contentLength())
