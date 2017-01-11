$(function(){
  $('li').on("click", function() {
    alert($(this).attr("class"));
  });
});

// $(function(){
//   $('li').on("click", function() {
//     $(this).hide();
//   });
// });

// $(function(){
//   $('li').on("click", function() {
//     var $element = $(this);
//     $element.hide("slow", "swing", function(){
//       setTimeout(function(){
//         $element.show();
//       }, 1000);
//     });
//   });
// });

// $(function(){
//   $('li').on("click", function() {
//     var $element = $(this);
//     $element.fadeOut("slow", function(){
//       setTimeout(function(){
//         $element.fadeIn("slow");
//       }, 1000);
//     });
//   });
// });

// $(function(){
//   $('li').on("click", function() {
//     $(this).remove();
//   });
// });

// $(function(){
//   $('li').on("click", function() {
//     $('.grid').append(this);
//   });
// });

// $(function(){
//   $('li').on("click", function() {
//     $('.grid').append($(this).clone());
//   });
// });

// $(function(){
//   $('li').on("click", function() {
//     $('.grid').prepend($(this).clone());
//   });
// });

// $(function(){
//   $('li').on("click", function() {
//     $(this).parent().append($(this).clone());
//   });
// });

// $(function(){
//   $('li').on("click", function() {
//     var $lis = $(this).parent().children();
//     for (var i = 0, li; li = $lis[i++];) {
//       $(li).fadeOut(300 * i+1);
//     }
//   });
// });

// $(function(){
//   $('li').on("click", function() {
//     var $lis = $(this).siblings();
//     for (var i = 0, li; li = $lis[i++];) {
//       $(li).fadeOut(300 * i+1);
//     }
//   });
// });

// $(function(){
//   $('li').on("click", function() {
//     $(this).next().fadeOut(300);
//   });
// });

// $(function(){
//   $('li').on("click", function(){
//     $(this).closest('ul').css("width", "100px");
//   })
// });

// $(function(){
//   var $lis = $('li');
//   $.each($lis, function(index, element){
//     $(element).slideUp(1000 * index+1);
//   });
// });

// $(function(){
//   $('ul').on("click", "li", function(){
//     $(this).parent().append($(this).clone());
//   })
// });
