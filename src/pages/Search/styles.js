import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '10%',
    backgroundColor: '#E8F0FF',
  },
  backButton: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginLeft: 16,
    marginBottom: 8,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDD',
    width: '90%',
    height: 50,
    borderRadius: 8,
  },
  input: {
    width: '85%',
    height: 50,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 8,
  },
  icon: {
    width: '15%',
    height: 50,
    backgroundColor: '#1ED6FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  error: {
    marginTop: 25,
    fontSize: 20,
    color: 'red',
  },
  header: {
    width: '90%',
    marginTop: '5%',
    paddingTop: '3%',
    paddingBottom: '3%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  date: {
    color: '#FFF',
    fontSize: 16,
  },
  city: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  temp: {
    color: '#FFF',
    fontSize: 90,
    fontWeight: 'bold',
  },
});
