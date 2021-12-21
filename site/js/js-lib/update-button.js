$('#edit').click(function(){
      // let previousAccount = $(this).parent().prev().children("td#account").text()
      // let previousUsername = $(this).parent().prev().children("td#username").text()
      // let previousPassword = $(this).parent().prev().children("td#password").text()

      let account = $(this).parent().children("td#account").val()
      let username = $(this).parent().children("td#username").val()
      let password = $(this).parent().children("td#password").val()

      updatePassword(account,username,password)
      
})

const updatePassword = async (account, username, password, jq) =>{
      try {
            let body = await {
                  account: account,
                  username: username,
                  password: password
            }

            let url = await "http://192.168.0.6:8080/updatePassword"
            fetch(url,{
                  method: 'POST',
                  body: JSON.stringify(body),
                  headers: {
                        "content-type":"application/json"
                  }
            })
            .then(data => {return data.json()})
            .then(json => {
                  jq.parent().parent().prev().children("td#account").text(account)
                  jq.parent().parent().prev().children("td#username").text(username)
                  jq.parent().parent().prev().children("td#password").text(password)
                  console.log(json)
            })
            .catch(err => {throw err})
          
      } catch (error) {
            console.log(error);
      }
}