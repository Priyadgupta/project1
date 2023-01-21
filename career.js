
   //file api
     var onFilePicked = function(event) {
      var input = event.target;
  
      var file = input.files[0];
      console.log(file.name);
    };
    
// code for date

$( function() {
    $( "#datepicker" ).datepicker({
      showButtonPanel: true
    });
  } );