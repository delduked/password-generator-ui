$('#save').click(function(){

      let Password = $(this).parent().prev().children('input').val()
      let Username = $(this).parent().parent().prev().children('p').children('input').val()
      let Account = $(this).parent().parent().prev().prev().children('p').children('input').val()

      savePassword(Account,Username,Password)
      
})

const savePassword = async (Account, Username, Password) =>{
      try {
            let body = await {
                  Account: Account,
                  Username: Username,
                  Password: Password
            }

            let url = await "http://localhost:8080/db"
            fetch(url,{
                  method: 'POST',
                  body: JSON.stringify(body),
                  headers: {
                        "content-type":"application/json"
                  }
            })
            .then(data => {return data.json()})
            .then(json => {
                  console.log(json)
                  if (json.Status != 200 || json.Error != null){
                        console.log(json)
                    } else {
                        $('tbody').append(`
                        <tr [Key='`+json.Field.Key+`']>
                        <td id="Account">`+json.Field.Account+`</td>
                        <td id="Username">`+json.Field.Username+`</td>
                        <td id="Password">`+json.Field.Password+`</td>
                        </tr>
                        `)
                    }
                  console.log(json)
            })
            .catch(err => {throw err})
          
      } catch (error) {
            console.log(error);
      }
}