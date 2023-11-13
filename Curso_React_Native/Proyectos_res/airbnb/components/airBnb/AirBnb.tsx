import { FlatList, ScrollView, View } from "react-native";
import { NavBar } from "../navBar/Navbar";
import { Card } from "../card/Card";
import data from "../../data"

const cards = ((item:any)=>{
  return(
    <Card
      key={item.id}
      city={item.city}
      country={item.country}
      date={item.date}
      amountHost={item.amountHost}
      price={item.price}
      qualification={item.qualification}
      imageUrl={item.imageUrl}
      offer={item.offer}
      sold={item.sold}
    />
  )
})
function AirBnb(){
  return(
    <View>
      <FlatList
        ListHeaderComponent={<NavBar />}
        data={data}
        renderItem={({ item })=>(
          <Card
            city={item.city}
            country={item.country}
            date={item.date}
            amountHost={item.amountHost}
            price={item.price}
            qualification={item.qualification}
            imageUrl={item.imageUrl}
            offer={item.offer}
            sold={item.sold}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export { AirBnb }
