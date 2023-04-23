// function register(event){
//     event.preventDefault();
//     // alert("working")
//     var user_name=document.getElementById("name").Value;
//     var user_email=document.getElementById("email").Value;
//     var user_password=document.getElementById("password").Value;
//     var user_confirmpassword=document.getElementById("confirmpassword").Value;
//     console.log(user_email)

//     if(user_name && user_email && user_password && user_confirmpassword){
//         if(user_password.length>=8 && user_confirmpassword.length<=8){
//             if(user_password==user_confirmpassword){
                 
//                 var Ls=JSON.parse(localStorage.getItem("flipcartusers"))
//                 var flag=false;
//                 for(var i=0;i<Ls.length;i++){
//                     if(Ls[i].uemail==email){
//                         flag=true;
//                     }
//                 }
//                 if(flag==false){
//                     var flipcart={uname:name,uemail:email,upassword:password,uconfirmpassword:confirmpassword}
//                     Ls.push(flipcart);
//                     localStorage.setItem("flipcartusers",JSON.stringify(Ls));
//                     alert("Sign up Successfully");
//                     document.getElementById("name").Value=''
//                     document.getElementById("email").Value=''
//                     document.getElementById("password").Value=''
//                     document.getElementById("confirmpassword").Value=''
//                     window.location.href="./login.html"

//                 }
//                 else{
//                     alert("Email already exist")
//                 }

//             }
//             else{
//                 console.log("password not matched")
//             }

//         }
//         else{
//             console("password should be more than 8 disgits")
//         }
    
// }
// else{
//     console.log("all fields are required")
// }
// }

function register(event){
    event.preventDefault();
    var rname=document.getElementById("name").value;
    var remail=document.getElementById("email").value;
    var rpass=document.getElementById("password").value;
    var rconfirmpass=document.getElementById("confirmpassword").value;

    // console.log(rname)
    if(rname && remail && rpass && rconfirmpass){
        if(rpass.length>=8 && rconfirmpass.length<=8){
            if(rpass==rconfirmpass){
                 
                var Ls=JSON.parse(localStorage.getItem("flipcartusers")) || []
                var flag=false;
                for(var i=0;i<Ls.length;i++){
                    if(Ls[i].uemail==remail){
                        flag=true;
                    }
                }
                if(flag==false){
                    var flipcart={uname:rname,uemail:remail,upassword:rpass,uconfirmpassword:rconfirmpass}
                    Ls.push(flipcart);
                    localStorage.setItem("flipcartusers",JSON.stringify(Ls));
                    alert("Sign up Successfully");
                    document.getElementById("name").Value=''
                    document.getElementById("email").Value=''
                    document.getElementById("password").Value=''
                    document.getElementById("confirmpassword").Value=''
                    window.location.href="./login.html"

                }
                else{
                    alert("Email already exist")
                }

            }
            else{
                console.log("password not matched")
            }

        }
        else{
            console("password should be more than 8 disgits")
        }
    
}
else{
    console.log("all fields are required")
}
    
}

  function login(event){
    event.preventDefault();

    var lemail=document.getElementById("email").value;
    var lpassword=document.getElementById("password").value;
    // console.log(lemail)

    var loginflipcart;

   if(lemail && lpassword){
    var login=JSON.parse(localStorage.getItem("flipcartusers"))
    var flag=false;
    for(var i=0;i<login.length;i++){
        if(login[i].uemail==lemail){
            flag=true;
            loginflipcart=login[i]
        }
    }
    if(flag==false){
        alert("credentals not matched")
    }
    else{
        localStorage.setItem("loginflipcart",JSON.stringify(loginflipcart))
        alert("log in successfully")
        window.location.href="./tanishqhome.html"
    }
   }
   else{
    alert("both fields are required")
   }
  }