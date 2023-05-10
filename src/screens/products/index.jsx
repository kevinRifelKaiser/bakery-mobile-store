import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";

import { styles } from "./styles";
import { THEME } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";

import { ProductItem } from "../../components";

const Products = ({ item, onSelected }) => {
  const itemData = item;
  const [newProduct, setNewProduct] = useState("");
  const [productsList, setProducts] = useState([]);

  const onHandleNewProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      { id: Math.random().toString(), title: newProduct },
    ]);
    setNewProduct("");
  };

  const onDelete = (id) => {
    setProducts(productsList.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <ProductItem item={item} onDelete={onDelete} />
  );

  const keyExtractor = (item) => item.id;

  const ProductsList = () => {
    return productsList.length === 0 ? (
      <View style={styles.defaultTextContainer}>
        <Text style={styles.defaultTextTitle}>
          This page is still in production, we are working on it
        </Text>
        <Text style={styles.defaultText}>
          But if you want you can add some items to see how it will looks
        </Text>
      </View>
    ) : (
      <FlatList
        data={productsList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onSelected}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{itemData.title}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new product"
          onChangeText={setNewProduct}
          value={newProduct}
        />
        <TouchableOpacity
          style={styles.inputButton}
          onPress={onHandleNewProduct}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ProductsList />
    </View>
  );
};

export default Products;
