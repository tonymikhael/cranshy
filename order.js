// function check(e)
// { 
//     var passwordcheck=false;
//     var x=document.getElementById("password").value;
//     var y=x.split("");
//     // check the first upper case
//     if(y[0]!=y[0].toUpperCase())
//     {
//         alert("Must first character in password be capital");
//         // check the length of password
//     }if(y.length!=8)
//     {
//         alert("the password length must be 8 charcters only no more no less");
//     }
//     // check the digits
//     for(var i=0;i<y.length;i++)
//     {
//         if(y[i]==isNaN(y[i])){
//             alert("password must include one digit at least");
//             e.preventDefault();
//             break;
//         }
        
//     }
//     // check white space
//     for(var i=0;i<y.length;i++)
//     {
//         if(y[i]==" "){
//             alert("no white space allowed");
//             e.preventDefault();
//             break;
//         }
//         else{
//             continue;
//         }
//     }
    
// }






function check(){
    var password=document.getElementById("password").value;
    var phone=document.getElementById("phone").value;

if(phone == ""){
   alert("fill the phone");  
return false;
}



if (!phone.match(/^[0-1]{2}[0-9]{9}$/)){
   alert("only 11 number 01xxxxxxxxx");
//    document.getElementById("message00").innerHTML = "**telephone must be 11 number only!";
       return false;
   }
if(password == ""){
//    document.getElementById("message1").innerHTML = "**Fill the password";
alert("fill the password");  

return false;
}
if(password.charAt(0) !=password.charAt(0).toUpperCase()){
alert(" password not start with uppercase letter");
return false;
}

if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/)){
  alert("password must include 8 characters only, one special character at least, include one digit and no space ") ;
  return false;
}


}
