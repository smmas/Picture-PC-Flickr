<?php include('../../picturepc.inc'); ?>
<html> 
	<head> 
		<title>Flickr</title> 
		<link rel="stylesheet" type="text/css" href="style.css" />
		<?php load_jquery(); ?>
		<script src="jquery-css-transform.js"></script>
		<script src="jquery-animate-css-rotate-scale.js"></script> 
		<script src="jquery-shuffle.js"></script> 
		<script src="flickr.js"></script>
		<script type="text/javascript">
			$(window).ready(function(){
				fetch();
			});
		</script>
	</head> 
 
	<body> 
        <div id="container"> 
            <div id="image-container" class="clearfix"></div> 
        </div>
	</body>
</html> 
 
 
 
 
 
 
 
 
 
 
 
 
 
 