export default () => {
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
      
      marginTop: 40,
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      color: 'gold',
      marginTop: 20,
      fontSize: 30
    },
    list: {
      marginBottom: 40
    },
    listItem: {
      backgroundColor: "grey",
      color: 'gold',
      fontSize: 15,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      borderRadius: 20,
      paddingHorizontal: 90,
      paddingVertical: 15
    },
  });