<template>
    <div v-if="robotParts" class="content">
    
    <div class="preview">
      <CollapsibleSection>
         <!-- Injecting Content Into Child Component from Parent component  with slots-->
        <div class="preview-content">
          <div class="top-row">
            <img :src="robotOrgans.head.src"/>
          </div>
          <div class="middle-row">
            <img :src="robotOrgans.leftArm.src" class="rotate-left"/>
            <img :src="robotOrgans.torso.src"/>
            <img :src="robotOrgans.rightArm.src" class="rotate-right"/>
          </div>
          <div class="bottom-row">
            <img :src="robotOrgans.base.src"/>
          </div>
        </div>
      </CollapsibleSection>
      <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    </div>

      
    
    <div class="top-row">
        <PartSelector :parts="robotParts.heads" position="top" @partSelected="part => robotOrgans.head = part" />
    </div>

    <div class="middle-row">
      <PartSelector :parts="robotParts.arms" position="left" @partSelected="part => robotOrgans.leftArm = part" />
      <PartSelector :parts="robotParts.torsos" position="center"  @partSelected="part => robotOrgans.torso = part" />
      <PartSelector :parts="robotParts.arms" position="right" @partSelected="part => robotOrgans.rightArm = part" />  
    </div>

    <div class="bottom-row">
      <PartSelector :parts="robotParts.bases" position="bottom" @partSelected="part => robotOrgans.base = part"  />
    </div>

    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td>{{robot.head.title}}</td>
            <td class="cost">{{robot.cost}}</td>
          </tr>
        </tbody>
      </table>
    </div>


  </div>

</template>

<script>

//import createdHookMixin from './created-hook-mixin';
//import robotParts from '../data/parts';
import PartSelector from './PartSelector'
import CollapsibleSection from '../shared/CollapsibleSection'


export default {

    components: {PartSelector, CollapsibleSection},
    name: 'RobotBuilder',

    created(){
      this.$store.dispatch('getParts')
    },

    beforeRouteLeave(to, from, next) {
    if (this.addedToCart) {
      next(true);
    } else {
      /* eslint no-alert: 0 */
      /* eslint no-restricted-globals: 0 */
      const response = confirm('You have not added your robot to your cart, are you sure you want to leave?');
      next(response);
    }
  },
    
    data(){
        return {
            //robotParts, // AvailableParts       
            cart:[],
            // selectedRobot
            robotOrgans: {
                head: {},
                leftArm: {},
                torso: {},
                rightArm: {},
                base: {}                     
            },

        };
    },

    computed:{
        robotParts(){
          return this.$store.state.parts;
        }
    },

    methods:{

        addToCart() {
          const robot = this.robotOrgans;
          const cost = robot.head.cost +
          robot.leftArm.cost +
          robot.torso.cost +
          robot.rightArm.cost +
          robot.base.cost;
          // global $stotre
          this.$store.dispatch('addRobotToCartAction', Object.assign({}, robot, { cost }))
          // returning promises from actions
          .then(()=> this.$router.push('/cart'));
          //this.cart.push(Object.assign({}, robot, { cost }));
          this.addedToCart = true;
        
        },
        

        
    }
    // End of Method
}
</script>

<style >
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
    width:165px;
    cursor: pointer;
  
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  color: red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  width:210px;
  padding:3px;
  font-size:16px;
}
td, th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost {
  text-align: right;
}
.sale-border {
  border: 3px solid red;
}
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>
