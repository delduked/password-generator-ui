var update = document.getElementById('update')
update.onclick = function(){
    // let previousAccount = $(this).parent().prev().children("td#account").text()
    // let previousUsername = $(this).parent().prev().children("td#username").text()
    // let previousPassword = $(this).parent().prev().children("td#password").text()
    let buttonClicked = $(this)
    let Key = $(this).parent().parent().prev().attr('Key')
    let Account = $(this).parent().children("td#account").val()
    let Username = $(this).parent().children("td#username").val()
    let Password = $(this).parent().children("td#password").val()

    console.log(buttonClicked)
    console.log(Key)
    console.log(Account)
    console.log(Username)
    console.log(Password)

    //updatePassword(account,username,password)
    
}
  
  // const updatePassword = async (Key,Account, Username, Password, buttonClicked) =>{
  //       try {
  //             let body = await {
  //                   Key: Key,
  //                   Account: Account,
  //                   Username: Username,
  //                   Password: Password
  //             }
  
  //             let url = await "http://192.168.0.32:8080/db"
  //             fetch(url,{
  //                   method: 'PATCH',
  //                   body: JSON.stringify(body),
  //                   headers: {
  //                         "content-type":"application/json"
  //                   }
  //             })
  //             .then(data => {return data.json()})
  //             .then(json => {
  //                   buttonClicked.parent().parent().prev().children("td#account").text(account)
  //                   buttonClicked.parent().parent().prev().children("td#username").text(username)
  //                   buttonClicked.parent().parent().prev().children("td#password").text(password)
  //                   console.log(json)
  //             })
  //             .catch(err => {throw err})
            
  //       } catch (error) {
  //             console.log(error);
  //       }
  // }