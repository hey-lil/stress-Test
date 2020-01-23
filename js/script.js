$(document).ready(function() {
  $("form#stress").submit(function(event) {
    event.preventDefault();
 

    $("#veryStressed0").show();
    $("input:checkbox[name=signs]:checked").each(function() {
      var checkedSigns = $(this).val();
      $("#veryStressed0").append(checkedSigns + "<br>");
    });
    $("veryStressed1").show();
    $("input:checkbox[name=symptoms]:checked").each(function() {
      var checkedSymptoms = $(this).val();
      $("#veryStressed1").append(checkedSymptoms + "<br>");
    });
  
  
  
  });
});