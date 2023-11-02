import { StyleSheet } from "react-native";

const commonStyles= StyleSheet.create({
  h1:{
    color:'white',
    fontSize:35,
    fontWeight:'bold'
  }
})
const cardStyles= StyleSheet.create({
  container:{
    padding:10,
    backgroundColor:'#1A1B21',
    height:'100%',
  }
})
const headerStyles = StyleSheet.create({
  container:{
    alignItems:'center',
  },
  image:{
    width:'100%',
    height:300,
    borderRadius:20,
    marginBottom:20
  },
  jobText:{
    color:'#F3BF99'
  },
  buttonsContainer:{
    flex:1,
    flexDirection:'row',
    gap:20,
    marginTop:20
  },
  buttonMail:{
    backgroundColor:'white',
    height:40,
    width:130,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:5,
  },
  buttonMailText:{
    color:'black',
    fontSize:18
  },
  buttonLinkedin:{
    backgroundColor:'#5093E2',
    height:40,
    width:130,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:5,
  },
  buttonLinkedinText:{
    color:'white',
    fontSize:18
  }
})

export { commonStyles,cardStyles, headerStyles}
