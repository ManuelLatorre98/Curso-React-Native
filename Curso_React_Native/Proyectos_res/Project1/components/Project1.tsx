// eslint-disable-next-line prettier/prettier
import { FlatList, Image, Text, View } from "react-native";
import { Nav } from "./Nav";
import { navStyles, projectStyles } from "./styles";

function Project1 (){
  const data= [
    {key:'1', text: '• Laura'},
    {key:'2', text: '• Guillermo'},
    {key:'3', text: '• Agustina'},
    {key:'4', text: '• Javi'},
    {key:'5', text: '• Rafa'},
  ]

  return (
    <View style={{padding:10}}>
      <Nav></Nav>
      <Text style={projectStyles.h1}>Top 5 profesores: </Text>
      <FlatList style={projectStyles.container}
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text style={projectStyles.h3}>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
      >

      </FlatList>
      <Image style={{ height:400, width:'100%' }} source={require('../Images/meme.jpg')} />
    </View>
  )
}

export { Project1 }
