import { StyleSheet } from "react-native";

const commonStyles= StyleSheet.create({
  h1:{
    color:'white',
    fontSize:35,
    fontWeight:'bold'
  },
  h2:{
    color:'gainsboro',
    fontSize:25,
    fontWeight:'bold',
    marginBottom:8
  },
  p:{
    color:'gainsboro',
    fontSize:14
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
    width:200,
    height:200,
    borderRadius:50,
    marginBottom:20
  },
  jobText:{
    color:'#F3BF99'
  },
  buttonsContainer:{
    flexDirection:'row',
    gap:20,
    marginTop:20,
    marginBottom:20,
    alignSelf:'center'
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

const infoStyles= StyleSheet.create({
  container:{
    paddingLeft:30,
    paddingRight:30
  },
  textContainer:{
    marginTop:20,
  }
})

const footerStyles= StyleSheet.create({
  container:{
    marginTop:40,
    marginBottom:40,
    borderRadius:10,
    backgroundColor:'#2b2c37',
    padding:10,
    justifyContent:'center',
    alignItems:'center',
  },
  iconContainer:{
    flexDirection:'row',
    gap:30,
    flexWrap:'wrap',
    justifyContent:'center'
  },

  icon:{
    color:'gray',
  }
})
export { commonStyles,cardStyles, headerStyles, infoStyles, footerStyles}
