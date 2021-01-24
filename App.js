import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const useSwapiPeople = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.dev/api/people?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setPeople([...people, ...res.results]);
        setLoading(false);
      });
  }, [page]);

  const loadMore = () => {
    console.log('test');
    setPage(page + 1);
  };

  return {
    people,
    loading,
    loadMore,
  };
};

export default () => {
  const { people, loadMore } = useSwapiPeople();

  const pressHandler = (item) => {
    Alert.alert(
      "Char Info",
      item.name + " - " + item.gender,
      [{ text: "OK" }],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>SWAPI People's List</Text>
      <FlatList
        style={styles.list}
        data={people}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => pressHandler(item)}>
              <Text style={styles.listItem}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  header: {
    color: "gold",
    marginTop: 20,
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: "grey",
    color: "gold",
    fontSize: 25,
    marginBottom: 10,
    borderRadius: 20,
    paddingHorizontal: 90,
    paddingVertical: 25,
  },
  loadButton: {
    backgroundColor: 'grey',
    color: 'blue',
  }
});
