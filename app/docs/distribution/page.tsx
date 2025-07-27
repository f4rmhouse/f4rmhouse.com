import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../../components/ThemeToggle";
import { Share2, MessageCircle, Globe, Lock } from "lucide-react";
import DocsSidebar from "../../components/DocsSidebar";
import CodeBlock, { InlineCode } from "../../components/CodeBlock";

export default function DistributionPage() {
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
        <DocsSidebar currentPage="distribution" />

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8 pt-20">
          <div className="max-w-3xl mx-auto">
            
            <div className="mb-12">
              <h1 className="text-3xl font-bold mb-4" id="overview">Agent Distribution</h1>
              <p className="mb-6">Share your agents across various platforms and with your team</p>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 mb-8">
                <p className="text-sm">This guide covers how to distribute your f4rmhouse agents through different channels.</p>
              </div>
            </div>

            <section className="mb-12" id="sharing-options">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Sharing Options</h2>
              <p className="mb-4">f4rmhouse provides multiple ways to share your agents:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Public Link Sharing</h3>
                <p className="mb-4">Generate a public link that anyone can use to access your agent:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open your f4rmhouse dashboard</li>
                  <li>Open the "details" sidebar by moving your cursor all the way to the right of the screen or by pressing cmd/ctrl + M</li>
                  <li>Click on "Generate link"</li>
                  <li>Copy the generated link to share with others</li>
                </ol>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Team Sharing (Experimental)</h3>
                <p className="mb-4">Share agents with specific team members or groups:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open your f4rmhouse dashboard</li>
                  <li>Click the "Share" button in the top-right corner</li>
                  <li>Select "Team Sharing" tab</li>
                  <li>Enter email addresses of team members or select groups</li>
                  <li>Set appropriate permission levels (View, Edit, Admin)</li>
                  <li>Click "Share" to send invitations</li>
                </ol>
              </div>
            </section>

            <section className="mb-12" id="messaging-platforms">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Messaging Platforms</h2>
              <p className="mb-4">Integrate your agents with popular messaging platforms:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">WhatsApp Integration</h3>
                <p className="mb-4">Connect your agent to WhatsApp:</p>
                <CodeBlock isMultiline={true}>{`// Example WhatsApp integration code
const whatsappConfig = {
  phoneNumber: "your-whatsapp-number",
  apiKey: "your-api-key"
};

f4rmhouse.connect("whatsapp", whatsappConfig);`}</CodeBlock>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Telegram Bot</h3>
                <p className="mb-4">Deploy your agent as a Telegram bot:</p>
                <CodeBlock isMultiline={true}>{`// Example Telegram bot setup
const telegramConfig = {
  botToken: "your-telegram-bot-token",
  webhookUrl: "https://your-webhook-url.com/telegram"
};

f4rmhouse.connect("telegram", telegramConfig);`}</CodeBlock>
              </div>
            </section>

            <section className="mb-12" id="web-embedding">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Web Embedding</h2>
              <p className="mb-4">Embed your agents directly into websites:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">iFrame Embedding</h3>
                <p className="mb-4">Use this HTML code to embed your agent in an iFrame:</p>
                <CodeBlock isMultiline={true}>{`<iframe 
  src="https://app.f4rmhouse.com/embed/YOUR_AGENT_ID" 
  width="400" 
  height="600" 
  frameborder="0"
  allow="microphone; camera"
></iframe>`}</CodeBlock>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">JavaScript Widget</h3>
                <p className="mb-4">Add a chat widget to your website with this JavaScript snippet:</p>
                <CodeBlock isMultiline={true}>{`<script>
  (function(f,a,r,m) {
    f.f4rmhouseConfig = { agentId: 'YOUR_AGENT_ID' };
    var s = a.createElement('script');
    s.src = 'https://app.f4rmhouse.com/widget.js';
    s.async = true;
    a.head.appendChild(s);
  })(window, document);
</script>`}</CodeBlock>
              </div>
            </section>

            <section className="mb-12" id="security">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Security & Access Control</h2>
              <p className="mb-4">Manage who can access your distributed agents:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Access Restrictions (Coming soon)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Domain restrictions - limit access to specific domains</li>
                  <li>IP restrictions - limit access to specific IP addresses or ranges</li>
                  <li>User authentication - require users to log in before accessing agents</li>
                  <li>Usage limits - set maximum usage quotas per user or organization</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Monitoring Usage (Coming soon)</h3>
                <p className="mb-4">Track how your agents are being used:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Usage analytics dashboard</li>
                  <li>Conversation history and logs</li>
                  <li>Performance metrics and response times</li>
                  <li>User feedback collection</li>
                </ul>
              </div>
            </section>

            <section id="best-practices">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Best Practices</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Testing Before Distribution</h3>
                  <p>Always thoroughly test your agents in a controlled environment before distributing them widely. This helps identify and fix any issues with responses, tool usage, or performance.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Versioning</h3>
                  <p>Use version control for your agents to track changes and allow rolling back to previous versions if needed. This is especially important for agents deployed in production environments.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                  <p>Provide clear documentation for users about what your agent can do, its limitations, and how to interact with it effectively. This improves user experience and reduces support requests.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
