<template>
  <div class="container grid">
    <form @submit.prevent="onSubmit">
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
  width: 500px;
  margin: 0 auto;
}

.vs-row {
  margin: 40px 0;
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
