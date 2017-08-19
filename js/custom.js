$(document).ready(function() {
  $('select').material_select();
  var flagfname,flaglname,flagemail,flagzipcode,flagaddress,flagcontact,flagcompany,flagselect=false;
  var $regexname=/^([a-zA-Z]{3,16})$/;
  
  $('.firstname').on('keypress keydown keyup',function(){
    if (!$(this).val().match($regexname)) {
      // there is a mismatch, hence show the error message
        $('#msg1').removeClass('hidden');
        $('#msg1').show();
        flagfname=false;
      }
    else{
      // else, do not display message
      $('#msg1').addClass('hidden');
      flagfname=true;
    }
  });

  $('.lastname').on('keypress keydown keyup',function(){
    if (!$(this).val().match($regexname)) {
    // there is a mismatch, hence show the error message
      $('#msg2').removeClass('hidden');
      $('#msg2').show();
      flaglname=false;
    }
    else{
    // else, do not display message
      $('#msg2').addClass('hidden');
      flaglname=true;
    }
  });


var regemail =/^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;

  $('.email').on('keypress keydown keyup',function(){
    if (!$(this).val().match(regemail)) {
    // there is a mismatch, hence show the error message
      $('#msg3').removeClass('hidden');
      $('#msg3').show();
      flagemail=false;
    }
   else {
    // else, do not display message
    $('#msg3').addClass('hidden');
    flagemail=true;
    }
  });
   var $regaddress=/^[# , a-zA-Z0-9-\/ ] ?([# , a-zA-Z0-9-\/ ]|[# , a-zA-Z0-9-\/ ] )*[# , a-zA-Z0-9-\/ ]$/
  $('.address').on('keypress keydown keyup',function(){
    if (!$(this).val().match($regaddress)) {
    // there is a mismatch, hence show the error message
     $('#msg5').removeClass('hidden');
     $('#msg5').show();
     flagaddress=false;
    }
    else{
      // else, do not display message
      $('#msg5').addClass('hidden');
      flagaddress=true;
     }
  });

var $regcompany=/^([a-zA-Z ]{3,40})$/;
  $('.company').on('keypress keydown keyup',function(){
    if (!$(this).val().match($regcompany)) {
      // there is a mismatch, hence show the error message
      $('#msg6').removeClass('hidden');
      $('#msg6').show();
      flagcompany=false;
    }
    else{
      // else, do not display message
      $('#msg6').addClass('hidden');
      flagcompany=true;
    }
  });

var $pincode=/^([0-9]{6})$/;
  $('.zip-code').on('keypress keydown keyup',function(){
    if (!$(this).val().match($pincode)) {
    // there is a mismatch, hence show the error message
      $('#msg7').removeClass('hidden');
      $('#msg7').show();
      flagzipcode=false;
    }
    else{
      // else, do not display message
      $('#msg7').addClass('hidden');
      flagzipcode=true;
    }
  });

var $number=/^([0-9]{10})$/;
  $('.number').on('keypress keydown keyup',function(){
    if (!$(this).val().match($number)) {
      // there is a mismatch, hence show the error message
      $('#msg4').removeClass('hidden');
      $('#msg4').show();
      flagcontact=false;
    }
    else{
      // else, do not display message
      $('#msg4').addClass('hidden');
      flagcontact=true;
    }
  });


$("#submit").click(function() {
  var selecttag=$("#selectbox").value;
    if (selecttag=="") {
      $('#msg8').removeClass('hidden');
      $('#msg8').show();
      flagselect=false;
    }

    else {
      $('#msg8').addClass('hidden');
      flagselect=true;
     }


  if((flagfname==true) && (flaglname==true) && (flagcontact==true) && (flagzipcode==true) && (flagcontact==true) && (flagcompany==true) && (flagselect==true)){
    alert("sucessful validation");
    $('#submit-successful').modal('open');
  }

  else {

    if(flagfname==false){
      $('#msg1').removeClass('hidden');
      $('#msg1').show();
    }
    
    else if(flaglname==false){
      $('#msg2').removeClass('hidden');
      $('#msg2').show();
    }

    else if(flagemail==false){
      $('#msg3').removeClass('hidden');
      $('#msg3').show(); 
    }

    else if(flagcontact==false){
      $('#msg4').removeClass('hidden');
      $('#msg4').show();
    }

    else if(flagaddress==false){
      $('#msg5').removeClass('hidden');
      $('#msg5').show();
    }

    else if(flagcompany==false){
      $('#msg6').removeClass('hidden');
      $('#msg6').show(); 
    }

    else if(flagzipcode==false){
      $('#msg7').removeClass('hidden');
      $('#msg7').show(); 
    }

    else {
      $('#msg8').removeClass('hidden');
      $('#msg8').show(); 
    }
  } 
});

$("#selectbox").click(function(){
  $('#msg8').hide();
});
});

