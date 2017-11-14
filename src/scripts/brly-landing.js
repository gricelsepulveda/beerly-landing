$(document).ready(function(){
   // TRIGGER TOOL MENU
   $("span.fa.fa-bars").click(function(){
    if($(".brly-main-menu").hasClass("display"))
        {
          $(".brly-main-menu").removeClass("display");
        }
    else{
          $(".brly-main-menu").addClass("display");
        }
  });
  // TRIGGER TOOL MENU
  $("span.fa.fa-sort-down").click(function(){
    if($("ul.brly-logged-options").hasClass("display"))
        {
          $("ul.brly-logged-options").removeClass("display");
        }
    else{
          $("ul.brly-logged-options").addClass("display");
        }
  });
  //CLOSE POP
  $("button.brly-register-close").click(function(){
    $(this).closest(".brly-pop-wrapper").addClass("display-none");
    $(".brly-bg-pop").addClass("display-none");
  });
  //CLOSE ALL POPS AND BACKGROUND POP
  function closeAllPop(){
    $(".brly-pop-wrapper").addClass("display-none");
    $(".brly-bg-pop").addClass("display-none");
  }
  //CLOSE ALL POPS WITHOUT BACKGROUND POP
  function closePop(){
    $(".brly-pop-wrapper").addClass("display-none");
  }
  //CLOSE ONLY BACKGROUND POP
  function closeBgPop(){
    $(".brly-bg-pop").addClass("display-none");
  }
});