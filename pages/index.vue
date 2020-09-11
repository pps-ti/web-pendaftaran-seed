<template>
  <div class="container grid">
    <div class="blur-underlay">
      <!-- <vue-particles
        color="#353535"
        :particle-size="4"
        :particles-number="50"
      ></vue-particles> -->
    </div>
    <vs-dialog
      v-model="dialogActive"
      :loading="submitting"
      prevent-close
      not-close
    >
      <template #header>
        <h1>Pendaftaran Event <strong>SEED</strong></h1>
      </template>
      <form id="form" @submit.prevent="onSubmit">
        <vs-row>
          <vs-input v-model="npm" border label-placeholder="NPM">
            <template v-if="alert.npm" #message-danger> Required </template>
          </vs-input>
        </vs-row>
        <vs-row>
          <vs-input v-model="nama" border label-placeholder="Nama"> </vs-input>
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
            <template> Bawa laptop </template>
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
          <vs-button block size="xl" class="send-button">Kirim</vs-button>
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
      dataTidakValid: false,
      submitting: false,
      alert: {
        nama: false,
        npm: false,
        surel: false,
        alasanIkut: false,
      },
    };
  },
  computed: {
    validEmail() {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.surel);
    },
  },
  watch: {
    npm() {
      if (this.npm !== undefined) {
        const npmStr = String(this.npm).substring(0, 2);
        const isNpmValid = Number(npmStr) >= 15 && Number(npmStr) <= 20;
        this.angkatan = isNpmValid ? `20${npmStr}` : `2020`;
      } else {
        this.angkatan = `2020`;
      }
    },
  },
  methods: {
    openNotification(duration) {
      // eslint-disable-next-line no-unused-vars
      const noti = this.$vs.notification({
        color: 'danger',
        duration: '20s',
        position: 'bottom-right',
        title: 'Terdapat data yang tidak valid',
        text: 'Harap periksa kembali form Anda',
        classNotification: 'notif',
      });
    },

    openLoading() {
      const loading = this.$vs.loading({
        type: 'circles',
        background: 'primary',
        color: '#fff',
        opacity: 1,
        scale: 1.2,
        text: 'Sedang mengirim...',
      });

      setTimeout(() => {
        loading.close();
      }, 4000);
    },

    onSubmit() {
      const {
        npm,
        nama,
        angkatan,
        gender,
        bawaLaptop,
        surel,
        alasanIkut,
      } = this.$data;

      if (
        npm &&
        nama &&
        angkatan &&
        gender &&
        bawaLaptop &&
        surel &&
        alasanIkut
      ) {
        // this.submitting = true;
        this.openLoading();
        console.log({
          nama: this.nama,
          npm: this.npm,
          angkatan: this.angkatan,
          gender: this.gender,
          bawaLaptop: this.bawaLaptop,
          surel: this.surel,
          alasanIkut: this.alasanIkut,
        });
      } else {
        this.dataTidakValid = true;
        this.openNotification();
      }
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
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 30s ease infinite;
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

.notif {
  font-size: 3em;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
