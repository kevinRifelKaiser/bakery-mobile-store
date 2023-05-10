import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Products } from "../index.js";
import { CategoryItem } from "../../components/index";

import { styles } from "./styles.js";
import { CATEGORIES } from "../../constants/data/categories.js";

const Home = () => {
  const [changeScreen, setChangeScreen] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const onSelected = (item) => {
    setChangeScreen(!changeScreen);
    if (itemSelected === null) {
      setItemSelected(item);
    } else {
      setItemSelected(null);
    }
  };

  renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );

  keyExtractor = (item) => item.id;

  return changeScreen ? (
    <Products item={itemSelected} onSelected={onSelected} />
  ) : (
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
