import { StyleSheet } from "react-native";
/*StyleSheet define los estilos de forma eficiente agrupando estilos en un objeto haciendo optimizacion interna
 (magia informatica)*/
const navStyles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    borderBottomWidth:1,
    borderColor:'cyan',
    padding:10,
    backgroundColor:'#28242c',

  },
  image:{
    height: 52,
    width:60,
  }
})

const projectStyles = StyleSheet.create({
  container:{
    backgroundColor:'#262f34',
    padding:10,
    height:'100%',
  },
  containerList:{
    marginLeft:30,
    marginBottom:30,
    color:'white',
    flexGrow:0
  },
  h1:{
    color:'white',
    fontSize: 45,
    fontWeight:'bold'
  },
  h3:{
    color:'white',
    fontSize: 25,
  }
})

export {navStyles, projectStyles}
