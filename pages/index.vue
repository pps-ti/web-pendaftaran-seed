<template>
  <div class="container grid">
    <div class="blur-underlay">
      <vue-particles
        color="#353535"
        :particle-size="4"
        :particles-number="50"
      ></vue-particles>
    </div>
    <vs-dialog v-model="dialogActive" prevent-close not-close>
      <template #header>
        <h1>Pendaftaran Event <strong>SEED</strong></h1>
      </template>
      <form id="form" @submit.prevent="onSubmit">
        <vs-row>
          <vs-input v-model="npm" border label-placeholder="NPM"></vs-input>
        </vs-row>
        <vs-row>
          <vs-input v-model="nama" border label-placeholder="Nama"></vs-input>
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
          >
            <template v-if="validEmail" #message-success>
              Surel Valid
            </template>
            <template v-if="!validEmail && surel !== ''" #message-danger>
              Surel Tidak Valid
            </template>
          </vs-input>
        </vs-row>
        <vs-row>
          <vs-input
            v-model="alasanIkut"
            border
            label-placeholder="Alasan mengikuti acara"
          ></vs-input>
        </vs-row>
        <vs-row>
          <vs-button class="send-button">Kirim</vs-button>
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
  computed: {
    validEmail() {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.surel);
    },
  },
  watch: {
    npm() {
      if (this.npm) {
        const npmStr = String(this.npm).substring(0, 2);
        this.angkatan = `20${npmStr}`;
      } else {
        this.angkatan = `2020`;
      }
    },
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
.vs-input__label--placeholder {
  font-size: 1em;
}

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
  z-index: -1;
  overflow: hidden;
}

#form {
  border-radius: 35px;
  padding: 20px 10px 0;
}

.vs-dialog {
  padding-top: 20px;
}

@media screen and (min-width: 768px) {
  .vs-dialog {
    padding: 20px 30px 10px;
  }
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
  margin: 0 10px 0 0;
}

.vs-switch {
  margin: 0 5px;
}

.send-button {
  padding: 5px 30px;
  font-size: 0.9em;
  letter-spacing: 1.3px;
}
</style>
