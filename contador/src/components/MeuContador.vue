<template>
    <div class="meu-contador">
        <p><strong>Contador: </strong>{{contador}}</p>
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
            if(this.contador>0){
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
