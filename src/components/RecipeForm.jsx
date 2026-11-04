"use client";
import postRecipe from "@/actions/action";
import { useActionState } from "react";
import { useState } from "react";

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
      <form>
        <input
          type="text"
          name="recipename"
          value={formFields.recipename}
          placeholder="Opskriftens titel"
          className="border"
          onChange={handleChange}
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
