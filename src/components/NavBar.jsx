import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
        <Link href="/" className="p-1" >Home</Link>
        <Link href="/about" className="p-1">About</Link>
        <Link href="/posts" className="p-1">Posts</Link>
        <Link href="/posts/new" className="p-1">New post</Link>
        <Link href="/clicker" className="p-1">Cookie Clicker</Link>
        </nav>
    )
}