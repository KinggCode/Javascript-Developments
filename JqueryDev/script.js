// $(function(){
//     $("input#append").click(function(){
//         $("h1").append("Last");
//     })

//     $("input#prepend").click(function(){
//         $("h1").prepend("Beginning");
//     })
// })


// $(function(){
//     $("input#add").click(function(){
//         $("h1").addClass("aclass");
//     })

//     $("input#remove").click(function(){
//         $("h1").removeClass("aclass");
//     })

//     $("input#toggle").click(function(){
//         $("h1").toggleClass("aclass");
//     })
// })

// $(function(){
//     $("input#send").click(function(){
//         $("form").submit(function(){
//             alert("Hellow");
            
//         })
//     });
// })


$(function(){
    $("input#username").focusout(function(){
        var username = $("input#username").val().length;
        console.log(username);
        if(username < 8 || username > 15){
            $("span#usernameError").html("Username should  be 8 to 15 characters");
            $("span#usernameError").css({"color":"red"});
            $("span#usernameError").show();

        }
        else{
            $("span#usernameError").hide();
        }
    })


    $regExpress = ["&","@","*","#"];
    for(i=0; i in $regExpress; i++){
        console.log(i);
    }
    console.log($regExpress);
    $("input#password").focusout(function(){
        var password = $("input#password").val().length;
        if(password < 9){
            $("span#passwordError").html("Password Should be at these line characters");
        } 
    })
})