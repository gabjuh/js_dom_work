// const par = document.querySelectorAll('p')

// 1,2
// const doAllParGray = () => 
//     par.forEach(p => (p.classList.contains('buy_info_text') === false) ? p.classList.add('gray') : null)

// doAllParGray()

// 3
// const $$ = (q) => Array.from(document.querySelectorAll(q))

// const setLiWithoutClassGray = () => $$('li').forEach(l => l.classList.length === 0 ? l.classList.add('gray') : null)

// setLiWithoutClassGray()
    
const $$ = q => Array.from(document.querySelectorAll(q))

// 1
// $$('p').forEach(p => p.classList.add('gray'))
// 2
$$('p:not(.buy_info_text)').forEach(p => p.classList.add('gray'))
// 3
$$('li:not([class])').forEach(p => p.classList.add('gray'))

