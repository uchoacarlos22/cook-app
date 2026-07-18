import { ScrollView } from "react-native";
import { styles } from "./style";
import { Ingredient } from "../ingredient";
import { services } from "@/services";

interface IngredientsProps {
  handleSelected: (selected: string[]) => void;
  selected: string[];
  ingredients: IngredientResponse[]
}

export function Ingredients({ handleSelected, selected, ingredients }: IngredientsProps) {

  const handleToggleSelected = (value: string) => {
    const updatedSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];

    handleSelected(updatedSelected);
  };
  
  const title = "Lanche";
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          name={ingredient.name}
          image={`${services.storage.imagePath}/${ingredient.image}`}
          selected={selected.includes(String(ingredient.id))}
          onPress={() => handleToggleSelected(String(ingredient.id))}
        />
      ))}
    </ScrollView>
  );
}
