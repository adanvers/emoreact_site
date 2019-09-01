(function() {
    "use strict";
    var uClick;


    // window.onload loads all of the initial information that should appear on page load.
    // this function holds onclick functions that await any user events.
    window.onload = function() {

        console.log("Hi there");
        //setTimeout(goToHome, 3000);
        var loginButton = document.getElementById("loginButton");
        loginButton.onclick = login;
    }

   function goToHome(){
     var homepage = document.getElementById('homepage');
     homepage.style.visibility = "visible";
     var login = document.getElementById('login');
     login.parentNode.removeChild(login);
     var centerlogin = document.getElementById("centerlogin");
     centerlogin.parentNode.removeChild(centerlogin);
     //document.body.style.backgroundImage = "url('combo_2.png')";
     document.body.style.backgroundImage = "url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg')"

   }

   function login(){
     var username = document.getElementById("username");
     var password = document.getElementById("password");

     console.log(username.value);
     console.log(password.value);
     goToHome(); 
   }

})();
