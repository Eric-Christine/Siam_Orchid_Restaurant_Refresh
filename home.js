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
    console.log(e)
})

