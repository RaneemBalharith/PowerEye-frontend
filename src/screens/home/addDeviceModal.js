import React, { useContext, useState } from "react";
import {
  Alert,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  Dimensions,
  Pressable,
  TextInput,
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Icon } from "./devicesIcons";
import { ThemeContext } from "../../services/theme.context";
//ceck wendo
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



export const AddDeviceModal = ({ onAddDevice, setOnAddDevice }) => {
  const plugs = [
    { plug: "plug1", id: 1 },
    { plug: "plug2", id: 2 },
    { plug: "plug3", id: 3 },
    { plug: "plug4", id: 4 },
    { plug: "plug5", id: 5 },
  ];

  const icons = [
    { id: 1, name: "coolers" },
    { id: 2, name: "Lightings" },
    { id: 3, name: "Heaters" },
    { id: 4, name: "Cookers/Makers" },
    { id: 5, name: "Blender" },
    { id: 6, name: "Alexa" },
    { id: 7, name: "hair-dryer" },
    { id: 8, name: "camera" },
    { id: 9, name: "washing-machine" },
    { id: 10, name: "iron" },
    { id: 11, name: "Vacuum cleaner" },
    { id: 12, name: "Air Purifier" },
    { id: 13, name: "games" },
    { id: 14, name: "Displayers" },
    { id: 15, name: "Audio Output" },
    { id: 16, name: "printer" },
    { id: 17, name: "charger" },
    { id: 18, name: "reciver" },
    { id: 19, name: "Sport Machine" },
  ];
  const [goNext, setGoNext] = useState();
  const [selectedPlug, setSelectedPlug] = useState();
  const [selectedDevice, setSelectedDevice] = useState();
  const { theme } = useContext(ThemeContext);
  const Plugs = ({ setSelectedPlug }) => {
    return (
      <>
        <Text style={styles(theme).modalText}>New Device ...</Text>
        <View
          style={styles(theme).plugsWrapper}
        >
          <Text style={styles(theme).descreption}>1- Choose your plug</Text>
          <Pressable>
            <Image
              style={{ height: 15, width: 80 }}
              source={require("../../../assets/meross.jpg")}
            />
          </Pressable>
        </View>
        <FlatList
          data={plugs}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setSelectedPlug(item.id);
              }}
              style={{
                padding: 8,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: "rgba(0,0,0,0.2)",
                backgroundColor:
                  item.id == selectedPlug ? "rgba(0,112,124,0.5)" : "white",
              }}
            >
              <Text
                style={styles(theme).plugsTitle}
              >
                {item.plug}
              </Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </>
    );
  };
  const DeviceInfo = () => {
    return (
      <>
        <Text style={styles(theme).modalText}>New Device ...</Text>

        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 14,
            }}
          >
            <Text style={styles(theme).descreption}>2- Choose plug type</Text>
            <Pressable>
              <Text>meross</Text>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {icons.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => {
                  setSelectedDevice(item.id);
                }}
                style={{
                  padding: 12,
                  margin: 6,
                  borderWidth: 1,
                  borderRadius: 100,
                  height: 55,
                  width: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "rgba(0,0,0,0.2)",
                  backgroundColor:
                    item.id == selectedDevice ? "rgba(0,112,124,0.5)" : "white",
                }}
              >
                <Icon key={item.id} size={30} id={item.id} color={"#00707C"} />
              </Pressable>
            ))}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 18,
            }}
          >
            <Text style={styles(theme).descreption}>3- Name your device</Text>
          </View>

          <TextInput
            style={styles(theme).deviceNameInput}
          />
        </ScrollView>
      </>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={onAddDevice}
      onRequestClose={() => {
        setOnAddDevice(!onAddDevice);
      }}
    >
      <KeyboardAvoidingView
        style={styles(theme).centeredView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        <View style={styles(theme).modalView}>
          <View>
            {goNext ? (
              <DeviceInfo />
            ) : (
              <Plugs setSelectedPlug={setSelectedPlug} />
            )}
          </View>
          <View style={styles(theme).buttonsWrapper}>
            {goNext ? (
              <Pressable
                style={styles(theme).nextButton}
                onPress={() => setGoNext(selectedPlug)}
              >
                <Text style={styles(theme).textStyle}>Add</Text>
              </Pressable>
            ) : (
              <Pressable
                style={styles(theme).nextButton}
                onPress={() => setGoNext(selectedPlug)}
              >
                <Text style={styles(theme).textStyle}>Next</Text>
              </Pressable>
            )}
            <Pressable
              style={styles(theme).button}
              onPress={() => setOnAddDevice(!onAddDevice)}
            >
              <Text style={[styles(theme).textStyle, { color: "black" }]}>
                Cancle
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create((theme) => ({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.sizes[3],
    shadowColor: theme.colors.secondary,
    width: windowWidth * 0.87,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: theme.sizes[5],
    width: theme.sizes[9],
    borderRadius: 20,
    elevation: 2,
    backgroundColor: theme.colors.secondary,
    opacity: 0.4,
    marginLeft: theme.space[2],
  },
  nextButton: {
    justifyContent: "center",
    alignItems: "center",
    height: theme.sizes[5],
    width: theme.sizes[9],
    borderRadius: 20,
    elevation: 2,
    backgroundColor: theme.colors.greenTransparent,
    marginLeft: theme.space[2],
  },

  textStyle: {
    color: theme.colors.tertiary,
    fontWeight: theme.fontWeights.bold,
    textAlign: "center",
  },
  modalText: {
    margin: theme.space[3],
    fontSize: theme.sizes[3],
    fontWeight: theme.fontWeights.bold,
    textAlign: "left",
    color: theme.colors.primary,
  },
  descreption: {
    fontSize: theme.sizes[2],
    fontWeight: theme.fontWeights.bold,
    textAlign: "left",
    color: theme.colors.greenTransparent,
    opacity: 0.6,
  },
  buttonsWrapper: {
    flexDirection: "row",
    alignSelf: "flex-end",
    margin: theme.space[1],
  },
  plugsWrapper:{
    flexDirection: "row",
    justifyContent: "space-between",
    margin: theme.space[3],
  },
  plugsTitle:{
    margin: theme.space[0],
    fontSize: theme.sizes[2],
    color: theme.colors.greenTransparent,
    fontWeight: theme.fontWeights.bold,
  },
  deviceNameInput:{
    width: "90%",
    borderWidth: 1.5,
    height: theme.sizes[6],
    paddingLeft: theme.space[1],
    borderRadius: 10,
    borderColor: theme.colors.greenTransparent,
    margin: theme.space[1],
    color: theme.colors.primary,
  }
}));
