"use client";

import config from "@/config/config.json";
import { plainify } from "@/lib/utils/textConverter";
import { usePathname } from "next/navigation";

const SeoMeta = ({
  title,
  meta_title,
  image,
  description,
  canonical,
  noindex,
}: {
  title?: string;
  meta_title?: string;
  image?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}) => {
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url } = config.site;
  const pathname: any = usePathname();

  return (
    <>
      {/* title */}
      <title>
        {plainify(meta_title ? meta_title : title ? title : config.site.title)}
      </title>

      {/* canonical url */}
      {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

      {/* noindex robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* meta-description */}
      <meta
        name="description"
        content={plainify(description ? description : meta_description)}
      />

      {/* author from config.json */}
      <meta name="author" content={meta_author} />

      {/* og-title */}
      <meta
        property="og:title"
        content={plainify(
          meta_title ? meta_title : title ? title : config.site.title,
        )}
      />

      {/* og-description */}
      <meta
        property="og:description"
        content={plainify(description ? description : meta_description)}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${base_url}/${pathname.replace("/", "")}`}
      />

      {/* twitter-title */}
      <meta
        name="twitter:title"
        content={plainify(
          meta_title ? meta_title : title ? title : config.site.title,
        )}
      />

      {/* twitter-description */}
      <meta
        name="twitter:description"
        content={plainify(description ? description : meta_description)}
      />

      {/* og-image */}
      <meta
        property="og:image"
        content={`https://res.cloudinary.com/derjssgq9/image/upload/v1694764563/lpclogo_osawvz.png`}
      />

      {/* twitter-image */}
      <meta
        name="twitter:image"
        content={`https://res.cloudinary.com/derjssgq9/image/upload/v1694764563/lpclogo_osawvz.png`}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};

export default SeoMeta;
