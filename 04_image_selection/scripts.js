$(function() {
  let $img = $('img');

  $img.click(function (){

    let $actualImage = $( this );

    if( !$( $actualImage ).hasClass( 'half-scale' )) {
      return;
    }

    let $previousImage = $( 'img:not(.half-scale)' );

    $previousImage.addClass('half-scale');
    $actualImage.removeClass('half-scale');
  });
})
