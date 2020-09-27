<template>
  <div class="container grid">
    <form id="form" class="form-feedback" @submit.prevent="onSubmit">
      <h1 class="form-title">Feedback <strong>SEED</strong></h1>
      <hr class="form-hr" />
      <div v-if="formStep === 1" class="form-page form-page--1">
        <label for="">NPM</label>
        <vs-row>
          <vs-input
            placeholder="19081010016"
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

        <label for="">
          Menurut kalian, bagaimana kualitas materi yang kami berikan?
        </label>
        <vs-row>
          <vs-input v-model="q1" placeholder="Masukan Anda">
            <template
              v-if="$v.q1.$error || (!$v.q1.required && q1 !== '')"
              #message-danger
            >
              Harus diisi
            </template>
          </vs-input>
        </vs-row>

        <label for=""> Menurut kalian, bagaimana kualitas pemateri? </label>
        <vs-row>
          <vs-input v-model="q2" placeholder="Masukan Anda">
            <template
              v-if="$v.q2.$error || (!$v.q2.required && q2 !== '')"
              #message-danger
            >
              Harus diisi
            </template>
          </vs-input>
        </vs-row>

        <label for="">
          Dari skala 1-10 bagaimana pelatihan SEED kemarin?
        </label>
        <vs-row align="center">
          1
          <vs-radio
            v-model="q3"
            class="radio-nilai"
            name="nilaiPelatihan"
            val="1"
          >
          </vs-radio>
          <vs-radio
            v-model="q3"
            class="radio-nilai"
            name="nilaiPelatihan"
            val="2"
          >
          </vs-radio>
          <vs-radio
            v-model="q3"
            class="radio-nilai"
            name="nilaiPelatihan"
            val="3"
          >
          </vs-radio>
          <vs-radio
            v-model="q3"
            class="radio-nilai"
            name="nilaiPelatihan"
            val="4"
          >
          </vs-radio>
          <vs-radio
            v-model="q3"
            class="radio-nilai"
            name="nilaiPelatihan"
            val="5"
          >
          </vs-radio>
          <vs-radio
            v-model="q3"
            class="radio-nilai"
            name="nilaiPelatihan"
            val="6"
          >
          </vs-radio>
          <vs-radio
            v-model="q3"
            class="radio-nilai"
            name="nilaiPelatihan"
            val="7"
          >
          </vs-radio>
          <vs-radio
            v-model="q3"
            class="radio-nilai"
            name="nilaiPelatihan"
            val="8"
          >
          </vs-radio>
          <vs-radio
            v-model="q3"
            class="radio-nilai"
            name="nilaiPelatihan"
            val="9"
          >
          </vs-radio>
          <vs-radio
            v-model="q3"
            class="radio-nilai"
            name="nilaiPelatihan"
            val="10"
          >
          </vs-radio>
          10
        </vs-row>

        <label for="">
          Jika ada pelatihan lagi materi apa yang kalian inginkan?
        </label>
        <vs-row>
          <vs-input v-model="q4" placeholder="Masukan Anda">
            <template
              v-if="$v.q4.$error || (!$v.q4.required && q4 !== '')"
              #message-danger
            >
              Harus diisi
            </template>
          </vs-input>
        </vs-row>

        <label for="">
          Apakah kalian tertarik jika kami mengadakan pelatihan dengan tingkatan
          materi yang lebih tinggi?
        </label>
        <vs-row>
          <vs-radio v-model="q5" name="materiNextStep" val="Ya"> Ya </vs-radio>
          <vs-radio v-model="q5" name="materiNextStep" val="Tidak">
            Tidak
          </vs-radio>
        </vs-row>

        <label for="">
          Berikan kritik & saran anda yang membangun agar kami dapat lebih baik
          lagi kedepannya
        </label>
        <vs-row>
          <vs-input v-model="q6" placeholder="Masukan Anda">
            <template
              v-if="$v.q6.$error || (!$v.q6.required && q6 !== '')"
              #message-danger
            >
              Harus diisi
            </template>
          </vs-input>
        </vs-row>

        <vs-row justify="flex-end">
          <vs-button size="large" class="send-button">Kirim</vs-button>
        </vs-row>
      </div>

      <div v-if="formStep === 2" class="form-page form-page--3">
        <img
          class="form-done-img"
          src="/feedback-done.svg"
          alt="Thank you for filling the feedback form"
        />

        Terimakasih telah mengisi form feedback SEED.
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import VuesaxMixins from '~/mixins/vuesax.js';

export default {
  mixins: [VuesaxMixins],
  data() {
    return {
      npm: undefined,
      q1: '',
      q2: '',
      q3: 5,
      q4: '',
      q5: 'Tidak',
      q6: '',
      materiNextStep: 'Tidak',
      nilaiPelatihan: 5,
      formStep: 1,
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
              `https://pendaftaran-seed.netlify.app/.netlify/functions/check-data-exists?type=Feedback&npm=${value}`
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
    q1: {
      required,
    },
    q2: {
      required,
    },
    q4: {
      required,
    },
    q6: {
      required,
    },
  },
  computed: {
    validEmail() {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.surel);
    },
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid && !this.checkingNpm) {
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
            'https://pendaftaran-seed.netlify.app/.netlify/functions/post-data?type=Feedback',
            {
              npm: this.npm,
              q1: this.q1,
              q2: this.q2,
              q3: this.q3,
              q4: this.q4,
              q5: this.q5,
              q6: this.q6,
            }
          );

          loading.close();
          this.formStep = 2;
        } catch (error) {
          loading.close();
          this.$vs.notification({
            color: 'danger',
            position: 'top-center',
            title: 'Maaf terjadi kesalahan pada sistem',
            text: 'Silakan refresh laman dan coba kembali beberapa saat lagi',
            classNotification: 'notif',
          });
        }
      }
    },
  },
};
</script>
