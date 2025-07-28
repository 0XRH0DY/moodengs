import { Button } from "@/components/ui/button"
import { Twitter, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function MoodengCult() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600">
      {/* Hero Section */}
      <section className="pt-16 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/images/moodeng-basic.gif"
              alt="Moodeng"
              width={200}
              height={200}
              className="mx-auto rounded-full mb-6"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            MOODENG
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">NFT CULT</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
            5,000 quirky, personality-packed hippos on Solana within the BONK ecosystem! 🦛✨
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">
            About the <span className="text-pink-400">Cult</span>
          </h2>
          <div className="text-center">
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Welcome to the Moodeng NFT Cult - a collection of 5,000 unique, pixel-perfect hippos living on the Solana
              blockchain. Built within the BONK ecosystem, each Moodeng represents the rebellious spirit of meme culture
              meets serious NFT utility.
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Our adorable hippos come with over 200 unique traits, from tactical gear to cosmic accessories. Join the
              most wholesome cult in crypto and become part of our growing community of Moodeng enthusiasts!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <Image
                src="/images/moodeng-hero.png"
                alt="Hero Moodeng"
                width={150}
                height={150}
                className="rounded-lg mx-auto"
              />
              <Image
                src="/images/moodeng-galaxy.png"
                alt="Galaxy Moodeng"
                width={150}
                height={150}
                className="rounded-lg mx-auto"
              />
              <Image
                src="/images/moodeng-warrior.png"
                alt="Warrior Moodeng"
                width={150}
                height={150}
                className="rounded-lg mx-auto"
              />
              <Image
                src="/images/moodeng-astronaut.png"
                alt="Space Moodeng"
                width={150}
                height={150}
                className="rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
            Join the <span className="text-purple-400">Movement</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8 py-4"
              asChild
            >
              <a href="https://launchmynft.io/sol/10260" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2" />
                Launch on LaunchMyNFT.io
              </a>
            </Button>
            <Button size="lg" className="bg-[#1DA1F2] hover:bg-[#0d8bd9] text-lg px-8 py-4" asChild>
              <a href="https://x.com/i/communities/1949796477292658973/" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2" />
                Join Twitter Community
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/40 border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Image src="/images/moodeng-basic.gif" alt="Moodeng" width={32} height={32} className="rounded-full" />
            <span className="text-xl font-bold text-white">MOODENG CULT</span>
          </div>
          <p className="text-white/60">Built on Solana • Powered by BONK • Made with 💜</p>
        </div>
      </footer>
    </div>
  )
}
