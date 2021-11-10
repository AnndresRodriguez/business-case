<template>
  <div class="animate__animated animate__fadeIn">
    <div class="cc" :class="{ 'cc-inactive': product.status !== 'activa' }">
      <span class="cc-name animate__animated animate__fadeIn">{{ product.name }} ({{ product.status }})</span>
      <span class="chip"></span>
      <span class="cc-number">{{ product.number }}</span>
      <span class="cc-date expedition">Cuenta de {{ product.type }}</span>
    </div>
    <div class="d-flex justify-content-center balance-amount animate__animated animate__fadeIn">
      <span class=" cc-balance">Saldo:</span>
      <VueNumberFormat v-model="product.balance"></VueNumberFormat>
    </div>
  </div>
</template>
<script>
export default {
  
  props: {
     product: {
       type: Object,
       default: () => {
           return {
             name: '',
             status: '',
             number: '',
             type: '',
             balance: ''
           }
       }
     }
  }

}
</script>
