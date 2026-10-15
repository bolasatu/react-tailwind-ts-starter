import { Html } from "react-email";
import { HeaderWithLogoAndMenu } from "@/components/email/header-with-logo-and-menu";
import { ImageGridHero } from "@/components/email/image-grid-hero";
import { ProductList } from "@/components/email/product-list";
import { CallToAction } from "@/components/email/call-to-action";
import { NavigationFooter } from "@/components/email/navigation-footer";

export function ProductDropEmail() {
  return (
    <Html>
      <HeaderWithLogoAndMenu />
      <ImageGridHero />
      <ProductList />
      <CallToAction />
      <NavigationFooter />
    </Html>
  );
}
export default ProductDropEmail