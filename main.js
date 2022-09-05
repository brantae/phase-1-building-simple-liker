// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector('#modal')
errorModal.classList.add('hidden')

// Your JavaScript code goes here!

  document.addEventListener('DOMContentLoaded', () => {
    //Check to see DOM loaded properly
    console.log("DOM CONTENT LOADED")

    //Add the `.hidden` class to the error modal in the HTML so it does not appear when the page first loads
    
    console.log(errorModal)
    hideError();

    //Invoke the like action
    heartLikes();
    emptyHeartClicked();
  })

  function hideError(){
    errorModal.classList.add('hidden')
  }


  //Click empty heart
  //Hearts have the like-glyph class

function heartLikes() {
  const hearts = document.querySelectorAll(".like-glyph")
  console.log(hearts)

  hearts.forEach((like) => {
    like.addEventListener("click", () => console.log("hi"))
  
  })
}

function emptyHeartClicked() {
  document.addEventListener('click', (event) => {

    //When the "server" returns a failure status:
    if(event.target.classList[0] === 'like-glyph'){
      //mimic server returns a promise, we need a .then()
      mimicServerCall()
      .then(res => {
        
      //* When the "server" returns a success status:
      //* Change the heart to a full heart
      //* Add the `.activated-heart` class to make the heart appear red
        
        const activated = event.target.classList.contains("activated-heart")

        if(activated){
        event.target.classList.remove("activated-heart") 
        event.target.innerHTML = EMPTY_HEART
        } else{
          event.target.classList.add("activated-heart")
          event.target.innerHTML = FULL_HEART
        }
      })
    //* Display the error modal by removing the `.hidden` class
    //* Display the server error message in the modal
    //* Use `setTimeout` to hide the modal after 3 seconds (3000ms) (add the `.hidden` class)
      .catch(error => {
        errorModal.classList.remove('hidden')
        setTimeout(() => hideError(), 3000)
      })
     
    }
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
