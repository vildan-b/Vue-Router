<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p> Ad : {{ $route.query.name}}     </p>
    <p> Soyad : {{ $route.query.lastname}}</p>
    <button class="btn btn-primary" @click = "saved = true">Approve </button>
    <div style="height: 800px;"></div>
    <p id="data"> Burada bazi bilgiler gelebilir </p>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        saved : false,
      }
    },
    beforeRouteLeave(to, from, next){
      if(this.saved){
        console.log("test")
        next();
      } else {
        if(confirm("All your information will be lost. Are you sure?")){
          next(false);
        }
      }
      next();
    }
 
  }
</script>
