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
}