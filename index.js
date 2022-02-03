window.onload = function () {
  // setup nav
  $(".navbar-toggle").click(function(){
    if ($(".navbar-collapse").hasClass("collapse")) {
      $(".navbar-collapse").removeClass("collapse");
    } else {
      $(".navbar-collapse").addClass("collapse");
    }
  })

  function hideAll() {
    if (!$(".navbar-collapse").hasClass("collapse")) {
      $(".navbar-collapse").addClass("collapse");
    }
    window.scrollTo(0, 0);
    $("#info").hide();
    $("#bio").hide();
    $("#publication").hide();
    $("#project").hide();
    $("#research").hide();
  }

  hideAll();
  $("#info").show();
  $("#bio").show();

  $("#home-button").click(function(){
    hideAll();
    $("#info").show();
    $("#bio").show();
  })

  $("#publication-button").click(function(){
    hideAll();
    $("#publication").show();
  })

  $("#project-button").click(function(){
    hideAll();
    $("#project").show();
  })

  $("#research-button").click(function(){
    hideAll();
    $("#research").show();
  })

};
