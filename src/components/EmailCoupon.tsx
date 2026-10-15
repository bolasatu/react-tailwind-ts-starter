import { CardCoupons } from "@/components/email/card-coupons";
// import { defaultTheme } from "@/components/email/theme-default";
// import { defaultTheme } from "@/components/email/theme-twitch";
import { defaultTheme } from "@/components/email/theme-airbnb";

export function CardCouponsDemo() {
  return (
    <CardCoupons
      variant="with-name"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
export default CardCouponsDemo