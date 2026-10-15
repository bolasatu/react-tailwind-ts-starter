import { FeaturedBlogPost } from "@/components/email/featured-blog-post";
// import { defaultTheme } from "@/components/email/theme-default";
import { defaultTheme } from "@/components/email/theme-airbnb";

export function FeaturedBlogPostDemo() {
  return (
    <FeaturedBlogPost
      width="contained"
      dateStyle="none"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
export default FeaturedBlogPostDemo