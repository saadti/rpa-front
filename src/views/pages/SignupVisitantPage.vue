<template>
  <div class="container-visitant">
    <b-form @submit="onSubmit" @reset="onReset" class="container-visitant-form">
      <b-form-group 
        class="container-visitant-form-input-group-name"
        label="Nome:"
        label-for="input-name">
          <b-form-input
            id="input-name"
            v-model="visitant.name"
            type="text"
            placeholder="Nome do visitante"
            required>
          </b-form-input>
      </b-form-group>
      <b-form-group 
        class="container-visitant-form-input-group-ap"
        label="Apartamento:"
        label-for="input-ap">
          <b-form-input
            id="input-ap"
            v-model="visitant.apVisitant"
            type="text"
            placeholder="Apartamento onde o visitante irá"
            required>
          </b-form-input>
      </b-form-group>
      <b-form-group 
        class="container-visitant-form-input-group-observation"
        label="Observação:"
        label-for="input-observation">
          <b-form-input
            id="input-observation"
            v-model="visitant.observation"
            type="text"
            placeholder="Observação">
          </b-form-input>
      </b-form-group>
      <b-button class="container-visitant-form-btn-submit" variant="primary" type="submit">Cadastrar</b-button>
      <b-button class="container-visitant-form-btn-clean" variant="danger" type="reset">Limpar</b-button>
      <b-button class="container-visitant-form-btn-back" @click="backHome()">Voltar</b-button>
    </b-form>
  </div>
</template>

<script>

export default {

  name: 'SignupVisitant',
  data() {
      return {
        visitant: {
            name: String,
            apVisitant: String,
            observation: String
        }
      }
  },
  mounted() {
    this.visitant.name = ""
    this.visitant.apVisitant = ""
    this.visitant.observation = ""
  },
  methods: {
    backHome() {
      this.$router.push('/')
    },
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.visitant.name = ''
      this.visitant.apVisitant = ''
      this.visitant.observation = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .container-visitant {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &-form {
      justify-content: center;
      
      &-input-group-name {
        margin: 1em 0 0 0;
      }
      &-input-group-ap {
        margin: 1em 0 0 0;
      }
      &-input-group-observation {
        margin: 1em 0 0 0;
      }
      &-btn-submit {
        margin: 1em 1em 0 0;
      }
      &-btn-clean {
        margin: 1em 0 0 0;
      }
      &-btn-back {
        margin: 1em 0 0 1em;
      }
    }
  }
</style>
