import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "./components/Header";
import tarefas from "./dados/tarefas";

function ItemTarefa({ item }) {
  return (
    <View style={estilos.card}>
      <Image source={item.photo} style={estilos.foto} resizeMode="cover" />
      <Text style={estilos.titulo}>{item.title}</Text>
      <Text style={estilos.status}>{item.status}</Text>
      <Text style={estilos.desc}>{item.description}</Text>
    </View>
  );
}

export default function Index() {
  return (
    <SafeAreaView style={estilos.container}>
      <Header titulo="Sesi Produtividade" />
      <FlatList
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ItemTarefa item={item} />}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
    overflow: "hidden",
    elevation: 3,
  },
  foto: {
    width: "100%",
    height: 180,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
    marginHorizontal: 12,
  },
  status: {
    fontSize: 14,
    color: "#555",
    marginHorizontal: 12,
    marginTop: 4,
  },
  desc: {
    fontSize: 14,
    color: "#333",
    marginHorizontal: 12,
    marginVertical: 12,
  },
});
