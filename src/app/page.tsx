import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
            <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
