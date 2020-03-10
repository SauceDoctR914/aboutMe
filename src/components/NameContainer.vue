<template>
  <div class="name-container">
    <span class="name-letter">G</span>
    <span class="name-letter">A</span>
    <span class="name-letter">V</span>
    <span class="name-letter">I</span>
    <span class="name-letter">N</span>
    <span class="space"></span>
    <span class="space"></span>
    <span class="name-letter">S</span>
    <span class="name-letter">O</span>
    <span class="name-letter">K</span>
    <span class="name-letter">O</span>
    <span class="name-letter">L</span>
    <span class="name-letter">O</span>
    <span class="name-letter">F</span>
  </div>

</template>

<script>
  import $ from 'jQuery'

  export default {
    data () {
    return {
    }
  },
    methods: 
    {
      animateLetters(){
      }
    },
    mounted(){     
      $(".name-letter").hover(function(){
        console.log($('.name-letter>.event-log'), 'end')
        $(this).addClass("animate")
        setTimeout(()=> $(this).removeClass("animate"), 2010)          
      })
    }
  }

</script>

<style lang="scss" >

@import url('https://fonts.googleapis.com/css?family=Montserrat|Raleway&display=swap');

.name-container {
  display: flex;
  flex-direction: row;
}
.space {
  width: 1rem;
}

.name-letter {
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  line-height: 90px;
  font-weight: 700;
  font-size: 40px;
  @media screen and (min-width: 700px) {
    font-size: 50px;
  }
  @media screen and (min-width: 960px) {
    font-size: 60px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 80px;
  }
  background: linear-gradient(to right,  #5433FF 15%, #20BDFF 35%, #00ffff 75%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  &:nth-child(2){
    background: linear-gradient(to right, #00ffff 15%, #64b3f4 75%);
    -webkit-background-clip: text;
   } 
  &:nth-child(3){
    background: linear-gradient(to right, #64b3f4 25%, #33FF66 75%);
    -webkit-background-clip: text;
   }
  &:nth-child(4){
    background: linear-gradient(to right, #33FF66 5%, #59c173 85%);
    -webkit-background-clip: text;
   }
  &:nth-child(5){ 
    background: linear-gradient(to right, #66ff00 5%, #a80077 75%);
    -webkit-background-clip: text;
  }
  &:nth-child(8){ 
    background: linear-gradient(to right,#a80077 5%, #db36a4 35%, #FDFC47 85%);
    -webkit-background-clip: text;
  }
  &:nth-child(9){
    background: linear-gradient(to right, #FDFC47 25%, #00c9ff);
    -webkit-background-clip: text;
  }
  &:nth-child(10){    
    background: linear-gradient(to right, #00c9ff 25%, #00ffff 75%);
    -webkit-background-clip: text;
  }
  &:nth-child(11){
    background: linear-gradient(to right, #00ffff 25%, #E100FF 75%);
    -webkit-background-clip: text;
   }
   &:nth-child(12){
      background: linear-gradient(to right, #db36a4 5%, #E100FF 35%, #7F00FF 80%);
      -webkit-background-clip: text;
   }
   &:nth-child(13){
     background: linear-gradient(to right, #7F00FF 15%, #ff0084 85%);
    -webkit-background-clip: text;
   }
    &:nth-child(14){
     background: linear-gradient(to right, #ff0084, #f2709c);
    -webkit-background-clip: text;
   }    
  }

  .animate {
    animation-name: moveTextUp;
    animation-duration: 2s; 
    animation-iteration-count: 10;
    animation-direction: alternate;
    animation-timing-function: linear; 
    animation-fill-mode: forwards;
    pointer-events: none;
    backface-visibility: hidden;
    perspective: 1000; 
    &:nth-child(even){
      animation-name: moveTextDown;
    }
  }
  

  @-webkit-keyframes moveTextDown {
    0%,100%   { transform: translate3d(0%, 0px, 0px); }
    5%   { transform: translate3d(0px, 5%), 0px; }
    10%   { transform: translate3d(0px, 10%, 0px); }
    15%   { transform: translate3d(0px, 20%, 0px); }
    20%   { transform: translate3d(0px, 30%, 0px); }
    25%   { transform: translate3d(0px, 45%, 0px); }
    30%   { transform: translate3d(0px, 55%, 0px); }
    35%   { transform: translate3d(0px, 65%, 0px); }
    40%   { transform: translate3d(0px, 55%, 0px); }
    45%   { transform: translate3d(0px, 45%, 0px); }
    50%   { transform: translate3d(0px, 35%, 0px); }
    55%   { transform: translate3d(0px, 25%, 0px); }
    60%   { transform: translate3d(0px, 15%, 0px); }
    65%   { transform: translate3d(0px, 5%, 0px); }
    70%   { transform: translate3d(0px, -5%, 0px); }
    75%   { transform: translate3d(0px,-10%, 0px); }
    80%   { transform: translate3d(0px,-15%, 0px); }
    85%   { transform: translate3d(0px,-22.5%, 0px); }
    90%   { transform: translate3d(0px, -15%, 0px); }
    95%   { transform: translate3d(0px,-5%, 0px); }  
  }

  @keyframes moveTextOpposite {
    0%,100%   { transform: translate3d(0px, 0%, 0px); }
    5%, 65%   { transform: translate3d(0px, -5%, 0px); }
    10%   { transform: translate3d(0px, -10%, 0px); }
    15%   { transform: translate3d(0px, -20%, 0px); }
    20%   { transform: translate3d(0px, -30%, 0px); }
    25%, 45%   { transform: translate3d(0px, -45%, 0px); }
    30%, 40%   { transform: translate3d(0px, -55%, 0px); }
    35%   { transform: translate3d(0px, -1%, 0px); }
    50%   { transform: translate3d(0px, -35%, 0px); }
    55%   { transform: translate3d(0px, -25%, 0px); }
    60%   { transform: translate3d(0px, -15%, 0px); }
    70%   { transform: translate3d(0px, 5%), 0px; }
    75%   { transform: translate3d(0px, 15%, 0px); }
    80%   { transform: translate3d(0px, 25%, 0px); }
    85%   { transform: translate3d(0px, 35%, 0px); }
    90%   { transform: translate3d(0px, 25%, 0px); }
    95%   { transform: translate3d(0px, 10%, 0px); }  
  }
  @-webkit-keyframes moveTextUp {
    0%,100%   { transform: translate3d(0px, 0%, 0px); }
    5%   { transform: translate3d(0, -5%, 0px); }
    10%   { transform: translate3d(0px, -10%, 0px); }
    15%   { transform: translate3d(0px, -20%, 0px); }
    20%   { transform: translate3d(0px, -30%, 0px); }
    25%   { transform: translate3d(0px, -35%, 0px); }
    30%   { transform: translate3d(0px, -40%, 0px); }
    35%   { transform: translate3d(0px, -50%, 0px); }
    40%   { transform: translate3d(0px, -45%, 0px); }
    45%   { transform: translate3d(0px, -35%, 0px); }
    50%   { transform: translate3d(0px, -30%, 0px); }
    55%   { transform: translate3d(0px, -20%, 0px); }
    60%   { transform: translate3d(0px, -10%, 0px); }
    65%   { transform: translate3d(0px, -5%, 0px); }
    70%   { transform: translate3d(0px, 5%, 0px); }
    75%   { transform: translate3d(0px, 15%, 0px); }
    80%   { transform: translate3d(0px, 22.5%, 0px); }
    85%   { transform: translate3d(0px, 15%, 0px); }
    90%   { transform: translate3d(0px, 10%, 0px); }
    95%   { transform: translate3d(0px, 5%, 0px); }  
  }



</style>
