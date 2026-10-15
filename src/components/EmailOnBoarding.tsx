import { Html } from "react-email";
import { HeaderWithLogo } from "@/components/email/header-with-logo";
import { Content } from "@/components/email/content";
import { Progress } from "@/components/email/progress";
import { CallToAction } from "@/components/email/call-to-action";
import { UtilityFooter } from "@/components/email/utility-footer";


// import { twitchTheme  as defaultTheme } from "@/components/email/theme-twitch";
import { airbnbTheme  as defaultTheme} from "@/components/email/theme-airbnb";

export function WelcomeOnboardingEmail() {
  return (
    <Html theme={defaultTheme}>
      <HeaderWithLogo />
      <Content />
      <Progress />
      <CallToAction theme={defaultTheme}/>
      <UtilityFooter />
    </Html>
  );
}
export default WelcomeOnboardingEmail