$(function() {

	/* mobile menu*/
	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();
		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});

	/* Modal*/
	$(".modal").each( function(){
		$(this).wrap('<div class="overlay"></div>')
	});

	$(".open-modal").on('click', function(e){
		e.preventDefault();
		e.stopImmediatePropagation;

		var $this = $(this),
		modal = $($this).data("modal");

		$(modal).parents(".overlay").addClass("open");
		setTimeout( function(){
			$(modal).addClass("open");
			$("body").addClass("nonescroll");
		}, 350);

		$(document).on('click', function(e){
			var target = $(e.target);

			if ($(target).hasClass("overlay")){
				$(target).find(".modal").each( function(){
					$(this).removeClass("open");
				});
				setTimeout( function(){
					$(target).removeClass("open");
					$("body").removeClass("nonescroll");
				}, 350);
			}

		});

	});


	/*Forms*/
	$(document).ready(function() {
		$("#form").submit(function() {
			var form_name   = $('#form_name').val();
			var form_email   = $('#form_email').val();
			var form_message = $('#form_message').val();
			$.ajax({
				type: "POST",
				url: "./php/post.php",
				data: { 
					"form_name":   form_name,
					"form_email":   form_email,
					"form_message": form_message
				},
			}).done(function() {
				$(".top_content").addClass("active").css('display', 'flex').hide().fadeIn(); 
				setTimeout(function(){ 
					jQuery("#form").trigger("reset"); 
					$(".top_content").removeClass('active').fadeOut(); 
				}, 3000); 
			});
			return false;
		});
	});


});