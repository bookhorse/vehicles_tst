import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 8
  },
  list: {
    marginTop: -10
  },
  item: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  checkBoxWrap: {
    marginTop: 20
  },
  checkBoxText: {
    flexDirection: 'row',
  },
  checkBoxIcon: {
    marginHorizontal: 16
  }
});

