import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://vaesfsjl2o.ufs.sh/f/rzQm7RA8iJPFV6iCNU4DYuC9o5eMnAWGR47SyUstjb18gLxp",
  "https://vaesfsjl2o.ufs.sh/f/rzQm7RA8iJPFhBLIJNzdyuLCWOMYV7dNGnQhPHoFaXKgcl3i",
  "https://vaesfsjl2o.ufs.sh/f/rzQm7RA8iJPFHxet2CECQW0fIXoqE5YSuceOr1sl2Tgawhd4",
  "https://vaesfsjl2o.ufs.sh/f/rzQm7RA8iJPFKag1kSQEQmAay6Nw7Fj30HMvW8pu4rcxJLBt",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  
  return (
    <main className="">
            <div className="flex flex-wrap gap-4">
            {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
