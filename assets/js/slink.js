

var x = 1;
console.log(x);

// RHONDA'S MODAL FUNCTION//

$('.signin').on("click", function () {
$('.signin').css('display', 'none')
$('.login-container , .confirm').addClass('showing');

console.log('sign in clicked');

});

$('.confirm').on("click", function () {
  $('.login-container , .confirm , .signin').removeClass('showing');
  $('.signin').css('display', 'none')
console.log('login submitted');

});



//USER LOGIN (LEADS TO SHOW BOOKMARKS)

$('.confirm').on('click', function(){
  $('.savedBookmarkAccordion').css('display', 'inline-block');
console.log('nested accordion present');
});

//Rhonda's Nested Accordion

$('.Bookmark-choices').click(function(){
          $(this).next().toggle();
          $("i", this).toggleClass("hide-right-arrow");
          $("i", this).last().toggleClass("show-down-arrow");
        });
  $(".Section-A").click(function(){
            $(this).next().toggle();
            $("i", this).toggleClass("hide-right-arrow");
            $("i", this).last().toggleClass("show-down-arrow");
        });


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
  $('.addBookmarkWrapper').css('dispaly' , 'inline-block');
  $('.savedBookmarks').append('.newBookmark');

  $(function savePostCall(){
    $.ajax({
      type: 'POST',
      dataType: 'json',
      // data: JSON.stringify ({ 'title'})
      url: "https://slink.herokuapp.com/link",
      beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', 'person1');
      //Make information into variables. Values
    },
     }).done(function(data){

      console.log('save bookmark called');
      console.log('ajax called, new bookmark submitted successfully');
    });
  });
});


//See Bookmarks
