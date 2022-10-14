import { StyleSheet, Text, View, Image } from 'react-native'

const Imagens = () => {
  return (
    <View>
      <Image source={require('../../assets/police.jpg')}
      style = {styles.imagem} /> 
    </View>
  )
}

export default Imagens

const styles = StyleSheet.create({
  imagem:{
    width: 350,
    height: 250,
    borderRadius: 10,
    marginLeft:'auto',
    marginRight:'auto',
    resizeMode : 'center',
   }
   
})
