<template>
  <b-row class="table-row">
    <b-col></b-col>
    <b-col>
     <b-table striped hover :items="this.itens" :fields="this.fields"></b-table>
    </b-col>
    <b-col></b-col>
  </b-row>
</template>

<script>

export default {

  name: 'ListComponent',
  props: ['itens', 'fields'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.table-row {
  margin: 0;
}
</style>
