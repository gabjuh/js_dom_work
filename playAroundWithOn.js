'use strict'

{

    const init = () => {
        $on(
            $('.testButton'),
            'click',
            e => ($('.box h2').innerHTML = 'bla')
        )
    }

    const $on = (el, ev, fn) => {
        Array.isArray(el) 
            ? el.forEach(ae => $on(ae, ev, fn))
            : el.addEventListener(ev, fn)
        return el
    }
    
    const $ = q => document.querySelector(q)
    const $$ = q => Array.from(document.querySelectorAll(q))

    init()

}