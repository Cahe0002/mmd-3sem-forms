"use client";
import postRecipe from "@/actions/action";
import { useActionState, useState } from "react";

const RecipeForm = () => {
  const [state, postRecipeAction, isPending] = useActionState(postRecipe, {
    success: null,
    message: "",
  });

  const [formFields, setFormFields] = useState({ recipename: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormFields((currentFields) => ({
      ...currentFields,
      [name]: value,
    }));
  }

  return (
    <>
      <form action={postRecipeAction}>
        <input
          type="text"
          name="recipename"
          placeholder="Opskriftens titel"
          className="border"
          value={formFields.recipename}
          onChange={handleChange}
        />
        <button type="submit" className="border">
          {isPending ? "Submitting" : "Opret opskrift"}
        </button>
      </form>
      {state.message && (
        <div className={state.success ? "text-green-800" : "text-red-800"}>
          {state.message}
        </div>
      )}
    </>
  );
};

export default RecipeForm;
