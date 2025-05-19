import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../../components/ThemeToggle";
import { Cloud, Server, Lock, Terminal, Cog } from "lucide-react";
import DocsSidebar from "../../components/DocsSidebar";
import CodeBlock, { InlineCode } from "../../components/CodeBlock";

export default function UsagePage() {
  return (
    <div className="min-h-screen text-foreground bg-background">
      <nav className="fixed p-0 m-0 w-full backdrop-blur-xl bg-background/70 top-0 z-50 border-b border-[#86868b]/10">
        <div className="max-w-[1200px] mx-auto px-5">
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
        <DocsSidebar currentPage="usage" />

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8 pt-20">
          <div className="max-w-3xl mx-auto">
            
            <div className="mb-12">
              <h1 className="text-3xl font-bold mb-4" id="overview">Usage & Deployment</h1>
              <p className="mb-6">Learn how to use and deploy f4rmhouse in various environments</p>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 mb-8">
                <p className="text-sm">This guide covers everything you need to know about deploying f4rmhouse in both local and cloud environments.</p>
              </div>
            </div>

            <section className="mb-12" id="installation">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Using the website</h2>
              <p className="mb-4">You can use f4rmhouse without any installation by using our website. Just visit <a href="https://app.f4rmhouse.com" className="text-blue-500 hover:underline">app.f4rmhouse.com</a> and start using it right away.</p>

              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Local installation</h2>
              <p className="mb-4">Getting started with f4rmhouse is easy. Follow these steps to install the platform using npm:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Node.js 16 or higher</li>
                  <li>npm or yarn package manager</li>
                  <li>Git</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Install from npm</h3>
                <CodeBlock className="mb-4">npm install f4rmhouse</CodeBlock>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Clone from GitHub</h3>
                <CodeBlock isMultiline={true}>{`git clone https://github.com/f4rmhouse/f4rmhouse.git
cd f4rmhouse
npm install`}</CodeBlock>
              </div>
            </section>

            <section className="mb-12" id="configuration">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Configuration</h2>
              <p className="mb-4">Configure f4rmhouse to match your specific requirements:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Basic Configuration</h3>
                <p className="mb-4">Create a <InlineCode>.env.local</InlineCode> file in your project root with the following structure:</p>
                <CodeBlock isMultiline={true}>{`AUTH_SECRET="" # Added by 'npx auth'. Read more: https://cli.authjs.dev
AUTH_GOOGLE_ID="" # if you want Google OAuth
AUTH_GOOGLE_SECRET="" # if you want Google OAuth
AUTH_GITHUB_ID="" # if you want GitHub OAuth
AUTH_GITHUB_SECRET="" # if you want Github OAuth
  
SECRET_KEY= 
AWS_ACCESS_KEY_ID= # (optional) If you want to use AWS 
AWS_SECRET_ACCESS_KEY= # (optional) If you want to use AQS
OPENAI_SECRET= 
ANTHROPIC_SECRET=""
WHATSAPP_ACCESS_TOKEN=''
SESSION_AUTH_TOKEN="" 
`}</CodeBlock>
              </div>
            </section>

            <section className="mb-12" id="local-deployment">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Local Deployment</h2>
              <p className="mb-4">Run f4rmhouse on your local machine for development and testing:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Development Server</h3>
                <CodeBlock>npm run dev</CodeBlock>
                <p className="mt-2 text-sm">This will start the development server at <InlineCode>http://localhost:3000</InlineCode></p>
              </div>
            </section>
            <section className="mb-12" id="docker-deployment">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Docker Deployment</h2>
              <p className="mb-4">Deploy f4rmhouse using Docker:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Docker installed on your system</li>
                  <li>Docker Compose installed on your system</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Build and Run</h3>
                <CodeBlock isMultiline={true}>{`docker compose up --build`}</CodeBlock>
                <p className="mt-2 text-sm">This will start the development server at <InlineCode>http://localhost:3000</InlineCode></p>
              </div>
            </section>
            <section className="mb-12" id="authentication">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Authentication</h2>
              <p className="mb-4">Set up OAuth login for your f4rmhouse deployment:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Supported Providers</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Google</li>
                  <li>GitHub</li>
                  <li>Microsoft</li>
                  <li>Custom OAuth providers</li>
                </ul>
              </div>
            </section>
            <section className="mb-12" id="usage">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Usage</h2>
              <p className="mb-4">Learn how to use f4rmhouse in your applications:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Basic Usage</h3>
                <p className="mb-4">Here's a simple example of how to use f4rmhouse:</p>
                <h3 className="text-lg font-semibold mb-2">Making your first agent</h3>
                <p>1. Click the plus in the toolbar</p>
                <p>2. Fill out the form</p>
                <p>3. Add tools to the agent</p>
                <p>4. Test it out</p>
                <p>5. Share your f4rmhouse with friends and collegues</p>
              </div>
            </section>

            <section className="mb-12" id="faq">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">How do I update f4rmhouse?</h3>
                  <p>Run <InlineCode>npm update f4rmhouse</InlineCode> to get the latest version.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Can I use f4rmhouse with existing projects?</h3>
                  <p>Yes, f4rmhouse can be integrated with existing projects. See the integration guide for details.</p>
                </div>
              </div>
            </section>

            <section id="troubleshooting">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Troubleshooting</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Common Issues</h3>
                  <p className="mb-4">Here are some common issues and their solutions:</p>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg p-4 mb-4">
                    <h4 className="font-medium mb-1">Connection Errors</h4>
                    <p className="text-sm">If you're experiencing connection errors, check your network settings and ensure your API key is valid.</p>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Performance Issues</h4>
                    <p className="text-sm">For performance issues, try increasing the allocated memory and optimize your database queries.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
      </main>
      </div>
    </div>
  );
}
