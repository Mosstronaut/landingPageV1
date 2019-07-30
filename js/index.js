//Navbar Transform//
$(document).scroll(function(){
  if($(this).scrollTop()>100){
    $('#headNav').addClass('scrolledNav');
    $('#socialNav').hide();
  }else{
    $('#headNav').removeClass('scrolledNav');
    $('#socialNav').show();
  }
});
