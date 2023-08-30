export async function loadNews(role: any, searchField, href) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  let url = "api/new";
  if (role == "admin") {
    url = "api/getall/new";
  }
  const res = await fetch(
    window.location.protocol +
      "//" +
      window.location.hostname +
      ":" +
      window.location.port +
      "/" +
      url,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchField: searchField,
      }),
    },
  );
  const news = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return news;
}

export async function loadUsers(href) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch(
    window.location.protocol +
      "//" +
      window.location.hostname +
      ":" +
      window.location.port +
      "/" +
      "api/user",
  );
  const users = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return users;
}
export async function loadCompanyInfo(href) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch(
    window.location.protocol +
      "//" +
      window.location.hostname +
      ":" +
      window.location.port +
      "/" +
      "api/company",
  );
  const info = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return info;
}
export async function loadCustomer(href) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch(
    window.location.protocol +
      "//" +
      window.location.hostname +
      ":" +
      window.location.port +
      "/" +
      "api/customer",
  );
  const customers = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return customers;
}
export async function loadPartner(href) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch(
    window.location.protocol +
      "//" +
      window.location.hostname +
      ":" +
      window.location.port +
      "/" +
      "api/partner",
  );
  const partners = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return partners;
}
export async function loadMessage(href) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch(
    window.location.protocol +
      "//" +
      window.location.hostname +
      ":" +
      window.location.port +
      "/" +
      "api/sendMessage",
  );
  const messages = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return messages;
}
export async function loadProduct(searchField, href) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()

  const res = await fetch(
    window.location.protocol +
      "//" +
      window.location.hostname +
      ":" +
      window.location.port +
      "/" +
      "api/product",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchField: searchField,
      }),
    },
  );
  const products = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return products;
}
export async function loadNewHomePage(href) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  let res;
  res = await fetch(
    window.location.protocol +
      "//" +
      window.location.hostname +
      ":" +
      window.location.port +
      "/" +
      "api/getNewForHomePage",
  );

  const products = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return products;
}

export async function loadBanner(href) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch(
    window.location.protocol +
      "//" +
      window.location.hostname +
      ":" +
      window.location.port +
      "/" +
      "api/banner",
  );
  const banners = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return banners;
}
export async function loadContact(href) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch(
    window.location.protocol +
      "//" +
      window.location.hostname +
      ":" +
      window.location.port +
      "/" +
      "api/contact",
  );
  const contacts = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return contacts;
}
