'use strict'

{

    const init = () => inputField().addEventListener('keyup', event => {
        // console.log(event)
        updateHighlightingOfChatMembers(event.target.value)
    })

    const inputField = () => $('#member_search input') 

    const updateHighlightingOfChatMembers = partOfMemberName => {
        removeHighlightsFromAllChatMembers()
        highlightChatMembersBy(partOfMemberName)
    }
     
    const removeHighlightsFromAllChatMembers = () => chatMembers().forEach(removeHighlight)
    
    const highlightChatMembersBy = partOfMemberName => {
        if (partOfMemberName !== '') return chatMembers().filter(member => doesMemberMatch(partOfMemberName, member)).forEach(highlight)
    }

    const doesMemberMatch = (partOfMemberName, member) => member.innerHTML.toLowerCase().includes(partOfMemberName)

    const chatMembers = () => $$('#chat_members li')
    const highlight = el => el.classList.add('highlighted')
    const removeHighlight = el => el.classList.remove('highlighted')

    const $$ = q => Array.from(document.querySelectorAll(q))
        
    const $ = q => document.querySelector(q)
    
    init()

}
