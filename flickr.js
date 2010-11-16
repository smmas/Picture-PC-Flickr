function fetch(){               
	var apiKey = '<INSERT API KEY HERE>';
	var photosetID = "<INSERT PHOTOSET HERE>";
	$.getJSON('http://api.flickr.com/services/rest/?&method=flickr.photosets.getPhotos&api_key=' + apiKey + '&photoset_id=' + photosetID + '&format=json&jsoncallback=?',
    function(data){
        
        //We want to zero out the increment of course!            
        var i = 0;
        
        data.photoset.photo = $.shuffle(data.photoset.photo);
        
        var firstPhotoID = data.photoset.photo[0].id;
        //For each picture we doo all the following code
    	$.each(data.photoset.photo, function(i,item){
        
        	var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';
        
        	//Let's get the photo's ID
			var photoID = '.' + item.id;
			//Now lets display it in a HTML image tag
        	var imgCont = '<img class="picture ' + item.id + '" src="' + photoURL + '">';
        	//And now we can throw that HTML into the main div
        	$(imgCont).appendTo('#image-container');
        	//Let's hide the sucker before the DOM is ready so it can fade in
        	$(photoID).hide();
        
        	//Beginning of the centering stuff here
        	//
        	//First let's find half of the height and width so that the image is centered
        	var left = Math.random() * 1024 - $(photoID).width();
        	if (left < -0.25 * $(photoID).width()) left = 0;
       		var top = Math.random() * 768 - $(photoID).height();
       		if (top < -0.25 * $(photoID).height()) top = 0;
        	//And let's apply that margining
        	$(photoID).css({'left' : left, 'top' : top});
        	//End centering stuff

			//Now, just to make this web app cooler we'll want to give it some random rotation
			$(photoID).css({opacity: '0', "-webkit-transform": 'rotate(' + (Math.floor(Math.random()*20)-10) + 'deg)'}).scale(5);
			
			var randAngle = Math.floor(Math.random()*20)-10;

			//Hey! Let's see if the DOM is ready and then start fading in the pictures!
			$(window).ready(function(){
				//Fade the picture in and rotate it
				$(photoID).delay(3200 * i).show().animate({opacity: '1', rotate: randAngle + 'deg', scale: '1'}, 1000, function() {
					if (item == data.photoset.photo[data.photoset.photo.length-1])  $('.picture').delay(12800).fadeOut('slow', function(){
						$("." + firstPhotoID).fadeOut('slow', function(){fetch();});
						$('.picture').remove();
					});
  				});
				i++;
			});
    	});
	});
};

