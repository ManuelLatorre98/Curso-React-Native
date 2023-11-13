import { StyleSheet } from "react-native";

const cardStyles= StyleSheet.create({
  container:{
    width:"90%",
   /* backgroundColor:'red',*/
    height:400,
    marginTop:50,
    borderRadius:10,
    borderBottomWidth:1,
    borderBottomColor:'#FF5A5F',
    paddingBottom:35,
    alignSelf:'center'
  },
  img:{
    width:'100%',
    height:'70%',
    borderRadius:10,
    resizeMode:'cover'
  },
  containerPlace:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:15
  },
  placeText:{
    marginRight:'auto',
    fontSize: 15,
    fontWeight:'bold',
    color:'black'
  },
  starIcon:{
    color:'gold',
    marginRight:5
  },
  p:{
    fontSize:15,
    fontWeight:'400',
    color:'black'
  },
  containerPrice:{
    flexDirection:'row',
    fontSize:40,
    marginTop:10,
    alignItems:'center'
  },
  priceText:{
    color:'black',
    fontWeight:'bold',
  },
  iconNotSold:{
    marginRight:8,
    color:'green'
  },
  iconSold:{
    marginRight:8,
    color:'red'
  },
  iconOffer:{
    marginRight:8,
    color:'#d3c917'
  },
  soldText:{
    color:'black',
    fontWeight:'bold',
    textDecorationLine:'line-through',

  }

})

export { cardStyles }
