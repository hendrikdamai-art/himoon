import type { BlogPost } from "@/types/catalog";
import type { ShopCategorySlug } from "@/lib/site-config";
import { getGuides } from "@/lib/seo/guides";

export function getGuidesForCategory(category: ShopCategorySlug): BlogPost[] {
  const href = `/shop/${category}`;
  return getGuides().filter(
    (guide) => guide.relatedCategory === category || guide.shopHref === href,
  );
}
