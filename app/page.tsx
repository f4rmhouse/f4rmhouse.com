import Image from "next/image";
import { ThemeToggle } from "./components/ThemeToggle";
import { FeatureSection } from "./components/FeatureSection";
import { LazyGif } from "./components/LazyGif";
import Link from "next/link";
import { BotMessageSquare, FileCode2, FileImage, Lock, Package, Palette, Zap } from "lucide-react";

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

      <main className="pt-[10%]">
        <div className="max-w-[980px] mx-auto">
          <div className="">
            <h1 className="text-center leading-18 text-[48px] md:text-[52px] lg:text-[72px] mb-8">
              The browser-native MCP client
            </h1>
            <p className="text-center text-2xl text-neutral-400">A thinking partner, grounded in the tools and apps you use every day.</p>
          </div>
        </div>
        <div className="max-w-[980px] mx-auto mt-5 flex justify-center gap-4">
          <a
            href="https://app.f4rmhouse.com"
            className="p-2 font-bold hover:bg-blue-400 transition-all text-white cursor-pointer rounded-md pl-5 pr-5 text-foreground bg-[#0582ff]"
          >
            Get started — free
          </a>
        </div>
        <div>
          <div className="mt-15">
            <div className="rounded-lg max-w-[980px] h-[75vh] mx-auto bg-radial from-blue-300 to-blue-400 relative overflow-hidden">
              <div className="absolute"></div>
              <div className="p-6">
              <LazyGif 
                src="/fetch_remote_data.gif"
                alt="Fetch remote data demo"
                className="rounded-lg object-cover shadow-lg"
              />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[20vh] grid grid-cols-1 w-[70vw] mx-auto gap-0 rounded-md">
          <div className="col-span-1">
            <h1 className="text-center text-6xl mt-[40px] font-bold">Our features</h1>
          </div>
          <FeatureSection
            title="Safe authentication and authorization using MCP standards."
            description=""
            videoSrc="/example_workflow.mov"
            icon={<Lock size={32} className=""/>} 
          />
          <FeatureSection
            title="Easy MCP integration into whatever LLM you prefer."
            description=""
            videoSrc="/store_demo.mov"
            icon={<Package size={32} className=""/>}
          />
          <FeatureSection
            title="Fast generation using LLMs hosted on ASIC chips."
            description=""
            videoSrc="/speed_demo.mov"
            icon={<Zap size={32} className=""/>}
          />
          <FeatureSection
            title="Customize the UI to match your brand and your mood."
            description=""
            videoSrc="/theme_demo.mov"
            icon={<Palette size={32} className=""/>}
          />
        </div>
        <div className="">
          <h1 className="text-center text-6xl mt-[200px] font-bold w-[60vw] mx-auto">We value your privacy and do not store any personal data or chat histories.</h1>
          <p className="text-center text-2xl text-neutral-400 mt-5">You can keep full control of your entire AI stack by running f4rmhouse on your own infrastructure.</p>
          <img className="mx-auto mt-10" height={128} width={128} src="https://cdn-icons-png.flaticon.com/512/2111/2111540.png"/>
        </div>
        <div className="mt-[10px] mb-[200px] grid grid-cols-1 w-[40vw] mx-auto gap-5">
        </div>
        <div className="w-full">
          <h1 className="text-center text-6xl mt-[200px] font-bold w-[60vw] mx-auto">How people use f4rmhouse</h1>
          <div className="grid grid-cols-3 w-[80vw] mx-auto gap-5 mt-20">
            <div>
              <FileImage size={32} className="mb-5 text-blue-400"/>
              <p className="text-2xl">Media generation</p>
              <p className="mt-5 text-xl">
                Create a custom f4rmer with an image gen MCP to translate your sketches into photoreal visuals, render your favorite artist’s style on any subject, and iterate variations that sharpen your creative direction.
              </p>
            </div>
            <div>
              <FileCode2 size={32} className="mb-5 text-blue-400"/>
              <p className="text-2xl">Document generation</p>
              <p className="mt-5 text-xl">
                Use Google Docs MCP to convert bullet points into polished reports, apply your house style to any draft, and spin instant variations that nail the right tone formal, playful, or investor grade every time.
              </p>
            </div>
            <div>
              <BotMessageSquare size={32} className="mb-5 text-blue-400"/>
              <p className="text-2xl">Share f4rmers</p>
              <p className="mt-5 text-xl">
              Share f4rmers with its custom tools, memory, and voice. Generate a single link. Anyone who clicks it receives an identical, ready-to-run clone in their own workspace. They&apos;ll inherit any guardrail you set, so your expertise spreads at the speed of a share.
              </p>
            </div>
            <div>
              <p className="italic mt-10 text-xl">Learn faster and deeper.</p>
            </div>
            <div>
              <p className="italic mt-10 text-xl">Present with confidence.</p>
            </div>
            <div>
              <p className="italic mt-10 text-xl">Share intelligence.</p>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-center text-6xl mt-[200px] font-bold w-[60vw] mx-auto">&ldquo;Just let a f4rmer do it.&rdquo;</h1>
          </div>
        </div>
        <footer className="w-full mt-[200px]">
          <h1 className="m-10">f4rmhouse © 2025</h1>
        </footer>
      </main>
    </div>
  );
}
