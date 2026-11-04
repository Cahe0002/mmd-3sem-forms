"use server";
const postRecipe = async (formData) => {
  const recipeName = formData.get("recipename");
  await fetch("https://dummyjson.com/recipes/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: recipeName,
    }),
  });
};
export default postRecipe;
 