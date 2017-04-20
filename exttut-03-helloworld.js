define( [
        'jquery'
    ],
    function ( $ ) {
        'use strict';

        return {

            //Paint resp.Rendering logic
            paint: function ( $element, layout ) {

                var $helloWorld = $( document.createElement( 'div' ) );
                $helloWorld.html( 'Hello World from the extension "01-ExtTut-HelloWorld"<br/>' );
                $element.append( $helloWorld );

            }
        };
    } );
