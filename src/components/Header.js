import { Text, StyleSheet, View } from "react-native";

export default function Header({titulo, subtitulo}){
    return(
        <View style={estilos.container}>
            <Text style ={estilos.titulo }>{titulo}</Text>
            <Text style ={ estilos.subtitulo }>{subtitulo}</Text>
        </View>
         
    )
}

const estilos = StyleSheet.create({
    titulo:{
      fontSize:30,
      color: 'white',
      textAlign: 'center',
    },
    subtitulo:{
      fontSize:20,
      color: '#a9a9a9',
      textAlign: 'center',
    },
    
  }  
);