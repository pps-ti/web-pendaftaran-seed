<template>
  <div class="container grid">
    <form id="form" @submit.prevent="onSubmit">
      <h1 class="form-title">Pendaftaran <strong>SEED</strong></h1>
      <hr class="form-hr" />
      <div v-if="formStep === 1" class="form-page form-page--1">
        <vs-row>
          <vs-input
            placeholder="NPM"
            :value="npm"
            :loading="checkingNpm"
            @blur="npm = $event.target.value"
          >
            <template #message-danger>
              <span v-if="$v.npm.$error && !$v.npm.required">
                Harus diisi
              </span>
              <span
                v-else-if="
                  !$v.npm.isUnique && !checkingNpm && npm !== undefined
                "
              >
                NPM ini sudah terdaftar
              </span>
            </template>
          </vs-input>
        </vs-row>
        <vs-row>
          <vs-input v-model="nama" placeholder="Nama">
            <template
              v-if="$v.nama.$error || (!$v.nama.required && nama !== undefined)"
              #message-danger
            >
              Harus diisi
            </template>
          </vs-input>
        </vs-row>
        <vs-row>
          <vs-select v-model="angkatan" placeholder="Angkatan">
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
        <label for="gender" class="gender-label">Gender: </label>
        <vs-row class="gender-row">
          <vs-radio v-model="gender" name="gender" val="L">
            Laki - Laki
          </vs-radio>
          <vs-radio v-model="gender" name="gender" val="P">Perempuan</vs-radio>
        </vs-row>
        <vs-row>
          <vs-input
            v-model="surel"
            type="email"
            placeholder="Alamat surel (email)"
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
          <vs-input v-model="alasanIkut" placeholder="Alasan mengikuti acara">
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
        <vs-row justify="flex-end">
          <vs-button
            flat
            type="button"
            class="form-nav-button"
            @click="formStep = 2"
          >
            <i class="bx bx-right-arrow-alt"></i>
          </vs-button>
        </vs-row>
      </div>

      <div v-if="formStep === 2" class="form-page form-page--2">
        <vs-row class="survey-question">
          <label for="survey1">
            1. Apakah Anda sudah familiar dengan HTML dan CSS?
          </label>
          <vs-radio v-model="survey1" name="survey1" val="Sudah">
            Sudah
          </vs-radio>
          <vs-radio v-model="survey1" name="survey1" val="Belum">
            Belum
          </vs-radio>
        </vs-row>
        <vs-row class="survey-question">
          <label for="survey2">
            2. Apakah Anda sudah pernah membuat website dengan database?
          </label>
          <vs-radio v-model="survey2" name="survey2" val="Sudah">
            Sudah
          </vs-radio>
          <vs-radio v-model="survey2" name="survey2" val="Belum">
            Belum
          </vs-radio>
        </vs-row>
        <vs-row class="survey-question">
          <label for="survey3">
            3. Apakah anda sudah pernah menggunakan framework flask?
          </label>
          <vs-radio v-model="survey3" name="survey3" val="Sudah">
            Sudah
          </vs-radio>
          <vs-radio v-model="survey3" name="survey3" val="Belum">
            Belum
          </vs-radio>
        </vs-row>
        <vs-row class="survey-question">
          <label for="survey4">
            4. Apakah anda sudah pernah coba melakukan query dengan SQL
            database?
          </label>
          <vs-radio v-model="survey4" name="survey4" val="Sudah">
            Sudah
          </vs-radio>
          <vs-radio v-model="survey4" name="survey4" val="Belum">
            Belum
          </vs-radio>
        </vs-row>
        <vs-row class="survey-question">
          <label for="survey5">
            5. Apakah anda sudah pernah mencoba NoSQL database dengan MongoDB?
          </label>
          <vs-radio v-model="survey5" name="survey5" val="Sudah">
            Sudah
          </vs-radio>
          <vs-radio v-model="survey5" name="survey5" val="Belum">
            Belum
          </vs-radio>
        </vs-row>
        <vs-row justify="space-between">
          <vs-button
            flat
            type="button"
            class="form-nav-button"
            @click="formStep = 1"
          >
            <i class="bx bx-left-arrow-alt"></i>
          </vs-button>
          <vs-button size="large" class="send-button">Kirim</vs-button>
        </vs-row>
      </div>

      <div v-if="formStep === 3" class="form-page form-page--3">
        <img
          class="form-done-img"
          src="/confirmed.svg"
          alt="Registration success"
        />

        Terimakasih telah mendaftar workshop SEED kali ini, silakan cek kotak
        masuk alamat surel Anda.
      </div>
    </form>
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
      checkingNpm: false,
    };
  },
  validations: {
    npm: {
      required,
      minLength: minLength(4),
      async isUnique(value) {
        this.checkingNpm = true;

        try {
          const unique = Boolean(
            await this.$axios.$get(
              `/.netlify/functions/check-data-exists?type=Absensi&npm=${value}`
            )
          );

          this.checkingNpm = false;
          return unique;
        } catch (error) {
          this.$vs.notification({
            color: 'danger',
            position: 'top-center',
            title: 'Maaf terjadi kesalahan pada sistem',
            text: 'Silakan coba kembali beberapa saat lagi',
            classNotification: 'notif',
          });
        }
      },
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
  mounted() {
    const form = document.getElementById('form');

    form.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && this.formStep === 1) {
        event.preventDefault();
        this.formStep = 2;
      }
    });
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.openNotification();
      } else {
        const loading = this.$vs.loading({
          background: '#fff',
          color: 'primary',
          opacity: 1,
          scale: 1,
          text: 'Sedang mengirim...',
        });

        try {
          await this.$axios.$post(
            '/.netlify/functions/post-data?type=Absensi',
            {
              npm: this.npm,
              nama: this.nama,
              angkatan: this.angkatan,
              gender: this.gender,
              surel: this.surel,
              alasanIkut: this.alasanIkut,
              survey1: this.survey1,
              survey2: this.survey2,
              survey3: this.survey3,
              survey4: this.survey4,
              survey5: this.survey5,
            }
          );

          await this.$axios.$post('/.netlify/functions/send-mail', {
            recipient: this.surel,
          });

          loading.close();
          this.formStep = 3;
        } catch (error) {
          this.$vs.notification({
            color: 'danger',
            position: 'top-center',
            title: 'Maaf terjadi kesalahan pada sistem',
            text: 'Silakan coba kembali beberapa saat lagi',
            classNotification: 'notif',
          });
        }
      }
    },
  },
};
</script>
