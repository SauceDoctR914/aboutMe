<template>
  <div id="bio" class="about">
    <h1>About me</h1>
    <div class="bio-container">
      <div class="title-block">
        <p v-html>Hi, I'm Gavin. I'm a 27 year old software and web developer based in NYC. Born and raised 25 minutes from NYC, you could say I am a little biased when I tell you that I love New York. Aside from living here, I went to undergrad at the University of Pittsburgh. For one semester I studied in Sevilla, Spain, which is easily now one of my favorite places on earth!<br><br>
        I started teaching myself how to program in 2017, and now work as a Frontend Engineer in Brooklyn.
        Some of my favorite technologies include JavaScript frameworks React and Vue, SCSS, and Ruby on Rails. Coding gives us as developers the opportunity to build, and believe me, I've loved using my imagination to build since before constructing cities out of legos as a kid.
        <br><br>
        When I'm not programming, you can catch me chefing it up in my kitchen. If you are interested in checking out some of the delcious food I make in my sparetime, check this out. 
        <br>
        I also love hiking, kayaking, traveling, photography (sadly just iphone for now), and sports. I'm an avid Yankees, Knicks, Giants, and Rangers fan (NY Teams Only).
        </p>
      </div>
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<script>


const NameContainer = () => import('./NameContainer.vue')
export default {
  name: 'AboutMe',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  grid-column-start: 2;
  text-align: left;
  max-width: 550px;
  grid-row-start: 3;
}
.bio-container {
  text-align: left;
  max-width: 550px;
  justify-self: flex-end;
}
</style>
