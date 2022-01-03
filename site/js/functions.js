$('a#copy').click(function(){

      let Password = $("input#password").val()
      console.log(Password)
      $("p.is-expanded input.input").val(Password)
      
})
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
                  let append = `<tr id="edit"><td><input value="`+account+`" class="input" type="text" placeholder="account"></td><td><input value="`+username+`" class="input" type="text" placeholder="username/email"></td><td><input value="`+password+`" class="input" type="password" placeholder="password"></td><td><button id="update" class="button">Update</button></td></tr>`
                  $(append).insertAfter(elementclicked)
      }
})
// $('html').click(function(){

//       $('#edit').remove()
// })

$(document).ready(function(){
    console.log('document ready');
  
    getFieldsOnLoad()

      $("#lowercase").click(function() {

            if ($("#lowercase").hasClass("is-success")) {
                $("#lowercase").removeClass("is-success")
                console.log('lowercase deactivated');
            } else {
                $("#lowercase").addClass("is-success")
                console.log('lowercase activated');
            }
        });

      $("#uppercase").click(function() {

            if ($("#uppercase").hasClass("is-success")) {
                $("#uppercase").removeClass("is-success")
                console.log('uppercase deactivated');
            } else {
                $("#uppercase").addClass("is-success")
                console.log('uppercase activated');
            }
        });

      $("#number").click(function() {

            if ($("#number").hasClass("is-success")) {
                $("#number").removeClass("is-success")
                console.log('numbers deactivated');
            } else {
                $("#number").addClass("is-success")
                console.log('numbers activated');
            }
        });

      $("#special").click(function() {

            if ($("#special").hasClass("is-success")) {
                $("#special").removeClass("is-success")
                console.log('special deactivated');
            } else {
                $("#special").addClass("is-success")
                console.log('special activated');
            }
        });

        $("#submit").click(() =>{
            if (!$("#special").hasClass("is-success") && !$("#number").hasClass("is-success") && !$("#uppercase").hasClass("is-success") && !$("#lowercase").hasClass("is-success")){
                console.log('must select at least one option.');
            } else  if ($("#special").hasClass("is-success") || $("#number").hasClass("is-success") || $("#uppercase").hasClass("is-success") || $("#lowercase").hasClass("is-success")){
                request(
                    $("#length").val(),
                    $("#lowercase").hasClass("is-success"),
                    $("#uppercase").hasClass("is-success"),
                    $("#number").hasClass("is-success"), 
                    $("#special").hasClass("is-success")
                )
            }
        })

});

const request = async (length,lower,upper,number,special)=>{
    try {
        let body = await {
            length: parseInt(length),
            lower: lower,
            upper: upper,
            number: number,
            special: special
        }
        console.log(body)
        let url = await "http://localhost:8080/pw"
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "content-type":"application/json"
            }
        })
            .then(data => {return data.json()})
            .then(json => {
                if (json.Error != null || json.Status != 200) {
                    console.log(json)
                } else {
                    $("#password").val(json.Password)
                }

            })
            .catch(err => {throw err})

    } catch (error) {
        console.log(error)
    }
}

const getFieldsOnLoad = async () => {
    try {


        fetch('http://localhost:8080/db',{
            method: 'GET',
            Cookie: document.cookie,
            credentials: 'include',
            headers: {
                "content-type":"application/json",
                "Access-Control-Allow-Origin": "*",
                'Accept': 'application/json',
                "Cache": "no-cache",
            }
        })
        .then(response => {
            return response.json()
        })
        .then(json =>{
            console.log(json)
            if (json.Status == 200 || json.Error == null){
                for (i=0; i <= json.Fields.length -1; i++){
                    $('tbody').append(`
                        <tr Key="`+json.Fields[i].Key+`">
                        <td id="account">
                        <input type="text" value="`+json.Fields[i].Account+`" class="input">
                        </td>
                        <td id="username">
                        <input type="text" value="`+json.Fields[i].Username+`" class="input">
                        </td>
                        <td id="password">
                        <div class="field has-addons">
                        <p class="control is-expanded">
                        <input class="input" type="text" value="`+json.Fields[i].Password+`" placeholder="Password">
                        </p>
                        <p class="control"><a class="button" id="del">Del</a></p>
                        </div>
                        </tr>
                    `)
                }
            }
        })
        .catch(error =>{throw error})
    } catch (error) {
        console.log(error)
    }
}
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
  
  const deletePassword = async (Key,Account, Username, Password, buttonClicked) =>{
        try {
              let body = await {
                    Key: Key,
                    Account: Account,
                    Username: Username,
                    Password: Password
              }
  
              let url = await "http://192.168.0.32:8080/db"
              let res = await fetch(url,{
                    method: 'PATCH',
                    body: JSON.stringify(body),
                    headers: {
                          "content-type":"application/json"
                    }
              })

              let data = await res.json()
              if (data.Status == "200" && data.Error == null){
                // clear contents of tbody
                // append contents after getting data from database
                $("tbody").empty()
                getFieldsOnLoad()
              }

            
        } catch (error) {
              console.log(error);
        }
  }