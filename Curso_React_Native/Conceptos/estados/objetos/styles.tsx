import { StyleSheet } from "react-native";

const objetosStyles= StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    flex:1,
  },
  card:{
    borderRadius:10,
    width:"100%",
    height:"70%",
    padding:20,
    borderWidth:1,
    borderColor:'gray'
  },
  img:{
    borderRadius:340,
    width:200,
    height:200,
    alignSelf:'center'
  },
  icon:{
    marginTop:30
  },
  infoContainer:{
    marginTop:20
  },
  name:{
    color:'black',
    fontWeight:'bold',
    fontSize:26,
    marginBottom: 20
  }
})

export { objetosStyles }
