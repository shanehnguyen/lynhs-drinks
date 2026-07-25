import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import OfferingGrid from "@/components/OfferingGrid";
import FeatureSplit from "@/components/FeatureSplit";
import TestimonialRow from "@/components/TestimonialRow";
import FeaturedTestimonial from "@/components/FeaturedTestimonial";
import UpsellBlock from "@/components/UpsellBlock";
import ClosingCTA from "@/components/ClosingCTA";
import TaglineStrip from "@/components/TaglineStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <LogoStrip
          heading="Trusted for 20+ years at:"
          items={[
            "St. Maria Goretti Parish Festival",
            "Our Lady of La Vang Parish Festival",
            "Saint Elizabeth Parish",
            "Saint John Vianney Annual Festival",
          ]}
          bg="#E2793A"
          dividerTo="#8C6FAE"
          marquee
          mascotLeft={{ pose: "shrug", cupColor: "#FFFBF3", teaColor: "#8C6FAE" }}
          mascotRight={{ pose: "peek", cupColor: "#FFFBF3", teaColor: "#4A2E22" }}
        />

        <OfferingGrid />

        <FeatureSplit
          id="about"
          bg="#FFFBF3"
          textColor="#2B1B12"
          eyebrow="Our Story"
          heading="From Vietnam to San Jose: 20 Years of Sharing"
          body="I came to the U.S. from Vietnam when I was 17, and my family and I started over with pretty much nothing. I was studying Social Work at San Jose State when I started making drinks on the side, using recipes I grew up with back home. I never planned on turning it into a business. I just loved making drinks for people and sharing a little piece of where I came from. Twenty years later, I'm still making the same recipes by hand at every event. — Lynh Ngo, Founder"
          cta={{ label: "See the Menu", href: "/shop" }}
          photoLabel="Lynh Ngo, founder"
          photoSrc="/photos/owner-portrait.png"
          photoAlt="Lynh Ngo, founder of Lynh's Drinks"
          photoCutout
          dividerBottom="#4A2E22"
        />

        <LogoStrip
          heading="Also Serving These Cities:"
          items={[
            "San Jose",
            "Santa Clara",
            "Milpitas",
            "Sunnyvale",
            "Campbell",
            "Morgan Hill",
          ]}
          bg="#4A2E22"
          dividerTo="#FFFBF3"
          mascotLeft={{ pose: "point", flip: true, cupColor: "#F4E8D8", teaColor: "#8C6FAE" }}
          mascotRight={{ pose: "think", cupColor: "#F4E8D8", teaColor: "#E2793A" }}
        />

        <FeatureSplit
          bg="#FFFBF3"
          textColor="#2B1B12"
          reverse
          heading="More Reasons Guests Keep Coming Back for Seconds"
          body="It's not just the flavors. It's twenty years of experience getting every detail right."
          bullets={[
            "Brewed fresh on-site, never from a powdered mix",
            "Fully customizable toppings for every guest",
            "30,000+ drinks served across 10+ large-scale events",
            "One team, from setup to last cup poured",
          ]}
          photoLabel="Our mobile drink bar bus at a parish festival"
          photoSrc="/photos/bus-sign.png"
          photoAlt="Lynh's Drinks mobile bus setup at a parish festival"
          photoCutout
          photoCutoutMaxHeight="520px"
          quote={{ text: "They pulled up in the cutest drink bus — our guests were obsessed!", author: "Mai Le, School Event" }}
          dividerBottom="#E2793A"
        />

        <TestimonialRow />
        <FeaturedTestimonial />

        <FeatureSplit
          id="team"
          bg="#F4E8D8"
          textColor="#2B1B12"
          eyebrow="Meet the Team"
          heading="Meet the Hands Behind Every Cup"
          body="What started with me serving drinks at my church's festival has grown into a team that treats every event, big or small, like it's the only one that day."
          cta={{ label: "More About Lynh's", href: "/#about" }}
          photoLabel="Lynh's Drinks team at a festival booth"
          photoSrc="/photos/lynh-team.jpg"
          photoAlt="Lynh's Drinks team at a festival booth"
          quote={{ text: "Very organized and responsive. My guests were impressed with the drink decor.", author: "Diep Nguyen, Church Festival" }}
          dividerBottom="#8C6FAE"
        />

        <UpsellBlock />
        <ClosingCTA />
        <TaglineStrip />
      </main>

      <Footer />
    </>
  );
}
