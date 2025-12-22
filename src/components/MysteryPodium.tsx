export default function MysteryPodium() {
  return (
    <section className="mt-14">
      <h2 className="text-3xl font-bold mb-6">🎁 Mystery Podium</h2>

      <div className="flex items-end justify-center gap-6">
        <div className="bg-white/20 p-6 rounded-lg h-32 w-24 flex items-end justify-center">
          2nd
        </div>

        <div className="bg-yellow-400 text-black p-6 rounded-lg h-44 w-28 flex items-end justify-center font-bold">
          1st
        </div>

        <div className="bg-white/20 p-6 rounded-lg h-28 w-24 flex items-end justify-center">
          3rd
        </div>
      </div>

      <p className="mt-4 text-sm opacity-80">
        Winners revealed on Christmas 🎄
      </p>
    </section>
  );
}
