<template>
  <nav class="navbar navbar-expand-lg navbar-light">
  <router-link class="navbar-brand text-light" to="/"  > <h4> Bifi </h4> </router-link>
  <button data-toggle="collapse" class="navbar-toggler btn btn-outline-light my-2 my-sm-0" type="button"> Sing up </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto"></ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-light my-2 my-sm-0" type="button"> Sing up </button>
    </form>
  </div>
</nav>
</template>
<style scoped>
  .navbar-toggler{
    line-height: 1.7;
    border: 1px solid white;
    color:white;
    font-size: 1rem;
  }
</style>