"use client";

import { useState } from "react";
import handleSavePost from "./HandleSavePost";

export default function NewPost() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleClientSubmit() {
    setIsSubmitting(true);
  }

  return (
    <form action={handleSavePost} onSubmit={handleClientSubmit}>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" />
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
