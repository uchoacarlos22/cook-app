import { View, Text, Alert } from "react-native";
import { styles } from "./styles";
import { Ingredients } from "@/components/ingredients";
import { Selected } from "@/components/selected";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { Loading } from "@/components/Loading"

import { services } from "@/services";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true)
  const [selected, setSelected] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setSelected([]) },
    ]);
  }

  function handleSearch() {
    router.navigate("/recipes/" + selected);
  }

  useEffect(() => {
    services.ingredients.findAll().then(setIngredients)
  }, []);

  function handleSelectedIngredients(selected: string[]) {
    setSelected(selected);
  }

  useEffect(() => {
    services.ingredients
      .findAll()
      .then(setIngredients)
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os Produtos</Text>
      </Text>

      <Text style={styles.message}>
        Descubra reçeitas baseadas nos {"\n"} produtos selecionados
      </Text>

      <Ingredients
        handleSelected={handleSelectedIngredients}
        selected={selected}
        ingredients={ingredients}
      />
      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </View>
  );
}
