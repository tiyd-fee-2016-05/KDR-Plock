var x = 1;
console.log(x);

// USER LOGIN CONTAINER//

$('.signin').on("click", function() {
    $('.signin').css('display', 'none')
    $('.login-container , .confirm').addClass('showing');

    console.log('sign in clicked');

});

$('.confirm').on("click", function() {
    $('.login-container , .confirm , .signin').removeClass('showing');
    $('.signin').css('display', 'none')
    console.log('login submitted');

});

//Call AJAX on clicking submit//

//David's GET request; appends information to assigned sections//
//Will pull user information triggered by clicking on "Saved Bookmarks"//
$('.confirm').on('click', function jSONson() {

    $.ajax({
        url: "https://slink.herokuapp.com/link",
        dataType: "JSON",
        method: 'GET',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'person1');
        },

    }).done(function(data) {
        console.log("success!");
        console.log(data);

        for (var i = 0; i < data.length; i++) {
            var titleSave = (data[i].title);
            var descSave = (data[i].description);
            var urlSave = (data[i].URL);
            var bySave = (data[i].created_by);
            var atSave = (data[i].created_at);
        };
        $('.infoTitle').append(titleSave);
        $('.infoDesc').append(descSave);
        $('.infoURL').append(urlSave);
        $('.infoBy').append(bySave);
        $('.infoAt').append(atSave);
    });

    console.log("Ajax call!");
});


//USER LOGIN (LEADS TO SHOW BOOKMARKS)

$('.confirm').on('click', function() {
    $('.savedBookmarkAccordion').css('display', 'inline-block');
    console.log('nested accordion present');
});

//Rhonda's Nested Accordion

$('.Bookmark-choices').click(function() {
    $(this).next().toggle();
    $("i", this).toggleClass("hide-right-arrow");
    $("i", this).last().toggleClass("show-down-arrow");
});

$(".Section-A").click(function() {
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

$('.addNewBookmark').click(function() {
    $('.addBookmarkWrapper').css('display', 'block');

    console.log('addBookmark modal working');
});

  $('.closeAddNew').click(function(){
    $('.addBookmarkWrapper').css('display', 'none');

    console.log('close addBookmark');
});

//FUNCTION FOR EXITING BOOKMARK
$

//FUNCTION FOR WHEN ADDBOOKMARK FORMS ARE SUBMITTED

$('#addBookmarkSubmit').click(function(e) {

    e.preventDefault();
    $('#addBookmarkWrapper').css('display', 'none');
    console.log('attempt to add bookmark')
    // $('.savedBookmarks').append('.');

    var myData = JSON.stringify({
      created_by: 'person1',
      title: $('input[name="addnewtitle"]').val(),
      description: $('input[name="addnewdesc"]').val(),
      URL: $('input[name="addnewurl"]').val()
    });

    console.log(myData);


    $(function savePostCall() {
        $.ajax({
            method: 'POST',
            dataType: 'json',
            url: "https://slink.herokuapp.com/link",
            data: myData,
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'person1');
            }
          //   data: ({ "username": $('input[name="username2"]').val(), "title": $('input[name="addnewtitle"]').val(), "URL": $('input[name="addnewurl"]').val(), "description": $('input[name="addnewdesc"]').val()
          // })

            // beforeSend: function(xhr) {
            //     xhr.setRequestHeader('Authorization', 'person1');
            //     //Make information into variables. Values
            // },
        }).done(function(data) {
            console.log(data);
            console.log('save bookmark called');
            console.log('ajax called, new bookmark submitted successfully');
            $('.newLi').css('display', 'block');
            $('.addnewnewtitle').append(data[1]);
            $('.addnewnewdesc').append(data[2]);
            $('.addnewnewurl').append(data[3]);
        });


        // $('#addBookmarkSubmit').on('click', function() {

       });
    });



//See Bookmarks
