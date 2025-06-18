import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/posts/new">New post</Link>
        </nav>
    )
}