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
      {state.message && (
        <div className={state.success ? "text-green-700" : "text-red-700"}>
          {state.message}
        </div>
      )}
    </>
  );
};

export default RecipeForm;
