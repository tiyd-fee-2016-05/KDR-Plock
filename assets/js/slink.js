
//////////////////////////////////////////////////////////////////
//                   NESTED ACCORDION        ////////////////////
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



//////////       MODAL   ////////////////////////////////////////////////
    $('h1').on("click", function () {//when you click on the btn the modal pops up//
        $(this).text("recommendations");//when you click on the btn the text changes//

    $('.modal-container').addClass('showing');

    console.log("yes");
});
    $('#modal-close').on('click', function () {
      //when you click on the recommendations the modal container disappears//
      $('.modal-container').removeClass('showing');
    console.log("no");
//     $('.modal').click(function (e) // stops the modal container from appearing after it's closed//
//       e.stopPropagation();
// });
});

////////////////////////////////////////////////////////////////////////


    //FUNCTION FOR ADD BOOKMARK MODAL

    // $('.addbook').click(function() { // .addBook is + button's class next to Saved Bookmarks
    //     // $('.addBookmarkWrapper').addClass('showing'); // makes a modal pop up that has inputs for add new
    //
    //     console.log('addBookmark modal working');
    //
    // });

    //////////////


    //////////       MODAL
    $('.secondary-btn').on("click", function() { //when you click on the btn the modal pops up//
        // $(this).text("recommendations"); //when you click on the btn the text changes//

        $('.modal-container').addClass('showing');

        console.log("yes");
    });
    $('#modal-close').on('click', function() {
        //when you click on the recommendations the modal container disappears//
        $('.modal-container').removeClass('showing');
        console.log("no");
        //     $('.modal').click(function (e) // stops the modal container from appearing after it's closed//
        //       e.stopPropagation();
        // });
    });



    ///// AJAX "GET" RECOMMENDATIONS  ///////
    //  Just took David's example and applied it to getting recommendations  //
    //  Not really clear on what I am doing.  The console.log(Ajax call!) does show up in the inspector console. //
    $(function(){
    "use strict";

    var username = $('input[name="slink-login"]').val();
    // var username = 'person1';

    // var recommends = "bookmarks";
  function jSONson() {
      $.ajax({
          url: "https://slink.herokuapp.com/link/recommendations",
          dataType: "JSON",
          method: 'GET',
          beforeSend: function(xhr) {
              // Assuming username and password are defined somewhere as strings
              // btoa is a built-in function that converts a string to base64

              // var base64Credentials = btoa('created_by'); // add username or created_by as argument // need password?

              // setRequestHeader is a method of the DOM's AJAX object (XMLHttpRequest)
              // it allows us to set HTTP headers. These are key/value pairs that
              // modify the way an HTTP request is understood by the server. Here, we
              // are adding the Authorization header. For more info, see Google!

              xhr.setRequestHeader('Authorization', 'person1');
          },

      }).done(function(data) {
          console.log("success!");
          console.log(data);
          // $('.bookmark1').append("Bookmark:");
          //  var jsonstring = JSON.parse(data);
          // var jsonArray = $.makeArray(data);
          // var jsonArray = $.map(data, function)
          for (var i = 0; i < data.length; i++) {
              var titleRecommend = (data[i].title);
              var descRecommend = (data[i].description);
              var urlRecommend = (data[i].URL);
              var byRecomend= (data[i].created_by);
              var atRecommend = (data[i].created_at);
          };
          $('.addTitle').append("Title: " + titleRecommend);
          $('.addDesc').append("Description: " + desRecommend);
          $('.addURL').append("URL: " + urlRecommend);
          $('.addBy').append("Created by: " + byRecommend);
          $('.addAt').append("Created at: " + atRecommend);
      });

      console.log("Ajax call!");
  }


  $('.user-form').on('submit', function(e) {
      e.preventDefault();
      jSONson();
      // $('.savedbook').css('border', '1px solid darkgrey');
      // $('h3').css('display', 'inline-block');
      // $('.secondary-btn').css('display', 'inline-block');

  })

/////////////////////   POSTING IS NOT WORKING 404 error  ////////
    $('#recommendbooks').click(function(e) {

        e.preventDefault();
        $(this).addClass('showing');
        $(this).append('li');

        $(function savePostCall() {
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: "https://slink.herokuapp.com/link/recommendations",
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', 'person1');
                },
            }).done(function(data) {

                console.log('save recommendation called');
                console.log('ajax called, new recommendations submitted successfully');
            });
        });
    });




})
