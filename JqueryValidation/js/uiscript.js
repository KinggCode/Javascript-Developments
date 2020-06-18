
// Draggable Ui Code 
    // $(document).ready(function(){
    //     $("div#draggable").css({"background-color":"green","width":"200px","height":"300px"});
    //     $("div#draggable").draggable();
            
    //     })

// Autocomplete 
// $(function(){
//     var availableTags = [
//         "Toyota",
//         "Hyundai",
//         "Kia",
//         "Honda",
//         "Ferari",
//         "Suzuki"
//     ];
//     $("input#cars").autocomplete({
//         source:availableTags
//     });
// })
        

// Accordion
// $(function(){
//     $("div#accordion").accordion();
// })


// Datepicker
// $(function(){
//     $("input#datepicker").datepicker();
// })


// Menu
$(function(){
    $("ul#menu").hide();
    $("input#hit").click(function(){
        $("ul#menu").css({"width":"200px"})
        $("ul#menu").menu();
        $("ul#menu").slideDown("slow");
    })

    
    
})