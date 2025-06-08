export default async function post({ params }) {
    const slug = await params;
    console.log(slug);
    return (
        <div>Posts Page</div>
    )
}