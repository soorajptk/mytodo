function shw() {
  let body = document.getElementById("login-body");
  body.style.display="flex";

}

let btn=document.getElementById("bttn");
btn.addEventListener("click",check);

function check(e){
  e.preventDefault();
let username=document.getElementById("username").value;
let passwrd=document.getElementById("password").value;
console.log(username+passwrd)

  if(username==""||passwrd==""){

    dis("please fill all required fields  &#128544;")
  }else if(username==="Admin"&&passwrd==="12345"){
         location.replace("./home/home.html")
    }else{
          dis("Incorrect Details &#128549;");

    }

  }







function dis(msg) {
  var modal = document.getElementById("myModal");
     let para=document.getElementById("para");  
     para.innerHTML=msg
    modal.style.display = "block";
  }
  
  var span = document.getElementById("span1");
  
  span.onclick = function() {
  var modal = document.getElementById("myModal");
 
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
  var modal = document.getElementById("myModal");
    
     if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
 