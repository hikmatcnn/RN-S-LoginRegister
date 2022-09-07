import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image,ImageBackground } from 'react-native';
import {WARNA_ABU_ABU} from '../../Config/constant';
import {ImageTikomdik, CabinHome, ImageHeader, Logo, Home001} from '../../Assets/Images';

function HomeScreen() {
    return (
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.page}>
            <ImageBackground source={ImageHeader} style={styles.header}>
            <Image source={ImageTikomdik} style={styles.logo} />
            <View style={styles.hello}>
              <Text style={styles.selamat}>Selamat Datang, </Text>
              <Text style={styles.username}>SMA NEGERI 12 BANDUNG</Text>
            </View>
            <Text style={styles.label}></Text>
            <Text style={styles.label}>Berita</Text>
            <Image source={Home001} style={styles.gambarBerita}/>
          </ImageBackground>
          
          <View style={styles.layanan}>
          <Text style={styles.label}>Menu</Text>
          <View style={styles.iconLayanan}>
            <View style={styles.container}>
              <View style={styles.cardHomeOne}>
                <Image style={styles.squareOne} source={CabinHome} />
                <Text style={styles.textIcon}>
                  Manajemen Jurusan
                </Text>
              </View>
              <View style={styles.cardHomeOne}>
                <Image style={styles.squareOne} source={CabinHome} />
                <Text style={styles.textIcon}>
                  Manajemen Kelas
                </Text>
              </View>
              <View style={styles.cardHomeOne}>
                <Image style={styles.squareOne} source={CabinHome} />
                <Text style={styles.textIcon}>
                  Manajemen Anggota Kelas
                </Text>
              </View>              
            </View>
          </View>
        </View>
          </View>
        </SafeAreaView>
      );
}

export default HomeScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10,
    marginBottom:120,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
  },
  hello: {
    marginTop: windowHeight * 0.03,
  },
  selamat: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular',
  },
  username: {
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold',
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  layananImages: {
    width: 100,
    height: 80,
    flexWrap: 'wrap',
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
    flex: 1,
  },
  pesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center', // ignore this - we'll come back to it
    justifyContent: 'center', // ignore this - we'll come back to it
    flexDirection: 'row',
    paddingRight: 30,
  },
  cardHomeOne: {
    // backgroundColor: '#33C4FF',
    alignItems: 'center', // ignore this - we'll come back to it
    justifyContent: 'center', // ignore this - we'll come back to it
    width: 120,
    height: 120,
  },
  textIcon: {
    width: 80,
    fontSize: 15,
    fontWeight:'bold',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  squareOne: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    width: 80,
    height: 80,
    margin: 4,
  },
  gambar:{
    width: '50%',
    height: 100,
    resizeMode: 'contain',
    margin: 30,
  },
  gambarBerita: {    
    alignItems: 'center', // ignore this - we'll come back to it
    justifyContent: 'center', // ignore this - we'll come back to it
    width: '100%',
    height: '70%',
    paddingBottom: 40,
  },
});