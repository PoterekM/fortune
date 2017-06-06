$(document).ready(function() {
  $("form#fortune").submit(function(event) {
    event.preventDefault();

    var userResponseB = [];
    $("input:checkbox[name=bad-luck]:checked").each(function(){
      var badLuck = $(this).val();
      userResponseB.push(badLuck);
      console.log(userResponseB);
    });
    var userResponseG = [];
    $("input:checkbox[name=good-luck]:checked").each(function(){
      var goodLuck = $(this).val();
      userResponseG.push(goodLuck);
      console.log(userResponseG);
    });
    if (userResponseB.length >= userResponseG.length) {
      $("#sucky").show();
      $("#fortune").hide();
    } else {
      $("#lucky").show();
      $("#fortune").hide();
    }
});
});
