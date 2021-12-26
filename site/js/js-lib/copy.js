$('a#copy').click(function(){

      let Password = $("input#password").val()
      console.log(Password)
      $("p.is-expanded input.input").val(Password)
      
})