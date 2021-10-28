import { StyleSheet,} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    pagesRow: {
      flexDirection:'row', 
      flexWrap:'wrap',
      marginBottom: 50,
    },
    input: {
      borderWidth: 1,
      borderColor: '#888',
      minWidth: 200,
      marginTop: 20,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 3,
      fontSize: 20,
    },
    label: {
      marginHorizontal: 20,
      paddingHorizontal: 20,
      color: '#888',
    },
    buttonStyle: {
      color: '#fff',
      fontSize: 27,
      marginHorizontal: 20,
      marginTop: 15,
      borderWidth: 1,
      borderColor: '#888',
      borderRadius: 3,
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: '#777',
  },
    containerList: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 30,
      color: '#888',
      fontSize: 18,
    },
    pageNumber: {
      padding: 5,
      color: '#444',
      fontSize: 20,
    },
    pageNumberButton: {
      color: '#3e75c2',
      fontSize: 20,
      marginHorizontal: 30,
    },
    row: { padding: 10 },
    searchResults: {
      marginVertical: 20,
    },
    movieItem: {
      color: '#444',
      fontSize: 18,
    },
    movieLink: {
      color: '#3e75c2',
      fontSize: 18,
      padding: 3,
    },
    stretch: {
      width: 250,
      height: 400,
      resizeMode: 'stretch',
    },
    movieTitle: {
      color: '#888',
      fontSize: 26,
      marginBottom: 10,
    },
    movieItemEnd: {
      color: '#888',
      fontSize: 18,
      marginBottom: 10,
    },
  });