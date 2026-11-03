"use client";
const RecipeForm = () => {
  return (
    <form>
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
