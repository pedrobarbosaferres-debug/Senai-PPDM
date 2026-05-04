import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Foto from '../assets/images/vava.jpg'

export default function Index() {
  return (
    //   <View style = {estilos.corpo}>
    //   <Text style = {estilos.titulo}>Meu primeiro app</Text>
    // </View>
    <ScrollView style={estilos.container}>
       <Text style={estilos.titulo}>Meu primeiro app</Text>
      <Image source={Foto} style={estilos.Imagem}/>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>Sobre o App</Text>
        <Text style={estilos.texto}>Motivos do porque a LOUD vai se classificar</Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>motivos:</Text>
        <Text style={estilos.item}>- Temos o luk-xo</Text>
        <Text style={estilos.item}>- temos um prodigio chamado Edge</Text>
        <Text style={estilos.item}>- TEMOS O MELHOR PODER DE TODOS A FÉ</Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>O que eu preciso para assistir o jogo da loud</Text>
        <Text style={estilos.item}>- Bíblia</Text>
        <Text style={estilos.item}>- Água benta</Text>
        <Text style={estilos.item}>- Fé</Text>
        <Text style={estilos.item}>- Oração</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  //   backgroundColor:'#37b1e1'
  // },

  container:{
    
  }
})
