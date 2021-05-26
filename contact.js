
// // global variables 

console.log('connected')

let yelpButton = document.querySelector('#yelp-button')
console.log(yelpButton)

let fbButton = document.querySelector('#facebook-button')

yelpButton.addEventListener('click', function () {
    window.location = "https://www.yelp.com/biz/siam-orchid-thai-restaurant-bellevue"
    })

fbButton.addEventListener('click', function () {
    window.location = "https://www.facebook.com/Siam-Orchid-180288843674/?ref=page_internal"
    })




// let submitButton = document.querySelector('#submitButton')
// let reviewList = document.querySelector('.reviewList')
// let overallStarRating = document.querySelector('.overallStarRating')
// let userNumberRating = 5
// let overallNumberRating = 0
// let hoverStarRating = 0

// // //Yelp Review resizing 
// // let yelpReview = document.querySelector(".yelp-review")
// // yelpReview.style.height="500px"

// // user star rating event listenr

// star1 = document.getElementById('star1')
// star2 = document.getElementById('star2')
// star3 = document.getElementById('star3')
// star4 = document.getElementById('star4')
// star5 = document.getElementById('star5')


// let starArray = [star1, star2, star3, star4, star5]
// console.log(starArray)

// star1.addEventListener('click', function (e) {
//     e.preventDefault();
//     starArray.forEach(function remove(star) {
//         star.classList.remove('checked')
//     })
//     star1.classList.add('checked')
//     userNumberRating = 1
// })

// star2.addEventListener('click', function (e) {
//     e.preventDefault();
//     starArray.forEach(function remove(star) {
//         star.classList.remove('checked')
//     })
//     star1.classList.add('checked');
//     star2.classList.add('checked');
//     userNumberRating = 2
// })

// star3.addEventListener('click', function (e) {
//     e.preventDefault();
//     starArray.forEach(function remove(star) {
//         star.classList.remove('checked')
//     })
//     star1.classList.add('checked');
//     star2.classList.add('checked');
//     star3.classList.add('checked');
//     userNumberRating = 3
// })

// star4.addEventListener('click', function (e) {
//     e.preventDefault();
//     starArray.forEach(function remove(star) {
//         star.classList.remove('checked')
//     })
//     star1.classList.add('checked');
//     star2.classList.add('checked');
//     star3.classList.add('checked');
//     star4.classList.add('checked');
//     userNumberRating = 4
// })

// star5.addEventListener('click', function (e) {
//     e.preventDefault();
//     starArray.forEach(function remove(star) {
//         star.classList.remove('checked')
//     })
//     star1.classList.add('checked');
//     star2.classList.add('checked');
//     star3.classList.add('checked');
//     star4.classList.add('checked');
//     star5.classList.add('checked');
//     userNumberRating = 5
// })




// function turnBackEndRatingIntoStars(allReviews) {
//     allReviews.forEach((review) => {
//         if (review.rating === 1) {
//             star1.classList.add('checked')
//         } else if (review.rating === 2) {
//             star1.classList.add('checked');
//             star2.classList.add('checked');
//         } else if (review.rating === 3) {
//             star1.classList.add('checked');
//             star2.classList.add('checked');
//             star3.classList.add('checked');
//             star4.classList.add('checked');
//             star5.classList.add('checked');
//         }
//     })

// }

// // calculate overall star rating average
// let ratingArray = []
// let total = 0



// function calculateAverage(array) {
//     for (let i = 0; i < array.length; i++)
//         total = total + array[i]
//     let average = total / array.length

//     starArray.forEach(function remove(star) {
//         star.classList.remove('checked')
//     })

//     return average
// }


// fetch('http://localhost:3000/reviews')
//     .then(response => response.json())
//     .then(allReviews => {

//         allReviews.forEach((review) => {
//             let el = allReviews.length;
//             if (!ratingArray.includes(el))
//                 ratingArray.push(review.rating)
//             console.log(ratingArray)


//         })


//         let result = calculateAverage(ratingArray).toFixed(2)
//         console.log(result)
//         let overallNumberRatingText = document.createElement('span')
//         overallNumberRatingText.textContent = ` The average rating is ${result}/5`
//         console.log(overallNumberRatingText)

//         overallStarRating.appendChild(overallNumberRatingText)

//         submitButton.addEventListener('click', function (e) {
//             console.log(result)
//         })

//     })


// console.log(document.querySelector('#lastName').value)

// submitButton.addEventListener('click', function (e) {
//     e.preventDefault()
//     let userFirstName = document.querySelector('#firstName').value
//     let userLastName = document.querySelector('#lastName').value
//     console.log(userLastName)

//     let userStarRating = document.querySelector('.userStarRating')
//     let userStarRatingClone = userStarRating.cloneNode(true)
//     console.log(userStarRating)
//     let userReviewText = document.createElement('li')


//     userReviewText.textContent = `${document.querySelector('textarea').value}`

//     let userReviewTextPost = document.createElement('li')

//     userReviewTextPost.textContent = userReviewText.textContent + ` | Posted by: ${userFirstName} ${userLastName}`

//     userStarRatingClone.appendChild(userReviewTextPost)
//     userStarRatingClone.removeAttribute('class')
//     userStarRatingClone.classList.add('userFullReview')



//     // allReviews.forEach((review) => {
//     //     let reviewID = review.id
//     //     console.log(reviewID)
//     // })

//     const deleteButton = document.createElement('button')
//     deleteButton.textContent = 'Delete Review'
//     deleteButton.className = 'delete-button'
//     userStarRatingClone.appendChild(deleteButton)
//     deleteButton.addEventListener('click', () => {
//         userStarRatingClone.remove()
//         fetch(`http://localhost:3000/reviews/${review.id}`), {
//             method: 'DELETE'
//         }
//     })


//     reviewList.appendChild(userStarRatingClone)

//     fetch('http://localhost:3000/reviews', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             first_name: userFirstName, last_name: userLastName,
//             content: userReviewText.textContent, rating: userNumberRating
//         })
//     })


// })

// // display reviews

// fetch('http://localhost:3000/reviews')
//     .then(response => response.json())
//     .then(allReviews => {
//         allReviews.forEach((review) => {
//             console.log(review)

//             let userFirstName = review.first_name
//             let userLastName = review.last_name
//             let userStarRating = review.rating


//             let userReviewText = document.createElement('li')
//             userReviewText.textContent = `${userStarRating}/5 ${review.content} | Posted by: ${userFirstName} ${userLastName} `
//             reviewList.appendChild(userReviewText)


//             // const deleteButton = document.createElement('button')
//             // deleteButton.textContent = 'X'
//             // deleteButton.className = 'delete-button'
//             // userStarRatingClone.appendChild(deleteButton)
//             // deleteButton.addEventListener('click', () => {
//             //     userStarRatingClone.remove()
//             //     fetch(`http://localhost:3000/reviews/${review.id}`), {
//             //         method: 'DELETE'
//             //     }
//             // })
//         })
//     })





