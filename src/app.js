import Vue from 'vue'
import App from './App.vue'
import siteConfig from '~/config/SiteConfig.js'
import { createRouter } from './router/index'
import { createStore } from './store/index'
import { sync } from 'vuex-router-sync';

export function createApp (){
    const router = createRouter()
    const store = createStore()
    sync(store, router)
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    Vue.$site = siteConfig.site
    return {app, router, store}
}