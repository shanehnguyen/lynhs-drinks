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
          eyebrow="Our Story"
          heading="How a Church Festival Turned Into a Business"
          body={`I came to the U.S. from Vietnam at seventeen, and my family started over with close to nothing. A few years later I was studying Social Work at San Jose State and making drinks on the side, using the recipes I grew up with back home. I liked watching someone's face after the first sip. That was the whole reason I kept going.

Twenty years later I'm still making those same recipes by hand at every event, and I still watch for the face.

— Lynh Ngo, Founder`}
          cta={{ label: "See the Menu", href: "/shop" }}
          photoLabel="Lynh Ngo, founder"
          photoSrc="/photos/owner-portrait.png"
          photoAlt="Lynh Ngo, founder of Lynh's Drinks"
          photoCutout
          roundedTop
          roundedBottom
          swirlColor="#FFEDFE"
          extraHeading="Also pouring in:"
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
          heading="Why the Line Keeps Reforming"
          body="Twenty years of events has taught me where things go sideways, so I plan around it before I load the bus."
          bullets={[
            "Tea steeped and brewed on site, with real leaves and real milk",
            "Toppings for everyone, from the boba purist to the kid who wants extra jelly",
            "30,000+ drinks poured across 10+ large-scale events",
            "One crew from setup to the last cup, and I'm there for all of it",
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
          eyebrow="Meet the Team"
          heading="Meet the Hands Behind Every Cup"
          body="This started with me pouring drinks at my own church festival. There's a crew now, and the rule hasn't changed. Whatever is on the calendar that day gets treated like it's the only event we have."
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
