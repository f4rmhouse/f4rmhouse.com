import Image from "next/image";
import { ThemeToggle } from "./components/ThemeToggle";
import { FeatureSection } from "./components/FeatureSection";
import Link from "next/link";
import FeaturesGridItem from "./components/FeaturesGridItem";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground bg-background">
      <nav className="fixed p-0 m-0 w-full backdrop-blur-xl bg-background/70 top-0 z-50 border-b border-[#86868b]/10">
        <div className="max-w-[980px] mx-auto px-5">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="https://f4-public.s3.eu-central-1.amazonaws.com/public/assets/f4-logo-white.png"
                alt="f4rmhouse logo"
                width={24}
                height={24}
                priority
                className="rounded-full"
              />
              <p className="text-sm font-medium tracking-tight pl-2">f4rmhouse</p>
            </Link>

            {/* Right side navigation items */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="/docs"
                className="text-sm hover:brightness-110 transition-all mr-4"
              >
                Docs
              </Link>
              <a
                href="https://app.f4rmhouse.com"
                className="text-sm text-accent hover:brightness-110 transition-all"
              >
                Launch App →
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32">
        <div className="max-w-[980px] mx-auto">
          <div className="">
            <h1 className="leading-20 text-[48px] text-center md:text-[62px] lg:text-[62px] mb-5">
              An all-in-one, <Link className="text-[#77a4f5] hover:underline" href="https://www.gnu.org/philosophy/free-sw.html">free/libre</Link>, customizable agent creator.
            </h1>
            <p className="text-center">
              Provides every tool you need to tinker with, create and distribute modern agentic systems.
            </p>
          </div>
        </div>
        <div className="max-w-[980px] mx-auto mt-12 flex justify-center gap-4">
          <a
            href="https://app.f4rmhouse.com"
            className="p-2 font-bold hover:bg-blue-400 transition-all text-white cursor-pointer rounded-md pl-5 pr-5 text-foreground bg-[#0582ff]"
          >
            Get started — free
          </a>
          <button className="p-2 font-bold hover:bg-blue-200 bg-blue-100 transition-all cursor-pointer rounded-md pl-5 pr-5 text-blue-500">
            Talk to a human
          </button>
        </div>
        <div>
          <div className="mt-15">
            <div className="rounded-lg max-w-[980px] h-[75vh] mx-auto bg-radial from-blue-300 to-blue-400 relative overflow-hidden">
              <div className="absolute"></div>
              <div className="">
              </div>
            </div>
          </div>
        </div>
        <FeatureSection
          title="Your window into the agentic web"
          description="Intelligent automation that adapts to your needs, making complex tasks effortless."
          backgroundColor="bg-[#f8d65b]"
        />
        <FeatureSection
          title="Automation at it's finest."
          description="Intelligent automation that adapts to your needs, making complex tasks effortless."
          backgroundColor="bg-[#f8d65b]"
        />
        <FeatureSection
          title="Create once, run anywhere"
          description="Different agents don't need different GUIs. Unclutter your homescreen by deploying agents seamlessly across WhatsApp, Telegram, Discord, or your secure internal infrastructure with f4rmhouse CORA distribution."
        />
        <FeatureSection
          title="Massive marketplace for agent tools."
          description="Transform hours of setup into seconds with our curated marketplace of instantly-integrable AI tools and models."
        />
        <FeatureSection
          title="Infinitely customizable"
          description="Create sophisticated AI workflows with complete freedom to customize every aspect of your agents' behavior."
        />
        <FeatureSection
          title="Private at its core"
          description="Run agents locally for privacy or scale infinitely in the cloud — seamlessly switch between both as your needs evolve."
        />
        <FeatureSection
          title="For the community"
          description="Join a movement of innovators building the future of AI on open standards and collaborative development."
        />
        <footer className="max-w-[980px] mt-20">
          <div>
            <div>
              <h1>Integrations</h1>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
