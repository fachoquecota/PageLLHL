<template>
  <v-container>
    <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Detalles</h1>       
      </v-col>     
    </v-row>
    <v-row>
        <v-col>         
             <v-text-field
                v-model="details.nickName"        
                label="Nombre Jugador"        
                outlined
                readonly="readonly"
            ></v-text-field>

            <v-text-field
                v-model="details.serverIp"        
                label="IP Server"        
                outlined
                readonly="readonly"
            ></v-text-field>

            <v-text-field
                file="flex/flexbox"
                v-model="details.serverName"        
                label="Nombre de Servidor"
                outlined
                readonly="readonly"        
            ></v-text-field>
            
            <v-text-field
                v-model="details.description"        
                label="Game"
                outlined
                readonly="readonly"        
            ></v-text-field>
            <v-card-actions>
                 
             <v-btn :to="{path: '/listarLogCheat'}" type="submit" class="mr-4">Volver</v-btn>      

            </v-card-actions>
         
        </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name:'detailsBan',
    mounted(){
      this.idLog = this.$route.params.idLog;
      console.log(this.$route);
        axios.get('http://3.140.55.51/llhlApis/llhlApis.php?idLog='+this.idLog)      .then(r =>{
        this.details = r.data;
      })
      .catch(function(error){
        console.log(error);
      });
    },
    data(){
      return{
        idLog:null,
        details:{
          serverIp:'',
          serverName:'',
          description:''
        }
      }
    },
    methods:{

    }
}
</script>