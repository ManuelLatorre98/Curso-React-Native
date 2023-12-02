import { StyleSheet } from "react-native";

const counterStyles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',

  },
  counterContainer:{
    flexDirection:'row',
    gap:-30
  },
  count:{
    height:130,
    width:130,
    backgroundColor:'white',
    borderRadius:130,
    justifyContent:'center',
    alignItems:'center'
  },
  countText:{
    fontSize:50,
    color:'black'
  },
  button:{
    height:60,
    width:60,
    backgroundColor:'gray',
    zIndex:1,
    marginTop:70,
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    color:'gainsboro',
    fontSize:30,
  }
})

export { counterStyles }
