import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../../components/ThemeToggle";
import { Wrench, Database, Code, Settings, Plus, Download } from "lucide-react";
import DocsSidebar from "../../components/DocsSidebar";
import CodeBlock, { InlineCode } from "../../components/CodeBlock";


export default function ToolUsagePage() {
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
        <DocsSidebar currentPage="tool_usage" />

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8 pt-20">
          <div className="max-w-3xl mx-auto">
            
            <div className="mb-12">
              <h1 className="text-3xl font-bold mb-4" id="overview">Tool Usage</h1>
              <p className="mb-6">Learn how to use and create tools for your f4rmhouse agents</p>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 mb-8">
                <p className="text-sm">This guide covers everything you need to know about using tools with f4rmhouse agents, from public tools to creating your own custom tools.</p>
              </div>
            </div>

            <section className="mb-12" id="public-tools">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Public Tool Repository</h2>
              <p className="mb-4">f4rmhouse provides a library of pre-built tools that you can add to your agents:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Browsing Available Tools</h3>
                <p className="mb-4">To browse the public tool repository:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Log in to your f4rmhouse dashboard</li>
                  <li>Navigate to the "Tools" section in the sidebar</li>
                  <li>Click on "Public Repository"</li>
                  <li>Browse tools by category or use the search function</li>
                </ol>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Adding Tools to Your Agent</h3>
                <p className="mb-4">To add a public tool to your agent:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Find the tool you want to add in the repository</li>
                  <li>Click the "Add to Agent" button</li>
                  <li>Select the agent you want to add the tool to</li>
                  <li>Configure any required parameters for the tool</li>
                  <li>Click "Save" to add the tool to your agent</li>
                </ol>
              </div>
            </section>

            <section className="mb-12" id="private-repository">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Private Tool Repository</h2>
              <p className="mb-4">Create and manage your own private tool repository for your organization:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Setting Up a Private Repository</h3>
                <p className="mb-4">To create a private tool repository:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Navigate to the "Tools" section in the sidebar</li>
                  <li>Click on "Private Repository"</li>
                  <li>Click "Create Repository" if you don't have one yet</li>
                  <li>Enter a name and description for your repository</li>
                  <li>Set access permissions for team members</li>
                  <li>Click "Create" to set up your private repository</li>
                </ol>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Managing Private Tools</h3>
                <p className="mb-4">Once your private repository is set up, you can:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Add new tools to the repository</li>
                  <li>Edit existing tools</li>
                  <li>Control access permissions for specific tools</li>
                  <li>Version and track changes to tools</li>
                  <li>Share tools with specific teams or users</li>
                </ul>
              </div>
            </section>

            <section className="mb-12" id="creating-tools">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Creating Custom Tools</h2>
              <p className="mb-4">Build your own custom tools for f4rmhouse agents:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Tool Structure</h3>
                <p className="mb-4">A basic f4rmhouse tool consists of:</p>
                <CodeBlock isMultiline={true}>{`{
  "name": "example-tool",
  "displayName": "Example Tool",
  "description": "This is an example tool that demonstrates the structure",
  "version": "1.0.0",
  "parameters": [
    {
      "name": "input",
      "type": "string",
      "description": "Input parameter for the tool",
      "required": true
    }
  ],
  "returns": {
    "type": "string",
    "description": "Output from the tool"
  },
  "function": "async (params) => {\n  // Tool implementation goes here\n  return \"Result: \" + params.input;\n}"
}`}</CodeBlock>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Creating a Tool in the UI</h3>
                <p className="mb-4">To create a new tool using the f4rmhouse UI:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Navigate to the "Tools" section</li>
                  <li>Click "Create New Tool"</li>
                  <li>Fill out the tool details (name, description, etc.)</li>
                  <li>Define input parameters</li>
                  <li>Write the tool implementation code</li>
                  <li>Test the tool functionality</li>
                  <li>Save and publish the tool</li>
                </ol>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Tool API Integration</h3>
                <p className="mb-4">Example of a tool that integrates with an external API:</p>
                <CodeBlock isMultiline={true}>{`{
  "name": "weather-lookup",
  "displayName": "Weather Lookup",
  "description": "Get current weather for a location",
  "version": "1.0.0",
  "parameters": [
    {
      "name": "location",
      "type": "string",
      "description": "City name or zip code",
      "required": true
    }
  ],
  "returns": {
    "type": "object",
    "description": "Weather information"
  },
  "function": "async (params) => {\n  const response = await fetch(\"https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=\" + params.location);\n  const data = await response.json();\n  return {\n    temperature: data.current.temp_c,\n    condition: data.current.condition.text,\n    humidity: data.current.humidity\n  };\n}"
}`}</CodeBlock>
              </div>
            </section>

            <section className="mb-12" id="testing-tools">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Testing and Debugging Tools</h2>
              <p className="mb-4">Ensure your tools work correctly before deploying them:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Tool Testing Interface</h3>
                <p className="mb-4">f4rmhouse provides a built-in testing interface for tools:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open the tool in edit mode</li>
                  <li>Click the "Test" tab</li>
                  <li>Enter test values for all parameters</li>
                  <li>Click "Run Test" to execute the tool</li>
                  <li>View the output and any error messages</li>
                  <li>Refine your tool based on test results</li>
                </ol>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Debugging Tips</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use console.log statements in your tool code (visible in the test output)</li>
                  <li>Add proper error handling to catch and report issues</li>
                  <li>Test edge cases with different input values</li>
                  <li>Verify API responses with external tools before integration</li>
                </ul>
              </div>
            </section>

            <section id="best-practices">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Tool Best Practices</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Security Considerations</h3>
                  <p>Never hardcode sensitive information like API keys directly in your tool code. Use environment variables or the f4rmhouse secrets manager instead.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Performance Optimization</h3>
                  <p>Keep your tools efficient by minimizing API calls, implementing caching where appropriate, and handling errors gracefully to prevent agent failures.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                  <p>Always provide clear documentation for your tools, including detailed descriptions of parameters, expected outputs, and example usage scenarios.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
