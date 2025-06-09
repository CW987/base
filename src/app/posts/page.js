import Link from "next/link";

export default async function PostsPage({ searchParams }) {
    const query = await searchParams;
    console.log(searchParams, query); //! The docs listed the search params as within ""
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    if (query.sort === "desc") {
        posts.reverse();
    }

    return (
        <div>
            <h1>Posts</h1>
            <Link href="/posts?sort=asc" >Ascending</Link> - <Link href="/posts?sort=desc" >Descending</Link>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}