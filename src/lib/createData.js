import { useSession } from "next-auth/react";

export async function createNews(newInfo, session) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const data = {
    title: newInfo.title,

    titleEn: newInfo.titleEn,

    meta_title: newInfo.meta_title,

    description: newInfo.description,

    date: newInfo.date,

    image: newInfo.image,

    categories: newInfo.categories.split(/,/),

    draft: newInfo.draft,

    content: newInfo.content,

    contentEn: newInfo.contentEn,
  };
  const res = await fetch("api/admin/new", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function addUsers(user, session) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()

  const res = await fetch("api/admin/user", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const userInfo = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return userInfo;
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}

export async function addCustomer(customer, session) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  customer["type"] = "Customer";

  const res = await fetch("api/admin/customer", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
    session: session,
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function addPartner(partner, session) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  partner["type"] = "Partner";

  const res = await fetch("api/admin/partner", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(partner),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function addProduct(product, session) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const data = {
    title: product.title,

    titleEn: product.titleEn,

    type: product.type,

    description1: product.description1,

    description2: product.description2,

    descriptionEn1: product.descriptionEn1,

    descriptionEn2: product.descriptionEn2,

    image: product.image,

    pros: product.pros.split(/\s*,\s*/),

    prosEn: product.prosEn.split(/\s*,\s*/),

    content: product.content,
  };

  const res = await fetch("api/admin/product", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function addProductContent(product, content, session) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const data = {
    _id: product,

    title: content.title,

    titleEn: content.titleEn,

    contentEn: content.contentEn,

    content: content.content,

    description: content.description,

    descriptionEn: content.descriptionEn,

    imgSrc: content.imgSrc,
  };

  const res = await fetch("api/admin/product/content", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function addBanner(banner, session) {
  // Call an external API endpoint to get posts.

  // You can use any data fetching library

  // const posts = await loadNews()

  const data = {
    title: banner.title,

    titleEn: banner.titleEn,

    content: banner.content,

    contentEn: banner.contentEn,

    image: banner.image,
  };

  const res = await fetch("api/admin/banner", {
    method: "post",

    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(data),
  });

  // By returning { props: { posts } }, the Blog component

  // will receive `posts` as a prop at build time
}
