import Link from "next/link";
import { db } from "../server/db/index";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function Images(){
  
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48 flex flex-col"> 
          <Image 
            src={image.url} 
            style={{objectFit: "contain"}}
            width={480}
            height={480}
            alt={image.name} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
        <SignedOut>
          <div className="h-full w-full text-2xl text-center"> Please Do Sign In </div>
        </SignedOut>
        <SignedIn>
          <Images />
        </SignedIn>
    </main>
  );
}
