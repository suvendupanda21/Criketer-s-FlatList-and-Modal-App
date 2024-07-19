import React, { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import {
  BLACK,
  BLUE,
  GREY,
  ORANGE,
  RED,
  WHITE,
  YELLOW
} from "../../constants/color";
import {
  AMARNATH,
  BOOTSTRAP,
  COREJAVA,
  DHONI,
  FLUTTER,
  GAVASKAR,
  KAPIL,
  LARA,
  MONGODB,
  ORACLE,
  REACT,
  REACTJS,
  RICHARD,
  RICKEY,
  ROHIT,
  TENDULKAR,
  UI,
  VIRAT,
  YUVRAJ
} from "../../constants/imagePath";

export default ComputerScience = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [info, setInfo] = useState("");

   const cricketer = [
    {
      img: RICHARD,
      name: "VIVIAN RICHARD",
      desc: "Sir Isaac Vivian Alexander Richards (born 7 March 1952) is a retired Antiguan cricketer who represented the West Indies cricket team between 1974 and 1991. Usually batting at number three in a dominant West Indies side, Richards is widely regarded as one of the greatest batsmen of all time."
    },
    {
      img: GAVASKAR,
      name: "SUNIL GAVASKAR",
      desc: "Sunil Manohar Gavaskar (Marathi pronunciation born 10 July 1949) is a former captain of the Indian national cricket team who represented India and Bombay from 1971 to 1987. Gavaskar is acknowledged as one of the greatest opening batsmen of all time."
    },
    {
      img: AMARNATH,
      name: "MOHENDAR AMARNNATH",
      desc: "Mohinder Amarnath Bhardwaj (born 24 September 1950) is a former Indian cricketer, cricket analyst and actor. He is the son of Lala Amarnath, the first post-independence captain of India."
    },
    {
      img: KAPIL,
      name: "KAPIL DEV",
      desc: "Kapil Dev Nikhanj born 6 January 1959) is an Indian former cricketer. He is regarded as one of the greatest all-rounders in the history of cricket, he was a fast-medium bowler and a hard-hitting middle-order batsman."
    },
   {
      img: LARA,
      name: "BIRAN LARA",
      desc: "Brian Charles Lara, TC, OCC (born 2 May 1969) is a Trinidadian former international cricketer, widely acknowledged as one of the greatest batsmen of all time. He holds several cricketing records, including the record for the highest individual score in first-class cricket."
    },
    {
      img: TENDULKAR,
      name: "SACHIN TENDULKAR",
      desc: "Sachin Tendulkar (God of Cricket) born 24 April 1973) is an Indian former international cricketer who captained the Indian national team. He is widely regarded as one of the greatest batsmen in the history of cricket. Hailed as the world's most prolific batsman of all time."
    },
    {
      img: YUVRAJ,
      name: "YUVRAJ SINGH",
      desc: "Yuvraj Singh (born 12 December 1981) is a former Indian international cricketer who played in all formats of the game. He was an all-rounder who batted left-handed in the middle order and bowled slow left-arm orthodox."
    },
    {
      img: RICKEY,
      name: "RICKEY POINTING",
      desc: "Ricky Ponting (Gangster of Cricket) born 19 December 1974 is an Australian cricket coach, commentator and former player. Widely regarded as one of the greatest batsmen of all time., Ponting was captain of the Australia national team between 2004 and 2011 in Test cricket."
    },
 {
      img: DHONI,
      name: "MS DHONI",
      desc: "Mahendra Singh Dhoni (Cpatina Cool) born 7 July 1981 is an Indian professional cricketer who plays as a right handed batter and a wicket-keeper. Widely regarded as one of the most prolific wicket-keeper-batsmen and captains, he represented the Indian cricket team and was the captain."
    },
    {
      img: ROHIT
]

 // array of cricketer objects

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={ORANGE} barStyle="light-content" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cricketer}
        renderItem={({ item }) => (
          <View style={styles.flexView1}>
            <View style={styles.flexView2}>
              <View style={styles.height} />
              <Image style={styles.flatlistImg} source={item.img} />
              <View style={styles.height} />
              <View style={styles.txtView}>
                <Text style={styles.txt}>{item.name}</Text>
                <Pressable
                  onPress={() => {
                    setInfo(item);
                    setVisibleModal(true);
                  }}
                  style={[styles.btn, styles.btnPress]}
                >
                  <Text style={styles.btnTxt}>More Information</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: WHITE,
          borderRadius: 20,
          elevation: 5
        }}
      >
        <Modal
          onRequestClose={() => {
            setVisibleModal(false);
            setInfo("");
          }}
          visible={visibleModal}
          transparent={true}
        >
          <View style={styles.mainModalView}>
            <View style={styles.modalView}>
              <View style={styles.height} />
              <Text style={styles.modalInfo}>{info.name}</Text>
              <Image style={styles.modalImg} source={info.img} />
              <View style={styles.height} />
              <Text style={styles.modalTxt}>{info.desc}</Text>
              <Pressable
                onPress={() => {
                  setVisibleModal(false);
                }}
                style={[styles.modalBtn, styles.btnClose]}
              >
                <Text style={styles.modalbtnTxt}>Back to Main</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ORANGE,
    flex: 1
  },
  flexView1: {
    width: "100%",
    alignItems: "center",
    padding: 10
  },
  flexView2: {
    flexDirection: "row",
    height: 200,
    width: "100%",
    backgroundColor: WHITE,
    elevation: 5,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    paddingLeft: 10
  },
  height: {
    height: 20
  },
  flatlistImg: {
    height: 150,
    width: 150
  },
  txtView: {
    width: "40%",
    padding: 20,
    marginHorizontal: 5
  },
  txt: {
    color: BLACK,
    fontSize: 18,
    fontWeight: "bold"
  },
  btnView: {
    height: 40
  },
  btn: {
    width: 150,
    height: 50,
    elevation: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  btnPress: {
    backgroundColor: BLUE
  },
  btnTxt: {
    color: WHITE,
    fontSize: 18,
    fontWeight: "bold"
  },
  mainModalView: {
    flex: 1,
    backgroundColor: ORANGE,
    alignItems: "center",
    padding: 30
  },
  modalView: {
    height: "90%",
    width: "90%",
    backgroundColor: WHITE,
    elevation: 3,
    borderRadius: 10,
    alignItems: "center"
  },
  modalHeading: {


