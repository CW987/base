export default async function CommentPage({params}) {
    const slug = await params;
    console.log(slug);
    return (
        <h1>Post Page ID: {slug.id}, Comment ID: {slug.commentId} </h1>
    )
}