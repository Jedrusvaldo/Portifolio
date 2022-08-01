$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 90){
      $('.scroll-up-btn').addClass("show");
    }else{
      $('.scroll-up-btn').removeClass("show");
    }
  });
  
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
  });

  var typed = new Typed(".typing", {
    strings:["Desenvolvedor JR","Auxiliar de business intelligence", "Assistente de T.I"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

var typed = new Typed(".typing-2", {
  strings:["Assistente de T.I","Desenvolvedor JR","Auxiliar business intelligence"],
  typeSpeed:100,
  backSpeed:60,
  loop:true
});

  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});
});
