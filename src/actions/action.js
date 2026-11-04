"use server";
const postRecipe = async (formData) => {
  const recipeName = formData.get("recipename");
  try {
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
    console.log(`Response status: ${response.status}`);
  } catch (error) {
    console.log(error.message);
  }
};
export default postRecipe;
