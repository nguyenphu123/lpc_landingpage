export async function loadNews(role: any) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  let url = "api/new";
  if (role == "admin") {
    url = "api/getall/new";
  }
  const res = await fetch(url);
  const news = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return news;
}
export async function loadViaId(id: any, schema) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const data = { _id: id, schema: schema };
  const res = await fetch("api/findById", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
    body: JSON.stringify(data),
  });
  const datas = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return datas;
}
export async function loadUsers() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch("api/user");
  const users = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return users;
}
export async function loadCompanyInfo() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch("api/company");
  const info = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return info;
}
export async function loadCustomer() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch("api/customer");
  const customers = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return customers;
}
export async function loadPartner() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch("api/partner");
  const partners = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return partners;
}
export async function loadMessage() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch("api/sendMessage");
  const messages = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return messages;
}
export async function loadProduct(path) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  let res;
  if (path != "") {
    res = await fetch("api/product");
  } else {
    res = await fetch("api/product");
  }

  const products = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return products;
}
export async function loadBanner() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch("api/banner");
  const banners = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return banners;
}
export async function loadContact() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch("api/contact");
  const contacts = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return contacts;
}
