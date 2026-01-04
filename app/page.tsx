"use client"
import { ExternalLink, Check } from "lucide-react"

interface Generator {
  id: string
  title: string
  generatorUrl: string
  tutorialUrl: string
  features: string[]
}

const generators: Generator[] = [
  {
    id: "discord-server",
    title: "DISCORD SERVER",
    generatorUrl: "https://discord.gg/9AVQZxxHR",
    tutorialUrl: "#",
    features: [],
  },
  {
    id: "discord-backup",
    title: "DISCORD BACKUP SERVER",
    generatorUrl: "https://discord.gg/your-backup-link",
    tutorialUrl: "#",
    features: [],
  },
  {
    id: "main-generator",
    title: "MAIN SITE GENERATOR",
    generatorUrl: "https://example.com",
    tutorialUrl: "https://example.com/tutorial",
    features: ["Chrome"],
  },
]

export default function Dashboard() {
  const handleClick = (url: string) => {
    if (url !== "#") {
      window.open(url, "_blank")
    }
  }

  const titleText = "lexar-on-top"

  return (
    <div
      className="min-h-screen overflow-hidden relative"
      style={{
        backgroundImage: 'url("/images/image0.gif")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000000",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-start pt-12 p-4">
        <div className="mb-12 flex gap-1 justify-center">
          {titleText.split("").map((letter, index) => (
            <span
              key={index}
              className="text-4xl font-bold text-white"
              style={{
                animation: `bounce 1.5s infinite`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {letter === "-" ? "\u00A0" : letter}
            </span>
          ))}
        </div>

        <div className="w-full max-w-xl space-y-3">
          {generators.map((gen, index) => (
            <div key={gen.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Simple link card for Discord */}
              {gen.features.length === 0 ? (
                <button onClick={() => handleClick(gen.generatorUrl)} className="w-full group relative">
                  <div className="relative rounded-xl border-2 border-white/30 bg-black/50 backdrop-blur-sm p-4 cursor-pointer transition-all duration-300 hover:border-white/60 hover:shadow-lg hover:shadow-white/20 overflow-hidden">
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/10 to-white/5 pointer-events-none"></div>
                    <div className="relative flex items-center justify-between">
                      <h2 className="text-xl sm:text-2xl font-bold text-white text-left">{gen.title}</h2>
                      <ExternalLink className="w-5 h-5 text-white opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-4" />
                    </div>
                  </div>
                </button>
              ) : (
                /* Generator card with features and buttons */
                <div className="relative rounded-2xl border-2 border-white/30 bg-black/50 backdrop-blur-sm p-6 overflow-hidden group hover:border-white/60 hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/10 to-white/5 pointer-events-none"></div>

                  <div className="relative">
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-white mb-4">{gen.title}</h2>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {gen.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-white text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleClick(gen.generatorUrl)}
                        className="flex-1 px-4 py-3 rounded-lg border-2 border-white/40 text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/70"
                      >
                        Generator
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}
