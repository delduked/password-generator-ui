
$(document).ready(function(){
    console.log('document ready');

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
        let url = await "http://192.168.0.6:8080/generateBody"
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "content-type":"application/json"
            }
        })
            .then(data => {return data.json()})
            .then(json => {
                if (json.error == null && json.status == 200) {
                    $("#password").val(json.password)
                } else {
                    console.log(json)
                }

            })
            .catch(err => {throw err})

    } catch (error) {
        console.log(error)
    }
}