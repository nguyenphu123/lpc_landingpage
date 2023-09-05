import { Post } from "@/types";

// similer products
const similerItems = (
  currentItem: Post,
  allItems: Post[],
  slug: string,
): Post[] => {
  let categories: string[] = [];
  let tags: string[] = [];

  // set categories
  if (currentItem.categories.length > 0) {
    categories = currentItem.categories;
  }

  // filter by categories
  const filterByCategories = allItems.filter((item: any) =>
    categories.find((category) => item.categories.includes(category)),
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByCategories])];

  return mergedItems.filter((item) => item._id != currentItem._id);
};

export default similerItems;
