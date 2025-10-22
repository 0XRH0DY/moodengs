import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-orange-600">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-8 h-48 w-48 rounded-full bg-gray-900 flex items-center justify-center">
          <div className="text-6xl">🎨</div>
        </div>

        <h1 className="mb-4 text-6xl font-black text-white md:text-7xl">YOUR PROJECT</h1>
        <h2 className="mb-6 text-5xl font-black text-pink-300 md:text-6xl">NFT CULT</h2>

        <p className="mb-4 max-w-2xl text-lg text-white/90 leading-relaxed">
          Create your unique profile picture from thousands of quirky combinations!
        </p>

        <div className="mb-8 rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm">
          <p className="text-sm text-white/80">Contract Address: Coming Soon...</p>
        </div>

        <Link href="/generator">
          <Button
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-6 text-lg rounded-full"
          >
            Create Your PFP
          </Button>
        </Link>
      </section>

      {/* About Section */}
      <section className="px-6 py-20">
        <h2 className="mb-12 text-center text-5xl font-black text-white">
          About the <span className="text-pink-300">Cult</span>
        </h2>

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-lg text-white/90 leading-relaxed">
            Welcome to the ultimate PFP generator - a collection of unique, personality-packed characters ready to
            represent you across the digital realm. Built with creativity and passion, each combination represents the
            rebellious spirit of meme culture meets serious utility.
          </p>

          <p className="mb-12 text-lg text-white/90 leading-relaxed">
            Our adorable characters come with countless unique traits, from tactical gear to cosmic accessories. Join
            the most wholesome cult in crypto and become part of our growing community!
          </p>
        </div>

        {/* Sample Characters Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-purple-400 p-1">
              <div className="h-full w-full rounded-xl bg-gray-800/50 backdrop-blur-sm flex items-center justify-center text-4xl">
                🎭
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-center">
        <h2 className="mb-12 text-5xl font-black text-white">
          Join the <span className="text-pink-300">Movement</span>
        </h2>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 rounded-full">
            Launch on Platform
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-cyan-400 bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 rounded-full"
          >
            Join Twitter Community
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center">
        <p className="text-sm text-white/60">Built with passion • Powered by creativity • Made with ❤️</p>
      </footer>
    </main>
  )
}
