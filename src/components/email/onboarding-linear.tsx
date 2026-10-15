import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";

import { ContentSection as ContentGridSection } from "@/components/email/content";
import { CallToActionSection as CTABannerSection } from "@/components/email/call-to-action";
import { NavigationFooterSection as FooterSection } from "@/components/email/navigation-footer";
import { HeaderWithLogoAndMenuSection as LogoHeaderSection } from "@/components/email/header-with-logo-and-menu";
import { SplitHeroSection as HeroSection } from "@/components/email/split-hero";
import { createEmailTailwindConfig } from "@/components/email/email-theme";
import { emailAsset } from "@/components/email/email-assets";
import { linearTheme } from "@/components/email/theme-linear";

interface Props {
  _firstName?: string;
  _productName?: string;
  ctaHref?: string;
  _senderName?: string;
  _senderTitle?: string;
  _senderAvatarUrl?: string;
}

export const OnboardingLinear = ({
  _firstName = "there",
  _productName = "Linear",
  ctaHref = "https://linear.app",
  _senderName = "Linear Team",
  _senderTitle,
  _senderAvatarUrl,
}: Props) => {
  void _senderAvatarUrl;
  void _senderTitle;

  const t = linearTheme;

  return (
    <Html>
      <Head />
      <Preview>
        Welcome to {_productName}, {_firstName}
      </Preview>
      <Tailwind config={createEmailTailwindConfig(t)}>
        <Body className="bg-background font-sans">
          <Container className="mx-auto max-w-container p-8">
            <LogoHeaderSection logoAlt={_productName} />

            <HeroSection
              heading={`Welcome, ${_firstName}`}
              subheading={`Track issues, manage sprints, and ship faster.`}
              ctaLabel="Open Linear"
              ctaHref={ctaHref}
            />

            <ContentGridSection layout="title" title="Issue Tracking" />

            <CTABannerSection
              heading="Start tracking"
              subtext="Your workspace is ready."
              ctaLabel="Open Workspace"
              ctaHref={ctaHref}
            />

            <Section className="py-4">
              <Text className="text-sm text-foreground-muted">
                Sent by {_senderName}
              </Text>
            </Section>

            <FooterSection text={_productName} />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

OnboardingLinear.PreviewProps = {
  _firstName: "Aniket",
  _productName: "Linear",
  _senderAvatarUrl: emailAsset("avatars/avatar-1.jpg"),
  _senderName: "Linear Team",
  _senderTitle: "Team",
  ctaHref: "https://linear.app",
} satisfies Props;
