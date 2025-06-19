"use server";

import pg from "pg";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function handleSavePost(formData) {
    const db = new pg.Pool({ connectionString: process.env.NEXT_POSTGRES });
    const title = formData.get("title");
    const content = formData.get("content");
    await db.query(`INSERT INTO posts (title,content) VALUES ($1, $2)`, [title, content]);
    revalidatePath("/posts");
    redirect("/posts");
}