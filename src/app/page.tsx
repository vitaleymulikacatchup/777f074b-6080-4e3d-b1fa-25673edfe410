"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Zap, Settings, Sparkles } from "lucide-react";

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: "hero-image", url: "https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "High-End Gaming PC Interior with Colorful RGB Lights" },
  { id: "about-image", url: "https://images.pexels.com/photos/34234301/pexels-photo-34234301.png?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Two professionals working at a shared office desk, top view." },
  { id: "contact-image", url: "https://images.pexels.com/photos/4623200/pexels-photo-4623200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Businesswoman using a desktop computer in an office, viewing contact details on screen." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Features", id: "feature" },
            { name: "Pricing", id: "pricing" }
          ]}
          brandName="Mvpblocks"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Mvpblocks"
            description="Empower your product development with our innovative blocks"
            tag="New Release"
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "about" }
            ]}
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            imageAlt={assetMap.find(a => a.id === "hero-image")?.alt}
            className="bg-purple-100 text-gray-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="We build products that empower teams to create exceptional digital experiences"
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "features" }
            ]}
            className="bg-purple-100 text-gray-900"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              {
                title: "Advanced Analytics",
                description: "Get detailed insights into your business performance",
                icon: Zap,
                button: { text: "Learn More", href: "#" },
              },
              {
                title: "Customizable Templates",
                description: "Easily tailor each block to your needs",
                icon: Settings,
                button: { text: "Explore", href: "#" },
              }
            ]}
            title="Our Features"
            description="Discover what makes us different"
            className="bg-purple-100 text-gray-900"
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardOne
            plans={[
              {
                id: "basic",
                badge: "Most Popular",
                price: "$29/mo",
                subtitle: "Perfect for small teams",
                features: ["Up to 10 team members", "100GB storage", "Priority support"],
                badgeIcon: Sparkles,
              },
              {
                id: "pro",
                badge: "Pro Plan",
                price: "$49/mo",
                subtitle: "Advanced features for growing teams",
                features: ["Up to 50 team members", "Unlimited storage", "24/7 support"],
              }
            ]}
            title="Choose Your Plan"
            description="Select the perfect plan for your needs"
            className="bg-purple-100 text-gray-900"
          />
        </div>
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FaqBase
            faqs={[
              { id: "1", title: "What is Mvpblocks?", content: "Mvpblocks is a platform that provides customizable building blocks to streamline your product development." },
              { id: "2", title: "How can I get started?", content: "Simply sign up and start exploring our templates to find what suits your needs." }
            ]}
            className="bg-purple-100 text-gray-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay updated with our latest news"
            description="Subscribe to our newsletter for weekly updates and exclusive content."
            imageSrc={assetMap.find(a => a.id === "contact-image")?.url}
            mediaPosition="right"
            onSubmit={email => console.log(email)}
            className="bg-purple-100 text-gray-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Product", items: [
                  { label: "Features", href: "features" },
                  { label: "Pricing", href: "pricing" }
                ]
              },
              { title: "Company", items: [
                  { label: "About Us", href: "about" },
                  { label: "Contact", href: "contact" }
                ]
              }
            ]}
            logoSrc="/brand/logowhite.svg"
            className="bg-purple-100 text-gray-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
