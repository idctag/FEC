import config from "@payload-config";
import React, { cache } from "react";
import { RenderBlocks } from "@/utils/RenderBlocks";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const parsedSlug = decodeURIComponent(slug);

  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "pages",
    limit: 1,
    where: {
      slug: {
        equals: parsedSlug,
      },
    },
  });
  return result.docs?.[0] || null;
});

export async function generateStaticParams() {
  const payload = await getPayload({ config });
  const pages = await payload.find({
    collection: "pages",
    draft: false,
    limit: 1000,
  });

  return pages.docs
    ?.filter((doc) => {
      return doc.slug !== "index";
    })
    .map(({ slug }) => slug);
}

export default async function Page() {
  const page = await queryPageBySlug({
    slug: "index",
  });

  if (!page) {
    return notFound();
  }

  return (
    <article className="w-full flex flex-col justify-center">
      <RenderBlocks blocks={page.layout!} />
    </article>
  );
}

// import Features from "@/components/sections/Features";
//
// export default function Home() {
//   return (
//     <div className="w-full flex flex-col justify-center items-center snap-y font-poppins gap-10">
//       <Features />
//     </div>
//   );
// }
