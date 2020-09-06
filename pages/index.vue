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
        <vs-input
          v-model="angkatan"
          border
          label-placeholder="Angkatan"
        ></vs-input>
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
        <vs-input
          v-model="surel"
          border
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
  width: 500px;
  margin: 0 auto;
}

.vs-row {
  margin: 30px 0;
}

.vs-input {
  font-size: 1em;
}

.vs-input-parent,
.vs-input {
  width: 100%;
}
</style>
