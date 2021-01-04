$(document).ready(function(){
    //save to local storage//
    var storage;
init();

function init(){
if (localStorage.getItem("dayStorage") === null){
    storage = ["","","","","","","","",""];
    localStorage.setItem("dayStorage", JSON.stringify(storage));
}
storage = JSON.parse(localStorage.getItem("dayStorage"));
addValues();
}


    $(".saveBtn").on("click",function(){
      
        var value = $(this).siblings(".description").val();
        
        // hourblock//
        var hourBlock = $(this).val();
    

        storage[hourBlock] = value;
       
        

        localStorage.setItem("dayStorage", JSON.stringify(storage));

    })


$("#navbar-subtitle").text(moment().format('dddd MMMM Do YYYY, h:mm:ss a'));         
var actualHour = parseInt(moment().format("HH"));
console.log(actualHour);

$("textarea").each(function (){
    
    var compare = parseInt($(this).attr("value"));
    


    if (compare < actualHour) {
        $(this).addClass("past");
    }
    if (compare === actualHour){
        $(this).addClass("present");
    }
    if (compare > actualHour) {
        $(this).addClass("future");
    }
})

function addValues(){
console.log(storage);
    for (i = 0; i < 9; i++) {
        
var textChange =  $("#hour-" + (i+9));
console.log(textChange);
textChange.text(storage[i]);

    }



}

})