"use client";

import { useActionState } from "react";
import {
  createActivity,
  createActivityAction,
} from "../_actions/action-create";

export const FormCreate = () => {
  const [state, formAction, pending] = useActionState(
    createActivityAction,
    null
  );

  return (
    <form className="space-y-2" action={formAction}>
      <section>
        <h3 className="text-lg font-bold">Add New Activity</h3>
        <p>Input your activity and amount</p>
      </section>
      <input name="title" placeholder="Input the title" />
      <input name="amount" type="number" placeholder="Input the amount" />
      <select name="category">
        <option value="credit">CREDIT</option>
        <option value="debit">DEBIT</option>
      </select>
      <button disabled={pending}>{pending ? "SAVING..." : "SAVE"}</button>
    </form>
  );
};
