
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

    if(window.innerWidth<860){
      if(Hide==true ){
        $(".Menu").css("width","250px");
        $(".logo").css("width","100%");
        $("#Page > .Menu > ul > li > a").css("margin-left","58px");
        $(".HoverLeft").css("display","block");
        $("#Page .FullPage").css("margin-left","245px");
        console.log("asd");
        Hide=false;
       }
       else{
        $(".logo").css("width","100%");
        $(".Menu").css("width","0px");
        $("#Page > .Menu > ul > li > a").css("margin-left","12px");
        $(".HoverLeft").css("display","block");
        $("#Page .FullPage").css("margin-left","0px");
        Hide=true;
       }
    }
    if(window.innerWidth>860){
      if(Hide==true){
        $(".logo").css("width","50px");
        $(".Menu").css("width","50px");
        $(this).css("margin-left","60px");
        $("#Page > .Menu > ul > li > a").css("margin-left","58px");
        $(".HoverLeft").css("display","none");
        $(".Dashboard").css("margin-left","50px");
        $("#Page .PanelPage").css("margin-left","33px");
        $("#Page .PanelPage").css("width","97.2%");
        console.log("Sef sef sef sef sef ");
        Hide=false;
       }
       else{
        $(".logo").css("width","250px");
        $(this).css("margin-left","265px");
        $(".Menu").css("width","250px");
        $("#Page > .Menu > ul > li > a").css("margin-left","12px");
        $(".HoverLeft").css("display","block");
        $(".Dashboard").css("margin-left","250px");
        $("#Page .PanelPage").css("margin-left","250px");
        $("#Page .PanelPage").css("width","84.2%");
        Hide=true;
       }
    }
  
  //  else if(Hide==true && window.innerWidth>860){
  //   $(".logo").css("width","50px");
  //   $(".Menu").css("width","50px");
  //   $(this).css("margin-left","60px");
  //   $("#Page > .Menu > ul > li > a").css("margin-left","58px");
  //   $(".HoverLeft").css("display","none");
  //   $(".Dashboard").css("margin-left","50px");
  //   console.log("asd");
  //   Hide=false;
  //  }
 
})


$(document).ready(function(){
  $(window).resize(function(){
    
    
    if(window.innerWidth<860)
    { 
     if(Hide==true){
      $(".logo").css("width","100%");
      $(".Menu").css("width","0px");
      $(".Drop").css("margin-left","-167px"); 
      $(".Drop").parent().last().children().last().css("margin-left","-233px");
     }
 
        
    }
    if(window.innerWidth>860){
      $("#Page").css("margin-top","0px");
      $(".logo").css("width","250px");   
      $(".Menu").css("width","250px");
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


// 0
var a;
// $(document).ready(function(){ 
//   $( "#PanelHeader" ).draggable ();
//   console.log(asd);
// })

$(".FullScr").click(function(){
   a = $(this).parent().parent().parent().parent();
   console.log(a.length);
  var element =   $(this).parent().parent().parent().parent();
  $(this).parent().parent().parent().parent().hide();
  element.css("position","fixed");
  element.css(" z-index ","1000000000");
 
  element.css("width",window.innerWidth+"px");
  element.css("margin","0px");

  console.log("asdasd");
  
});
