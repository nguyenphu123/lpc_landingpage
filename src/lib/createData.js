export async function createNews(newInfo) {
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
  const res = await fetch("api/getall/new", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function addUsers(user) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch("api/user");
  const users = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return users;
}
export async function addCompanyInfo(company) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch("api/company");
  const info = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return info;
}
export async function addCustomer(customer) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  customer["type"] = "Customer";
  const res = await fetch("api/customer", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function addPartner(partner) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  partner["type"] = "Partner";
  const res = await fetch("api/partner", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(partner),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function addProduct(product) {
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

  const res = await fetch("api/getall/product", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function addBanner(banner) {
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

  const res = await fetch("api/banner", {
    method: "post",

    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(banner),
  });

  // By returning { props: { posts } }, the Blog component

  // will receive `posts` as a prop at build time
}
