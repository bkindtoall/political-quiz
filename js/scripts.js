$(document).ready(function() {
  $("#blanks form").submit(function() {
    event.preventDefault();
    var name = $("input#name").val();
    var q1 = $("#q1").val();
    var q2 = $("#q2").val();
    if (name) {
      $(".name").text(name);
      $(".story").show();
      if (q1==0 && q2==0) {
        $(".politic").text('Conservative');
      } else if (q1==1 && q2==1){
        $(".politic").text('Liberal');
      } else {
        $(".politic").text('Moderate');
      }
    } else {
      alert("Please enter a name")
    }
  });
});
