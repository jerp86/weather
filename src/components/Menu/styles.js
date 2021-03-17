import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9,
    left: 16,
    top: 32,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderTopRightRadius: Dimensions.get('window').width * 0.089,
    borderBottomLeftRadius: Dimensions.get('window').width * 0.089,
    borderBottomRightRadius: Dimensions.get('window').width * 0.089,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
});
