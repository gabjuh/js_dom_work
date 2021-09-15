// 'use strict'

// document.querySelector('h1').style.color = "black"

const $$ = q => Array.from(document.querySelectorAll(q))

const searchFor = 'ert'

const liNodes = $$('#chat_members li')
const liNodesFound = liNodes.filter(liNode =>
    liNode.innerHTML.includes(searchFor)
)

liNodesFound.forEach(li => li.classList.add('highlighted'))


