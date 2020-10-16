function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "" || x == null) {
      alert("Name must be filled out");
      return false;}
    var x = document.forms["myForm"]["address"].value;
    if (x == "" || x == null) {
      alert("Address must be filled out");
      return false;}
    var x = document.forms["myForm"]["age"].value;
    if (x == "" || x == null) {
      alert("Age must be filled out");
      return false;} var x = document.forms["myForm"]["type"].value;
      if (x == "" || x == null) {
          alert("Type must be filled out");
          return false;}
    
    
    }
  
  
  function reset() {
        document.getElementById("myForm").reset();
      }


      
      function myFunction() {
        var txt;
        if (confirm("Press a button!")) {
          txt = "You pressed OK!";
        } else {
          txt = "You pressed Cancel!";
        }
        document.getElementById("demo").innerHTML = txt;
      }
      
      