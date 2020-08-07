

$(document).ready(function () {
  //layout starts
  $('.menu').click(function (event) {
      $('.navbarCollapse').toggleClass('active');
  });
  //layout ends


  //checkoutReceipt Page starts
  $('.electronicReceipt').click(function (event) {
      $('.emailAddress').addClass('emailFormShow');
      $('.address').addClass('addressHide');
      //status changes and background color also changes
      $('.paperReceipt').removeClass('clickedBg');
      $('.electronicReceipt').addClass('clickedBg');
  });

  $('.paperReceipt').click(function (event) {
      $('.emailAddress').removeClass('emailFormShow');
      $('.address').removeClass('addressHide');
      //status changes and background color also changes
      $('.paperReceipt').addClass('clickedBg');
      $('.electronicReceipt').removeClass('clickedBg');
  });
  //checkoutReceipt Page ends
});