<template>
  <div class="container grid">
    <div class="blur-underlay"></div>
    <vs-dialog v-model="dialogActive" prevent-close not-close>
      <template #header>
        <h1>Pendaftaran Event <strong>SEED</strong></h1>
      </template>
      <form id="form" @submit.prevent="onSubmit">
        <vs-row>
          <vs-input v-model="nama" border label-placeholder="Nama"></vs-input>
        </vs-row>
        <vs-row>
          <vs-input v-model="npm" border label-placeholder="NPM"></vs-input>
        </vs-row>
        <vs-row>
          <vs-select v-model="angkatan" label-placeholder="Angkatan">
            <vs-option label="2020" value="2020">2020</vs-option>
            <vs-option label="2019" value="2019">2019</vs-option>
            <vs-option label="2018" value="2018">2018</vs-option>
            <vs-option label="2017" value="2017">2017</vs-option>
            <vs-option label="2016" value="2016">2016</vs-option>
            <vs-option label="2015" value="2015">2015</vs-option>
          </vs-select>
        </vs-row>
        <vs-row>
          <vs-radio v-model="gender" val="L">Laki - Laki</vs-radio>
          <vs-radio v-model="gender" val="P">Perempuan</vs-radio>
        </vs-row>
        <vs-row>
          <vs-switch v-model="bawaLaptop">
            <template #off> Tidak bawa laptop </template>
            <template #on> Bawa laptop </template>
          </vs-switch>
        </vs-row>
        <vs-row>
          <vs-input
            v-model="surel"
            border
            type="email"
            label-placeholder="Alamat surel (email)"
          ></vs-input>
        </vs-row>
        <vs-row>
          <vs-input
            v-model="alasanIkut"
            border
            label-placeholder="Alasan mengikuti acara"
          ></vs-input>
        </vs-row>
        <vs-row>
          <vs-button>Kirim</vs-button>
        </vs-row>
      </form>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nama: '',
      npm: undefined,
      angkatan: '2020',
      gender: 'L',
      bawaLaptop: false,
      surel: '',
      alasanIkut: '',
      dialogActive: true,
    };
  },
  methods: {
    onSubmit() {
      console.log({
        nama: this.nama,
        npm: this.npm,
        angkatan: this.angkatan,
        gender: this.gender,
        bawaLaptop: this.bawaLaptop,
        surel: this.surel,
        alasanIkut: this.alasanIkut,
      });
    },
  },
};
</script>

<style>
.container {
  max-width: 500px;
  width: 95%;
  margin: 20px auto;
}

.blur-underlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  filter: blur(3px);
  z-index: -1;
}

#form {
  border-radius: 35px;
  padding: 20px 10px;
}

.vs-dialog {
  padding: 20px 30px;
}

h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  text-align: center;
}

.vs-row {
  margin: 40px 0;
}

.vs-row:first-of-type {
  margin-top: 0;
}

.vs-row:last-of-type {
  margin: 20px 0;
}

.vs-input {
  font-size: 1.1em;
}

.vs-input-parent,
.vs-input {
  width: 100%;
}

.vs-radio-content {
  margin-right: 10px;
}

.vs-switch {
  margin: 0 5px;
}
</style>
