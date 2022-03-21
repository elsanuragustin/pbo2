<template>
    <div>
        <h1>newArrival</h1>
         <div class="row">
            <div class="col-md-4" v-for="produk in products" :key="produk.id">
            <div class="card-header">
                <img :src="produk.foto" width="100%" class="img-thumb" />
            </div>
            <div class="card-body">
                <h4>{{produk.nama}}</h4>
                <h4>Rp{{produk.nama}}</h4>
                <a :href="produk.link_eksternal" class="btn btn-danger">beli</a>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            products: "",
        };
    },
    method(){
        this.getProducts();
    },
    methods: {
        async getProducts(){
            let { data, error }=await this.$supabase.from("tb_produk").select().order("id",{ ascending: false}).limit(3);

            if (data) {
                this.products = data;
            }
            if (error) console.error(error);
        },
    },
};
</script>
<style lang="scss" scoped></style>