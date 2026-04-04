import Image from "next/image";
import background_image from "@/../public/oresund.jpg";
import Link from "next/link";

export default function Blog() {
  return (
      <main className="relative min-h-screen text-foreground">

        <div className="fixed inset-0 -z-10 overflow-hidden">
          <Image 
            src={background_image}
            alt="Background"
            fill
            placeholder="blur"
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10 py-24 px-10 flex flex-col max-w-5xl mx-auto bg-background/70 backdrop-blur-sm">
          <h1>Blog</h1>
          <Link href="/blog/website" className="text-accent"> <h2>Website</h2> </Link>
          <Link href="/blog/" className="text-accent"> <h2>Idk</h2> </Link>
          <Link href="/blog/" className="text-accent"> <h2>Idk</h2> </Link>
        </div>
        
      </main>
  );
}