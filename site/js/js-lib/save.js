$('#save').click(function(){

      let password = $(this).parent().prev().children('input').val()
      let username = $(this).parent().parent().prev().children('p').children('input').val()
      let account = $(this).parent().parent().prev().prev().children('p').children('input').val()

      console.log(password);
      console.log(username);
      console.log(account);

      savePassword(account,username,password)
      
})

const savePassword = async (account, username, password, jq) =>{
      try {
            let body = await {
                  name: account,
                  username: username,
                  password: password
            }

            let url = await "http://192.168.0.32:8989/postPassword"
            fetch(url,{
                  method: 'POST',
                  body: JSON.stringify(body),
                  headers: {
                        "content-type":"application/json"
                  }
            })
            .then(data => {return data.json()})
            .then(json => {
                  
                  $('tbody').append(`
                        <tr [uid='`+json.uid+`']>
                        <td id="account">`+json.name+`</td>
                        <td id="username">`+json.username+`</td>
                        <td id="password">`+json.password+`</td>
                        </tr>
                  `)

                  console.log(json)
            })
            .catch(err => {throw err})
          
      } catch (error) {
            console.log(error);
      }
}