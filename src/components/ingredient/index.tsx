import React, { useState, useEffect } from 'react';
import { Pressable, Text, Image, View, StyleSheet, PressableProps } from "react-native";
import { styles } from "./style";

interface IngredientProps {
  name: string;
  image: string;
  selected?: boolean;
}

export function Ingredient({ name, image, selected = false, ...rest }: IngredientProps & PressableProps) {

  return (
    <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  );
}
