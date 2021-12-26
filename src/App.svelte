<script>
  import '../node_modules/bulma/css/bulma.min.css'
  let fieldsOnLoad = getFieldsOnLoad();
  let length = 8;
  let lower = true;
  let upper = false;
  let number = false;
  let special = false;


  let newAccount = "";
  let newUsername = "";
  let newPassword = "";

  function delPassword(key){
    fetch('http://192.168.0.32:5324/db/'+key,{
            method: 'DELETE',
        })
        .then(response => {
            return response.json()
        })
        .then(json =>{
            if (json.Status != 200 || json.Error != null){
                throw error
            } else {
              fieldsOnLoad = fetch('http://192.168.0.32:5324/db',{
                method: 'GET',
                headers: {"content-type":"application/json"}
              })
              .then(res =>{ return res.json()})
              .then(json =>{return json.Fields})
              .catch(err=>{throw err})
            }
        })
        .catch(error =>{throw error})
  }

  function getFieldsOnLoad() {
        return fetch('http://192.168.0.32:5324/db',{
            method: 'GET',
            headers: {"content-type":"application/json"}
        })
        .then(response => {
            return response.json()
        })
        .then(json =>{
            if (json.Status != 200 || json.Error != null){
                throw error
            } else {
              return json.Fields
            }
        })
        .catch(error =>{throw error})
}

function generateRandomPassword() {
        let body = {
            length: length,
            lower: lower,
            upper: upper,
            number: number,
            special: special
        }
        let url = "http://192.168.0.32:5324/pw"
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "content-type":"application/json"
            }
        })
            .then(data => {return data.json()})
            .then(json => {
              newPassword = json.Password
            })
            .catch(err => {throw err})
}
function saveNewPassword() {

  if (newAccount != "" || newUsername != "" || newPassword != ""){
      let body = {
        Account: newAccount,
        Username: newUsername,
        Password: newPassword,
      }
      let url = "http://192.168.0.32:5324/db"
        fetch(url,{
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
              "content-type":"application/json"
          }
      })
      .then(data => {return data.json()})
      .then(json => {

        if (json.Status != 200 || json.Error != null){
            throw error
        } else {
          fieldsOnLoad = fetch('http://192.168.0.32:5324/db',{
            method: 'GET',
            headers: {"content-type":"application/json"}
          })
          .then(res =>{ return res.json()})
          .then(json =>{return json.Fields})
          .catch(err=>{throw err})
        }

      })

  } else {
    console.log("Fields must not be be blank.")
  }
}

</script>

<svelte:head>
  <style>
    body {
      margin: 0;
	padding: 0;
    }
  </style>
</svelte:head>

<section class="hero is-info is-halfheight">
  <div class="hero-body"> 
    <div class="container is-max-desktop"> 
      <div class="columns">
        <div class="column is-two-fifths"> 
          <section class="is-large">
            <div class="title">Password Generator</div>
            <div class="subtitle">Generate a secure password from 4 to 64 characters with the options of your choice.</div>
          </section>
        </div>
        <div class="column is-three-fifths"> 
          <section class="is-large">
            <div class="field has-addons">
              <p class="control is-expanded">
                <input class="input" id="password" type="text" bind:value="{newPassword}" placeholder="Your Password Here">
              </p>
            </div>
            <div class="field has-addons">
              <p class="control is-expanded">
                <input class="input" id="length" bind:value="{length}" type="number" min="4" max="64" placeholder="Password Length">
              </p>
              <p class="control"><a class="button" id="submit" on:click|preventDefault={generateRandomPassword}>Generate</a></p>
            </div>
            <div class="field is-expanded is-full-width">
              <h2 class="subtitle">Choose your options</h2>
            </div>
            <div class="field">
              <div class="buttons is-left">
                <div class="button" id="lowercase" class:is-success={lower} on:click="{() => lower = !lower}">LowerCase</div>
                <div class="button" id="uppercase" class:is-success={upper} on:click="{() => upper = !upper}">UpperCase</div>
                <div class="button" id="number" class:is-success={number} on:click="{() => number = !number}">Numbers</div>
                <div class="button" id="special" class:is-success={special} on:click="{() => special = !special}">Special Characters</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="hero is-halfheight">
  <div class="hero-body">
    <div class="container is-max-desktop">
      <div class="columns">
        <div class="column is-two-fifths"> 
          <section class="is-large">
            <div class="title">Save Your New Password</div>
            <div class="subtitle">Save the generated password for later use!</div>
          </section>
        </div>
        <div class="column is-three-fifths"> 
          <section class="is-large">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="text" bind:value="{newAccount}"  placeholder="Account">
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="text" bind:value="{newUsername}"  placeholder="Username">
              </p>
            </div>
            <div class="field has-addons">
              <p class="control is-expanded">
                <input class="input" type="text"  bind:value="{newPassword}" placeholder="Password">
              </p>
              <p class="control"><a class="button" on:click="{saveNewPassword}" id="save">Save</a></p>
            </div>
          </section>
        </div>
      </div>
      <div class="columns">
        <div class="column is-full-width">
          <section class="is-large">
            <table class="table is-fullwidth">
              <tbody>
                {#await fieldsOnLoad}
                  <tr Key="testkey1">
                    <td id="account"></td>
                    <td id="username"></td>
                    <td id="password"></td>
                  </tr>
                  {:then fields}
                  {#each fields as field}
                    <tr Key="{field.Key}">
                      <td id="account">
                        <input type="text" value="{field.Account}" class="input">
                        </td>
                      <td id="username">
                        <input type="text" value="{field.Username}" class="input">
                        </td>
                      <td id="password">
                        <div class="field has-addons">
                          <p class="control is-expanded">
                            <input class="input" type="text"  bind:value="{field.Password}" placeholder="Password">
                          </p>
                          <p class="control"><a class="button" on:click="{delPassword(field.Key)}" id="del">Del</a></p>
                        </div>
                    </tr>
                  {/each}
                  {:catch err}
                    <tr Key="">
                      <td id="account">{err}</td>
                      <td id="username">{err}</td>
                      <td id="password">{err}</td>
                    </tr>
                {/await}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  </div>
</section>
<footer class="footer">
  <div class="content has-text-centered">
    <p>
      |    <strong>nated.ca</strong> This is nate typing in a description about he password management app I am making.</p>
  </div>
</footer>


