import CTAButton from './components/CTAButton'
import SnowFall from './components/SnowFall'
import MysteryPodium from "./components/MysteryPodium";


export default function App() {
  return (
    <main className="min-h-screen bg-red-600 text-white flex items-center justify-center relative overflow-hidden">
      <SnowFall />
  <MysteryPodium />

  <div className="mt-10 flex justify-center">
    <CTAButton text="Join Now to Win" link="#" />
  </div>
</section>


        <div className="mt-10 flex justify-center">
          <CTAButton text="Join Now to Win" link="#" />
        </div>
      </section>

      <footer className="absolute bottom-6 text-sm opacity-80 z-10">
        © 2025 Grand Mystery Christmas
      </footer>
    </main>
  )
}
