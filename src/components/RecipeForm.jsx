"use client";
import postRecipe from "@/actions/action";
import { templateRecipe } from "@/schema/templateRecipe";
import { useActionState, useState, useEffect } from "react";

const input =
  "w-full border p-1 pl-1 m-0.5 focus:border-bg-amber-700 focus:outline-hidden";

const RecipeForm = () => {
  const [state, postRecipeAction, isPending] = useActionState(postRecipe, {
    success: null,
    message: "",
  });

  const [formFields, setFormFields] = useState(templateRecipe);

  useEffect(() => {
    if (state.success) setFormFields(templateRecipe);
  }, [state]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormFields((currentFields) => ({
      ...currentFields,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="mx-auto w-full max-w-96">
          <h1 className="font-bold text-center mb-8 text-2xl">
            TILFØJ OPSKRIFT
          </h1>
          <form action={postRecipeAction} className="grid grid-cols-1 gap-2">
            <div>
              <label htmlFor="recipename">Titel</label>

              <input
                id="recipename"
                type="text"
                name="recipename"
                placeholder="Opskriftens titel"
                className={input}
                value={formFields.recipename}
                onChange={handleChange}
              />
              {state.fieldErrors?.recipename?.[0] && (
                <p className="text-red-800">
                  {state.fieldErrors.recipename[0]}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="prepTimeMinutes">
                Forberedelsestid (minutter)
              </label>

              <input
                id="prepTimeMinutes"
                min="0"
                type="number"
                name="prepTimeMinutes"
                placeholder="Forberedelses tid"
                className={input}
                value={formFields.prepTimeMinutes}
                onChange={handleChange}
              />
              {state.fieldErrors?.prepTimeMinutes?.[0] && (
                <p className="text-red-800">
                  {state.fieldErrors.prepTimeMinutes[0]}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="cookTimeMinutes">Madlavningstid (minutter)</label>
              <input
                id="cookTimeMinutes"
                min="0"
                type="number"
                name="cookTimeMinutes"
                placeholder="Hvor længe tager det"
                className={input}
                value={formFields.cookTimeMinutes}
                onChange={handleChange}
              />
              {state.fieldErrors?.cookTimeMinutes?.[0] && (
                <p className="text-red-800">
                  {state.fieldErrors.cookTimeMinutes[0]}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="servings">Antal personer</label>
              <input
                id="servings"
                min="1"
                type="number"
                name="servings"
                placeholder="Tilføj antal personer"
                className={input}
                value={formFields.servings}
                onChange={handleChange}
              />
              {state.fieldErrors?.servings?.[0] && (
                <p className="text-red-800">{state.fieldErrors.servings[0]}</p>
              )}
            </div>
            <div>
              <label htmlFor="ingredients">Ingredienser</label>
              <textarea
                id="ingredients"
                rows="5"
                name="ingredients"
                placeholder="Tilføj ingredienser her"
                className={input}
                value={formFields.ingredients}
                onChange={handleChange}
              />
              {state.fieldErrors?.ingredients?.[0] && (
                <p className="text-red-800">
                  {state.fieldErrors.ingredients[0]}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="border bg-amber-700 text-white p-2 font-bold"
            >
              {isPending ? "Submitting" : "Opret opskrift"}
            </button>
          </form>
          {state.message && (
            <div className={state.success ? "text-green-800" : "text-red-800"}>
              {state.message}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RecipeForm;
