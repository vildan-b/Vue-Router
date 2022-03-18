<template>
  <div class="container">
    <router-view> </router-view>
    <hr>
    <button class="btn btn-success" @click="navigateToHome">Home Component</button>
  </div>
</template>
<script>
  export default {
    methods:{
      navigateToHome(){
        // this.$router.push("/");
        // this.$router.push({ path: '/'});
        this.$router.push({name: 'anasayfa' });


      }
    },
    watch : {
        "$route"(to){
          this.id = to.params.id;
        }
    },
    data(){
      return{
        id: this.$route.params.id,
      }
    }
  }
</script>
