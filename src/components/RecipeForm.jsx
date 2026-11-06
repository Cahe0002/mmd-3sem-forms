"use client";
import postRecipe from "@/actions/action";
import { useActionState } from "react";

const RecipeForm = () => {
  const [state, postRecipeAction, isPending] = useActionState(postRecipe, {
    success: null,
    message: "",
  });

  return (
    <form action={postRecipeAction}>
      {isPending ? "submitting" : ""}
      <input
        type="text"
        name="recipename"
        placeholder="Opskriftens titel"
        className="border"
      />
      <button type="submit" className="border">
        Opret opskrift
      </button>
    </form>
  );
};

export default RecipeForm;
