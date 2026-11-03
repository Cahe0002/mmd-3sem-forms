"use server";
const postRecipe = async (formData) => {
  const recipeName = formData.get("recipename");
  console.log("formData: ", formData);
};
export default postRecipe;
