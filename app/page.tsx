import Image from "next/image";
import { ThemeToggle } from "./components/ThemeToggle";
import { FeatureSection } from "./components/FeatureSection";
import { LazyGif } from "./components/LazyGif";
import Link from "next/link";
import { BotMessageSquare, FileCode2, FileImage} from "lucide-react";

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
            <h1 className="text-center leading-18 text-[48px] md:text-[52px] lg:text-[72px] mb-4">
              f4rmhouse
            </h1>
            <p className="text-center text-2xl text-neutral-400">the browser-native MCP client.</p>
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
            <div className="rounded-lg max-w-[980px] h-[75vh] mx-auto relative overflow-hidden">
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
        <div className="col-span-1 mt-[20vh]">
            <h1 className="text-center text-6xl mt-[40px] font-bold">Our features</h1>
          </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[70vw] mx-auto gap-0 rounded-md">
          <FeatureSection
            title="Safe"
            description="f4rmhouse keeps your data private and secure."
            videoSrc="/example_workflow.mov"
            imageUrl="https://f4-public.s3.eu-central-1.amazonaws.com/artifacts/edbb9f2b-0e4e-4238-9f42-fbb1892d2abc.jpg"
          />
          <FeatureSection
            title="Easy"
            description="So simple you already know how to use it."
            videoSrc="/store_demo.mov"
            imageUrl="https://f4-public.s3.eu-central-1.amazonaws.com/artifacts/fdeebce8-9718-4502-9926-8a737940dd7c.jpg"
          />
          <FeatureSection
            title="Fast"
            description="Generation using LLMs hosted on ASIC chips."
            videoSrc="/speed_demo.mov"
            imageUrl="https://f4-public.s3.eu-central-1.amazonaws.com/artifacts/e5ab005a-7ca7-4b3c-9362-953046a37604.jpg"
          />
          <FeatureSection
            title="Expressive"
            description="Customize the UI to match your brand and your mood."
            videoSrc="/theme_demo.mov"
            imageUrl="https://f4-public.s3.eu-central-1.amazonaws.com/artifacts/5de5189a-4fce-489d-a8a0-4c3faf76a774.jpg"
          />
          <FeatureSection
            title="Social"
            description="Share f4rmers with a link so that friends can use them too."
            videoSrc="/theme_demo.mov"
            imageUrl="https://f4-public.s3.eu-central-1.amazonaws.com/artifacts/20d19bca-5d01-46d8-9b68-66537c49d462.jpg"
          />
          <FeatureSection
            title="Flexible"
            description="Choose any model you want and connect it with any tools."
            videoSrc="/theme_demo.mov"
            imageUrl="https://f4-public.s3.eu-central-1.amazonaws.com/artifacts/e0a4091b-7c8f-4a9a-ae80-ce4987f8c877.jpg"
          />
        </div>
        <div className="">
          <h1 className="text-center text-4xl sm:text-6xl mt-[200px] font-bold sm:w-[60vw] mx-auto">We value your privacy and do not store any personal data or chat histories.</h1>
          <p className="text-center text-2xl text-neutral-400 mt-5">You can keep full control of your entire AI stack by running f4rmhouse on your own infrastructure.</p>
          <img className="mx-auto mt-10" height={128} width={128} src="https://cdn-icons-png.flaticon.com/512/2111/2111540.png"/>
        </div>
        <div className="mt-[10px] mb-[200px] grid grid-cols-1 w-[40vw] mx-auto gap-5">
        </div>
        <div className="w-full">
          <h1 className="text-center text-4xl sm:text-6xl mt-[200px] font-bold sm:w-[60vw] mx-auto">How people use f4rmhouse</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 w-[80vw] mx-auto gap-5 mt-20">
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
            <div className="hidden sm:block">
              <p className="italic mt-10 text-xl">Learn faster and deeper.</p>
            </div>
            <div className="hidden sm:block">
              <p className="italic mt-10 text-xl">Present with confidence.</p>
            </div>
            <div className="hidden sm:block">
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
