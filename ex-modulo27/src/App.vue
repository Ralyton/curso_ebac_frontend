<script>
export default {
  name: 'App',
  data() {
    return {
      numero1: 0,
      numero2: 0,
      operacao: 'soma',
    }
  },

  computed: {
    resultado() {
      switch (this.operacao) {
        case 'soma':
          return Number(this.numero1) + Number(this.numero2)
        case 'subtracao':
          return Number(this.numero1) - Number(this.numero2)
        case 'multiplicacao':
          return Number(this.numero1) * Number(this.numero2)
        case 'divisao':
          return Number(this.numero1) / Number(this.numero2)
        default:
          return 0
      }
    },
  },
  methods: {
    calcular() {

    },
  },
}
</script>

<template>
  <div class="container text-center">
    <header>
      <h1 class="p-5">Calculadora Aritmética</h1>
    </header>

    <main>

      <div class="mb-3">
        <label for="numero1" class="me-3">Número 1:</label>
        <input type="number" id="numero1" v-model="numero1" @change="calcular" />
      </div>
      <div class="mb-3">
        <label for="numero2" class="me-3">Número 2:</label>
        <input type="number" id="numero2" v-model="numero2" @change="calcular" />
      </div>
      <div class="mb-3">
        <label for="operacao" class="me-3">Operação:</label>
        <select id="operacao" v-model="operacao" @change="calcular">
          <option value="soma">Soma (+)</option>
          <option value="subtracao">Subtração (-)</option>
          <option value="multiplicacao">Multiplicação (x)</option>
          <option value="divisao">Divisão (/)</option>
        </select>
      </div>
      <div>
        <label for="resultado" class="me-3">Resultado:</label>
        <input type="number" id="resultado" :value="resultado" disabled />
      </div>
    </main>

  </div>
</template>

<style scoped>
.container {
  max-width: 960px;
  width: 100%;
  height: 100vh;
  background-color: rgba(30, 143, 255, 0.403);
  color: darkblue;
}
</style>
