import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2%',
    paddingTop: '5%',
    backgroundColor: '#E8F0FF',
  },
  loading: {
    fontSize: 17,
    fontStyle: 'italic',
  },
  error: {
    fontSize: 20,
    color: '#FF0000',
    textAlign: 'center',
  },
  list: {
    marginTop: 8,
    marginLeft: 8,
  },
});
