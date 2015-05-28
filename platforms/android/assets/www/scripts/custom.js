// JavaScript Document

(function ($) {

$(window).load(function() { 
	$("#status").fadeOut(); // will first fade out the loading animation
	$("#preloader").delay(400).fadeOut("medium"); // will fade out the white DIV that covers the website.
       
			
				  
				
});

$(document).ready(function() {
    
    //Remove 300ms lag set by -webkit-browsers     
    window.addEventListener('load', function() {
		FastClick.attach(document.body);
	}, false);	
    
    
    //Slide Menu Settings//
    $('.open-slide').click(function(){
        $('.menu-wrapper').toggleClass('hide-menu-wrapper'); 
        $('.menu-wrapper em').delay(2500).slideUp(300);
        $(this).toggleClass('active-slide');
        $('.header').toggleClass('move-header');
    });
    
    $('.menu-wrapper').addClass('hide-menu-wrapper');
    var menu_slider = $(".menu");
    menu_slider.owlCarousel({
        autoPlay: false, //Set AutoPlay to 3 seconds
        scrollPerPage:true,
        pagination:false,
        rewindSpeed:0,
        items : 15,
        itemsDesktop : [1199,6],
        itemsDesktopSmall : [979,5],
        itemsTablet:	[768,4],
        itemsMobile:	[560,3]//,
        //afterInit : function(elem){
        //     this.jumpTo(0); //for 4th slide
        //}
    });
    
    var selected_menu_item = document.getElementById( "selected" );
    var selected_menu_item_number = ($( ".menu a" ).index( selected_menu_item ) );
    menu_slider.trigger('owl.jumpTo', selected_menu_item_number);
    
    console.log(selected_menu_item_number);
    
    var scl=0; // Create a variable
    window.setInterval(function(){
       scl=0; // Reset this variable every 0.5 seconds
    }, 500);

    $('.menu').on('DOMMouseScroll mousewheel', function (e) { 
        if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
        while(scl==0) { 
            menu_slider.trigger('owl.next');
            scl++;
        }
    } else {
        while(scl==0) { 
            menu_slider.trigger('owl.prev');
            scl++;
        }
    }
    });
        
    //Sidebar Menu Settings//
    
    $('.deploy-submenu').click(function(){
        $(this).toggleClass('active-submenu');
        $(this).parent().find('.submenu').toggleClass('active-submenu-items');
        return false;
    });

	$('.swipebox').click(function(){ 
		$('.gallery').hide(0);
		$('.portfolio-wide').hide(0);
	});

	$('.open-menu').click(function() {
        $('.header, .menu-wrapper').removeClass('hide-header-right');
        $('.header, .menu-wrapper').addClass('hide-header-left');
        $('.menu-wrapper').addClass('hide-menu-wrapper');  
        $('.open-slide').removeClass('active-slide');
		if( snapper.state().state=="left" ){
			snapper.close();
		} else {
			snapper.open('left');
		}
		return false;
	});	
    
    $('.open-more').click(function() {
        $('.header, .menu-wrapper').removeClass('hide-header-left');
        $('.header, .menu-wrapper').addClass('hide-header-right');
        $('.menu-wrapper').addClass('hide-menu-wrapper'); 
        $('.open-slide').removeClass('active-slide');
		if( snapper.state().state=="right" ){
			snapper.close();
		} else {
			snapper.open('right');
		}
		return false;
	});
	
	$('.sidebar-close, .all-elements').click(function() {
        $('.header, .menu-wrapper').removeClass('hide-header-left');
        $('.header, .menu-wrapper').removeClass('hide-header-right');
        $('.menu-wrapper').addClass('hide-menu-wrapper');
        $('.open-slide').removeClass('active-slide');
		snapper.close();
	});

	var snapper = new Snap({
	  element: document.getElementById('content')
	});
    
    //Sharebox Settings//
        
    $('.show-share-bottom').click(function(){
       $('.share-bottom').toggleClass('active-share-bottom'); 
        return false;
    });    
    
    $('.close-share-bottom, #content, .open-menu, .open-more').click(function(){
       $('.share-bottom').removeClass('active-share-bottom'); 
    });
    
    //Countdown timer

	var endDate = "June 7, 2015 15:03:25";
	
	$('.countdown').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html(
		"<div class='countdown-box box-years'><div class='countdown-years'>" + this.leadingZeros(data.years, 2) + 
		"</div><span>years</span></div><div class='countdown-box box-days'><div class='countdown-days'>" + this.leadingZeros(data.days, 2) + 
		"</div><span>days</span></div><div class='countdown-box box-hours'><div class='countdown-hours'>" + this.leadingZeros(data.hours, 2) + 
		"</div><span>hours</span></div><div class='countdown-box box-minutes'><div class='countdown-minutes'>" + this.leadingZeros(data.min, 2) + 
		"</div><span>min</span></div><div class='countdown-box box-seconds'><div class='countdown-seconds'>" + this.leadingZeros(data.sec, 2) + 
		"</div><span>sec</span></div>");
	  }
	});
	
    
	/*/////////*/
	/*Pie Chart*/
	/*/////////*/
	
	var pieData = [
		{	value: 50,	color: "#e74c3c", highlight: "#c0392b", label: "Red"			},
		{	value: 10,	color: "#2ecc71", highlight: "#27ae60",	label: "Green"			},
		{	value: 20,	color: "#f1c40f", highlight: "#f39c12",	label: "Yellow"			},
		{	value: 20,	color: "#2c3e50", highlight: "#34495e",	label: "Dark Blue"		}
	];

	var barChartData = {
		labels : ["One","Two","Three","Four","Five"],
		datasets : [
			{
				fillColor : "rgba(0,0,0,0.1)",
				strokeColor : "rgba(0,0,0,0.2)",
				highlightFill: "rgba(0,0,0,0.25)",
				highlightStroke: "rgba(0,0,0,0.25)",
				data : [20,10,40,30,10]
			}
		]
	}

	//window.onload = function(){
		//var pie_chart_1 = document.getElementById("generate-pie-chart").getContext("2d");
		//window.pie_chart_1 = new Chart(pie_chart_1).Pie(pieData);
    
		//var bar_chart_1 = document.getElementById("generate-bar-chart").getContext("2d");
		//window.pie_chart_1 = new Chart(bar_chart_1).Bar(barChartData);
	//};
	
	//Animate.css scroll to begin animation //	
	
	var wow = new WOW(
	  {
		boxClass:     'animate',      // animated element css class (default is wow)
		animateClass: 'animated',     // animation css class (default is animated)
		offset:       0,              // distance to the element when triggering the animation (default is 0)
		mobile:       true,           // trigger animations on mobile devices (true is default)
	  }
	);
	wow.init();
		
	//Go up
	
	$('.footer-up').click(function() {
		$('#content').animate({
			scrollTop:0
		}, 800, 'easeInOutQuad');
		return false;
	});
	
	//Portfolio//
	
	$('.adaptive-one-activate').click(function() {
		$('.portfolio-adaptive').removeClass('adaptive-three');
		$('.portfolio-adaptive').removeClass('adaptive-two');
		$('.portfolio-adaptive').addClass('adaptive-one');
		$(this).addClass('active-adaptive-style');
		$('.adaptive-two-activate, .adaptive-three-activate').removeClass('active-adaptive-style');
		return false;
	});
	
	$('.adaptive-two-activate').click(function() {
		$('.portfolio-adaptive').removeClass('adaptive-three');
		$('.portfolio-adaptive').addClass('adaptive-two');
		$('.portfolio-adaptive').removeClass('adaptive-one');	
		$(this).addClass('active-adaptive-style');	
		$('.adaptive-three-activate, .adaptive-one-activate').removeClass('active-adaptive-style');
		return false;
	});
	
	$('.adaptive-three-activate').click(function() {
		$('.portfolio-adaptive').addClass('adaptive-three');
		$('.portfolio-adaptive').removeClass('adaptive-two');
		$('.portfolio-adaptive').removeClass('adaptive-one');
		$(this).addClass('active-adaptive-style');	
		$('.adaptive-two-activate, .adaptive-one-activate').removeClass('active-adaptive-style');
		return false;
	});
	
	
	//Close Sharebox//
	
	$('.open-sharebox').click(function() {
		$('.sharebox-wrapper').fadeIn(200);
	});
	
	$('.close-sharebox').click(function() {
		$('.sharebox-wrapper').fadeOut(200);
	});
	
	$('.open-loginbox').click(function() {
		$('.loginbox-wrapper').fadeIn(200);
	});
	
	$('.close-loginbox').click(function() {
		$('.loginbox-wrapper').fadeOut(200);
	});
			
	//Checkboxes
	
	$('.checkbox-one').click(function() {
		$(this).toggleClass('checkbox-one-checked');
		return false;
	});
	$('.checkbox-two').click(function() {
		$(this).toggleClass('checkbox-two-checked');
		return false;
	});
	$('.checkbox-three').click(function() {
		$(this).toggleClass('checkbox-three-checked');
		return false;
	});	
	$('.radio-one').click(function() {
		$(this).toggleClass('radio-one-checked');
		return false;
	});	
	$('.radio-two').click(function() {
		$(this).toggleClass('radio-two-checked');
		return false;
	});
	
    //Switches
    
    $('.switch-1').click(function(){
       $(this).toggleClass('switch-1-on'); 
        return false;
    });
    
    $('.switch-2').click(function(){
       $(this).toggleClass('switch-2-on'); 
        return false;
    });
    
    $('.switch-3').click(function(){
       $(this).toggleClass('switch-3-on'); 
        return false;
    });
    
    $('.switch, .switch-icon').click(function(){
        $(this).parent().find('.switch-box-content').slideToggle(200); 
        $(this).parent().find('.switch-box-subtitle').slideToggle(200);
        return false;
    });
    
    
	//Notifications
		
	$('.tap-dismiss-notification').click(function() {
		$(this).slideUp(200);
		return false;
	});
	
	$('.close-big-notification').click(function() {
		$(this).parent().slideUp(200);
		return false;
	});
	
	$('.notification-top').addClass('show-notification-top');
	
	$('.hide-top-notification').click(function(){
		$('.notification-top').removeClass('show-notification-top');
	});
	
	//Tabs 
	$('.tab-but-1').click(function() {
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-1').addClass('tab-active');
		$('.tab-content').slideUp(200);
		$('.tab-content-1').slideDown(200);	
		return false;	
	});
	
	$('.tab-but-2').click(function() {
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-2').addClass('tab-active');
		$('.tab-content').slideUp(200);
		$('.tab-content-2').slideDown(200);
		return false;		
	});	
	
	$('.tab-but-3').click(function() {
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-3').addClass('tab-active');
		$('.tab-content').slideUp(200);
		$('.tab-content-3').slideDown(200);	
		return false;	
	});	
	
	$('.tab-but-4').click(function() {
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-4').addClass('tab-active');
		$('.tab-content').slideUp(200);
		$('.tab-content-4').slideDown(200);
		return false;		
	});	

	$('.tab-but-5').click(function() {
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-5').addClass('tab-active');
		$('.tab-content').slideUp(200);
		$('.tab-content-5').slideDown(200);	
		return false;	
	});	
	
	//Toggles
	
	$('.deploy-toggle-1').click(function() {
		$(this).parent().find('.toggle-content').slideToggle(200);
		$(this).toggleClass('toggle-1-active');
		return false;
	});
	
	$('.deploy-toggle-2').click(function() {
		$(this).parent().find('.toggle-content').slideToggle(200);
		$(this).toggleClass('toggle-2-active');
		return false;
	});
	
	$('.deploy-toggle-3').click(function() {
		$(this).parent().find('.toggle-content').slideToggle(200);
		$(this).find('em strong').toggleClass('toggle-3-active-ball');
		$(this).find('em').toggleClass('toggle-3-active-background');
		return false;
	});
	
	//Submenu Nav
	
	$('.submenu-nav-deploy').click(function() {
		$(this).toggleClass('submenu-nav-deploy-active');
		$(this).parent().find('.submenu-nav-items').slideToggle(200);
		return false;
	});
	
	//Sliding Door
	
	$('.sliding-door-top').click(function() {
		$(this).animate({
			left:'101%'
		}, 500, 'easeInOutExpo');
		return false;
	});
	
	$('.sliding-door-bottom a em').click(function() {
		$(this).parent().parent().parent().find('.sliding-door-top').animate({
			left:'0px'
		}, 500, 'easeOutBounce');
		return false
		
	});
		
	/////////////////////////////////////////////////////////////////////////////////////////////
	//Detect user agent for known mobile devices and show hide elements for each specific element
	/////////////////////////////////////////////////////////////////////////////////////////////
	
	var isiPhone = 		navigator.userAgent.toLowerCase().indexOf("iphone");
	var isiPad = 		navigator.userAgent.toLowerCase().indexOf("ipad");
	var isiPod = 		navigator.userAgent.toLowerCase().indexOf("ipod");
	var isiAndroid = 	navigator.userAgent.toLowerCase().indexOf("android");
	
	if(isiPhone > -1) 	 {		 $('.ipod-detected').hide();		 $('.ipad-detected').hide();		 $('.iphone-detected').show();		 $('.android-detected').hide();	 }
	if(isiPad > -1)	 {		 	 $('.ipod-detected').hide();		 $('.ipad-detected').show();		 $('.iphone-detected').hide();		 $('.android-detected').hide();	 }
	if(isiPod > -1)	 {		 	 $('.ipod-detected').show();		 $('.ipad-detected').hide();		 $('.iphone-detected').hide();		 $('.android-detected').hide();	 }   
	if(isiAndroid > -1) {		 $('.ipod-detected').hide();		 $('.ipad-detected').hide();		 $('.iphone-detected').hide();		 $('.android-detected').show();	 }  

	
	//Detect if iOS WebApp Engaged and permit navigation without deploying Safari
	(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")
				
	var owlStaffControls = $(".staff-slider");
	owlStaffControls.owlCarousel({
		//Basic Stuff
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsTabletSmall: [480,1],
		itemsMobile : [370,1],
		singleItem : false,
		itemsScaleUp : false,
		slideSpeed : 250,
		paginationSpeed : 250,
		rewindSpeed : 250,
		pagination:false,
		autoPlay : false,
		autoHeight: false,
	});
	
	$(".next-staff").click(function(){
	  owlStaffControls.trigger('owl.next');
	  return false;
	});
	$(".prev-staff").click(function(){
	  owlStaffControls.trigger('owl.prev');
	  return false;
	});
	
	var owlQuoteSlider = $(".quote-slider");
	owlQuoteSlider.owlCarousel({
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsTabletSmall: [480,1],
		itemsMobile : [370,1],
		singleItem : false,
		itemsScaleUp : false,
		slideSpeed : 800,
		paginationSpeed : 300,
		rewindSpeed : 250,
		pagination:false,
		autoPlay : true,
	});
	
	$(".next-quote").click(function() {
	  owlQuoteSlider.trigger('owl.next');
	  return false;
	});
	$(".prev-quote").click(function() {
	  owlQuoteSlider.trigger('owl.prev');
	  return false;
	});
	
	/////////////////
	//Image Gallery//
	/////////////////
	$(".swipebox").swipebox({
		useCSS : true, // false will force the use of jQuery for animations
		hideBarsDelay : 3000 // 0 to always show caption and action bar
	});
	
	$(".wide-gallery-item").swipebox({
		useCSS : true, // false will force the use of jQuery for animations
		hideBarsDelay : 3000 // 0 to always show caption and action bar
	});
	
	var time = 7; // time in seconds
	
	var $progressBar,
		$bar, 
		$elem, 
		isPause, 
		tick,
		percentTime;
	  
	
	//Init the carousel
	//$(".homepage-slider").owlCarousel({
		//slideSpeed : 500,
		//paginationSpeed : 500,
		//singleItem : true,
		//pagination:false,
		//afterInit : progressBar,
		//afterMove : moved,
		//startDragging : pauseOnDragging
	//});
	
	//Init progressBar where elem is $("#owl-demo")
	function progressBar(elem){
		$elem = elem;
		//build progress bar elements
		buildProgressBar();
		//start counting
		start();
	}
	
	//create div#progressBar and div#bar then prepend to $("#owl-demo")
	function buildProgressBar(){
		$progressBar = $("<div>",{
			id:"progressBar"
		});
		$bar = $("<div>",{
			id:"bar"
		});
		$progressBar.append($bar).prependTo($elem);
	}
	
	function start() {
		//reset timer
		percentTime = 0;
		isPause = false;
		//run interval every 0.01 second
		tick = setInterval(interval, 10);
	};
	
	function interval() {
		if(isPause === false){
			percentTime += 1 / time;
			$bar.css({
			   width: percentTime+"%"
			 });
			//if percentTime is equal or greater than 100
			if(percentTime >= 100){
			  //slide to next item 
			  $elem.trigger('owl.next')
			}
		}
	}
	
	//pause while dragging 
	function pauseOnDragging(){
		isPause = true;
	}
	
	//moved callback
	function moved(){
		//clear interval
		clearTimeout(tick);
		//start again
		start();
	}
	
	
	// Custom Navigation Events
	$(".next-home").click(function() {
		$(".homepage-slider").trigger('owl.next');
		return false;
	});
	$(".prev-home").click(function() {
		$(".homepage-slider").trigger('owl.prev');
		return false;
	});	
	
	
    //Coverpage Height 100%//
	
	var coverpage_height = 0;
	
	function initiate_coverpages(){
		coverpage_height =  $(window).height();
		$('.coverpage').css({ height: coverpage_height+1 });	
	};
	
	initiate_coverpages();
	
	$(window).resize(function() {
		initiate_coverpages();
	});
	
	$.scrollIt();
    

    //Generate Fullscreen Elemeents
    
    var screen_width = 0;
    var screen_height = 0;
    function resize_coverpage(){
        screen_width = $(window).width();
        screen_height = $(window).height();

         $('.coverpage-image').css({
            height: screen_height -60,
            width: screen_width
        });          
        $('.landing-page').css({
            height: screen_height-1,
            width: screen_width
        });  
        
         $('.slider-image').css({
            height: screen_height -60,
            width: screen_width
        });          
    };
    resize_coverpage();
    $(window).resize(resize_coverpage);
    
	
	$(".coverpage-slider").owlCarousel({
		slideSpeed : 500,
		paginationSpeed : 500,
		singleItem : true,
		pagination:true,
		afterInit : progressBar,
		afterMove : moved,
		startDragging : pauseOnDragging
	});
    
    

			
        
  
});
				
		$( document ).on( "pageinit", "#paginaMapa", function(e,data) {
                   
				var defaultPos = new google.maps.LatLng(19.289168, -99.653440);
				var lat;
                                var long;
				if (navigator.geolocation) {
                                   
		                function exito(pos) {
                                    lat = pos.coords.latitude;
                                    long = pos.coords.longitude;
                     		MuestraMapa(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
						 
                   		}
						function falla(error) {
						//si falla mostrar mpara en posicion por defecto
							alert('Error en servicio Geolocalizador');
							MuestraMapa(defaultPos); 
						}
						
					//maximumAge- Guarda la posicion por 5 minutos 
					//enableHighAccuracy: Se tratan de obtener los mejores resultados posible del GPS
					//timeout: el tiempo maximo que se espera para obtener la posicion en este caso 5 segundos
						var options = {maximumAge: 500000, enableHighAccuracy:true, timeout: 5000};
						navigator.geolocation.getCurrentPosition(exito, falla, options );
					}//FIN IF
					else {
                    MuestraMapa(defaultPos);  // No soporta geolocalizacion y dibuja el mapa en posicion Default
               		 }
                         
                        
					 //FUNCION DIBUJAR MAPa
					 function MuestraMapa(latlng) {
                                            
						 var carPosision =defaultPos;// new google.maps.LatLng(-1.45305889, -48.48056657); 
                          $.ajax({
            type: "get",
            url: "http://www.rastro.casadogui.com.br/index.php?r=localizacao/getGeo",
           
            dataType: "json",
            success: function(response, status) {
                                       
					 carPosision = new google.maps.LatLng(response[0][1], response[0][2]); 
                                         CalculaDistancia(response[0][1]+','+response[0][2], lat +','+ long, response[0][3], latlng,carPosision)
                                       
                                            Reload();
                                             }});
                                             }// Fin muestra mapa
				  function Reload(){
                            
                             setTimeout(function() {
                            
			setTimeout(function()
			{
				
				
				var options = {maximumAge: 500000, enableHighAccuracy:true, timeout: 5000};
						navigator.geolocation.getCurrentPosition(exito, falla, options );
			}, 1000);
                                       
                                        }, 45000);
                           
                        }
                        
                        function CalculaDistancia(localObjeto, localUser, data, latlng, carPosision )
                        {
                            
                       var origin = localUser,
             destination = localObjeto,
             service = new google.maps.DistanceMatrixService();
           
         service.getDistanceMatrix(
             {
               
                 origins: [origin],
                 destinations: [destination],
                 travelMode: google.maps.TravelMode.WALKING,
                 avoidHighways: false,
                 avoidTolls: false
             }, 
             callback
         );
         
         function callback(responseMatrix, status) {
              
               var zoom = 18;
             today=new Date();
                    d = today.getDate();
                    me= today.getMonth() +1;
                    ano = today.getFullYear();

                    h=today.getHours();
                    m=today.getMinutes();
                    s= today.setSeconds(today.getSeconds()+45);
                    hora = ano +"/0"+me+"/"+d+" "+h+":0"+today.getMinutes()+":0"+today.getSeconds();
                    debugger;
				$("#clock").countdown(hora, function(event) {
                             $(this).text(
                               event.strftime('%S')
                                 );
                            });
              
            
             var contentString = '<div id="content">'+
                                           '<div id="siteNotice">'+
                                           '</div>'+
                                           '<h2 id="firstHeading" class="firstHeading">'+responseMatrix.destinationAddresses[0]+'</h2>'+
                                           '<div id="bodyContent">'+
                                           '<p><b>Data</b>, '+data+' <br/>' +
                                           //'<b>Velocidade</b>, '+response[0][4]+' Km/h<br/>' +
                                           //'<b>Nivel Bateria</b>,'+ response[0][5]+' <br/>' +
                                           //'<b>Nivel Sinal</b>, '+response[0][6]+' <br/>' +
                                          
                                           '</div>'+
                                           '</div>';
                                   
             var contentStringUser = '<div id="content">'+
                                           '<div id="siteNotice">'+
                                           '</div>'+
                                           '<h2 id="firstHeading" class="firstHeading">'+responseMatrix.originAddresses[0]+'</h2>'+
                                           '<div id="bodyContent">'+
                                           '<p><b>Distancia</b>, '+responseMatrix.rows[0].elements[0].distance.text+' <br/>' +
                                           '<b>Tempo</b>, '+responseMatrix.rows[0].elements[0].duration.text+' andando <br/></p>' +
                                          
                                          
                                           '</div>'+
                                           '</div>';   
                                   if(parseInt(responseMatrix.rows[0].elements[0].distance.text) < 10)
                                   {zoom =  16;}
                               else if(parseInt(responseMatrix.rows[0].elements[0].distance.text) < 30)
                               {zoom = 10;}
                               else 
                               {zoom = 5;}
                                 
						var myOptions = {
                        zoom: zoom,
                        center: latlng,
						disableDefaultUI: true,
                        mapTypeId: google.maps.MapTypeId.ROADMAP};
						
						var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
                                                var infowindow = new google.maps.InfoWindow({
                                  position: latlng,
                                  content: contentStringUser
								  });
						var infowindowc = new google.maps.InfoWindow({
                                  position: latlng,
                                  content: contentString
								  });
						
						var markerC = new google.maps.Marker({
							position: carPosision,
							map: map,
							title: "Carro",
							animation: google.maps.Animation.DROP,
                                                        icon: 'marker.png'
                    	});
                        var marker = new google.maps.Marker({
							position: latlng,
							map: map,
							title: "Minha Posição",
							animation: google.maps.Animation.DROP
                                                        
                    	});
						google.maps.event.addListener(marker, 'click', function() {infowindow.open(map,marker);});
						 google.maps.event.addListener(markerC, 'click', function() {infowindowc.open(map,markerC);});
					
         }
                        }
				});	
                                
                              
}(jQuery));

        	
        

    /*  Menu Slider Mouse Scroll - Test Purpose Only. Can be deleted     
    
    
    var selected_menu_item = document.getElementById( "selected" );
    var selected_menu_item_number = ($( ".menu a" ).index( selected_menu_item ) );
    menu_slider.trigger('owl.jumpTo', selected_menu_item_number);
    
    console.log(selected_menu_item_number);
    
    var scl=0; // Create a variable
    window.setInterval(function(){
       scl=0; // Reset this variable every 0.5 seconds
    }, 500);

    $('.menu').on('DOMMouseScroll mousewheel', function (e) { 
        if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
        while(scl==0) { 
            menu_slider.trigger('owl.next');
            scl++;
        }
    } else {
        while(scl==0) { 
            menu_slider.trigger('owl.prev');
            scl++;
        }
    }
    });*/
