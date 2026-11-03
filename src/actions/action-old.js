"use server";
const action = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const recipeName = formData.get("resname");

  try {
    const res = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: { recipeName },
        /* her kan i lave de resterende opskrift informationer */
      }),
    });

    if (!res.ok) {
      return { success: false, message: "Opskriften kunne ikke gemmes" };
    }

    const data = await res.json();
    if (!recipeName) {
      return {
        success: false,
        message: "Opskriftens navn skal udfyldes",
      };
    }
    return { success: true, message: `Opskriften ${recipeName} blev gemt` };
  } catch (error) {
    return { success: false, message: "Noget gik galt" };
  }
};

export default action;
