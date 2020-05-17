<template>
  <div class="cooking-container">
    <h1>Cooking</h1>
    <div class="content-container">
      <div class="title-block">
        <h3>I don't just love cooking food, I love eating it too!</h3>
      </div>
      <ul class="image-list">
        <li v-for="(item,index) in imgSrc" :key="index"><img :src="item" alt=""></li>
      </ul>
      <p></p>
    </div>
  </div>
</template>

<script>

const agnolotti = () => import('../assets/food/agnolotti.jpg')
const avocado = () => import('../assets/food/avocado.jpg')
const burgerBacon = () => import('../assets/food/burgerbacon.jpg')
const burgerNfries = () => import('../assets/food/burgerNfries.jpg')
const carbonara = () => import('../assets/food/carbonara.jpg')
const cauliflower = () => import('../assets/food/cauliflower.jpg')
const chickenBalsamico = () => import('../assets/food/chickenBalsamico.jpg')
const gambas = () => import('../assets/food/gambas.jpg')
const gnocciNorma = () => import('../assets/food/gnoccinorma.jpg')
const guac = () => import('../assets/food/guac.jpg')
const heartRav = () => import('../assets/food/heartrav.jpg')
const israeliSalad = () => import('../assets/food/israelisalad.jpg')
const mac = () => import('../assets/food/mac.jpg')
const outdoorBurger = () => import('../assets/food/OutdoorBurger.jpg')
const sausagenpeas = () => import('../assets/food/sausagenpeas.jpg')
const scampi = () => import('../assets/food/scampi.jpg')
const vodkaGnocchi = () => import('../assets/food/vodkagnocchi.jpg')
const shortRibPot = () => import('../assets/food/shortribpot.jpg')
const shortRib = () => import('../assets/food/shortrib.jpg')
const sausagePeasPot = () => import('../assets/food/sausagepeaspot.jpg')
const shortribPot = () => import('../assets/food/shortribpot.jpg')
const spread = () => import('../assets/food/spread.jpg')
const vodkaPapardelle = () => import('../assets/food/vodkapapardelle.jpg')
const sandwich = () => import('../assets/food/sandwich.jpg')
const vodkaSauce = () => import('../assets/food/vodkasauce.jpg')
const sausagesNPeas2 = () => import('../assets/food/sausagenpeas.jpg')
const handRav = () => import('../assets/food/handRav.jpg')

export default {
  name: 'cookingComponent',
  data () {
    return {
      imageImports: null,
      imgSrc: [],
      images: [
        agnolotti,
        avocado,
        israeliSalad,
        spread,
        shortRib,
        scampi,
        handRav,
        heartRav,
        cauliflower,
        carbonara,
        chickenBalsamico,
        guac,
        gnocciNorma,
        gambas,
        mac,
        sandwich,
        shortribPot,
        vodkaGnocchi,
        vodkaSauce,
        sausagesNPeas2
      ],
    }
  },
  methods: {
    setImagesSrc(func) {
      const self = this
      func().then((src) => { 
        self.imgSrc.push(src.default)
       })
    },
    createImagesArray(images, func){
     return images.map(func)
    },

  },
  created(){
    this.createImagesArray(this.images, this.setImagesSrc)
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
ul {
  list-style-type: none;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(400px,1fr));
  grid-auto-rows: 420px;
  max-width: 960px;
  padding: 0;
}
img {
  max-width: 300px;
  height: auto;
  object-fit: contain;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
