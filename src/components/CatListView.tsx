/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
// untuk menampilkan list data saat di scrool
import { View, FlatList, StyleSheet, TextInput } from "react-native";
import CardItem from "./CardItem";
import axios from "axios";
import { BASE_API } from "../utils/utils";

interface Cat {
  id: number;
  name: string;
  description: string;
  origin: string;
  life_span: string;
}

const CatListView: React.FC = () => {
  const [catData, setCatData] = useState<Cat[]>([]); //array yang berisi object cat
  const [pageSize, setPageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState(""); // State untuk kata kunci pencarian
  const startIndex = 0;

  const fetchCatData = async () => {
    try {
      const response = await axios.get(BASE_API);
      setCatData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCatData();
  }, []);

  const handleEndReached = () => {
    // Menggandakan jumlah item yang ditampilkan saat pengguna mencapai akhir
    setPageSize(pageSize + 10);
  };

  // Fungsi untuk melakukan pencarian
  const searchCats = () => {
    return catData.filter((cat) =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search cats..."
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      <FlatList
        data={
          searchQuery
            ? searchCats()
            : catData.slice(startIndex, startIndex + pageSize)
        }
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardItem title={item.name} description={item.description} origin={item.origin} life_span={item.life_span}/>
        )}
        onEndReached={handleEndReached} //ketika habis 10 data , menampikan lagi 10
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
});

export default CatListView;
