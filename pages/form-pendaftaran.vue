<template>
  <div class="container" style="margin-top: 5%">
    <form method="POST" class="my-login-validation" novalidate="">
      <div class="form-group">
        <label>NPM</label>
        <input
          id="email"
          type="email"
          class="form-control"
          name="email"
          value=""
          required
          autofocus
          placeholder="170810100xx"
        />
      </div>

      <div class="form-group">
        <label>Nama</label>
        <input
          id="password"
          type="password"
          class="form-control"
          name="password"
          required
          placeholder="Paijo"
        />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input
          id="password"
          type="password"
          class="form-control"
          name="password"
          required
          placeholder="paijo@xyz.com"
        />
      </div>

      <div class="form-group">
        <label>Angkatan</label>
        <input
          id="password"
          type="password"
          class="form-control"
          name="password"
          required
          placeholder="2017"
        />
      </div>

      <div class="form-group m-0">
        <button type="submit" class="btn btn-primary btn-block">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
