import React from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card, TextInput, Button, Divider } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import Constants from "../../../constants/Constants";

const FilterModal = (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.showFilterModal}
      onRequestClose={props.handleFilterModalVisibility}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{ height: 40, flexDirection: "row", alignItems: "center" }}
        >
          <View style={{ flex: 0.99, marginLeft: 20 }}>
            <Text style={{ fontSize: 18 }}>Filters</Text>
          </View>
          <View>
            <Button
              icon={() => (
                <AntDesign
                  name="close"
                  size={15}
                  // color={Constants.primaryGreen}
                />
              )}
              onPress={props.handleFilterModalVisibility}
            ></Button>
          </View>
        </View>
        <Card style={styles.cardStyle}>
          <Card.Title title="Brands" />
          <Card.Content style={styles.cardContentStyle}>
            <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
              {[0, 0, 0, 0].map((_, i) => (
                <Button
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    borderRadius: 5,
                    marginRight: 10,
                    marginBottom: 10,
                    width: "30%",
                  }}
                  key={i}
                  onPress={() => console.warn("brand")}
                >
                  <Text style={{ fontSize: 12 }}>Samsung</Text>
                </Button>
              ))}
            </View>
          </Card.Content>
        </Card>
        <Divider />
        <Card style={styles.cardStyle}>
          <Card.Title title="Price" />
          <Card.Content style={styles.cardContentStyle}>
            <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
              {["Min", "Max"].map((item, i) => (
                <TextInput
                  style={{
                    marginRight: 10,
                    height: 40,
                    width: "47%",
                    backgroundColor: "white",
                  }}
                  underlineColor="transparent"
                  mode="outlined"
                  placeholder={item}
                  keyboardType="number-pad"
                />
              ))}
            </View>
          </Card.Content>
        </Card>
        <Divider />
        <Card style={styles.cardStyle}>
          <Card.Title title="Colors" />
          <Card.Content style={styles.cardContentStyle}>
            <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
              {[0, 0, 0, 0].map((_, i) => (
                <Button
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    borderRadius: 5,
                    marginRight: 10,
                    marginBottom: 10,
                    width: "30%",
                  }}
                  key={i}
                  onPress={() => console.warn("colors")}
                >
                  <Text style={{ fontSize: 12 }}>White</Text>
                </Button>
              ))}
            </View>
          </Card.Content>
        </Card>
        <Divider />
        <Card style={styles.cardStyle}>
          <Card.Title title="Sizes" />
          <Card.Content style={styles.cardContentStyle}>
            <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
              {[0, 0, 0, 0].map((_, i) => (
                <Button
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    borderRadius: 5,
                    marginRight: 10,
                    marginBottom: 10,
                    width: "30%",
                  }}
                  key={i}
                  onPress={() => console.warn("sized")}
                >
                  <Text style={{ fontSize: 12 }}>Medium</Text>
                </Button>
              ))}
            </View>
          </Card.Content>
        </Card>
        <Divider />
      </ScrollView>
      <View style={styles.productFooter}>
        <View
          style={{ backgroundColor: Constants.headerTintColor, height: 50 }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Button
              style={{
                flex: 0.5,
                backgroundColor: "red",
                justifyContent: "center",
              }}
              labelStyle={{ color: "white" }}
              onPress={props.handleFilterModalVisibility}
            >
              Cancel
            </Button>
            <Button
              // onPress={() => this.props.navigation.navigate("CheckOut")}
              style={{
                flex: 0.5,
                backgroundColor: Constants.primaryGreen,
                justifyContent: "center",
              }}
              labelStyle={{ color: "white" }}
            >
              Apply Filter
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    flex: 1,
  },
  productFooter: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default FilterModal;
