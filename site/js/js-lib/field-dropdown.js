$('tr').click(function(){
      var elementclicked = $(this)
      var hasBeenClicked = $('#edit')

      var account = $(this).children('td#account').text()
      var username = $(this).children('td#username').text()
      var password  = $(this).children('td#password').text()

      console.log(password);

      if (hasBeenClicked.length > 0) {
            $('#edit').remove()
      } else {
                  let append = `<tr id="edit"><td><input value="`+account+`" class="input" type="text" placeholder="account"></td><td><input value="`+username+`" class="input" type="text" placeholder="username/email"></td><td><input value="`+password+`" class="input" type="password" placeholder="password"></td><td><button id="edit" class="button">Edit</button></td></tr>`
                  $(append).insertAfter(elementclicked)
      }
})
// $('html').click(function(){

//       $('#edit').remove()
// })