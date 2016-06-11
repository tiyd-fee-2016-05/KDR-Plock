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



//  CATLIN //

// $(function(){
//   'use strict';
// });
//
// var x = 1;
// console.log(x);
//
// //User Login --> Show Bookmarks
//
// $(function () {
// 	  $(‘#usernameLogin’).on('submit', function(e) {
// 	    e.preventDefault();
//
//
// 	    var seeBookmarkInfo = $('input[id="usernameLogin”]').val();
//
// //See Bookmarks
//
// $.getJSON('https://api.place...../users' + saveBookmark)
//         .done(seeBookmark)
//         .fail(showError);
//
//       function seeBookmark(e) {
//         show('see_bookmark', e); //Will have to add CONFIRMATION MODAL to HTML
//       }
//       function show (template, model){
//         var fn = _.template($('#' + template).html(), {
//               variable: 'm'});
//         $('.seeBookmarksList').html(fn(model));
//         }
//       )};
//
//
//       //  David
//       $(document).ready(function() {
// //
// //
// //             $(function() {
// //
// //                     $('.user-form).on('submit', function (e) {
// //                         e.preventDefault();
// //                         bookMarkk();
// //                     )};
// //
// //
// //                 // var ghLogin = $('input[name="slink-login"]').val();
// //
// //
// //                 function bookMarkk() {
// //                     $.ajax({
// //                             url: "/Users/davidgrayboff/Documents/dev_projects/TIY/KDR-Slink copy/APIS/Slink/users/user-1/test.json",
// //                             type: 'GET',
// //                             dataType: 'text',
// //                             success: successFunction,
// //                             error: errorFunction,
// //
// //                             complete: $('.alert').append('.info');
// //                         }
// //                     });
// //             }
// //
// //           });
//
// // ajaxComplete //
//
// $(function() {
//   "use strict";
//
//  function jSONson() {
//   $.ajax({
//     url: "http://localhost:3000/0",
//     dataType: "JSON",
//     method: 'GET',
//     success: function(data)
//     {
//       console.log("success!");
//       console.log(data);
//       // var a = data.a;
//       $('.infoTitle').text(data.title);
//       $('.infoDesc').text(data.description);
//       $('.infoURL').text(data.url);
//       $('.infoBy').text(data.created_by);
//       $('.infoAt').text(data.created_at);
//     }
//     // success: successFunction
//   });
//   console.log("Something works");
//
//
// }
//
//
// $('.user-form').on('submit', function(e) {
//   e.preventDefault();
//   jSONson();
// })
// })
//////////////////////////////////////////////////////////////////
//                   RHONDA
$(".Bookmark-choices").click(function(){
    $(this).next().toggle();
    $("i", this).toggleClass("hide-right-arrow");
    $("i", this).last().toggleClass("show-down-arrow");
  });



  $(".Section-A").click(function(){
      $(this).next().toggle();
      $("i", this).toggleClass("hide-right-arrow");
      $("i", this).last().toggleClass("show-down-arrow");
  });


////////////       MODAL
    $('h1').on("click", function () {//when you click on the btn the modal pops up//
        $(this).text("recommendations");//when you click on the btn the text changes to Hi//

    $('.modal-container').addClass('showing');

    console.log("yes");
});
    $('#modal-close').on('click', function () {
      //when you click on the X the modal container disappears//
      $('.modal-container').removeClass('showing');
    console.log("no");
//     $('.modal').click(function (e) // stops the modal container from appearing after it's closed//
//       e.stopPropagation();
// });
});
