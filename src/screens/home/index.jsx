import { View, Text, FlatList } from "react-native";
import { SupermarketItem } from "../../components/index";

import { styles } from "./styles.js";
import { SUPERMARKETS } from "../../constants/data/supermarkets.js";

const Home = () => {
  onSelected = () => null;

  renderItem = ({ item }) => (
    <SupermarketItem item={item} onSelected={onSelected} />
  );
  keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <FlatList
        data={SUPERMARKETS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Home;
