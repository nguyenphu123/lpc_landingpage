import { Post } from "@/types";

// similer products
const similerItems = (
  currentItem: Post,
  allItems: Post[],
  slug: string
): Post[] => {
  let categories: string[] = [];
  let tags: string[] = [];
  
  // set categories
  if (currentItem.categories.length > 0) {
    categories = currentItem.categories;
  }

  // set tags
  if (currentItem.tags.length > 0) {
    tags = currentItem.tags;
  }

  // filter by categories
  const filterByCategories = allItems.filter((item: any) =>
    categories.find((category) =>
      item.categories.includes(category)
    )
  );
  
  // filter by tags
  const filterByTags = allItems.filter((item: any) =>
    tags.find((tag) => item.tags.includes(tag))
  );
 
  // merged after filter
  const mergedItems = [...new Set([...filterByCategories, ...filterByTags])];
 
  // filter by slug
  const filterBySlug = mergedItems.filter((product) => JSON.stringify(product.categories) == JSON.stringify(categories) && product.id !== currentItem.id);
  
  return filterBySlug;
};

export default similerItems;
