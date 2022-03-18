<template>
  <div class="container">
  <h3>User Detail Component</h3>
    <h3>User id : {{ $route.params.id}}</h3>
<router-link tag="button" 
class="btn btn-primary" 
:to="navigationLink"
> Edit </router-link>
  
  </div>
</template>
<script>
  export default {
       data(){
      return {
        navigationLink : { 
          name : 'userEdit' , 
          params : { id : this.$route.params.id}, 
          query : {name : 'vildan', lastname : 'azra' },
          hash : '#data'}
      }
    },
    beforeRouteEnter(to, from, next){
      console.log("component level control. with lifecyle")
      next();
    }

  }
</script>
// :to="'/user/' + $route.params.id + '/edit'"
