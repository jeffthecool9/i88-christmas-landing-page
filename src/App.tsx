import Hero from "./components/Hero";
import SnowFall from "./components/SnowFall";
import MysteryPodium from "./components/MysteryPodium";
import CTAButton from "./components/CTAButton";

export default function App() {
  return (
    <main className="min-h-screen bg-red-600 text-white flex items-center justify-center relative overflow-hidden">
      <SnowFall />

      <section className="z-10 text-center px-6 max-w-3xl">
        <Hero />

        <MysteryPodium />

        <CTAButton text="Join Now to Win" link="#" />
      </section>
    </main>
  );
}
