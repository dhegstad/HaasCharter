import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Aircraft from "@/components/Aircraft";
import RangeMap from "@/components/RangeMap";
import PricingCalculator from "@/components/PricingCalculator";
import Crew from "@/components/Crew";
import Calendar from "@/components/Calendar";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Aircraft />
      <RangeMap />
      <PricingCalculator />
      <Crew />
      <Calendar />
      <BookingForm />
      <Footer />
    </>
  );
}
