var register = async () => {
      var username = $('#username').val()
      var password = $('#password').val()
      var secret = $('#secret').val()

      var userinfo = {
            username: username,
            password: password,
            secret: secret
      }

      fetch("/auth/signup",{
            headers: {
                  'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(userinfo)
      }).then(res => {
            return res.json()
      }).then( data =>{
            $('p').text(data.message)
      }).catch(err => {
            $('p').text(err)
      })
}