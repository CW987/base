import { db } from "@/utils/utilities";

export async function generateMetadata({ params }) {
    const paramsWaiter = await params;
    const id = paramsWaiter.id;
    const result = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
    const post = result.rows[0];
    return {
        title: post ? post.title : "Post not found",
    };
}

export default async function Post({ params }) {
    const paramsWaiter = await params;
    const id = paramsWaiter.id;
    const result = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
    const post = result.rows[0];

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h1>Post {post.id}</h1>
            <h2>{post.title}</h2>
            <br />
            <p>{post.content}</p>
        </div>
    );
}
