

var x = 1;
console.log(x);

// RHONDA'S MODAL FUNCTION//

$('.signin').on("click", function () {
$('.login-container , .confirm').addClass('showing');

console.log('sign in clicked');

});

$('.confirm').on("click", function () {
  $('.login-container , .confirm , .signin').removeClass('showing');
  $('.signin').css('display', 'none')
console.log('login submitted');

});



//USER LOGIN (LEADS TO SHOW BOOKMARKS)

function jSONson() {
  $.ajax({
    url: "https://slink.herokuapp.com/",
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
}
  console.log("Something works");


//SAVE BOOKMARKS ('POST' REQUEST)
//While this appears to be really standard jQuery ajax call, this was found as a response on a Stack Overflow question by user 'Roger' on http://stackoverflow.com/questions/15308017/save-data-through-ajax-jquery-post-with-form-submit//

// $(function savePostCall(){
// $.ajax({
//   type: 'POST',
//   dataType: 'json',
//   url: "https://slink.herokuapp.com/link",
//   success: function(data){
//     }
//   });
//
//   console.log('save bookmark called');
//
// });

//FUNCTION FOR ADD BOOKMARK MODAL

  $('.newBookmark').click(function(){
  $('.addBookmarkWrapper').addClass('showing');

  console.log('addBookmark modal working');

});

//FUNCTION FOR WHEN ADDBOOKMARK FORMS ARE COMPLETE

$('#addBookmarkSubmit').click(function(e){

  e.preventDefault();
  $('.addBookmarkWrapper').css('dispaly : inline-block');
  $('.savedBookmarks').append('.newBookmark');

  $(function savePostCall(){
    $.ajax({
      type: 'POST',
      dataType: 'json',
      // data: JSON.stringify ({ 'title'})
      url: "https://slink.herokuapp.com/link",
      beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', 'person1');
    },
     }).done(function(data){

      console.log('save bookmark called');
      console.log('ajax called, new bookmark submitted successfully');
    });
  });
});


//See Bookmarks
