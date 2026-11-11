"use server";
import * as z from "zod";
import { Recipe } from "@/schema/templateRecipe";

const postRecipe = async (previousState, formData) => {
  try {
    const { recipename: recipeName, ingredients: ingrediens, servings: servings, prepTimeMinutes: prepTimeMinutes, cookTimeMinutes: cookTimeMinutes } = Recipe.parse({
      recipename: formData.get("recipename"),
      ingredients: formData.get("ingredients"),
      servings: formData.get("servings"),
      prepTimeMinutes: formData.get("prepTimeMinutes"),
      cookTimeMinutes: formData.get("cookTimeMinutes"),
    });
    console.log("recipeName:", recipeName);

    const response = await fetch("https://dummyjson.com/recipes/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: recipeName,
      }),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    console.log(`Response status: ${response.status}`);
    return { success: true, message: "Her er din opskrift", fieldErrors: {} };
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "",
        fieldErrors: z.flattenError(error).fieldErrors,
      };
    }

    return { success: false, message: "Der skete en fejl" };
  }
};

export default postRecipe;
