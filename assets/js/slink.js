$(function(){
  'use strict';
});

var x = 1;
console.log(x);

//User Login --> Show Bookmarks

$(function () {
	  $(‘#usernameLogin’).on('submit', function(e) {
	    e.preventDefault();


	    var seeBookmarkInfo = $('input[id="usernameLogin”]').val();

//See Bookmarks

$.getJSON('https://api.place...../users' + saveBookmark)
        .done(seeBookmark)
        .fail(showError);

      function seeBookmark(e) {
        show('see_bookmark', e); //Will have to add CONFIRMATION MODAL to HTML
      }
      function show (template, model){
        var fn = _.template($('#' + template).html(), {
              variable: 'm'});
        $('.seeBookmarksList').html(fn(model));
        }
      )};

//Recommend Bookmarks
