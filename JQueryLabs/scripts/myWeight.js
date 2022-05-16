$(function() {
    $('#weight_form').submit(function(e) {
        
      var $form = $(this);
      //alert($form.serialize());
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        dataType: "json",
        success: function(data) {
            alert($.parseJSON(data));
        },
        error: function(){
            alert("Абоба");
        }
      })
      e.preventDefault();
    });
  });