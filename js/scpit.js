
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
   if(Hide==true && window.innerWidth>800){
    $(".logo").css("width","50px");
    $(".Menu").css("width","50px");
    $(this).css("margin-left","60px");
    $("#Page > .Menu > ul > li > a").css("margin-left","58px");
    $(".HoverLeft").css("display","none");
    $(".Dashboard").css("margin-left","50px");
    console.log("asd");
    Hide=false;
   }
   else{
    $(".logo").css("width","250px");
    $(this).css("margin-left","265px");
    $(".Menu").css("width","250px");
    $("#Page > .Menu > ul > li > a").css("margin-left","12px");
    $(".HoverLeft").css("display","block");
    $(".Dashboard").css("margin-left","250px");
    Hide=true;
   }
  
})

$(document).ready(function(){
  $(window).resize(function(){
    
    
    if(window.innerWidth<800)
    $(".Menu").css("width","0px");
    { 
        $(".logo").css("width","100%");       
        $(".Drop").css("margin-left","-167px"); 
        $(".Drop").parent().last().children().last().css("margin-left","-233px");
 
        
    }
    if(window.innerWidth>800){
      $("#Page").css("margin-top","0px");
     if(Hide==false){
      $(".Menu").css("width","50px");
        $(".logo").css("width","50px");
     }
     else{
        $(".logo").css("width","250px");
        $(".Menu").css("width","250px");
     }
    }
    })
})
var OLcu = 0;

var DropClick = true;

$(".Click").click(function(){
  OLcu = $(this).children().last().children().length;
      FirstClick = this;

  for (var i = 0; i <  $(".Click").length; i++) {
    var s= $(".Click")[i];
    $(s).children().last().css("height","0px")
  }

      if(DropClick==true){
        $($(this).children().last()).css("height",34*OLcu+"px"); 
        $($(this).find(".HoverLeft")).css("transform",'rotate(' + -92 + 'deg)'); 
        DropClick =false;
      }
      else{
        $($(this).children().last()).css("height","0px");
        $($(this).find(".HoverLeft")).css("transform",'rotate(' + 0 + 'deg)'); 
        DropClick = true;
      }
});

// var Acardion

// var count = 0;

// $(".Click").click(function(){
//   OLcu = $(this).children().last().children().length;
//   count++;
//       if(count==1){
//         $(this).children().last().css("height",34*OLcu+"px"); 
//         $($(this).find(".HoverLeft")).css("transform",'rotate(' + -92 + 'deg)'); 
//         console.log("asdasd");
//       }
//       if(Acardion==this && count > 1){
//         $($(this).children().last()).css("height",34*OLcu+"px"); 
//         $($(this).find(".HoverLeft")).css("transform",'rotate(' + -92 + 'deg)'); 
//       }
//       else{
//         $($(this).children().last()).css("height","0px");
//         $($(this).find(".HoverLeft")).css("transform",'rotate(' + 0 + 'deg)'); 
//       }
//       Acardion=this;
// });
