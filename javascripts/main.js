$(document).ready(function() {
  showSignUp()
  bindPlayerInput()
});


function showSignUp() {
  var signUp = Views.signUp().clone()
  Views.page().append(signUp)
}

function bindPlayerInput() {
  $(".new-player").submit(addPlayer)
};

function addPlayer( event ) {
  event.preventDefault()
  togglePartials(Views.waiting().clone())
  var playerName = event.target.player.value
  Sync.addPlayer(playerName)
}

function togglePartials($partialToShow) {
  Views.page().empty()
  Views.page().append($partialToShow)
}

var Views = {
  page : function() {
    return $('#page')
  },

  waiting : function() {
    return $('.waiting')
  },

  signUp : function() {
    return $('.sign-up')
  }
}