/*
##
Feito por Vinicius Eduardo, 2024
Todos os direitos reservados.
##
*/

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
//use fonts
import { useFonts } from "expo-font";
//use linear gradient
import { LinearGradient } from "expo-linear-gradient";

//icons libs
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

export default function App() {
  const statusBarHeight = getStatusBarHeight;

  //load fonts
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#303030",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={50} color="#ffd35c" />
      </View>
    );
  }
  //

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 30, backgroundColor: "#181818" }}
    >
      <StatusBar style="light" backgroundColor="#181818" />
      <ScrollView style={{ paddingVertical: 10 }}>
        <View
          style={[
            styles.header,
            { borderBottomWidth: 2, borderColor: "#666666" },
          ]}
        >
          <View style={{ gap: 20, alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
              }}
            >
              <View style={styles.searchCont}>
                <Ionicons name="search" size={24} color="#999999" />
                <TextInput
                  placeholder="Pagamentos, cartões, investimentos..."
                  placeholderTextColor={"#999999"}
                  style={[
                    styles.text,
                    { fontSize: 15, flex: 1, color: "#f4f4f4" },
                  ]}
                />
              </View>

              <Ionicons name="chatbubble-outline" size={30} color="#ffd257" />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: 10,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <View style={styles.iconbox}>
                  <Image
                    source={require("./assets/icons/man.png")}
                    style={{ width: 100, height: 100 }}
                  />
                </View>

                <View>
                  <Text style={styles.title}>Seja Bem-Vindo, Eduardo!</Text>
                  <Text style={[styles.text, { fontSize: 14 }]}>
                    @edubankui
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  gap: 15,
                  alignSelf: "flex-start",
                  margin: 10,
                }}
              >
                <TouchableOpacity>
                  <MaterialIcons
                    name="attach-money"
                    size={25}
                    color="#ffd257"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Octicons name="gear" size={25} color="#f4f4f4" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text style={[styles.text, {}]}>Saldo Atual:</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={[styles.title, { fontSize: 35 }]}>R$4.978,99 </Text>
              <MaterialCommunityIcons
                name="eye-outline"
                size={30}
                color="#f4f4f4"
              />
            </View>
          </View>
        </View>

        <View style={[styles.optionsMenu]}>
          <View style={{ alignItems: "center", padding: 10, width: 100 }}>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <FontAwesome6 name="arrow-trend-up" size={24} color="#f4f4f4" />
              <Text style={[styles.text]}>Investir</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              alignItems: "center",
              padding: 10,
              width: 150,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderColor: "#878787",
            }}
          >
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Entypo name="wallet" size={24} color="#f4f4f4" />
              <Text style={[styles.text]}>Sua Carteira</Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", width: 110, padding: 10 }}>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <MaterialIcons name="payments" size={24} color="#f4f4f4" />
              <Text style={[styles.text]}>Pagamentos</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.operationsMenu]}>
          <View /*Header*/>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={[styles.title]}>Operações</Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={[styles.text, { color: "#ffd257" }]}>
                  Último mês
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="#ffd257"
                />
              </View>
            </View>

            <View
              style={{
                paddingVertical: 15,
                borderBottomWidth: 2,
                borderColor: "#878787",
              }}
            >
              <Text style={[styles.text, { fontSize: 17, paddingBottom: 10 }]}>
                Gastos: R$568,67
              </Text>

              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.text}>Restaurantes: </Text>

                  <View
                    style={[
                      styles.barColor,
                      { backgroundColor: "#f74f4f", paddingHorizontal: 100 },
                    ]}
                  ></View>

                  <Text style={styles.text}> 50%</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.text}>Cinema: </Text>

                  <View
                    style={[styles.barColor, { backgroundColor: "#a3ff82" }]}
                  ></View>

                  <Text style={styles.text}> 22%</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.text}>Eventos: </Text>

                  <View
                    style={[
                      styles.barColor,
                      { backgroundColor: "#ffd257", paddingHorizontal: 60 },
                    ]}
                  ></View>

                  <Text style={styles.text}> 28%</Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{ paddingVertical: 20, gap: 20 }} /*Transações Recentes*/
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <View
                  style={{
                    backgroundColor: "#888888",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <Entypo name="shopping-cart" size={24} color="#ffd257" />
                </View>

                <View>
                  <Text style={[styles.text, { fontSize: 17 }]}>Loja Nike</Text>
                  <Text
                    style={[styles.text, { fontSize: 15, color: "#919191" }]}
                  >
                    Pagamento
                  </Text>
                </View>
              </View>

              <View style={{ alignSelf: "flex-end" }}>
                <Text style={styles.text}>-R$489,90</Text>
                <Text style={[styles.text, { color: "#919191" }]}>16:34</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <View
                  style={{
                    backgroundColor: "#888888",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <Feather name="arrow-up-right" size={24} color="#a3ff82" />
                </View>

                <View>
                  <Text style={[styles.text, { fontSize: 17 }]}>
                    Luíza Silva
                  </Text>
                  <Text
                    style={[styles.text, { fontSize: 15, color: "#919191" }]}
                  >
                    Transferência
                  </Text>
                </View>
              </View>

              <View style={{ alignSelf: "flex-end" }}>
                <Text style={styles.text}>-R$67,00</Text>
                <Text style={[styles.text, { color: "#919191" }]}>12:23</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.yourCards}>
          <Text style={styles.title}>Seus Cartões:</Text>

          <ScrollView horizontal={true} style={{paddingBottom: 10}}>
            <View style={styles.card}>
              <LinearGradient
                colors={["#FFFFFF", "#4dc1ff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                  position: "absolute",
                  height: 160,
                  width: 300,
                  borderRadius: 20,
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={[styles.text, { color: "#1b1b1b" }]}>
                  Cartão Nacional
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <MaterialCommunityIcons
                    name="signal-variant"
                    size={24}
                    color="black"
                  />
                  <Text style={{ fontSize: 20 }}>🇧🇷</Text>
                </View>
              </View>

              <Text style={[styles.text, { color: "#1b1b1b" }]}>
                3476 5585 574 8098
              </Text>
              <Text style={[styles.text, { color: "#1b1b1b" }]}>05/24</Text>

              <View
                style={{
                  paddingTop: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={[styles.title, { fontSize: 25 }]}>R$2.789.34</Text>

                <Image
                  source={require("./assets/icons/visa.png")}
                  style={{ width: 60, height: 20 }}
                />
              </View>
            </View>

            <View style={styles.card}>
              <LinearGradient
                colors={["#9e3434", "#bf3f3f", "#ff6666"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                  position: "absolute",
                  height: 160,
                  width: 300,
                  borderRadius: 20,
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={[styles.text, { color: "#f4f4f4" }]}>
                  Cartão Nacional
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <MaterialCommunityIcons
                    name="signal-variant"
                    size={24}
                    color="#f4f4f4"
                  />
                  <Text style={{ fontSize: 20 }}>🇧🇷</Text>
                </View>
              </View>

              <Text style={[styles.text, { color: "#f4f4f4" }]}>
                3476 5585 574 8098
              </Text>
              <Text style={[styles.text, { color: "#f4f4f4" }]}>05/24</Text>

              <View
                style={{
                  paddingTop: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={[styles.title, { fontSize: 25 }]}>R$1.284.35</Text>

                <Image
                  source={require("./assets/icons/visa.png")}
                  style={{ width: 60, height: 20 }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  barColor: {
    paddingVertical: 5,
    paddingHorizontal: 50,
    borderRadius: 10,
  },

  card: {
    width: 300,
    height: 160,
  marginRight: 20,
    borderRadius: 15,
    padding: 15,
    overflow: 'hidden'
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    backgroundColor: "#181818",
    width: "100%",
    height: 250,
    alignItems: "center",
  },

  searchCont: {
    backgroundColor: "#212121",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    width: 350,
    gap: 10,
  },

  optionsMenu: {
    backgroundColor: "#212121",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
    padding: 15,
    borderRadius: 10,
    borderBottomWidth: 3,
    borderColor: "#ffd257",
  },

  operationsMenu: {
    backgroundColor: "#212121",
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },

  yourCards: {
    marginHorizontal: 20,
    marginBottom: 40,
  },

  iconbox: {
    borderRadius: 50,
    overflow: "hidden",
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    color: "#f4f4f4",
  },

  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#f4f4f4",
  },
});
