$(function(){
  'use strict';
});

var x = 1;
console.log(x);

//User Login --> Show Bookmarks

function jSONson() {
  $.ajax({
    url: "http://localhost:3000/0",
    dataType: "JSON",
    method: 'GET',
    success: function(data)
    {
      console.log("success!");
      console.log(data);
      // var a = data.a;
      $('.infoTitle').text(data.title);
      $('.infoDesc').text(data.description);
      $('.infoURL').text(data.url);
      $('.infoBy').text(data.created_by);
      $('.infoAt').text(data.created_at);
    }
    // success: successFunction
  });
  console.log("Something works");


//Save Bookmarks (function for a POST call)
//While this appears to be really standard jQuery ajax call, this was found as a response on a Stack Overflow question by user 'Roger' on http://stackoverflow.com/questions/15308017/save-data-through-ajax-jquery-post-with-form-submit//

// $(function savePostCall(){
// $.ajax({
//   type: 'POST'
//   dataType: 'JSON.stringify({})'
//   url: "http://localhost:3000/0",
//   success: function(data){
//   }
//
//   console.log('save bookmark called')
//
// )};

//Function for addBookmark Modal

  $('.newBookmark').click(function(){
  $('.addBookmarkWrapper').addClass('showing');

  console.log('addBookmark modal working');

});

//Function for when addBookmark modal forms are complete

$('#addBookmarkSubmit').click(function(e){
  e.preventDefault();
  $('.addBookmarkWrapper').removeClass('showing');
  $('.savedBookmarks').append('.newBookmark');
  $(function savePostCall(){
  $.ajax({
    type: 'POST'
    data: 'JSON.stringify'
    url: "http://localhost:3000/0",
    success: function(data){
    }

    console.log('save bookmark called')
    console.log('ajax called, new bookmark submitted successfully');
}
});




//See Bookmarks
