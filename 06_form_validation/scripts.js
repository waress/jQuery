$(function () {

  //  konstansok
  const validClass = 'is-valid';
  const invalidClass = 'is-invalid';

  //  elemek összegyűjtése
  let $button = $('button');
  let $checkBox = $('input[type="checkbox"]');
  let $invalidFieldList = $('div.alert-danger ul');
  let $alert = $('div.alert-danger');
  let $successText = $('div#successText');
  let $form = $('form');
  let $username = $('#username');
  let $password = $('input[type="password"]');


  //  gombnyomásra reagálás
  $button.click(function (event) {

    //    alapértelmezett működés megakasztása
    event.preventDefault();

    //    nem megfelelő mezők
    let invalidFields = [];
    $invalidFieldList.html('');


    //    mezők ellenőrzése

    // felhasználónév
    let username = $username.val();
    if(username.length === 0){

      // hibás kitöltés
      invalidFields.push('Felhasználónév');
      $username.removeClass(validClass);
      $username.addClass(invalidClass);
    } else {

      //      helyes kitöltés
      $username.removeClass(invalidClass);
      $username.addClass(validClass);
    }

    //    jelszó
    let password = $password.val();
    if(password.length <= 5){
      // hibás kitöltés
      invalidFields.push('Jelszó');
      $password.removeClass(validClass);
      $password.addClass(invalidClass);
    } else {
      // helyes kitöltés
      $password.removeClass(invalidClass);
      $password.addClass(validClass);
    }


    //    nem megfelelő mezők


    //    ÁSZF
    let isChecked = $checkBox.prop('checked');
    if (!isChecked) {

      //      hibás kitöltés
      invalidFields.push('ÁSZF');
      $checkBox.addClass(invalidClass);
      $checkBox.removeClass(validClass);
    } else {

      //      helyes kitöltés
      $checkBox.removeClass(invalidClass);
      $checkBox.addClass(validClass);
    }

    //    sikeres, sikertelen elágazás
    if(invalidFields.length === 0){
      $successText.show();
      $form.hide();
      $alert.hide();
    } else {

//      sikertelen kitöltés
      $alert.show();

//      hibák kiírása
      $.each(invalidFields, function (index, field) {
        console.log(index + ': ' + field);
        $invalidFieldList.append('<li>' + field + '</li>');
      });
    }

  });

})
