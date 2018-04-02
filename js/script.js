$(document).ready(function(){
	$("#hiddenNews").hide();
	
	
	//show and hide news
    $(".moreNews").click(function (e) {
      $(".moreNews").hide();
	  $("#hiddenNews").show();
	   e.preventDefault();

    });
    $("#showr").click(function () {
      $("span").show(2000);
    });
	
	
});

