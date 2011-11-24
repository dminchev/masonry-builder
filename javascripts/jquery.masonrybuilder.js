(function( $ ) {
	
	var methods = {
		init: function(options){
			$(window).smartresize(function(){
				$(this).masonryBuilder('build', options)
			}).resize();
		},
		
		build: function(options){
			var settings, container, columnWidth, itemOffset

			settings = $.extend({
				// jQuery Massonry Plugin Options
				animationOptions: { queue: false, duration: 500 },
				columnWidth: 240,
				gutterWidth: 0,
				isAnimated: false,
				isFitWidth: false,
				isResizable: true,
				isRTL: false,
				itemSelector: '.item',

				container: '#container'
			}, options)

			container = $(settings.container);

			columnWidth = Math.floor(container.width() / Math.floor(container.width() / settings.columnWidth))
			$(settings.container + ' ' + settings.itemSelector).each(function() {
				itemOffset = $(this).outerWidth(true) - $(this).width();
				$(this).css('width', columnWidth - itemOffset)
			})

			settings.columnWidth = columnWidth
			settings.gutterWidth = 0 // Disable gutter so we could resize items properly to fix the container width

			container.imagesLoaded(function(){
			  container.masonry(settings)
			})
		}
	} 
	
  $.fn.masonryBuilder = function( method ) {
		// Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.masonryBuilder' );
    }
  }
})( jQuery )