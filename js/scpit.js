// $(".icon2").click(function(){
//     $(".icon2").css("background","black")
//     console.log("aaaaa");
// })

// $("i").click(function(){
//     $("i").css("color","black");
// });

var nav = true;
$(document).ready(function(){
    $('.Icon2').click(function(){
      
      if(nav == true){
        $('.Icon2').css("color","white");
        $(this).css("color","black"); 
        nav = false;
      }
      else{
        $(this).css("color","white");
        nav = true;
      }
    });
});

var Hide = true;
$(".Left").click(function(){
   if(Hide==true){
    $(".logo").css("width","50px");
    $(this).css("margin-left","60px");
    console.log("asd");
    Hide=false;
   }
   else{
    $(".logo").css("width","250px");
    $(this).css("margin-left","265px");
    Hide=true;
   }
  
})

// $('.Navbar').click(function(){
//     if(nav ==false)
//     {
//       $('i').css("color","white");
//       console.log("");
//       nav = true;
//     }
//   });


// $(function(){
//     $("i").click(function(){
//         $(this).css("color","black");
//     },function(){

//     });

// });
// var sayi = 25;
// $(window).resize(function(){
//     if(window.innerWidth<768)
//     {
       
        
//     }
//     else{
     
//     }
//     console.log(window.innerWidth)
//     })