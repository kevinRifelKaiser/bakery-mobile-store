import { View, Text, FlatList } from "react-native";
import { CategoryItem } from "../../components/index";

import { styles } from "./styles.js";
import { CATEGORIES } from "../../constants/data/categories.js";

const Home = () => {
  onSelected = () => null;

  renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );
  keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home page</Text>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Home;
