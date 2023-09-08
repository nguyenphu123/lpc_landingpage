export async function updateNews(newInfo, session) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const data = {
    _id: newInfo._id,
    title: newInfo.title,

    titleEn: newInfo.titleEn,

    meta_title: newInfo.meta_title,

    description: newInfo.description,

    date: newInfo.date,

    image: newInfo.image,

    categories: newInfo.categories,

    tags: newInfo.tags,

    draft: newInfo.draft,

    content: newInfo.content,

    contentEn: newInfo.contentEn,
  };
  const res = await fetch("api/admin/new", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function updateUsers(user, session) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()

  const res = await fetch("api/admin/user", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function updateCompanyInfo(company, session) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()

  const res = await fetch("api/admin/company", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(company),
  });
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function updateContactInfo(contact, session) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()

  const res = await fetch("api/admin/contact", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function updateCustomer(customer, session) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()

  const res = await fetch("api/admin/customer", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function updatePartner(partner, session) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()

  const res = await fetch("api/admin/partner", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(partner),
    session: session,
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function updateProduct(product, session) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const data = {
    _id: product._id,
    title: product.title,

    titleEn: product.titleEn,

    type: product.type,

    description1: product.description1,

    description2: product.description2,

    descriptionEn1: product.descriptionEn1,

    descriptionEn2: product.descriptionEn2,

    image: product.image,

    pros: product.pros,

    prosEn: product.prosEn,
    status: product.status,
  };

  const res = await fetch("api/admin/product", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function updateProductContent(product, content, session) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const data = {
    _id: product,
    contentId: content._id,
    title: content.title,

    titleEn: content.titleEn,

    description: content.description,

    descriptionEn: content.descriptionEn,

    contentEn: content.contentEn,

    imgSrc: content.imgSrc,

    content: content.content,
    status: content.status,
  };

  const res = await fetch("api/admin/product/content", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function updateBanner(banner, session) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()

  const res = await fetch("api/admin/banner", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(banner),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
