(function($){

	$.fn.extend({
		validate: function(  ) {
			
			var valid = true;
			
			function formatField( element, $bool ) {
				if( $bool ) {
				//console.log( element.attr('name'),$bool );
					element.addClass('invalid-field');
					valid = false;
				} else {
					if( element.hasClass('invalid-field') ) {
						element.removeClass('invalid-field');
					}
				}
			}
			
			this.each( function() {
				
				var required = $(this).find('.required');
				required.each( function() {
					var t = $(this);
					
					//check for empty values
					formatField( t, t.val().length == 0 );
				});
				
				var integersOnly = $(this).find('.validate-integers-only');
				integersOnly.each( function() {
					var t = $(this);
					var val = String(t.val());
					var regex = /^\d+$/;
					formatField( t, !regex.test( val ) );
				});
				
				var checked = $(this).find('.validate-true'); console.log('checked: ', checked );
				checked.each( function() {
					var t = $(this);
					if( !t.is(':checked') ) { console.log( t.attr('name'), t.is(':checked') );
						t.parent().addClass('red');
					} else { console.log( t.attr('name'), t.is(':checked') );
						if( t.parent().hasClass('red') ) {
							t.parent().removeClass('red');
						}
					}
				});
				
				var emails = $(this).find('.validate-email');
				emails.each( function() {
					var t = $(this);
					var val = String(t.val());
					var regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
					formatField( t, !regex.test( val ) );
				});
				
				var phones = $(this).find('.validate-phone');
				phones.each( function() {
					var t = $(this);
					var val = String(t.val());
					var regex = /^(1[\s]?[\-]?)?[\(]?(\d{3})[\)]?[\s]?[\-]?(\d{3})[\s]?[\-]?(\d{4})\s*[ext\. #]{0,6}\s*(\d*)?$/;
					formatField( t, !regex.test( val ) );
				});
				
			});
			
			return valid;
			
		}
	});
	
})(jQuery);