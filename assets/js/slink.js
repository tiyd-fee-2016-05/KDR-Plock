
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



    ///// AJAX "GET" AND "POST" RECOMMENDATIONS  ///////
    //  Just took David's example and applied it to get and post recommendations  //

    $(function(){
    "use strict";

    var username = $('input[name="slink-login"]').val();


  function jSONson() {
      $.ajax({
          url: "https://slink.herokuapp.com/link/recommend",
          dataType: "JSON",
          method: 'GET',
          beforeSend: function(xhr) {

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
              var byRecommend= (data[i].created_by);
              var atRecommend = (data[i].created_at);
          };
          $('.recommendTitle').append("Title: " + titleRecommend);
          $('.recommendDesc').append("Description: " + desRecommend);
          $('.recommendURL').append("URL: " + Url);
          $('.recommendBy').append("Created by: " + byRecommend);
          $('.recommendAt').append("Created at: " + atRecommend);
      });

      console.log("Ajax call!");
  }
////     GET RECOMMENDATIONS IS WORKING ACCORDING TO CONSOLE IN THE INSPECTOR  //

  $('.info').on('click', function(e) {
      e.preventDefault();
      jSONson();
      var getRecommendations = event.target.id;
      $.get(getRecommendations, function(data){
        $(".info").html(data);
      });
    });

      console.log("success");
  })
/////////////////////////////////////////////////////////////////////////





function jSONson() {
    $.ajax({
        url: "https://slink.herokuapp.com/link/recommendp",
        dataType: "JSON",
        method: 'POST',
        beforeSend: function(xhr) {

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
            var byRecommend= (data[i].created_by);
            var atRecommend = (data[i].created_at);
        };
        $('.recommendTitle').append("Title: " + titleRecommend);
        $('.recommendDesc').append("Description: " + desRecommend);
        $('.recommendURL').append("URL: " + Url);
        $('.recommendBy').append("Created by: " + byRecommend);
        $('.recommendAt').append("Created at: " + atRecommend);
    });

    console.log("Ajax call!");
}


/////////////////////   POST RECOMMENDATION IS WORKING ACCORDING TO THE CONSOLE ////////
    $('#user-form').on("click", function(e) {
        e.preventDefault();
        var details = $("#user-form").serialize();
        $.post("text", details, function(data){
          $("#user-form").html(data);
        });
        console.log("it works");
    });
