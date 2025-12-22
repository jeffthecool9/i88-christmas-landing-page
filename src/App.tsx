import Hero from "./components/Hero";
import SnowFall from "./components/SnowFall";
import CTAButton from "./components/CTAButton";
import MysteryPodium from "./components/MysteryPodium";

export default function App() {
  return (
    <main className="min-h-screen bg-red-600 text-white relative overflow-hidden flex items-center justify-center">
      <SnowFall />

      <section className="z-10 text-center px-6 max-w-3xl">
        <Hero />

        <MysteryPodium />

        <div className="mt-10 flex justify-center">
          <CTAButton text="Join Now to Win" link="#" />
        </div>
      </section>

      <footer className="absolute bottom-6 text-sm opacity-80 z-10">
        © 2025 Grand Mystery Christmas
      </footer>
    </main>
  );
}
