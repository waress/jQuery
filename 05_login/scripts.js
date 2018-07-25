$(function () {

  //  teszteléshez megadott email és jelszó páros
  const email = 'user@domain.hu';
  const jelszo = '123456';

  //  elemek begyűjtése
  let $button = $('button.btn-primary');
  let $email = $('input[type="email"]');
  let $jelszo = $('input[type="password"]');
  let $alertSuccess = $('div.alert-success');
  let $alertDanger = $('div.alert-danger');


  //  click esemény reagálása
  $button.click(function () {
    //    alapértelmezett eseményre reagálás megakasztása
    event.preventDefault(); // submit miatt kell - ne dobjon tovább

    //    eldönteni, hogy bejelentkezhet-e
    if (email === $email.val() && jelszo === $jelszo.val()) {
      $alertDanger.hide();
      $alertSuccess.show();
    } else {
      $alertSuccess.hide();
      $alertDanger.show();
    }

    console.log('katt');
  });

});
