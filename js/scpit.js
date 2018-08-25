// $(".icon2").click(function(){
//     $(".icon2").css("background","black")
//     console.log("aaaaa");
// })

// $("i").click(function(){
//     $("i").css("color","black");
// });


var nav = true;
$(document).ready(function(){
    $(".Navbar > ul > li > .Icon22").click(function(){      
      if(nav == true){
        $('.Icon2').css("color","white");
        $($(".Navbar > ul > li > .Drop")).css("height","0px");
        $(this).css("color","black"); 
        $($(this).parent().children().last()).css("height","200px");
        console.log($($(this).parent().children().last()));
        nav = false;
      }
      else{
        $(this).css("color","white");
        $($(this).parent().children().last()).css("height","0px");
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
$(window).resize(function(){
    if(window.innerWidth<800)
    {
        $(".logo").css("width","100%");
        
    }
    if(window.innerWidth>800){
     if(Hide==false){
        $(".logo").css("width","50px");
     }
     else{
        $(".logo").css("width","250px");
     }
    }
    // console.log(window.innerWidth)
    })

