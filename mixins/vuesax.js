export default {
  methods: {
    openNotification(duration) {
      // eslint-disable-next-line no-unused-vars
      const noti = this.$vs.notification({
        color: 'danger',
        duration: '20s',
        position: 'top-center',
        title: 'Terdapat data yang tidak valid',
        text: 'Harap periksa kembali form Anda',
        classNotification: 'notif',
      });
    },

    openLoading() {
      const loading = this.$vs.loading({
        background: '#fff',
        color: 'primary',
        opacity: 0.8,
        scale: 1,
        text: 'Sedang mengirim...',
      });

      setTimeout(() => {
        loading.close();
      }, 4000);
    },
  },
};
