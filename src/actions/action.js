"use server";
const postRecipe = async (formData) => {
  const recipeName = formData.get("recipename");

  fetch("https://dummyjson.com/recipes/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "recipename",
    }),
  })
    .then((res) => res.json())
    .then(console.log);
  console.log("Recipename is", recipeName);
};

export default postRecipe;
