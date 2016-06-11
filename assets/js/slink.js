
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

    // var base64Credentials = btoa('created_by'); // add username or created_by as argument // need password?

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
      // var jsonArray = $.makeArray(data);
      // var jsonArray = $.map(data, function)
      for (var i =0; i < data.length; i++) {
        var titleSave = (data[i].title);
        var descSave = (data[i].description);
        var urlSave = (data[i].URL);
        var bySave = (data[i].created_by);
        var atSave = (data[i].created_at);
      };
      $('.infoTitle').append("Title: " + titleSave);
      $('.infoDesc').append("Description: " + descSave);
      $('.infoURL').append("URL: " + urlSave);
      $('.infoBy').append("Created by: " + bySave);
      $('.infoAt').append("Created at: " + atSave);
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
