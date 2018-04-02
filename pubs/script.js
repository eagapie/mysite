$(document).ready(function(){
	$("#hiddenNews").hide();
	$("#travel").hide();
    $("#moreNews").click(function () {
      $("#moreNews").hide();
	  $("#hiddenNews").show();
    });
    $("#showr").click(function () {
      $("span").show(2000);
    });
});

