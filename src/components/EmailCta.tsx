import { CallToAction } from "@/components/email/call-to-action";
import { defaultTheme } from "@/components/email/theme-default";
// import { airbnbTheme  as defaultTheme} from "@/components/email/theme-airbnb";

export function CallToActionDemo() {
  return (
    <CallToAction
      description="A focused launch message paired with one clear next step."
      heading="Turn product updates into momentum"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
export default CallToActionDemo