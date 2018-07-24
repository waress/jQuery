$(function () {

  // elemek összegyűjtése
  let $progressbar = $('.progress-bar');
  let $input = $('input[type="number"]');

  $input.change(function () {

    // % lekérése
    let percent = $input.val();

    // állítsuk be a progressbart
    $progressbar.text(percent + '%');
    $progressbar.css('width', percent + '%');
    $progressbar.attr('aria-valuenow', percent)
  });

});
