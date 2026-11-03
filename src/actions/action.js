"use server";
const postRecipe = async (formData) => {
  const recipeName = formData.get("recipename");
  console.log("Opskriftens navn:", recipeName);
};
export default postRecipe;
