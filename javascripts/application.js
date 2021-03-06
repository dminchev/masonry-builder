$(function() {
	var container = $('.container');
	var columnWidth = 300
	var images = {
		'0': {name: '1.jpg', width: 505, height: 370},
		'1': {name: '2.jpg', width: 446, height: 555},
		'2': {name: '3.jpg', width: 520, height: 655},
		'3': {name: '4.jpg', width: 520, height: 672},
		'4': {name: '5.jpg', width: 482, height: 599},
		'5': {name: '6.jpg', width: 402, height: 488},
		'6': {name: '7.jpg', width: 500, height: 413},
		'7': {name: '8.jpg', width: 1280, height: 1024},
		'8': {name: '9.jpg', width: 400, height: 266},
		'9': {name: '10.jpg', width: 1592, height: 1194},
		'10': {name: '11.jpg', width: 241, height: 209},
		'11': {name: '12.jpg', width: 1024, height: 701},
		'12': {name: '13.jpg', width: 600, height: 574},
		'13': {name: '14.jpg', width: 580, height: 387},
		'14': {name: '15.jpg', width: 500, height: 377},
		'15': {name: '16.jpg', width: 470, height: 408},
		'16': {name: '17.jpg', width: 470, height: 313},
		'17': {name: '18.jpg', width: 470, height: 313},
		'18': {name: '19.jpg', width: 575, height: 442},
	}
	
	function aspectRatio(width, height) {
		return height / width
	}
	
	function buildItem(id) {
		var image = images[id]
		var ratio = aspectRatio(image.width, image.height)
		return '<div class="item"><img src="interior/'
								+ image.name
								+ '" alt="Interior"' 
								+ 'width="' + columnWidth + '" height="' + Math.floor(ratio * columnWidth) +'"/>'
								+ '<h2>' + $(this).loremContent('title') + '</h2>'
								+ '<p>' + $(this).loremContent() + '</p></div>'
								
	}
	
	function addItems(num) {
		items = ''
		for (var i=0; i<num; i++) {
			items += buildItem(Math.floor(Math.random()*18))	
		}
		container.append($(items))
	}
	
	
	$('#add').click(function(){
		items = ''
		for (var i=0; i<5; i++) {
			items += buildItem(Math.floor(Math.random()*18))	
		}
		container.masonryBuilder('append', $(items))
	})
	
	addItems(5)
	
	container.masonryBuilder({columnWidth: columnWidth})
	
	
	container.infinitescroll({
	    navSelector  : '#page-nav',  
			nextSelector : '#page-nav a',
			itemSelector : '.item'
	  },
	
	  function( newElements ) {

			container.masonryBuilder('append', $(newElements))
	  }
	);

})
