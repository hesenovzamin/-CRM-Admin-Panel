
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
    console.log("asd");
    Hide=false;
   }
   else{
    $(".logo").css("width","250px");
    $(this).css("margin-left","265px");
    $(".Menu").css("width","250px");
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