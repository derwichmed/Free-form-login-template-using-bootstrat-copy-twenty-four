$(function (){
   $('.form_login_subscription .form_desc .form_btn .login').click(function (){
      $(this).removeClass('disable');
      $(this).addClass('active');
      
      $('.form_login_subscription .form_desc .form_btn .singup').removeClass('active');
      $('.form_login_subscription .form_desc .form_btn .singup').addClass('disable');
      $('.form_login_subscription .form_content .form_subscription').hide();
      $('.form_login_subscription .form_content .form_login').fadeIn("slow");
      
   });
   
   $('.form_login_subscription .form_desc .form_btn .singup').click(function (){
      $(this).removeClass('disable');
      $(this).addClass('active');
      
      $('.form_login_subscription .form_desc .form_btn .login').removeClass('active');
      $('.form_login_subscription .form_desc .form_btn .login').addClass('disable');
      
      $('.form_login_subscription .form_content .form_login').hide();
      $('.form_login_subscription .form_content .form_subscription').fadeIn("slow");
      
   });
});