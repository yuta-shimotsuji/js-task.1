/*global $*/

$(document).ready(function(){
  
  $("#start").prop("disabled",false);
  
  let timer1 = null;
    let cnt1 = 0;
    let cnt2 = 0;
    let cnt3 = 0;
    let cnt4 = 0;
  
   $("#start").click(function(){

    function event() {
        cnt1++;
         $("#four").text(cnt1);
         $("#three").text(cnt2);
         $("#two").text(cnt3);
         
         if(cnt1 > 9){
           cnt1 = 0;
           $("#four").text("0");
           cnt2++;
           $("#three").text(cnt2);
         }
         
         if(cnt2 >= 6){
              cnt2 = 0;
              $("#three").text("0");
              cnt3++;
              $("#two").text(cnt3);
          }
          
          if(cnt3 >= 6){
              cnt3 = 0;
              $("#two").text("0");
              cnt4++;
              $("#one").text(cnt4);
          }
          
          if(cnt4 >= 6){
              cnt4 = 0;
              $("#one").text("0");
              clearInterval(timer1);
          }
          
         
    }
    
    if ( document.getElementById("start").disabled == false ){
      $("#start").prop("disabled",true);
      $("#stop").prop("disabled",false);
      $("#reset").prop("disabled",false);
    }

    timer1 = setInterval(event, 1000);
  });
  
  $("#stop").click(function(){
    clearInterval(timer1);
    $("#start").prop("disabled",false);
    $("#stop").prop("disabled",true);
    $("#reset").prop("disabled",false);
  });
  
  $("#reset").click(function() {
    clearInterval(timer1);
     cnt1 = 0;
     cnt2 = 0;
     cnt3 = 0;
     cnt4 = 0;
     $("#four").text("0");
     $("#three").text("0");
     $("#two").text("0");
     $("#one").text("0");
     $("#start").prop("disabled",false);
     $("#stop").prop("disabled",true);
     $("#reset").prop("disabled",true);
  });
  
  
  
});