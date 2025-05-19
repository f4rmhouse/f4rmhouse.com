import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../../components/ThemeToggle";
import DocsSidebar from "../../components/DocsSidebar";
import CodeBlock from "../../components/CodeBlock";


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

      <div className="flex pt-12">
        {/* Sidebar Navigation */}
        <DocsSidebar currentPage="design" />

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8 pt-20">
          <div className="max-w-3xl mx-auto">
            
            <div className="mb-12">
              <h1 className="text-3xl font-bold mb-4" id="overview">Customizing Design</h1>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
