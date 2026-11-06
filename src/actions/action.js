"use server";
const postRecipe = async (previousState, formData) => {
  const recipeName = formData.get("recipename");
  try {
    const response = await fetch("https://dummyjson.com/recipes/addd", {
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
    return { success: true, message: "Her er din opskrift" };
  } catch (error) {
    console.log(error.message);
    return { success: false, message: "Der må ikke være tal i navnet!" };
  }
};

export default postRecipe;
