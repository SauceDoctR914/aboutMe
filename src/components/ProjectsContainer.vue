<template>
  <section>
    <div class="container">
      <div class="project-contaienr index-0">
        <h2 class="project-title">2 Stoc</h2>
          <figure class="image-container">
              <picture>
                <img src="" alt="">
              </picture>
          </figure>
          <p>Stack:</p><ul class="stack">
          <li v-for="(src, index) in stackOne" :key="index" ><img class="lang-icon" :src="src"></li>
        </ul>
        <p class="description">2 Stoc is an informative app that displays market news and data to the user. On the homepage the user can view general market news, stock prices, company ticker symbols, daily performance as a precentage, and sector performance as a percentage. Individual company pages show specific information, charts, and news pertaining to that particular security.</p>
        <p>2stoc asynchronously fetches data from four different API's, and then uses redux for state management.<br><br>
        </p>
      </div>
      <div class="project-contaienr index-1">
        <h2 class="project-title">Notiz</h2>
          <figure class="image-container">
              <picture>
                <img :src="mainImage" alt="">
              </picture>
          </figure>
          <p>Stack:</p>
          <ul class="stack">
          <li v-for="(src, index) in stackTwo" :key="index" ><img class="lang-icon" :src="src"></li>
        </ul>
        <p class="description">Notiz is a note taking app and note organization app. Users signup and then login to bring them to their notebooks page, where they can create a new notebook and then create notes within that notebook for organization.</p>
        <p>2stoc asynchronously fetches data from four different API's, and then uses redux for state management.<br><br>
        </p>
      </div>
    </div>
</section>
</template>
<script>
  import $ from 'jQuery'

  import mainImage from '../assets/projects/main-screen.png'
  import cssIcon from '../assets/logos/css3-logo.png'
  import jsIcon from '../assets/logos/javascript-logo.svg'
  import reduxLogo from '../assets/logos/reduxlogo.png'
  import reactLogo from '../assets/logos/react.png'
  import rubyLogo from '../assets/logos/ruby-logo.png'
  import railsLogo from '../assets/logos/rails-logo.png'
  import pgLogo from '../assets/logos/postgres-logo.svg'

  const homePage = () => import('./HomePage.vue')


  export default {

    data() {
      return {
        stackOne: [cssIcon, jsIcon, reactLogo, reduxLogo],
        stackTwo: [cssIcon, jsIcon, reactLogo, reduxLogo, rubyLogo, railsLogo, pgLogo],
        mainImage 
      }
    }
  }

</script>
<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 1024px;
    padding-top: 3rem;
    padding-bottom: 3rem;
    
    .description {
      margin-left: auto;
      margin-right: auto;
      max-width: 700px;
      text-align: left;
    }
  }
  .stack {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  img {
    max-width: 500px;
  }

  .lang-icon {
    max-width: 105px;
    max-height: 60px;
  }
  
</style>