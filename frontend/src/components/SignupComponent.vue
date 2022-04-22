<template>
  <b-div>
    <b-container fluid>
      <b-row class="card-login card-body">
        <b-card title="Sing Up" sub-title="Bem vindo ao Help Calouro">
          <b-form-group class="form-campo">
            <b-form-input type="text" placeholder="Nome"></b-form-input>
            <b-form-input type="text" placeholder="Sobrenome"></b-form-input>
            <b-form-input type="email" placeholder="E-mail"></b-form-input>
            <b-form-input type="password" placeholder="Senha"></b-form-input>
          </b-form-group>
          <b-button variant="outline-dark">Cadastrar</b-button>
          <b-row>
            <router-link class="lnk" to="/">Já tem cadastro? Login</router-link>
          </b-row>
        </b-card>
      </b-row>
    </b-container>
  </b-div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute t o limit CSS to this component only -->
<style scoped lang="scss">
.card-login {
  position: fixed;
  left: 28%;
  right: 28%;
}

.card-body {
  padding: 2rem 2rem;
}

.form-control {
  margin-top: 1em !important;
  margin-bottom: 1em !important;
}

.texto-apoio {
  font-size: 1em;
  margin-top: 5%;
}

.lnk {
  font-size: 1em;
  margin-top: 5%;
}

.icone-login {
  margin-right: 5%;
}
</style>
