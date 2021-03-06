import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        cart:[],
        parts: null,
    },

    mutations:{
        addRobotToCart(state, robot){
            state.cart.push(robot)
        },
        updateParts(state, parts){
            state.parts = parts;
            console.log(parts)
            console.log(parts.heads)
        }
    },

    // API
    actions:{
        getParts({commit}){
            axios.get('/api/parts')
            .then(result => commit('updateParts', result.data))
            .catch(console.error)
        },

        addRobotToCartAction({commit, state }, robot){
            const cart = [...state.cart, robot]
            return axios.post('/api/cart', cart)
            .then(()=>commit('addRobotToCart', robot))
        }


       

    },
    // Calculation
    getters:{
        cartSaleItems(state){
            return state.cart.filter(item => item.head.onSale)
        }
    },


});