var logButton=document.getElementById("login");
var logButton2=document.getElementById("login2")
var regButton=document.getElementById("register");
var content=document.getElementById("input");
var content2=document.getElementById("input2nd");
var done=document.getElementById("submit");
var fullBox=document.getElementById("box")
var fullBody=document.getElementById("body")
function register(){
    content.className="inputnone";
    logButton.className="login2";
    regButton.className="register2";
    content2.className="inputblock";
    done.className="submit2";
    fullBox.style.boxShadow="1px 2px 50px orange"
    fullBody.style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(bgi2.jpg)"
    logButton2.style.color="white";
}
function login(){
    content.className="input";
    logButton.className="login";
    regButton.className="register";
    content2.className="input2nd";
    done.className="submit";
    fullBox.style.boxShadow="0px 0px 0px orange"
    fullBody.style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(bgi.jpg)"
}