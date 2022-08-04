<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png">
    <TableComponent :itens="this.visitants" :fields="this.fields"></TableComponent>
    <b-button class="btn-add" variant="success" size="sm" @click="signupVisitants()">Cadastrar</b-button>
    <b-button class="btn-list" variant="primary" size="sm" @click="updateVisitants()">Atualizar Visitantes</b-button>
  </div>
</template>

<script>
import TableComponent from '../components/TableComponent.vue'

export default {
    name: 'ListView',
    components: {
        TableComponent
    },
    data() {
        return {
          viewList: false,
            visitants: [
            ],
            fields: [
              {
                key: 'name',
                label: 'Nome'
              },
              {
                key: 'apVisitant',
                label: 'Apartamento'
              },
              {
                key: 'observation',
                label: 'Observação'
              }
            ],
        }
    },
    methods: {
      async updateVisitants() {
        await this.axios.get(`${process.env.VUE_APP_URL_SERVER}/visitants`).then((response) => {
          this.visitants = response.data
        })
      },
      signupVisitants() {
          this.$router.push('/signup')
      }
    }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .btn-add {
    margin: 0 1em;
  }
  .btn-list {
    margin: 0 1em;
  }
  .list {
    width: 100%;
  }
}
</style>
