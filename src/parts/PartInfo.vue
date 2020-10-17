<template>
  <div>
      <h1>{{part.title}}</h1>
      <div>
          {{part.description}}
      </div>
  </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
    name: "PartInfo",
    mixins: [getPartsMixin],
    props: //['partType', 'id'], --> this will also work
    {
        //adding a validator using object syntax
        partType:{type: String},
        id:{
            type: [Number, String],
            validator(value){
                return Number.isInteger(Number(value))
            }
        }

    },
    computed:{
        part(){
            /*
            const partType = this.$route.params.partType;
            const id = this.$route.params.id;
            */
           // this --> the props
            const {partType, id } = this;
            // id --> string , +id casting to number
            return this.parts[partType].find(part=> part.id === +id);
            


        }
    },
    
}
</script>

<style>

</style>