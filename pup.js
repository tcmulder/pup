/* Pup Popups (i.e. p'up 🐾) v1.0.0 | MIT | www.tcmulder.com */
( function ( $ ) {

    // create a jquery plugin
    $.fn.pup = function( options ) {

        // for each popup trigger
        return this.each( function() {

            // set option defaults
            options = options || {};
            options.lock = ( false === options.lock ? false : true )

            // cache lockable frame
            var $frame = $( 'html' );

            // prep to store the popup
            var $pup = null;

            // store this
            var $this = $( this );

            // get the target if it exists
            var target = $this.data( 'pup' );

            // if this is a trigger (and thus has a target)
            if ( target ) {
                // cache the popup element (via id from data attribute on the trigger)
                $pup = $( '#' + target );
                // on click of the trigger activate the popup
                $this.on( 'click.pup', function(){
                    $pup.trigger( 'open.pup' );
                } );
            // if this is the popup itself (a popup with no external trigger)
            } else {
                // identify this as the popup
                $pup = $this;
            }

            // close the popup on click of the close button
            $pup.find( '.js-pup-close' ).on( 'click.pup', function(){
                $pup.trigger( 'close.pup' );
            } );

            // show the popup and lock scrolling
            $pup.on( 'open.pup', function() {
                $pup.addClass( 'active' );
                if ( true === options.lock ) {
                    $frame.addClass( 'pup-lock' );
                }
            } );

            // close popup and unlock body
            $pup.on( 'close.pup', function() {
                $pup.removeClass( 'active' );
                if ( true === options.lock ) {
                    $frame.removeClass( 'pup-lock' );
                }
            } );

        });

    };

}( jQuery ));
