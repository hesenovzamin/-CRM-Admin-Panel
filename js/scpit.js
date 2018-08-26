
var nav = true;
$(document).ready(function(){
  $(".Menu").css("height",MenuWidth+"px")
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

var MenuWidth = window.innerHeight;

var Hide = true;
$(".Left").click(function(){
   if(Hide==true && window.innerWidth>800){
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

 var DropArray=  $(".Drop");

var Hide = true;
$(document).ready(function(){
  $(window).resize(function(){
    MenuWidth = window.innerHeight;
    $(".Menu").css("height",MenuWidth+"px")
    if(window.innerWidth<800)
    {
        $(".logo").css("width","100%");
        $(".Drop").css("margin-left","-167px"); 
        $(".Drop").parent().last().children().last().css("margin-left","-233px");
 
        
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

})

// margin-left: -167px;

// font-size: 0.7em;
// margin-top: -27px;
// margin-left: 38px;