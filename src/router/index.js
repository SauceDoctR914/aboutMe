import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '../components/AboutMe.vue'
import NameContainer from '../components/NameContainer.vue'
import HomePage from '../components/HomePage.vue'

Vue.use(Router)

export default new Router({
  routes: [  
  {
    path: "/",
    name: "home",
    component: HomePage
  },
    {
      path: '/bio',
      name: 'AboutMe',
      component: AboutMe
    }
  ]
})
