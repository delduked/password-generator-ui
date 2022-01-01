var login = async () => {
      var username = $('#username').val()
      var password = $('#password').val()

      var userinfo = {
            Username: username,
            Password: password,
      }

      fetch("http://192.168.0.6/",{
            headers: {
                  'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(userinfo)
      }).then(res => {
            return res.json()
      }).then( data =>{
            
	    if(data.message == 'reload'){
                $('p').text('Login Succesful!')
	    	setTimeout(window.location.reload.bind(window.location),1000)
	    }

      }).catch(err => {
            $('p').text(JSON.stringify(err))
      })
}
