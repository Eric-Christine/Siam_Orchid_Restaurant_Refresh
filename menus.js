

var hrElements= document.body.querySelectorAll('hr')
hrElements.forEach(element => element.setAttribute("class", "hr-items"))

var liElements= document.body.querySelectorAll('main li')
liElements.forEach(element=> element.setAttribute("class", "list-items" ))

var iElements= document.body.querySelectorAll('ul i')
iElements.forEach(element=> element.setAttribute("class", "italic-items" ))

// console.log(hrElements)


// // Give all elements start CSS attribute
onScroll()
onScroll2()
onScroll3()

function onScroll() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hr-items');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('fade-in-element');
          element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  };

function onScroll2() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.list-items');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('float-up');
          element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  };


function onScroll3() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.italic-items');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('start');
          element.classList.remove('italic-items');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  };