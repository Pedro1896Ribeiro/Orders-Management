import { StyleSheet, Platform } from 'react-native';

export const CELL_SIZE = 55;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#4dc6f3';
export const NOT_EMPTY_CELL_BG_COLOR = '#4dc6f3';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const styles = StyleSheet.create({
  codeFiledRoot: {
    height: CELL_SIZE,
    marginTop: 60,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: '#4dc6f3',
    backgroundColor: '#fff',
    elevation: 3,
  },
  root: {
    backgroundColor: '#00adef',
    flex: 1,
    minHeight: 800,
    padding: 20,
  },
  title: {
    paddingTop: 100,
    color: '#4a4b4f',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 30,
  },
  subTitle: {
    color: '#4a4b4f',
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 60,
    borderRadius: 60,
    height: 60,
    backgroundColor: '#c40d45',
    justifyContent: 'center',
    minWidth: 300,
    //marginBottom: 100,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
});

export default styles;
