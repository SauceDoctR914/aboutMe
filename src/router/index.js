import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '../components/AboutMe.vue'
import NameContainer from '../components/NameContainer.vue'
import HomePage from '../components/HomePage.vue'
import CookingComponent from '../components/CookingComponent.vue'
import ProjectsContainer from '../components/ProjectsContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [  
  {
    path: "/",
    name: "home",
    component: HomePage
  },
    {
      path: '/cooking',
      name: 'Cooking',
      component: CookingComponent
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsContainer
    }
  ]
})
