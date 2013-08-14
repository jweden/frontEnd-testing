//$(document).ready(  function() {


function hide() {
//$(".hideButton").click(function(){
    $("p").hide();
    $( ".div2" ).text("Hide button clicked");
    $( ".div3" ).text("");
//});
}

function show() {
//$(".showButton").click(function(){
    $("p").show();
    $( ".div2" ).text("Show & Print button clicked");
    $( ".div3" ).text($( ".textField" ).val());

//});
}
//});