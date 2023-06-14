import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 8,
  },
  flex: {
    flex: 1
  },
  info: {
    flexShrink: 1,
    flexDirection: 'row'
  },
  infoLabel: {
    flex: 1,
    fontWeight: 700
  },
  infoValue: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  footer: {
    backgroundColor: '#fff',
    flexShrink: 1,
    flexDirection: 'row',
    gap: 10
  },
  mapWrapper: {
    flex: 1,
  }
});

