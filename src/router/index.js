import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/MainPage/MainContainer/Home.vue';
import Movies from '../components/MainPage/MainContainer/Movies.vue';
import Tvs from '../components/MainPage/MainContainer/TVs.vue';
import Player from '../components/VideoPlayer.vue';
import Latest from '../components/MainPage/MainContainer/Latest.vue';
import Catagory from '../views/Catagory.vue';
import LoginPage from '../pages/Login/App.vue'
import ManagerPage from '../pages/Manager/App.vue'
import VideoPage from '../pages/Video/App.vue'
import Register from '../pages/Register/App.vue'
import TrafficAnalysis from '../views/TrafficAnalyzePage.vue'
import Bandwith from '../views/BandwidthPage.vue'
import HistoryChart from '../views/HistoryManage.vue'
import IntroPage from '../pages/VideoIntro/App.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      keepalive:true
    }
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies,
    meta:{
      keepalive:true
    }
  },
  {
    path: '/tv',
    name: 'tv',
    component: Tvs,
    meta:{
      keepalive:true
    }
  },

  {
    path:'/player',
    name:'player',
    component:Player,
    meta:{
      keepalive:false
    }
  },
  {
    path:'/latest',
    name:'latest',
    component:Latest,
    meta:{
      keepalive:true
    }
  },

  {
    path: '/catagory',
    name: 'catagory',
    component: Catagory,
    meta:{
      keepalive:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/managerpage',
    name: 'managerpage',
    component: ManagerPage,
    children:[
      {
        path: 'trafficanalysis',
        name: 'trafficanalysis',
        component: TrafficAnalysis,

      },
      {
        path: 'bandwith',
        name: 'bandwith',
        component: Bandwith,

      },
      {
        path: 'historychart',
        name: 'historychart',
        component: HistoryChart,

      },
    ],
  },
  {
    path: '/videopage',
    name: 'videopage',
    component: VideoPage,
  },  
  {
    path: '/intro',
    name: 'intro',
    component: IntroPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
