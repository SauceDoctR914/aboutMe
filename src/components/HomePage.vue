<template>
  <div class="home-container">
    <name-container/>
    <div class="content-container">
      <ul class="links-list">
        <li class="list-item"><a href="#bio">Bio</a></li>
        <li class="list-item"><a href="">Projects</a></li>
        <li class="list-item"><a href="">Cooking With G</a></li>
        <li class="list-item"><a href="">Contact Form</a></li>
      </ul>
      <cooking-component/>
      <about-me/>
      <p></p>
    </div>
  </div>
</template>

<script>

const CookingComponent = () => import('./CookingComponent.vue')
const NameContainer = () => import('./NameContainer.vue')
const AboutMe = () => import('./AboutMe.vue')
export default {
  name: 'HomePage',
  components: {
    NameContainer, AboutMe, CookingComponent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body {
  width: 100%;
  height: 100%;
  font-size: 16px;
  overflow-x: hidden;
}
.links-list {
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  @media only screen and (min-width: 700px){
    transform: translateX(396px);
  }
  @media only screen and (max-width: 1279px) and (min-width: 960px){
    transform: translateX(457px);
  }
  @media only screen and (min-width: 1280px){
    transform: translateX(597px);
  }
  .list-item {
    margin-left: 0;
    margin-right: 0;
    a {
      color: black;
    }
  }

}
.content-container {
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 150px 600px 1fr;
  @media screen and (min-width: 1280px){
    margin-left: auto;
    margin-right: auto;
    max-width: 1240px;
    grid-template-columns: 680px 1fr;
    justify-content: flex-end;
  }
}
.home-container {
  height: 100%;
  display: block;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  padding: 1rem;
}
</style>
