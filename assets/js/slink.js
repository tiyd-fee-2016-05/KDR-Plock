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

//APPENDING NEW BOOKMARK//


$('#addBookmarkSubmit').on('click', function jSONson() {

    console.log('bookmark submit clicked');

    $.ajax({
        url: "https://slink.herokuapp.com/link",
        dataType: "JSON",
        method: 'POST',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'person1');
        },

    }).done(function(data) {
        console.log("success!");
        console.log(data);
    });

    // var brandNewBookmark = ['#li1', '#li2', '#li3']
    // array.push(brandNewBookmark).append('.addBookmarkWrapper')

    for (var i = 0; i < data.length; i++) {
        var newTitleSave = (data[i].title);
        var newDescSave = (data[i].description);
        var newUrlSave = (data[i].URL);


        $('#addBookmarkSubmit').on('click', function() {
            $('.newLi').css('display', 'block');
            $('.newTitle').append(newTitleSave);
            $('.newDesc').append(newDescSave);
            $('.newURL').append(newUrlSave);
        });
    };
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

//FUNCTION FOR ADD BOOKMARK MODAL

$('.addNewBookmark').click(function() {
    $('.addBookmarkWrapper').css('display', 'block');

    console.log('addBookmark modal working');
});

//FUNCTION FOR EXITING BOOKMARK

$('.closeAddNew').click(function() {
    $('.addBookmarkWrapper').css('display', 'none');

    console.log('close addBookmark');
});

//FUNCTION FOR WHEN ADDBOOKMARK FORMS ARE SUBMITTED

// $('#addBookmarkSubmit').click(function(e) {
//
//     e.preventDefault();
//     $('#addBookmarkWrapper').css('display', 'none');
//     console.log('clicked')
//     $('.savedBookmarks').append('.newBookmark');
//
//     $(function savePostCall() {
//         $.ajax({
//             type: 'POST',
//             dataType: 'json',
//             // data: JSON.stringify ({ 'title'})
//             url: "https://slink.herokuapp.com/link",
//             beforeSend: function(xhr) {
//                 xhr.setRequestHeader('Authorization', 'person1');
//                 //Make information into variables. Values
//             },
//         }).done(function(data) {
//
//           for (var i = 0; i < data.length; i++) {
//               var titleSave = (data[i].title);
//               var descSave = (data[i].description);
//               var urlSave = (data[i].URL);
//               var bySave = (data[i].created_by);
//               var atSave = (data[i].created_at);
//           };
//           $('.infoTitle').append(titleSave);
//           $('.infoDesc').append(descSave);
//           $('.infoURL').append(urlSave);
//           $('.infoBy').append( bySave);
//           $('.infoAt').append(atSave);
//       });
//
//             console.log('save bookmark called');
//             console.log('ajax called, new bookmark submitted successfully');
//
//
//
//         });
//     });
// });

//RECOMMENDATIONS

$('#makeRecButton').click(function() {
    $('.makeRecommendations').css('display', 'block');
    console.log('get recs button working');
});

$('.closeGetRecs').click(function() {
    $('.makeRecommendations').css('display', 'none');
    console.log('get recs button working');
});
