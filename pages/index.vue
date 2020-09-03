<template>
  <div class="container">
    <a-form :form="form">
      <a-form-item>
        <a-input placeholder="Nama"></a-input>
      </a-form-item>

      <a-form-item>
        <a-input placeholder="NPM"></a-input>
      </a-form-item>

      <a-form-item>
        <a-input-number
          placeholder="Angkatan"
          :min="2015"
          :max="2020"
        ></a-input-number>
      </a-form-item>

      <a-form-item>
        <a-radio-group default-value="L" button-style="solid">
          <a-radio-button value="L">Laki - laki</a-radio-button>
          <a-radio-button value="P">Perempuan</a-radio-button>
        </a-radio-group>
      </a-form-item>

      <a-form-item>
        <a-radio-group default-value="Ya" button-style="solid">
          <a-radio-button value="Ya">Bawa laptop</a-radio-button>
          <a-radio-button value="Tidak">Tidak bawa laptop</a-radio-button>
        </a-radio-group>
      </a-form-item>

      <a-form-item>
        <a-input placeholder="Alamat surel (email)"></a-input>
      </a-form-item>

      <a-form-item>
        <a-textarea placeholder="Alasan mengikuti" allow-clear></a-textarea>
      </a-form-item>

      <a-form-item>
        <a-button type="primary">Primary</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 55px;
  color: #35495e;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 25px 0;
}

.subtitle {
  font-weight: 300;
  font-size: 1.1rem;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 15px;
  max-width: 600px;
}

.subtitle a {
  font-weight: 500;
  color: inherit;
}

.links {
  padding-top: 15px;
  margin-bottom: 20px;
}

.content-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px;
}

.plus {
  font-size: 2.5rem;
  margin: 15px;
  color: #35495e;
}

.h3 {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
  margin: 10px;
}
</style>
