import { StyleSheet, Text, View, Image , ScrollView, TouchableOpacity} from 'react-native'
import {dados} from '../data/dados'
import { AntDesign } from '@expo/vector-icons'; 


const Bandas = () => {
  return (
    <View style={estilos.container}>
    
    <ScrollView horizontal={true}>
    {
     dados.map((turnes) => ( 
      <View style={estilos.dados} key={dados.id}>
        <View>
          <TouchableOpacity>
            <Image style={estilos.imagem} source={{uri: turnes.url}}/>
          </TouchableOpacity>
        </View>
        <Text style={estilos.nomeBanda} ><AntDesign name="pushpin" size={24} color="black" /> {turnes.banda}</Text>
        <Text style={estilos.nomeTurne}><AntDesign name="pushpin" size={24} color="black" /> {turnes.nomedaTurne}</Text>
        <Text style={estilos.nomeBilheteria}><AntDesign name="pushpin" size={24} color="black" /> {turnes.bilheteria}</Text>
        <Text style={estilos.nomeShow}><AntDesign name="pushpin" size={24} color="black" /> {turnes.numerodeShows}</Text>
        <Text style={estilos.nomePublico}><AntDesign name="pushpin" size={24} color="black" />  {turnes.publico}</Text>
        <Text style={estilos.nomeCuriosidade}><AntDesign name="pushpin" size={24} color="black" /> {turnes.curiosidade}</Text>       
      </View>
      
    ))}   
    </ScrollView>
    </View>
  )
}

export default Bandas

const estilos = StyleSheet.create({
    container:{
     padding: 5,  
   
    },
    nomeBanda:{
        color:'#3F3F3F', 
        fontSize: 17,    
    },
    nomeTurne:{
      color:'#3F3F3F', 
      fontSize: 17,    
  },
  nomeBilheteria:{
    color:'#3F3F3F', 
    fontSize: 17,  
  },  
  nomeShow:{
      color:'#3F3F3F', 
      fontSize: 17,    
  },
  nomePublico:{
    color:'#3F3F3F', 
    fontSize: 17,    
},
nomeCuriosidade:{
  color:'#3F3F3F', 
  fontSize: 17, 
  width: 390,
  height: 560,
    
},
imagem:{
  height: 250,
  width:380,
  borderRadius:10,
  marginVertical:8,
  alignSelf:'center',
  
},
dados:{
  backgroundColor:'#bdbebd',
  marginVertical: 10,
  marginHorizontal: 5,
  borderRadius: 15,
  padding:10,
  
},

})
