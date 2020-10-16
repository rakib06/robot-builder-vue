<template>
  <div>
      <h1>{{part.title}}</h1>
      <div>
          {{part.description}}
      </div>
  </div>
</template>

<script>
import parts from '../data/parts'

export default {
    name: "PartInfo",
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
            return parts[partType].find(part=> part.id === +id);
            


        }
    },
    
}
</script>

<style>

</style>