<template>

  <div class="d-flex justify-content-center mw-90" >
    <div class="card mb-3 mw-90" style="width: 90%;">
      <div class="row g-0" style="background-color: #31708E;color:#F7F9FB;">
        <div class="col-4" style="float:left">
          <img :src="require('@/assets/' + image)" class="img-fluid " @click="goToOffer" alt="..." data-toggle="tooltip" data-placement="right" title="Poseti stranicu">
        </div>
        <div class="col-8">
          <div class="row">
          <div class="col-4">
              <div class="card-body">
                <h5 class="card-title" style="border:1px solid #687864;background-color:#687864">{{cottage.name}}</h5>
                <div class="card-text" style="text-align: left;">
                  <b>Kapacitet: </b>{{cottage.bedQuantity}} osoba<br>
                  <b>Cena: </b>{{cottage.price}} din.<br>
                  {{cottage.description}}
                </div>
              </div>
        </div>

          <div class="col-4">
            <div class="card-body">

              <bird-vue-map :index="cottage.id" style="width: 280px; height: 200px;" :lon="cottage.longitude" :lat="cottage.latitude"></bird-vue-map>
              </div>
            </div>

            <div class="col-4">
              <div class="card-body">
              <button id="deleteCottage" @click="deleteCottage">Obriši vikendicu</button>
              <br>
                <br>
              <button @click="updateDataPage">Izmeni podatke</button>
            </div>
        </div>


</div>
    </div>
        </div>
</div>
  </div>

</template>

<script>
import $ from "jquery";
import BirdVueMap from "@/components/main_site/birdVueMap";
import CottageService from "@/servieces/CottageService";
export default {
  name: "cottageElement",
  props: ["cottage"],
  components:{BirdVueMap},
  data(){
    return{
      updateId:"updateCottage",
      image:""

    }
  },
  created() {
    if (this.cottage.images[0] != null) {
      this.image = this.cottage.images[0];
    }else {
      this.image = "icons/ship.png";
    }
  },
  methods:{
    openModel() {

      $('#' + this.index).modal('show');
    },
    deleteCottage(){
      CottageService.deleteCottage(this.cottage.id);
    },
    updateDataPage(){
      this.$router.push('/cottage/update/' + this.cottage.id);
    }
  }
}
</script>

<style scoped>
button{
  width:150px;
  background-color: #687864;
}

</style>