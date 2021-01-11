<template>
    <v-container>
    <v-row class="text-center">      
      <v-col class="mb-4">
        <h2 class="display-2 font-weight-bold mb-3">
          Listado de Cheaters detectados
        </h2>       
      </v-col>        
    </v-row>
    <v-row>
    
    </v-row>
    <v-row class="text-center">
    <v-col cols="12">
        <v-simple-table fixed-header class="elevation-3">
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-center">ID</th>
            <th class="text-center">Jugador</th>
            <th class="text-center">Fecha</th>
            <th class="text-center">Razón</th>
            <th class="text-center">microtimeLog</th>
            <th class="text-center">Steam-noSteam</th>
            <th class="text-center">Tipo de Cheat</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="d in a" :key="d.id">
                <td>{{d.idLog}}</td>
                <td>{{d.nickName}}</td>
                <td>{{d.dateTimeLog}}</td>
                <td>{{d.reasonLog}}</td>
                <td>{{d.microTimeLog}}</td>      
                <td>{{d.idSteam}}</td>
                <td>{{d.cheatType}}</td>
                <td>
                    <v-btn :to="{name:'detailsBan', params:{idLog:d.idLog,nickName:d.nickName }}" fab small color="primary"><v-icon>mdi-plus</v-icon></v-btn>
                    
                </td>
            </tr>
         </tbody>   
        </template>
        </v-simple-table>
    </v-col>
    </v-row>
  
    </v-container>
</template>
<script>
    import axios from 'axios';
    export default {
        name:'listarLogCheat',
        mounted(){
            this.obtenerCheats();
        },

    data: () => ({ 
    
      a: [
        
      ],
      idLog:null
    }),

        methods:{
            obtenerCheats(){
                axios.get('http://3.140.55.51/llhlApis/llhlApis.php')
                .then(r => {
                    this.a = r.data;
                    console.log(this.a);
                })
                .catch(function(error){
                    console.log(error);
                })
            },

        }
    }
</script>