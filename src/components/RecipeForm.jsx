"use client";
import postRecipe from "@/actions/action";
import { useActionState } from "react";

const RecipeForm = () => {
  const [state, postRecipeAction, isPending] = useActionState(postRecipe, {
    success: null,
    message: "",
  });
  return (
    <>
      <form>
        <input
          type="text"
          name="recipename"
          placeholder="Opskriftens titel"
          className="border"
        />
        <button formAction={postRecipeAction} type="submit" className="border">
          {isPending ? "submitting" : "Opret opskrift"}
        </button>
      </form>
      <div className="message">{state.succes && state.message}</div>
    </>
  );
};

export default RecipeForm;
