document.addEventListener("DOMContentLoaded", function() {
  var candidateList = document.querySelector('#candidate-list');
  // Imagination!
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
  }).done( function(responseData) {
    console.log('Request success!');
    responseData.candidates.forEach(function(candidate) {
      var newItem = document.createElement('li');
      newItem.innerHTML = candidate.name + ", votes: " + candidate.votes;
      candidateList.append(newItem);
    })
  });
});
