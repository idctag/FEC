import config from "@payload-config";
import React, { cache } from "react";
import { RenderBlocks } from "@/utils/RenderBlocks";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import { getUserLocale } from "@/utils/locale";

const queryPageBySlug = cache(
  async ({ slug, locale }: { slug: string; locale: "mn" | "en" }) => {
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
      locale: locale,
    });
    return result.docs?.[0] || null;
  },
);

export default async function Page() {
  const userLocal = await getUserLocale();
  const page = await queryPageBySlug({
    slug: "index",
    locale: userLocal,
  });

  if (!page) {
    return notFound();
  }

  return (
    <article className="w-full flex flex-col justify-center">
      <RenderBlocks blocks={page.layout} />
    </article>
  );
}
