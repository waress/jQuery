$(function () {

  // elemek összegyűjtése
  let $button = $('#createPost');
  let $postList = $('#postList');
  let $postTitle = $('#postTitle');
  let $postBody = $('#postBody');
  let $modal = $('#exampleModal');


// CreatePost('alma', 'sahdf alksdhf');
// CreatePost('körte', 'lorem ipsum');

  //  gombnyomásra reagálás
  $button.click(function () {

//    értékek összeszedése
    let title = $postTitle.val();
    let body = $postBody.val();

//    bejegyzés létrehozás
    CreatePost(title, body);

//    előző értékek kitakarítása
    $postTitle.val('');
    $postBody.val('');

//    modal bezárása
    $($modal).modal('hide');
  });



  /////////////////////////////

  function CreatePost(title, body){
    console.log(title);
    console.log(body);
    let postHTML = '<div class="mb-4">' +
        '<header><h3>' + title + '</h3></header>' +
        '<main>' + body + '</main>' +
      '</div>';
    $postList.prepend(postHTML);
  }
});
