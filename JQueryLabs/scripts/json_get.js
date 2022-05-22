$(function() {
    $('#json_form').submit(function(e) {
        
      var $form = $(this);
      //alert($form.serialize());
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        dataType: "json",
        success: function(data) {
            alert(`${data.name} \n ${data.weight} \n ${data.cost} \n ${data.img}`);
        },
        error: function(){
            alert(JSON.parse("Абоба"));
        }
      })
      e.preventDefault();
    });
  });