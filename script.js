$(document).ready(function() {
	new WOW().init();

	$('#carousel-example-generic').carousel({
    interval: 5000,
    pause: false
	});

	// Jquery Counter ThongKe
	$('.statistical-item .counter').counterUp({
    time: 3000
  });

  $('#forminfo').validate({
  	rules: {
  		fullname: "required",
  		phonenumber: "required"
  	},
  	messages: {
  		fullname: "Vui lòng nhập họ tên",
  		phonenumber: "Vui lòng nhập số điện thoại"
  	}
  });
});