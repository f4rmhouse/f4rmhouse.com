import Image from "next/image";
import { ThemeToggle } from "./components/ThemeToggle";
import { FeatureSection } from "./components/FeatureSection";
import Link from "next/link";

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

      <main className="pt-[10%]">
        <div className="max-w-[980px] mx-auto">
          <div className="">
            <h1 className="text-center leading-18 text-[48px] md:text-[52px] lg:text-[72px] mb-8">
              Hi 👋 <br />I'm your unfair advantage.
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
              <video 
                controls
                autoPlay
                muted
                loop
                width="100%" 
                height="100%"
                className="rounded-lg object-cover shadow-lg"
              >
                <source src="/fetch_remote_data.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
              </div>
            </div>
          </div>
        </div>
        <FeatureSection
          title="Delightfully capable. Surprisingly simple."
          description=""
          backgroundColor="bg-[#f8d65b]"
          videoSrc="/example_workflow.mov"
        />
        <FeatureSection
          title="Servers you love. From a place you can trust."
          description=""
          backgroundColor="bg-[#f8d65b]"
          videoSrc="/store_demo.mov"
        />
        <FeatureSection
          title="Putting the flash in gemini-flash-2.5-v1-beta-6.0.1-public"
          description=""
          backgroundColor="bg-[#f8d65b]"
          videoSrc="/speed_demo.mov"
        />
        <FeatureSection
          title="DIY = Design it yourself"
          description=""
          backgroundColor="bg-[#f8d65b]"
          videoSrc="/theme_demo.mov"
        />
        <h1 className="text-center text-6xl mt-[200px]">"Just make a f4rmer do it"</h1>
        <p className="text-center text-2xl mt-5">MCPs are available for any use case you can imagine, and many more that you can't.</p>
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
