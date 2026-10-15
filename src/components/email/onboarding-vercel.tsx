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
import { vercelTheme } from "@/components/email/theme-vercel";

interface Props {
  _firstName?: string;
  _productName?: string;
  ctaHref?: string;
  _senderName?: string;
  _senderTitle?: string;
  _senderAvatarUrl?: string;
}

export const OnboardingVercel = ({
  _firstName = "there",
  _productName = "Vercel",
  ctaHref = "https://vercel.com",
  _senderName = "Vercel Team",
  _senderTitle,
  _senderAvatarUrl,
}: Props) => {
  void _senderAvatarUrl;
  void _senderTitle;

  const t = vercelTheme;

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
              subheading={`You're now part of the fastest-growing platform for frontend developers.`}
              ctaLabel="Deploy your first project"
              ctaHref={ctaHref}
            />

            <ContentGridSection layout="title" title="Global Edge" />

            <CTABannerSection
              heading="Start deploying"
              subtext="Ready to ship to production?"
              ctaLabel="Create a Project"
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

OnboardingVercel.PreviewProps = {
  _firstName: "Aniket",
  _productName: "Vercel",
  _senderAvatarUrl: emailAsset("avatars/avatar-1.jpg"),
  _senderName: "Vercel Team",
  _senderTitle: "Team",
  ctaHref: "https://vercel.com/dashboard",
} satisfies Props;
