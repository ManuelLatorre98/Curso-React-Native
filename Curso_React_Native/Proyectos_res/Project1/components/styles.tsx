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
    padding:10

  },
  image:{
    height: 52,
    width:60,
  }
})

const projectStyles = StyleSheet.create({
  container:{
    marginLeft:30,
  },
  h1:{
    color:'black',
    fontSize: 45,
    fontWeight:'bold'
  },
  h3:{
    color:'black',
    fontSize: 20,
  }
})

export {navStyles, projectStyles}
