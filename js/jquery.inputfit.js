/*global define:true */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.inputfit = function(options) {
        let settings = $.extend({
            minSize   : 10,
            maxSize   : false
        }, options);

        this.each(function() {
            let $input = $(this);

            if ( !$input.is(':input') ) {
                return;
            }

            $input.off('keyup.inputfit keydown.inputfit');

            let maxSize = parseFloat(settings.maxSize || $input.css('font-size'), 10);
            let width   = $input.width();
            let clone   = $input.data('inputfit-clone');

            if (!clone) {
                clone = $('<div></div>', {
                    css : {
                        fontSize     : $input.css('font-size'),
                        fontFamily   : $input.css('font-family'),
                        fontStyle    : $input.css('font-style'),
                        fontWeight   : $input.css('font-weight'),
                        fontletiant  : $input.css('font-letiant'),
                        letterSpacing: $input.css('letter-spacing'),
                        whiteSpace   : 'nowrap',
                        position     : 'absolute',
                        left         : '-9999px',
                        visibility   : 'hidden'
                    }
                }).insertAfter($input);

                $input.data('inputfit-clone', clone);
            }

            $input.on('keyup.inputfit keydown.inputfit', function() {
                let $this = $(this);

                clone.text($this.val());

                let ratio = width / (clone.width() || 1),
                    currentFontSize = parseInt( $this.css('font-size'), 10 ),
                    fontSize = Math.floor(currentFontSize * ratio);

                if (fontSize > maxSize) { fontSize = maxSize; }
                if (fontSize < settings.minSize) { fontSize = settings.minSize; }

                $this.css('font-size', fontSize);
                clone.css('font-size', fontSize);
            }).triggerHandler('keyup.inputfit');
        });

        return this;
    };

}));
