import { FlatList, Image, Text, View } from "react-native";
import { projectStyles } from "./styles";

function Body(){
  const data= [
    {key:'1', text: '• Laura'},
    {key:'2', text: '• Guillermo'},
    {key:'3', text: '• Agustina'},
    {key:'4', text: '• Javi'},
    {key:'5', text: '• Rafa'},
  ]
  return (
    <View style={projectStyles.container}>
      <Text style={projectStyles.h1}>Top 5 profesores: </Text>
      <FlatList
                data={data}
                renderItem={({ item }) => (
                  <View>
                    <Text style={projectStyles.h3}>{item.text}</Text>
                  </View>
                )}
                keyExtractor={item => item.key}
                style={projectStyles.containerList}
      >

      </FlatList>
      <Image style={{ height:400, width:'100%' }} source={require('../Images/meme.jpg')} />
    </View>
  )
}

export {Body}
