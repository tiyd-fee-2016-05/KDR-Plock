
//////////////////////////////////////////////////////////////////////////////
//                   NESTED ACCORDION        ///////////////////////////////////
// $(".Bookmark-choices").click(function(){
//     $(this).next().toggle();
//     $("i", this).toggleClass("hide-right-arrow");
//     $("i", this).last().toggleClass("show-down-arrow");
//   });
//
//   $(".Section-A").click(function(){
//       $(this).next().toggle();
//       $("i", this).toggleClass("hide-right-arrow");
//       $("i", this).last().toggleClass("show-down-arrow");
//   });
//
// ////////////////////////////////////////////////////////////////////////////////
//
//
// //////////       MODAL       (Rhonda before collaborating with group)         ////////////////////////////////////////////////
//     $('h1').on("click", function () {//when you click on the btn the modal pops up//
//         $(this).text("recommendations");//when you click on the btn the text changes//
//
//     $('.modal-container').addClass('showing');
//
//     console.log("yes");
// });
//     $('#modal-close').on('click', function () {
//       //when you click on the recommendations the modal container disappears//
//       $('.modal-container').removeClass('showing');
//     console.log("no");
// //     $('.modal').click(function (e) // stops the modal container from appearing after it's closed//
// //       e.stopPropagation();
// // });
// });
//
// //////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//
// //////////////////////////////////////////////////////////////////////////////////////////
//
//
// //////////       MODAL      (After we collaborated an used it in our project) //////////////////
//     $('.secondary-btn').on("click", function() { //when you click on the btn the modal pops up//
//
//
//         $('.modal-container').addClass('showing');
//
//         console.log("yes");
//     });
//     $('#modal-close').on('click', function() {
//
//         $('.modal-container').removeClass('showing');
//         console.log("no");
//         //     $('.modal').click(function (e) // stops the modal container from appearing after it's closed//
//         //       e.stopPropagation();
//         // });
//     });

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


          //////////////  AJAX "GET" AND "POST" BOOKMARK RECOMMENDATIONS  ///////
          //        *********************************************     //
          /////////////////////////////////////////////////////////////

/////// GET RECOMMENDATIONS      //////////////////////////////////////////////////////////
//  David's template.  I added "recommend" to the link and renamed the variables and classes //
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

          for (var i = 0; i < data.length; i++) {
              var titleRecommend = (data[i].title);
              var descRecommend = (data[i].description);
              var urlRecommend = (data[i].URL);
              var byRecommend= (data[i].created_by);
              var atRecommend = (data[i].created_at);
          };
          $('.infoTitle').append("Title: " + titleRecommend);
          $('.infoDesc').append("Description: " + desRecommend);
          $('.infoURL').append("URL: " + Url);
          $('.infoBy').append("Created by: " + byRecommend);
          $('.infoAt').append("Created at: " + atRecommend);
      });

      console.log("Ajax call!");
  }

////     GET RECOMMENDATIONS IS WORKING ACCORDING TO CONSOLE IN THE INSPECTOR  //
///                 Rhonda's function call to "get" recommendations            //
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
///////END GET RECOMMENDATIONS  ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////  POST RECOMMENDATIONS ////////////////////////////////////
/////          Repeat:  David's structure and my ammendments to the function   //
function jSONson() {
    $.ajax({
        url: "https://slink.herokuapp.com/link/recommend",
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
//        Rhonda's post function call                                    //
    $('#user-form').on("click", function(e) {
        e.preventDefault();
        var details = $("#user-form").serialize();
        $.post(".text", details, function(data){
          $("#user-form").html(data);
        });
        console.log("it works");
    });
///// END  POST RECOMMENDATIONS ///////////////////////////////////////////////////////
