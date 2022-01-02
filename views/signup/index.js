var register = async () => {
      var username = $('#username').val()
      var password = $('#password').val()
      var secret = $('#secret').val()

      var userinfo = {
            Username: username,
            Password: password,
            Secret: secret
      }

      fetch("http://localhost:8080/signup",{
            headers: {
                  'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(userinfo)
      }).then(res => {
            return res.json()
      }).then( data =>{
            if(data.Status == '200' && data.Error == null){
                  document.cookie = "authToken=" + data.Bearer;
                  $('p').text('Login Succesful!')
                  setTimeout(window.location.reload.bind(window.location),1000)
            } else {
              $('p').text('Login Failed!')
            }
      }).catch(err => {
            $('p').text(err)
      })
}