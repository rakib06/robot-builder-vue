<template>
    <div>
    <div class="top-row">
      <div class="top part">
        <img v-bind:src="robotParts.heads[buttonHeadIndex].src" title="head"/>
        <button @click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button  @click="selectNextHead()"  class="next-selector"> &#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="robotParts.arms[buttonLeftArmtIndex].src" title="left arm"/>
        <button  @click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="robotParts.torsos[buttonTorsoIndex].src" title="left arm"/>
        <button  @click="selectPreviousTorso()" class="prev-selector">&#9668;</button>
        <button @click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="robotParts.arms[buttonRightArmtIndex].src" title="left arm"/>
        <button  @click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img v-bind:src="robotParts.bases[buttonBaseIndex].src" title="left arm"/>
        <button  @click="selectPreviousBase()" class="prev-selector">&#9668;</button>
        <button @click="selectNextBase()" class="next-selector">&#9658;</button>
      </div>
    </div>
  </div>

</template>

<script>

import robotParts from '../data/parts';

function getIncreasingValidIndex( index, max_length){
    const newIndex = index + 1;
    return newIndex === max_length ? 0 : newIndex;
}
function getDecreasingValidIndex( index, max_length){
    const newIndex = index - 1;
    return newIndex < 0  ? max_length -1 : newIndex;
}
export default {
    name: 'RobotBuilder',
    data(){
        return {
            robotParts,
            buttonHeadIndex: 0,
            buttonLeftArmtIndex: 0,
            buttonTorsoIndex: 0,
            buttonRightArmtIndex: 0,
            buttonBaseIndex: 0,

        };
    },

    methods:{
        selectNextHead(){
            //console.log('Hi');
            this.buttonHeadIndex = getIncreasingValidIndex(this.buttonHeadIndex, robotParts.heads.length )
             
        },
        selectPreviousHead(){
            //console.log('Hi');
            this.buttonHeadIndex = getDecreasingValidIndex(this.buttonHeadIndex, robotParts.heads.length )
             
        },
        selectNextLeftArm(){
            //console.log('Hi');
            this.buttonLeftArmtIndex = getIncreasingValidIndex(this.buttonLeftArmtIndex, robotParts.arms.length )
             
        },
        selectPreviousLeftArm(){
            //console.log('Hi');
            this.buttonLeftArmtIndex = getDecreasingValidIndex(this.buttonLeftArmtIndex, robotParts.arms.length )
             
        },
        selectNextTorso(){
            //console.log('Hi');
            this.buttonTorsoIndex = getIncreasingValidIndex(this.buttonTorsoIndex, robotParts.torsos.length )
             
        },
        selectPreviousTorso(){
            //console.log('Hi');
            this.buttonTorsoIndex = getDecreasingValidIndex(this.buttonTorsoIndex, robotParts.torsos.length )
             
        },
        selectNextRightArm(){
            //console.log('Hi');
            this.buttonRightArmtIndex = getIncreasingValidIndex(this.buttonRightArmtIndex, robotParts.arms.length )
             
        },
        selectPreviousRightArm(){
            //console.log('Hi');
            this.buttonRightArmtIndex = getDecreasingValidIndex(this.buttonRightArmtIndex, robotParts.arms.length )
             
        },
        selectNextBase(){
            //console.log('Hi');
            this.buttonBaseIndex = getIncreasingValidIndex(this.buttonBaseIndex , robotParts.bases.length )
             
        },
        selectPreviousBase(){
            //console.log('Hi');
            this.buttonBaseIndex  = getDecreasingValidIndex(this.buttonBaseIndex , robotParts.bases.length )
             
        },

        
    }
}
</script>

<style>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
} 
.part img {
  width:165px;
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

</style>