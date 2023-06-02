import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#474746',
    marginTop: 19,
    opacity: 1,
  },
  details: {
    marginTop: 16,
    color: '#7C7D7E',
    fontSize: 13,
    fontWeight: '500',
    opacity: 1,
  },
  inpt: {
    marginTop: 16,
    height: 48,
    width: 334,
    borderColor: '#BEBEBE',
    borderWidth: 1,
    borderRadius: 10,
    paddingStart: 20,
  },
  submitValid: {
    backgroundColor: '#E9D023',
    width: 334,
    height: 48,
    borderRadius: 10,
    marginTop: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unValidColor:{
    backgroundColor:'#BEBEBE',
    width: 334,
    height: 48,
    borderRadius: 10,
    marginTop: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
    TextSubmit: {
    color: '#474746',
    fontSize: 18,
    fontWeight: '900',
  },
  terms: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 13,
    fontWeight: '700',
    color: '#474746',
    opacity: 0.7,
  },
  termsUnderLine:{
    textDecorationColor: 'black',
    textDecorationLine: 'underline',
    fontWeight:'800'
  },
  SignBtn: {
    color: '#474746',
    fontSize: 13,
    fontWeight: '800',
  },
  DontHaveAccont: {
    color: '#7C7D7E',
    color: '#A19E9E',
    fontSize: 13,
    fontWeight: '500',
  },  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  
  img: {
    width: 50,
    height: 50,
  },
});
