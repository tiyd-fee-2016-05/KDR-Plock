
$(function() {
  "use strict";

////// GET SAVED BOOKMARKS //////
 function jSONson() {
  $.ajax({
    url: "https://slink.herokuapp.com/link",
    dataType: "JSON",
    method: 'GET',
    beforeSend: function (xhr) {
    // Assuming username and password are defined somewhere as strings
    // btoa is a built-in function that converts a string to base64

    // var base64Credentials = btoa(""); // add username or created_by as argument // need password?

    // setRequestHeader is a method of the DOM's AJAX object (XMLHttpRequest)
    // it allows us to set HTTP headers. These are key/value pairs that
    // modify the way an HTTP request is understood by the server. Here, we
    // are adding the Authorization header. For more info, see Google!

    xhr.setRequestHeader('Authorization', 'person1');
    },
  }).done(function(data){
      console.log("success!");
      console.log(data);
      // $('.bookmark1').append("Bookmark:");
      //  var jsonstring = JSON.parse(data);
      $('.infoTitle').append("Title: ");
      $('.infoDesc').append("Description: " + data.description);
      $('.infoURL').append("URL: " + data.URL);
      $('.infoBy').append("Created by: " + data.created_by);
      $('.infoAt').append("Created at: " + data.created_at);
    });


  console.log("Ajax call!");
  var slinkLogin = $('input[name="slink-login"]').val();
}


$('.user-form').on('submit', function(e) {
  e.preventDefault();
  jSONson();
  $('.savedbook').css('border', '1px solid darkgrey');
  $('h3').css('display', 'inline-block');
  $('.addbook').css('display', 'inline-block');

})
})
