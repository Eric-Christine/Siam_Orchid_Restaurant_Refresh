console.log('connected')

const url = 'https://embeddo.s3-us-west-1.amazonaws.com/bundle.js';

console.log(url);
function test() {
    get(url, function (data, status) {
        console.log(`${data}`)
    })
}
test();

let logo = document.querySelector('img')
console.log(logo)

logo.addEventListener('click', function (e) {
    // e.preventDefault()
    window.location=""
})


// yelpButton.addEventListener('click', function () {
//     window.location = "https://www.yelp.com/biz/siam-orchid-thai-restaurant-bellevue"
//     })
