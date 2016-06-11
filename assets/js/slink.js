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
