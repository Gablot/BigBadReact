import Link from "next/link";
import { db } from "../server/db/index";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/03407fe0-0d03-4847-a683-00b544f28421-ea4hw3.png",
  "https://utfs.io/f/b73e0553-029e-45e0-b439-209dd98a8514-57c0qn.JPG",
  "https://utfs.io/f/8ddd9ae5-ee3f-4b50-83fa-9d1887bd3876-ne84bf.jpg",
  "https://utfs.io/f/97b5a0fc-c694-4f1b-aaea-a9c8a4c844d9-gm8qp4.png",
  "https://utfs.io/f/fe8edfbd-1f39-4fb7-8c08-ce5aea7c324d-krfldu.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index+1,
  url,
}));


export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (<div key={post.id}>{post.name}</div>))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48"> 
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
