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
  <title>Password Generator</title>
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
    <p style="word-wrap: break-word;">
      <em>Donate</em> <br> <br>
      <strong>BTC: </strong> bc1qx0vchcqhev04lavqxqw28g3cvfx9ljavtq37ue <br>--<br>
      <strong>ETH: </strong> 0x18F5e463889aB04aA6cF6b90C8B822d52B2526d5 <br>--<br>
      <strong>ADA: </strong> addr1q9n70j6vqy888ffqgnqjjuvna0uvw70prgmlvu9wdnjl6zt8ul95cqgwwwjjq3xp99ce86lccau7zx3h7ec2um89l5ys9ps46u <br>--<br>
      <strong>XRP: </strong> rnhCCNykamgVubeUx4sMfvrKnUCyef9T6K <br>--<br>
      <strong>SOL: </strong> 1jKW5K2sofpw4S6cZH3MkfDuSWAgee4ajgtzSyVaLCs <br>--<br>
      <strong>DOT: </strong> 1VeCgpyMkf9LqKJXNFmJq6E2vGK2Dh9in9MRDZkHMDUpGd3 <br>--<br>
      <strong>ALGO: </strong> NKBSYOMLVD6KPACXYWDNOBMHXP5YFKHBR5ALGWOPFVYN6NH6GDWU6ZSAAA <br>--<br>
    </p>
  </div>
</footer>


