function validateLoginForm(){
    var nameFlag =0;
    var emailFlag = 0;
    var phFlag = 0;
    var email = document.getElementById("email").value.toLowerCase();//converts all the user inputs from uppercase to lowercase
    console.log(email);
    var ph = document.getElementById("ph").value;
    var user = document.getElementById("uname").value.trim();//-->get user name by removing the spaces in the starting and in the end of the input 
    console.log("The user name is",user);
    var show = ("Hi {{name}} welcome to our website")
    if(user)
    {
    console.log(show.replace("{{name}}",user));//This is used to replace a string with another string.
    var divide = user.split(" ");//-->split() used to divide the string based upon the entity given insite the split() function
    console.log("The user name is divided based on space",divide)
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phformat = /^\d{10}$/; 
    if(email)
    {
    if(mailformat.test(email)==true){
      document.getElementById("email").style="border:3px solid green;";
    document.getElementById("mailerror").style="display:none;"
    document.getElementById("mailvalid").style="display:none;"
    document.getElementById("lgo").style="display: inline-block;"
         emailFlag = 1;
    }
    else {
    document.getElementById("email").style="border:3px solid red"
    document.getElementById("mailvalid").style="display:block;color:red"
    document.getElementById("mailerror").style="display:none"
    document.getElementById("lgo").style="display: none;"
         console.log("faiure email is required");
    }
  }
    else {
      document.getElementById("email").style="border:3px solid red";
    document.getElementById("mailerror").style="display:block;color:red"
    document.getElementById("mailvalid").style="display:none"
    document.getElementById("lgo").style="display: none;"
    }
 if(ph){
 if(phformat.test(ph)==true)
 {
  document.getElementById("ph").style="border:3px solid green;"
  document.getElementById("pherror").style="display:none;"
  document.getElementById("phvalid").style="display:none;"
  document.getElementById("lgo2").style="display: inline-block;"
      phFlag = 1;
 }
else{
document.getElementById("ph").style="border:3px solid red;"
document.getElementById("phvalid").style="display:block;color:red"
document.getElementById("pherror").style="display:none;"
document.getElementById("lgo2").style="display: none;"
}
}
else{
document.getElementById("ph").style="border:3px solid red;"
document.getElementById("pherror").style="display:block;color:red"
document.getElementById("phvalid").style="display:none;"
document.getElementById("lgo2").style="display: none;"
}
if(user)
{
if(user.length>=3)
{
    localStorage.setItem('Uname',user)
  document.getElementById("uname").style="border:3px solid green;"
  document.getElementById("uerror").style="display:none;"
  document.getElementById("uvalid").style="display:none;"
  document.getElementById("lgo3").style="display: inline-block;"
     nameFlag =1;
}
else{
  document.getElementById("uname").style="border:3px solid red;"
  document.getElementById("uvalid").style="display:block; color:red"
  document.getElementById("uerror").style="display:none;"
  document.getElementById("lgo3").style="display: none;"
}
}
else{
document.getElementById("uname").style="border:3px solid red;"
document.getElementById("uerror").style="display:block; color:red"
document.getElementById("uvalid").style="display:none;"
document.getElementById("lgo3").style="display: none;"
}
const redirectvalue = document.getElementById('redirect');
redirectvalue.addEventListener('click', function () {
                      if(nameFlag==1 && emailFlag==1 && phFlag == 1) {            
                window.location.href = "./assests/ToDo.html"; 
            }        
        });
}
