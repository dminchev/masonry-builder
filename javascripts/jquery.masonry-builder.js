(function( $ ){
	var settings = {
		animationOptions : { queue: false, duration: 500, easing: 'linear' },
		columnWidth : 240,
		gutterWidth : 0,
		isAnimated : false,
		isFitWidth : false,
		isResizable : true,
		isRTL : false,
		itemSelector : '.item',

		containerSelector : '',
		container : '',
		itemOffset : 0,
		columnMinWidth : 240
	}
	
  var methods = {
    init : function(options) { 
			$(this).masonryBuilder('setSetting', options)
			
      if (options == undefined || options.containerSelector == undefined) {
				settings.container = this
			} else {
				settings.container = $(settings.containerSelector)
			}

			$(window).smartresize(function(){
				$(this).masonryBuilder('build')
			}).resize()
			return this
    },

    itemOffset : function(outerWidth, width) {
      settings.itemOffset = outerWidth - width
			return this
    },

		recalculateColumWidth : function(options) {
			settings.columnWidth = Math.floor(settings.container.width() / Math.floor(settings.container.width() / settings.columnMinWidth))
			return this
		},

    fixWidth : function() { 
      $(settings.containerSelector + ' ' + settings.itemSelector).each(function() {
				$(this).masonryBuilder('itemOffset', $(this).outerWidth(true), $(this).width())
				$(this).css('width', settings.columnWidth - settings.itemOffset)
			})
			return this
    },

		setSetting : function(options) {
			settings = $.extend(settings, options)
			settings.columnMinWidth = settings.columnWidth
		},

		build : function() {
			$(this).masonryBuilder('recalculateColumWidth').masonryBuilder('fixWidth')
			settings.container.imagesLoaded(function(){
				settings.container.masonry(settings);
		 	});
			return this
		},
		
		append : function(items) {
			settings.container.append(items).masonryBuilder('fixWidth').masonry( 'appended', items, true);
			return this
		}
		
  };

  $.fn.masonryBuilder = function( method ) {
    
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.masonryBuilder' );
    }    
  
  };

})( jQuery );