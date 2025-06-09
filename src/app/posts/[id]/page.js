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
  console.log(slug);
  return <div>Posts Page</div>;
}
