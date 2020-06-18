$(document).ready(function(){
    $("input#username").focusout(function(){
        var username = $("input#username").val().length;
        if( username < 8 || username > 15){
            $("span#usernameError").html("Username should be 8 to 15 characters long");
            $("span#usernameError").css({"color":"red"});
            $("span#usernameError").show();
        }
        else{
            $("span#usernameError").hide();
        }
    })

    $("input#password").focusout(function(){
        var password = $("input#password").val().length;
        if(password < 9){
            $("span#passwordError").html("Password should be atleast 9 characters");
            $("span#passwordError").addClass("aclass");
            $("span#passwordError").show()
        }
        else{
            $("span#passwordError").hide();
        }
    })


    $("input#retypepass").focusout(function(){
        var password = $("input#password").val();
        var retypepass = $("input#retypepass").val();

        if(password !== retypepass){
            $("span#retypeError").html("Password Mismatch");
            $("span#retypeError").addClass("aclass");
            $("span#retypeError").show();
        }
        else{
            $("span#retypeError").hide();
        }

    $("input#email").focusout(function(){
        var email = $("input#email").val();
        var emailPat = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if(emailPat.test(email)){
            $("span#emailError").hide();
        }
        else{
            $("span#emailError").html("Invalid Email Address");
            $("span#emailError").show();
        }
    })
            
        

    })
})