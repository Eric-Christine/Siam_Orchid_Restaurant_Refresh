console.log('connected')

let lunchMenu = document.querySelector('#lunch-menu')
console.log(lunchMenu)

let dinnerMenu = document.querySelector('#dinner-menu')

lunchMenu.addEventListener('click', function () {
    console.log('clicked')
    window.location = "lunch-menu.html"
    })

dinnerMenu.addEventListener('click', function () {
    window.location = "menus.html"
    })

