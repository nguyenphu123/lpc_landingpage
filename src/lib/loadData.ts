import { useSession } from "next-auth/react";
export async function loadNews(role: any, searchField, href) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  let url = "api/new";

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
        "cache-control": "no-store",
      },
      body: JSON.stringify({
        searchField: searchField,
        role: role,
      }),
    },
  );
  const news = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return news;
}
export async function loadNew(role: any, searchField, href, _id) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  let url = "api/new/blog";

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
        "cache-control": "no-store",
      },
      body: JSON.stringify({
        _id: _id,
        searchField: searchField,
        role: role,
      }),
    },
  );
  const news = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return news;
}
export async function searchNews(searchField, keyword) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  let url = "api/search/new";

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
        "cache-control": "no-store",
      },
      body: JSON.stringify({
        keyword: keyword,
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
      "api/admin/user",
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "cache-control": "no-store",
      },
    },
  );
  const users = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return users;
}
export async function loadipAddress() {
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
      "api/ipaddress",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "cache-control": "no-store",
      },
      body: JSON.stringify({ text: "check ip" }),
    },
  );
  const ip = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return ip;
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
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "cache-control": "no-store",
      },
    },
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
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "cache-control": "no-store",
      },
    },
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
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "cache-control": "no-store",
      },
    },
  );
  const partners = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return partners;
}

export async function loadMessageAdmin(href, session) {
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
      "api/admin/message",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "cache-control": "no-store",
      },
      body: JSON.stringify({
        session: "",
      }),
    },
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
        "cache-control": "no-store",
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
export async function loadSolutionContent(searchField, href, _id) {
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
      "api/product/solution/content",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "cache-control": "no-store",
      },
      body: JSON.stringify({
        _id: _id,
        searchField: searchField,
      }),
    },
  );
  const products = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return products;
}
export async function loadSolutionContentDescription(
  searchField,
  href,
  _id,
  contentId,
) {
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
      "api/product/solution/content/description",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "cache-control": "no-store",
      },
      body: JSON.stringify({
        _id: _id,
        searchField: searchField,
        contentId: contentId,
      }),
    },
  );
  const products = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return products;
}
export async function loadSolution(searchField, href) {
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
      "api/product/solution",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "cache-control": "no-store",
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

export async function loadService(searchField, href) {
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
      "api/product/service",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "cache-control": "no-store",
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
export async function loadServiceContent(_id, searchField, href) {
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
      "api/product/service/content",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "cache-control": "no-store",
      },
      body: JSON.stringify({
        _id: _id,
        searchField: searchField,
      }),
    },
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
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "cache-control": "no-store",
      },
    },
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
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "cache-control": "no-store",
      },
    },
  );
  const contacts = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return contacts;
}
