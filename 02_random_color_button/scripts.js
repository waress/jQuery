$(function () {
  // html elemek összegyűjtése változókba
  let $button = $('button#random-color');
  console.log($button);

  $button.click(function(){

    // szín keverése
    const MAX = 255;
    let red = Math.round(Math.random() * MAX);
    let blue = Math.round(Math.random() * MAX);
    let green = Math.round(Math.random() * MAX);


    // szín beállítása
    $button.css('background-color', 'rgb(' + red + ', ' + green + ', ' + blue + ')');

    // előtér szín beállítás
    let avg = (red + green + blue) / 3;
    console.log(avg / 255);

    if(avg/255 > .5){
      // erősebb, sötétebb szín
      $button.css('color', 'black');
    } else {
      // gyengébb szín
      $button.css('color', 'white');
    }
  })

})
