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
  },
};
