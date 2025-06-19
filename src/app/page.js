import Image from "next/image";
import peaks from "@/../public/peaks.jpg"

export default function Home() {
  return (
    <div>
    <h1>I am the home page</h1>
    <Image src={peaks} alt="House in a grassy valley in the Peak District national park" placeholder="blur"/>
    </div>
  );
}
