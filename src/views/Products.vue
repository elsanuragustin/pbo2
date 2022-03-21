<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Products</h1>
        <div class="row">
          <div v-for="produk in products" :key="produk.id" class="col-md-4">
            <div class="card mb-4">
              <div class="card-header">
                <img :src="produk.foto" alt="">
              </div>
              <div class="card-body">
                <h4>{{produk.nama}}</h4>
                <h4>{{produk.harga}}</h4>
                <!-- tombol pesan -->
                <a v-if="produk.stok > 0" :href="pruduk.link_eksternal" target="_blank" class="btn btn-success btn-block">beli</a>
                <a v-else href="#" class="disable btn btn-dark btn-block">stok habis</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: '',
      loading : true,
    };
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      let {data, error} = await this.$supabase
      .from("tb_produk")
      .select('*')
      .order('stok', {ascending: false}) 
      if(data)
        this.products = data
        this.loading = false
      if(error) console.error(error)
    },
  },
};
</script>
<style lang="scss" scoped></style>