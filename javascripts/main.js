$(document).ready(function() {
  showSignUp()
  bindPlayerInput()
});


function showSignUp() {
  var signUp = Views.signUp().clone()
  $('#page').append(signUp)
}

function bindPlayerInput() {
  $("#new-player").submit(addPlayer)
};

function addPlayer( event ) {
  event.preventDefault()
  View.waiting.clone()
}


var Views = {
  page : function() {
    return $('#page')
  },

  waiting : function() {
    return $('#waiting')
  },

  signUp : function() {
    return $('#sign-up')
  }
}