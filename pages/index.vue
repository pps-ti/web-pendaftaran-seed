<template>
  <div class="container grid">
    <form @submit.prevent="onSubmit">
      <vs-row>
        <vs-input v-model="nama" placeholder="Nama"></vs-input>
      </vs-row>
      <vs-row>
        <vs-input v-model="npm" placeholder="NPM"></vs-input>
      </vs-row>
      <vs-row>
        <vs-input v-model="angkatan" placeholder="Angkatan"></vs-input>
      </vs-row>
      <vs-row>
        <vs-radio v-model="gender" val="L">Laki - Laki</vs-radio>
        <vs-radio v-model="gender" val="P">Perempuan</vs-radio>
      </vs-row>
      <vs-row>
        <vs-checkbox v-model="bawaLaptop">
          <template #icon>
            <i class="bx bx-check"></i>
          </template>
          Bawa Laptop
        </vs-checkbox>
      </vs-row>
      <vs-row>
        <vs-input v-model="surel" placeholder="Alamat surel (email)"></vs-input>
      </vs-row>
      <vs-row>
        <vs-input
          v-model="alasanIkut"
          placeholder="Alasan mengikuti acara"
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
      angkatan: undefined,
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
  width: 400px;
  margin: 0 auto;
}

.vs-row {
  margin: 10px 0;
}
</style>
