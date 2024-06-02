// script.js

$(document).ready(function() {
    $('.list-group-item').on('click', function() {
      $('.list-group-item').removeClass('active');
      $(this).addClass('active');
      
      const src = $(this).data('src');
      const title = $(this).data('title');
      const description = $(this).data('description');
      
      $('#selectedImage').attr('src', src);
      $('#selectedImage').attr('alt', title);
    });
  });
  