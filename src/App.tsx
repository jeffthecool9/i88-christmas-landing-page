import Hero from './components/Hero'
import CTAButton from './components/CTAButton'
import SnowFall from './components/SnowFall'
import MysteryPodium from './components/MysteryPodium'

export default function App() {
  return (
    <main className="min-h-screen bg-red-600 text-white flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background animation */}
      <SnowFall />

      {/* Hero Section */}
      <section className="z-10 text-center px-6 max-w-3xl">
        <Hero />

        <div className="mt-10 flex justify-center">
          <CTAButton
            text="Join Now to Win"
            link="#"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="z-10 absolute bottom-6 text-sm opacity-80">
        © 2025 Grand Mystery Christmas
      </footer>
    </main>
  )
}
