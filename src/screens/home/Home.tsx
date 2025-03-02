import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../navigation/routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { ItemData } from "../../types/product.types";
// Import your actions and selectors
// import { fetchProducts } from '../../store/slices/productSlice';
// import { RootState } from '../../store';

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderProduct = ({ item }: { item: ItemData }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        resizeMode="cover"
      />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Template</Text>
        <TouchableOpacity>
          <Text style={styles.cartButton}>🛒</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
