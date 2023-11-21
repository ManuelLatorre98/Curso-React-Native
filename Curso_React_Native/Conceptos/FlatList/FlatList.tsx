import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Primer Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Segundo Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Tercero Item',
  },
  {
    id: 'bd7acbea-asdc1b1-46c2-aed5-3ad53abb28ba',
    title: 'Cuarto Item',
  },
  {
    id: '3ac68afc-c60asd5-48d3-a4f8-fbd91aa97f63',
    title: 'Quinto Item',
  },
  {
    id: '58694a0f-3daasd1-471f-bd96-145571e29d72',
    title: 'Sexto Item',
  },

];

type ItemProps = {title: string};
const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function FlatListEj(){
  return(
    <View>
      <FlatList
        data={DATA}
        renderItem={({item})=> <Item title={item.title}/>}
        keyExtractor={item=>item.id}
      />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height:200
  },
  title: {
    fontSize: 32,
  },
});
export {FlatListEj}
