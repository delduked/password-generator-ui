
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