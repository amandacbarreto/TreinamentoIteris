<template>
    <div class="meu-contador">
        <p><strong>Contador: </strong>{{contadorAtual}}</p>
        <button v-on:click = subtrairUm()>-</button>     
        <button v-on:click = somarUm()>+</button>
    </div>
</template>

<script>
export default {
    name:'MeuContador', 
    data() {
        return{
            contador:0
        }
    },
    methods: {
        subtrairUm(){
            if(contador>0){
                this.contador--;
            }
        },
        somarUm(){
            this.contador++;
        }
    }
}
</script>

<style scoped>

</style>
