(function( $ ){
	
	var settings = {
		lorem: "Stumptown irony VHS, keffiyeh ex tumblr keytar aute excepteur. Wayfarers DIY raw denim, pariatur williamsburg incididunt fanny pack you probably haven't heard of them quinoa non helvetica aute laboris. Irure tempor terry richardson, sunt wolf eu irony veniam craft beer master cleanse voluptate beard +1 banksy. Synth voluptate whatever chambray irony in, jean shorts tempor veniam twee. Scenester you probably haven't heard of them 8-bit odio. Voluptate vero duis, mollit banksy shoreditch fanny pack american apparel mustache PBR. Ethical veniam bicycle rights nisi, odio yr assumenda synth fap. Leggings Austin ad, sustainable labore fap wolf. Vinyl brooklyn farm-to-table quinoa dolore nihil. Retro lo-fi raw denim est excepteur dreamcatcher. Whatever master cleanse bicycle rights irure deserunt nulla, jean shorts DIY gentrify exercitation etsy squid incididunt. Fugiat ea hoodie before they sold out cred, cardigan qui. Fap eiusmod reprehenderit exercitation, cred terry richardson biodiesel incididunt ex tempor synth est do ut. Vinyl tumblr letterpress craft beer trust fund.",
		maxSentences: 5,
		maxWords: 4
	}
	
  var methods = {
    init : function(options) { 
      settings = $.extend(settings, options)
			return $(this).loremContent('sentence')
    },

    sentence : function(options) {
			settings = $.extend(settings, options)
			// settings.lorem += ' '
    	var loremSentences = settings.lorem.split('. ')
			loremSentences = $.grep(loremSentences, function(n){
				return(n);
			});
			
			var sentences = Math.round(Math.random() * settings.maxSentences)
			if (sentences == 0) sentences++
			return $(this).loremContent('_text', loremSentences, sentences, '. ')
    },

    title : function(options) {
			settings = $.extend(settings, options)
      var loremWords = settings.lorem.toLowerCase().replace(/\.|\,/gi, '').split(' ')
			var loremWordsCount = loremWords.length
			var words = Math.round(Math.random() * settings.maxWords)
			if (words <= 1) words++

			return $(this).loremContent('_text', loremWords, words, ' ')
    },

    _text : function(arr, total, glue) { 
			var text = ''
      for (var i=0; i < total; i++) {
				var whichItem = Math.floor(Math.random() * arr.length)
				text += arr[whichItem] + glue
			}
			return text
    }
  };

  $.fn.loremContent = function( method ) {
    
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.loremContent' );
    }    
  
  };

})( jQuery );