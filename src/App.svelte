<script>
  import '../node_modules/bulma/css/bulma.min.css'
  let length = 8;
  let lower = true;
  let upper = false;
  let number = false;
  let special = false;

  let newPassword = "";


function generateRandomPassword() {
        let body = {
            length: length,
            lower: lower,
            upper: upper,
            number: number,
            special: special
        }
        let url = "https://nated.ca/pw"
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

</script>

<svelte:head>
  <style>
    body {
      margin: 0;
	padding: 0;
    }
  </style>
</svelte:head>

<section class="hero is-info is-fullheight">
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
<footer class="footer">
  <div class="content has-text-centered">
    <p>
      |    <strong>nated.ca</strong> This is nate typing in a description about he password management app I am making.</p>
  </div>
</footer>


