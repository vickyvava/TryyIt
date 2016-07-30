
/*Main Namespace*/

var room = new Object() || {};

room = {

	initialize:function(){
		this.initializePlugins();
		this.initializeLazyLoad();
		this.initializeUiEvents();
		this.centerAlignedElements();
		this.mobileManipulations();
	},

	initializePlugins:function(){
		
		/*initializing Mobile Navigation Bar*/
		$('#mobile-button').sideNav({
			menuWidth    : 275,
			edge         : 'left',
			closeOnClick : true
		});

		/*initializing Slider*/
		$('.owl-carousel').owlCarousel({
			loop       : true,
			nav        : false,
			dots       : false,
			lazyLoad   : true,
			items      : 1,
			pagination :false,

			responsiveClass:true,
			responsive:{
				0:{
				    items:1
				},
				600:{
				    items:1
				},
				1000:{
				    items:1
				}
			}
		});

		$(".controls").on("click",function(){
			var slider = $('.owl-carousel').data('owlCarousel');
			$(this).hasClass("left") ? slider.prev() : slider.next();
		});

		$(".demo-controls").on("click",function(){
			var slider = $('#slid').data('owlCarousel');
			$(this).hasClass("left") ? slider.prev() : slider.next();
			$(document).trigger("scroll");
		});

		$(".pricing-controls").on("click",function(){
			var slider = $('#mobile-pricing-slider .owl-carousel').data('owlCarousel');
			$(this).hasClass("lefts") ? slider.prev() : slider.next();
		});			

		if(room.detectDevice()){
			$("#products").find("a").each(function(){
				$(this).addClass("btn-floating").removeClass("btn-large");
			});
		}

		$(".product-control").on("click",function(){
			$("#products").find("a").removeClass("transparent black white-text").addClass("grey lighten-4 black-text");
			$(this).removeClass("grey lighten-4 black-text").addClass("black white-text");
			
			if(room.detectDevice()){
				$("#products").find("a").removeClass("transparent black").addClass("transparent");
				$("#products").find("a").find("span.hide-on-large-only i").removeClass("white-text").addClass("black-text");
				$(this).removeClass("transparent black-text").addClass("black");
				$(this).find("span.hide-on-large-only i").addClass("white-text").removeClass("black-text");				
			}

			$("#product-features").find("article#"+$(this).attr("data-target")).removeClass("hide");
			$("#product-features").find("article#"+$(this).attr("data-target")).siblings("article[id*=product-categories]").addClass("hide");
			
			$(document).trigger("scroll");
			room.centerAlignedElements();
		});

		$("#web-header a").on("click",function(){
			if(typeof $(this).attr("data-target") != "undefiined"){
				$('html,body').animate({ scrollTop: $("#"+$(this).attr("data-target")).offset().top},'slow');	
			}
			
		});

		$(".seeMore").on("click",function(){
			if(!$("#full-details").is(":visible")){
				$("#full-details").slideDown("slow");
				$(this).text("Hide Detailed Features");
			}
			else{
				$("#full-details").slideUp("slow");
				$(this).text("Show Detailed Features");
			}
		});

		$("#pricing .card").hover(function(){
			$(this).removeClass("transparent").addClass("white");
			$(this).find(".card-image").addClass("cyan-text").removeClass("black-text");
			$(this).find(".card-content a.btn").removeClass("black-text wht-bdr").addClass("cyan-text blk-bdr");
		},function(){
			$(this).addClass("transparent").removeClass("white");
			$(this).find(".card-image").removeClass("cyan-text").addClass("black-text");
			$(this).find(".card-content a.btn").addClass("black-text wht-bdr").removeClass("cyan-text blk-bdr");
		});
	},

	initializeLazyLoad : function(){
		$("img.lazy, img , .image").lazyload({
			effect    : "fadeIn"
		});
	},

	initializeUiEvents : function(){
		$(document).scroll(function(){
			if($(this).scrollTop() > 50){
				$("#web-header").addClass("cyan z-depth-1").removeClass("transparent z-depth-0");
				$("#site-wrapper #site-navbar").removeClass("big");
				$("#site-navbar").find(".hide-on-med-and-down li a").addClass("white-text").removeClass("black-text");
				//$("#site-navbar .brand-logo img").attr("data-original","img/tryIt_white.png");
			}
			else{
				$("#web-header").addClass("transparent z-depth-0").removeClass("cyan z-depth-1");
				$("#site-wrapper #site-navbar").addClass("big");
				$("#site-navbar").find(".hide-on-med-and-down li a").addClass("black-text").removeClass("white-text");
				//$("#site-navbar .brand-logo img").attr("data-original","img/tryIt_white.png");
			}
		});
	},

	centerAlignedElements:function(){
		
		if(!this.detectDevice){
			$(".big-bro").each(function(){	
				var big   = $(this);
				var small = $(this).siblings(".small-bro");		
				$(small).height($(big).height()).addClass("valign-wrapper");
				$(small).children().addClass("valign-wrapper");
			});
		}		
	},

	detectDevice:function(){
		var isMobile = false;
		var md = new MobileDetect(window.navigator.userAgent);
		if (md.mobile()) {
			isMobile = true;
		}
		return isMobile;
	},

	mobileManipulations: function(){
		if(room.detectDevice()){
			$("#introduction div, #product-features div").each(function(){
				if($(this).hasClass("mar-tb-5")){
					$(this).removeClass("mar-tb-5");
				}
				if($(this).hasClass("right-align") || $(this).hasClass("left-align")){
					$(this).removeClass("right-align left-align").addClass("center-align");
				}
			});
			$(".slider-title h3").addClass("flow-text");
			$("#site-slider .item").css("min-height","560px");
		}
	}
};

(function(){
	room.initialize();
})();
