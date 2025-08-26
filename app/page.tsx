import Image from "next/image";
import { ThemeToggle } from "./components/ThemeToggle";
import { FeatureSection } from "./components/FeatureSection";
import { WorkflowExample } from "./components/WorkflowExample";
import { LazyImage } from "./components/LazyImage";
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
              <LazyImage 
                src="/fetch_remote_data.gif"
                alt="Fetch remote data demo"
                className="rounded-lg object-cover shadow-lg"
              />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[20vh] grid grid-cols-2 w-[70vw] mx-auto gap-0 bg-gradient-to-b from-blue-300 to-blue-400 rounded-md">
          <div className="col-span-2">
            <h1 className="text-center text-6xl mt-[40px] font-bold">Our features</h1>
            <p className="text-center text-2xl">A general purpose, non-technical and easy to use MCP client.</p>
          </div>
          <FeatureSection
            title="Safe authentication and authorization using MCP standards."
            description=""
            backgroundColor="bg-[#f8d65b]"
            videoSrc="/example_workflow.mov"
          />
          <FeatureSection
            title="Easy MCP integration into whatever LLM you prefer."
            description=""
            backgroundColor="bg-[#f8d65b]"
            videoSrc="/store_demo.mov"
          />
          <FeatureSection
            title="Fast generation using LLMs hosted on ASIC chips."
            description=""
            backgroundColor="bg-[#f8d65b]"
            videoSrc="/speed_demo.mov"
          />
          <FeatureSection
            title="Customize the UI to match your brand and your mood."
            description=""
            backgroundColor="bg-[#f8d65b]"
            videoSrc="/theme_demo.mov"
          />
        </div>
        <h1 className="text-center text-6xl mt-[200px] font-bold w-[60vw] mx-auto">This lets you make automations that save you thousand.</h1>
        <div className="mt-[10px] mb-[200px] grid grid-cols-1 w-[40vw] mx-auto gap-5">
          <WorkflowExample
            description="Create professional ads that capture attention"
            img="/ad_example_tt.gif"
            costComparison="Copywriters, marketing photographers, models"
            savings="$500 - $1000"
          />
          <WorkflowExample
            description="Analyze and create legal documents."
            img="/legal_example.gif"
            costComparison="Paralegal, lawyers"
            savings="$1000 - $5000"
          />
          <WorkflowExample
            description="Collect and analyze business data to get unprecedented insights."
            img="/fetch_remote_data.gif"
            costComparison="Consultants, data scientists, accountants"
            savings="$500 - $1000"
          />
          <WorkflowExample
            description="Create visualizations and other deliverables that you can share with your teams."
            img="/ad_example_tt.gif"
            costComparison="Statistician, data scientists"
            savings="$50 - $100"
          />
        </div>
      </main>
    </div>
  );
}
