import Link from "next/link"

export default function Header() {
    return (
        <>
        <h1>I am the component header</h1>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts/1">Post 1</Link>
        </>
    )
}