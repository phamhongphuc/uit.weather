// import io from 'socket.io-client';
import Vue from 'vue';
import router from './router';
import store from './store';
import app from './vue/app/app.vue';
import '../style/index.scss';

new Vue({
    el: '#app',
    router,
    store,
    render: h =>
        h(app, {
            ref: 'app',
        }),
});
