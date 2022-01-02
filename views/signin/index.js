var login = async () => {
      var username = $('#username').val()
      var password = $('#password').val()

      var userinfo = {
            Username: username,
            Password: password,
      }

      fetch("http://localhost:8080/signin",{
            headers: {
                  'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(userinfo)
      }).then(res => {

            return res.json()
      }).then( data =>{

	    if(data.Status == '200' && data.Error == null){
                $('p').text('Login Succesful!')
                  document.cookie = "authToken=" + data.Bearer;
	    	      setTimeout(window.location.reload.bind(window.location),1000)
	    } else {
            $('p').text('Login Failed!')
          }

      }).catch(err => {
            $('p').text(JSON.stringify(err))
      })
}
