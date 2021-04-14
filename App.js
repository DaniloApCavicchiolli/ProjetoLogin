import React, { useState, useEffect } from 'react'
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native'
import cadeado from './assets/cadeado1.png'
// import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster'
// import { AppLoading } from 'expo-app-loading'


export default function App() {

  const [containerAnimadoImagem] = useState(new Animated.ValueXY({ x: 0, y: -90 }))
  const [containerAnimadoDados] = useState(new Animated.ValueXY({ x: 0, y: 80 }))
  const [opacidadeDados] = useState(new Animated.Value(0))
  const [opacidadeImagem] = useState(new Animated.Value(0))

  // let [fontsLoaded] = useFonts({
  //   Lobster_400Regular,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />:
  // }

  useEffect(() => {
    // Método parallel() = Usado para executar duas animações ao mesmo tempo
    Animated.parallel([
      Animated.spring(containerAnimadoDados.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: false
      }),
      Animated.timing(opacidadeDados, {
        toValue: 1,
        duration: 800,
        useNativeDriver: false
      })
    ]).start()

    Animated.parallel([
      Animated.spring(containerAnimadoDados.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: false
      }),
      Animated.timing(opacidadeDados, {
        toValue: 1,
        duration: 800,
        useNativeDriver: false
      })
    ]).start()
  }, [])
  //########################################################################################################################################

  useEffect(() => {
    Animated.parallel([
      Animated.spring(containerAnimadoImagem.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: false
      }),
      Animated.timing(opacidadeImagem, {
        toValue: 1,
        duration: 800,
        useNativeDriver: false
      })
    ]).start()

    Animated.parallel([
      Animated.spring(containerAnimadoImagem.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: false
      }),
      Animated.timing(opacidadeImagem, {
        toValue: 1,
        duration: 800,
        useNativeDriver: false
      })
    ]).start()


  }, [])


  //########################################################################################################################################
  return (
    //KeyboardAvoidingView = Quando clicar na caixa de texto para digitar, sobe o teclado junto com a caixa de texto
    <KeyboardAvoidingView style={styles.telaFundo}>

      <View
        style={[styles.containerImagem]}>
        <Animated.Image source={cadeado} style={[styles.imagem, {
          opacity: opacidadeImagem,
          transform: [{ translateY: containerAnimadoImagem.y }]
        }]} />
      </View>


      <Animated.View
        style={[styles.containerDados, {
          opacity: opacidadeDados,
          transform: [{ translateY: containerAnimadoDados.y }]
        }]}
      >
        <TextInput
          style={styles.entradaDados}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TextInput
          style={styles.entradaDados}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TouchableOpacity style={styles.BotaoConectar}>
          <Text style={{ color: '#FFFFFF', fontSize: 20 }}>Conectar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 10 }}>
          <Text style={{ color: '#FFFFFF' }}>Recuperar conta</Text>
        </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>
  );
}

//########################################################################################################################################
const styles = StyleSheet.create({
  telaFundo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#808080"
  },
  imagem: {
    width: '90%',
    height: '50%',
    marginTop: 60,
    resizeMode: 'center'
  },

  containerDados: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  containerImagem: {
    flex: 1,
    justifyContent: 'center',
    width: '90%',
    alignItems: 'center',
  },
  entradaDados: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    marginBottom: 15,
    color: '#222222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  BotaoConectar: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },

})
