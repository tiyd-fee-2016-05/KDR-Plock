// $("bookmark-this").click(function(e){
//     e.preventDefault();
//
//
//     var bookmarkUrl = this.href;
//     var bookmarkTitle = this.title;
//
//     if ('addToHomescreen' in window && window.addToHomescreen.isCompatible) {
//           // Mobile browsers
//           addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
//         } else if (window.sidebar && window.sidebar.addPanel) {
//           // Firefox version < 23
//           window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
//         } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
//           // Firefox version >= 23 and Opera Hotlist
//           $(this).attr({
//             href: bookmarkURL,
//             title: bookmarkTitle,
//             rel: 'sidebar'
//           }).off(e);
//           return true;
//         } else if (window.external && ('AddFavorite' in window.external)) {
//           // IE Favorite
//           window.external.AddFavorite(bookmarkURL, bookmarkTitle);
//         } else {
//           // Other browsers (mainly WebKit - Chrome/Safari)
//           alert('Press ' + (/Mac/i.test(navigator.userAgent) ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
//         }
//
//         return false;
//       });
//     });
//



// // TEST //
// $.ajax({
//   method: 'GET', // The HTTP method we are using
//   url: '/api/users', // The URL we are sending data to
//   contentType: 'application/json', // What we are sending as a request
//   dataType: 'json' // What we are expecting as a response
//   data: JSON.stringify({ title: '', url: '', description: "", created_by: "", created_at: "" })
// }).done(function( msg ) {
//   alert( "Data Saved: " + msg );
// });



// ANOTHER TEST //

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
