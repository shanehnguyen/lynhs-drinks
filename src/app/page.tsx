import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OfferingGrid from "@/components/OfferingGrid";
import FeatureSplit from "@/components/FeatureSplit";
import TestimonialRow from "@/components/TestimonialRow";
import UpsellBlock from "@/components/UpsellBlock";
import FaqSection from "@/components/FaqSection";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <OfferingGrid />

        <FeatureSplit
          id="about"
          bg="#FFDBFD"
          textColor="#000000"
          heading="How My Drink Business Started at a Church Festival"
          body={`I came to the U.S. from Vietnam at 17. My family started over with almost nothing. A few years later, I studied Social Work at San Jose State. On the side, I made drinks from the recipes I grew up with. I loved seeing people smile after the first sip, so I kept going.

Twenty years later, I still make those same recipes by hand at every event. I still look for that smile.

Lynh Ngo, Founder`}
          cta={{ label: "See the Menu", href: "/shop" }}
          photoLabel="Lynh Ngo, founder"
          photoSrc="/photos/owner-portrait.png"
          photoAlt="Lynh Ngo, founder of Lynh's Drinks"
          photoCutout
          roundedTop
          roundedBottom
          swirlColor="#FFEDFE"
          extraHeading="Cities we serve:"
          extraItems={[
            "San Jose",
            "Santa Clara",
            "Milpitas",
            "Sunnyvale",
            "Campbell",
            "Morgan Hill",
          ]}
        />

        <FeatureSplit
          bg="#A4F6F8"
          textColor="#000000"
          reverse
          heading="Why Guests Come Back for a Second Cup"
          body="I have served events for twenty years. I know what can go wrong, so I plan for it before the bus leaves."
          bullets={[
            "Tea brewed fresh at your event, with real tea leaves and real milk",
            "Toppings for everyone, from plain boba fans to kids who want extra jelly",
            "30,000+ drinks served at 10+ large events",
            "One crew from setup to the last cup, and I'm there the whole time",
          ]}
          photoLabel="Our mobile drink bar bus at a parish festival"
          photoSrc="/photos/bus-sign.png"
          photoAlt="Lynh's Drinks mobile bus setup at a parish festival"
          photoCutout
          photoCutoutMaxHeight="380px"
          quote={{ text: "They pulled up in the cutest drink bus — our guests were obsessed!", author: "Mai Le, School Event" }}
          roundedTop
          roundedBottom
        />

        <TestimonialRow />

        <FeatureSplit
          id="team"
          bg="#FFFFFF"
          textColor="#2E1C12"
          heading="Meet the Team Behind Every Cup"
          body="I started by pouring drinks at my own church festival. Now I have a crew, and our rule is the same. We treat every event like it is our only one."
          cta={{ label: "More About Lynh's", href: "/#about" }}
          photoLabel="Lynh's Drinks team at a festival booth"
          photoSrc="/photos/lynh-team.jpg"
          photoAlt="Lynh's Drinks team at a festival booth"
          quote={{ text: "Very organized and responsive. My guests were impressed with the drink decor.", author: "Diep Nguyen, Church Festival" }}
        />

        <UpsellBlock />
        <FaqSection />
        <ClosingCTA />
      </main>

      <Footer />
    </>
  );
}
