export async function generateMetadata({ params, searchParams }, parent) {
    const id = (await params).id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json();
    return {
        title: post.title,
    }
}
// Generates the browser tab title based on the post title it pulls from the api. 

export default async function post({ params }) {
  const slug = await params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug.id}`)
  const post = await response.json();
  console.log(slug);
  return (
    <div>
      <h1>Post {post.id} </h1>
      <h2> {post.title} </h2>
      <br></br>
      <p> {post.body} </p>
    </div>
  )
}
