<template>
    <div class="container-fluid first-view ">
      <HeaderHome/>
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4 text-center  text-light">
          <div class="row ">
            <div class="col-sm-12">
              <img class="img-size" src="@/assets/app-icon.png" alt="">
            </div>
          </div>
          <div class="row ">
            <div class="col-sm-12">
              <h1 class=" text-size-1"> Bifi </h1>
            </div>
          </div>
          <div class="row ">
            <div class="col-sm-12">
              <h4> A way to grow </h4>
            </div>
          </div>
          <div class="row pt-2 mb-2">
            <div class="col-sm-12 text-center ">
              <button class="btn btn-outline-light">
                Try free
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-4"></div>
      </div>
  </div>
  <div class="container">
     <div class="row">
        <div class=" mt-3 mb-3 col-sm-6">
          <div class="card">
             <div class="card-body text-center ">
               <h2 class="card-title"> Free </h2>
               <h6 class="card-subtitle mb-2 text-muted"> Trial version </h6>
               <p class="card-text"> Use the basic functions with a limited number of uses </p>
               <h1> 0$ / 1 week </h1>
               <div class="col-sm-12">
                  <img class="image-size" src="../assets/free.png"> <br>
               </div>
                <button class="btn btn-danger">
                  Get started now
                </button>
             </div>
          </div>          
        </div>
        <div class=" mt-3 mb-3 col-sm-6">
          <div class="card">
             <div class="card-body text-center ">
               <h2 class="card-title"> Suscrption </h2>
               <h6 class="card-subtitle mb-2 text-muted"> Complete version </h6>
               <p class="card-text"> Full access to the application, as many times as you want, for the duration of the subscription</p>
               <h1> 2$ / 1 Month </h1>
               <div class="col-sm-12">
                <img class="img-size-sm" src="../assets/binance-logo.png"> <br>
               </div>
                <button class=" mt-3 btn btn-danger">
                  Get started now
                </button>
             </div>
          </div> 
        </div>
      </div>
  </div>
  <div class="m-0 p-0 container fluid">
    <div class="row">
      <div class="col-sm-12 ">
        
      </div>
    </div>
  </div>
</template>

<script>
import HeaderHome from '../components/Headers/Header-home.vue'
export default {
  name: 'Home',
  components:{
    HeaderHome
  }
}
</script>
<style scoped>
  .text-size-1{
    font-size: 50px;
  }
  .pt-10{
    padding-top: 25%;
  }
  .first-view{
    background-image:url('./../assets/aplication-background.png');
    background-attachment: fixed;
    min-height: 100vh;
    background-size: cover
  }
  .img-size{
    height: 90%;
    width: 90%;
  }
  .img-size-sm{
    height: 40%;
    width: 40%;
  }
</style>