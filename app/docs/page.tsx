import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../components/ThemeToggle";
import DocumentationItem from "../components/DocumentationItem";
import DocsIntroduction from "../components/DocsIntroduction";
import { Rocket, Share2, Wrench, Brain, Palette, Package } from "lucide-react";

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
            <DocsIntroduction />
            <h1 className="text-2xl mt-10 font-bold">Product documentation</h1>
            <DocumentationItem 
              title="Usage & Deployment" 
              description="Local deployments, cloud deployments in AWS/Azure/GCP, OAuth login, usage best practices." 
              icon={Rocket}
              href="/docs/usage"
            />
            <DocumentationItem 
              title="Agent distribution" 
              description="Share agents in WhatsApp, Telegram, Discord, Social media, or your secure internal infrastructure." 
              icon={Share2}
              href="/docs/distribution"
            />
            <DocumentationItem 
              title="Tool usage" 
              description="public tool repository, create your own private repository, add tools to agents, create/edit/publish tools." 
              icon={Wrench}
              href="/docs/tool_usage"
            />
            <DocumentationItem 
              title="Model selection and customization" 
              description="Use public models or local models, add custom models in the config." 
              icon={Brain}
              href="/docs/model_selection"
            />
            <DocumentationItem 
              title="Artifacts and Artifact extensions" 
              description="render tables/images/videos/music/html, create custom artifacts." 
              icon={Package}
              href="/docs/artifacts"
            />
            <DocumentationItem 
              title="Customizing design" 
              description="Customize the look and feel of your client using built-in design tools." 
              icon={Palette}
              href="/docs/design"
            />
        </div>
      </main>
    </div>
  );
}
