import Image from "next/image";

export default function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-4">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-sm border border-[#e8ddd0]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
