$(document).ready(function() {
   var boxes = $(' input[type=checkbox]').on('change', function() {
    var flag = boxes.filter(':checked').length > 0;

    $('#next-container').toggle(flag);
  });
}); 
