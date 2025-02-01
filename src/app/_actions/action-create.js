"use server";

export async function createActivityAction(_, formData) {
  const name = formData.get("name");
  const amount = Number(formData.get("amount"));
  const category = formData.get("category");

  console.log(name, amount, category);
}
