import { StyleSheet } from "react-native";

const contactStyles = StyleSheet.create({
  shadowContainer:{
    alignSelf:'center',
    width:'90%',
    elevation:10,
    shadowColor:'#171717',
    marginTop:20,
  },
  cardContainer:{
    height:200,
    flexDirection:'row',
    borderRadius:10,
    padding:15,
    backgroundColor:'white'

  },
  image:{
    height: '100%',
    width:'40%',
    borderRadius:10
  },
  dataContainer:{
    marginLeft:10,
    padding:10,
    justifyContent:'center',
    flex:1
  },
  info:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    marginBottom:5
  },
  H1:{
    fontSize:25,
    color:'black',
    fontWeight:'bold',
    marginBottom:10
  },
  p:{
    fontSize:14,

  }
})

export { contactStyles }
