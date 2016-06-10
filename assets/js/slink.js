// $(document).ready(function() {
//
//
//             $(function() {
//
//                     $('.user-form).on('submit', function (e) {
//                         e.preventDefault();
//                         bookMarkk();
//                     )};
//
//
//                 // var ghLogin = $('input[name="slink-login"]').val();
//
//
//                 function bookMarkk() {
//                     $.ajax({
//                             url: "/Users/davidgrayboff/Documents/dev_projects/TIY/KDR-Slink copy/APIS/Slink/users/user-1/test.json",
//                             type: 'GET',
//                             dataType: 'text',
//                             success: successFunction,
//                             error: errorFunction,
//
//                             complete: $('.alert').append('.info');
//                         }
//                     });
//             }
//
//           });

// ajaxComplete //

$(function() {
  "use strict";

 function jSONson() {
  $.ajax({
    url: "http://localhost:3000/0",
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
  console.log("Something works");


}


$('.user-form').on('submit', function(e) {
  e.preventDefault();
  jSONson();
})
})
