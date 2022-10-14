import { Text, View, StyleSheet, TouchableOpacity,StatusBar} from 'react-native';
import Header from './src/components/Header';
// import Imagens from './src/components/Imagens';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import Bandas from './src/components/Bandas'


export default function App() {
  return (
   <SafeAreaProvider>
     <SafeAreaView style = {estilos.container}>
       <SafeAreaView >
        {
         <Header titulo = "Welcome Rock in Roll" subtitulo = "Bands Information"/>
        }
          <SafeAreaView>
            <Bandas/>
          </SafeAreaView>
       </SafeAreaView >
     </SafeAreaView > 
     <StatusBar barStyle={'light-content'} />
   </SafeAreaProvider>       
  );
}


const estilos = StyleSheet.create({
   container:{
     flexDirection: 'row',
     justifyContent: 'center',
     backgroundColor: 'black',
     flex: 1, 
   },  
   
});
