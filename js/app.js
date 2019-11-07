new Vue({
    el: '#app',
    data(){
        return{
            list: []
        }
    },
    mounted(){
        this.getList();
    },
    methods:{
        getList(){
            axios
                .get('./js/cuy.json')
                .then(response => {
                    var listaArray= response.data.list
                    var listaOrden = listaArray
                    this.list  = listaArray
                    console.log(response.data.list)
                })
                .then(function(){
                    console.log('dfsfsd')
                })
                .catch(e=> console.log(e))
            },
    }
});