<template>
  <div class="container grid">
    <form id="form" @submit.prevent="onSubmit">
      <div v-if="formStep === 1" class="form-page">
        <vs-row>
          <vs-input v-model="npm" border label-placeholder="NPM">
            <template
              v-if="$v.npm.$error || (!$v.npm.required && npm !== undefined)"
              #message-danger
            >
              Harus diisi
            </template>
          </vs-input>
        </vs-row>
        <vs-row>
          <vs-input v-model="nama" border label-placeholder="Nama">
            <template
              v-if="$v.nama.$error || (!$v.nama.required && nama !== undefined)"
              #message-danger
            >
              Harus diisi
            </template>
          </vs-input>
        </vs-row>
        <vs-row>
          <vs-select v-model="angkatan" label-placeholder="Angkatan">
            <template
              v-if="$v.angkatan.$error || !$v.angkatan.between"
              #message-danger
            >
              Angkatan tidak valid
            </template>
            <vs-option label="2020" value="2020">2020</vs-option>
            <vs-option label="2019" value="2019">2019</vs-option>
            <vs-option label="2018" value="2018">2018</vs-option>
            <vs-option label="2017" value="2017">2017</vs-option>
            <vs-option label="2016" value="2016">2016</vs-option>
            <vs-option label="2015" value="2015">2015</vs-option>
            <vs-option label="2014" value="2014">2014</vs-option>
          </vs-select>
        </vs-row>
        <label for="gender">Gender</label>
        <vs-row>
          <vs-radio v-model="gender" name="gender" val="L"
            >Laki - Laki</vs-radio
          >
          <vs-radio v-model="gender" name="gender" val="P">Perempuan</vs-radio>
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
            <template #message-danger>
              <span v-if="!validEmail && surel !== undefined && surel !== ''"
                >Surel tidak valid</span
              >
              <span
                v-if="
                  $v.surel.$error || (!$v.surel.required && surel !== undefined)
                "
              >
                Harus diisi
              </span>
            </template>
          </vs-input>
        </vs-row>
        <vs-row>
          <vs-input
            v-model="alasanIkut"
            border
            label-placeholder="Alasan mengikuti acara"
          >
            <template
              v-if="
                $v.alasanIkut.$error ||
                (!$v.alasanIkut.required && alasanIkut !== undefined)
              "
              #message-danger
            >
              Harus diisi
            </template>
          </vs-input>
        </vs-row>
      </div>
      <div v-if="formStep === 2">
        <label for="survey1">
          1. Apakah Anda sudah familiar dengan HTML dan CSS?
        </label>
        <vs-row>
          <vs-radio v-model="survey1" name="survey1" val="Sudah">
            Sudah
          </vs-radio>
          <vs-radio v-model="survey1" name="survey1" val="Belum">
            Belum
          </vs-radio>
        </vs-row>
        <label for="survey2">
          2. Apakah Anda sudah pernah membuat website dengan database?
        </label>
        <vs-row>
          <vs-radio v-model="survey2" name="survey2" val="Sudah">
            Sudah
          </vs-radio>
          <vs-radio v-model="survey2" name="survey2" val="Belum">
            Belum
          </vs-radio>
        </vs-row>
        <label for="survey3">
          3. Apakah anda sudah pernah menggunakan framework flask?
        </label>
        <vs-row>
          <vs-radio v-model="survey3" name="survey3" val="Sudah">
            Sudah
          </vs-radio>
          <vs-radio v-model="survey3" name="survey3" val="Belum">
            Belum
          </vs-radio>
        </vs-row>
        <label for="survey4">
          4. Apakah anda sudah pernah coba melakukan query dengan SQL database?
        </label>
        <vs-row>
          <vs-radio v-model="survey4" name="survey4" val="Sudah">
            Sudah
          </vs-radio>
          <vs-radio v-model="survey4" name="survey4" val="Belum">
            Belum
          </vs-radio>
        </vs-row>
        <label for="survey5">
          5. Apakah anda sudah pernah mencoba NoSQL database dengan MongoDB?
        </label>
        <vs-row>
          <vs-radio v-model="survey5" name="survey5" val="Sudah">
            Sudah
          </vs-radio>
          <vs-radio v-model="survey5" name="survey5" val="Belum">
            Belum
          </vs-radio>
        </vs-row>
        <vs-row>
          <vs-button block size="xl" class="send-button">Kirim</vs-button>
        </vs-row>
      </div>
    </form>

    <vs-pagination v-model="formStep" progress not-margin :length="2" />
  </div>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators';
import VuesaxMixins from '~/mixins/vuesax.js';

export default {
  mixins: [VuesaxMixins],
  data() {
    return {
      nama: undefined,
      npm: undefined,
      angkatan: 2020,
      gender: 'L',
      surel: undefined,
      alasanIkut: undefined,
      formStep: 1,
      survey1: 'Belum',
      survey2: 'Belum',
      survey3: 'Belum',
      survey4: 'Belum',
      survey5: 'Belum',
    };
  },
  validations: {
    npm: {
      required,
      minLength: minLength(4),
    },
    nama: {
      required,
    },
    angkatan: {
      required,
      between: between(2014, 2020),
    },
    gender: {
      required,
      valid: (value) => value === 'L' || value === 'P',
    },
    surel: {
      required,
    },
    alasanIkut: {
      required,
    },
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
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        // this.submitting = true;
        this.openNotification();
      } else {
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
      }
    },
  },
};
</script>

<style>
.vs-input__label--placeholder {
  font-size: 1em;
}

.vs-notification-parent {
  padding-bottom: 40px;
}

@media screen and (min-width: 768px) {
  .vs-notification h4 {
    font-size: 1.1rem;
  }

  .vs-notification p {
    font-size: 0.9rem;
  }
}

.vs-notification h4 {
  font-size: 1rem;
}

.vs-notification p {
  font-size: 0.8rem;
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
  background-color: #353535;
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

.vs-pagination {
  transition: all 0.2s;
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
