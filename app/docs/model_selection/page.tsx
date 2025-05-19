import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../../components/ThemeToggle";
import { Brain, Cpu, Settings, Server, Cloud, Zap } from "lucide-react";
import DocsSidebar from "../../components/DocsSidebar";
import CodeBlock, { InlineCode } from "../../components/CodeBlock";


export default function ModelSelectionPage() {
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
        <DocsSidebar currentPage="model_selection" />

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8 pt-20">
          <div className="max-w-3xl mx-auto">
            
            <div className="mb-12">
              <h1 className="text-3xl font-bold mb-4" id="overview">Model Selection & Customization</h1>
              <p className="mb-6">Learn how to select and customize AI models for your f4rmhouse agents</p>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 mb-8">
                <p className="text-sm">This guide covers how to choose the right AI models for your agents and customize their behavior to suit your specific needs.</p>
              </div>
            </div>

            <section className="mb-12" id="available-models">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Available Models</h2>
              <p className="mb-4">f4rmhouse supports a variety of AI models from different providers:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">OpenAI Models</h3>
                <p className="mb-4">f4rmhouse supports the following OpenAI models:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>GPT-4o</strong> - Latest and most capable model for complex tasks</li>
                  <li><strong>GPT-4</strong> - Advanced reasoning and instruction following</li>
                  <li><strong>GPT-3.5 Turbo</strong> - Fast and cost-effective for simpler tasks</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Anthropic Models</h3>
                <p className="mb-4">f4rmhouse integrates with Anthropic's Claude models:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Claude 3 Opus</strong> - Most powerful Claude model for complex reasoning</li>
                  <li><strong>Claude 3 Sonnet</strong> - Balanced performance and efficiency</li>
                  <li><strong>Claude 3 Haiku</strong> - Fastest Claude model for quick responses</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Open Source Models</h3>
                <p className="mb-4">f4rmhouse also supports popular open source models:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Llama 3</strong> - Meta's latest open source model</li>
                  <li><strong>Mistral</strong> - Efficient and powerful open source model</li>
                  <li><strong>Falcon</strong> - TII's open source model</li>
                </ul>
              </div>
            </section>

            <section className="mb-12" id="model-selection">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Selecting Models</h2>
              <p className="mb-4">Choose the right model for your agent based on your specific needs:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Default Model Selection</h3>
                <p className="mb-4">To select a model when creating a new agent:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Navigate to the "Create Agent" page</li>
                  <li>In the "Model" section, select your preferred model from the dropdown</li>
                  <li>The interface will show estimated costs and capabilities for each model</li>
                </ol>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Changing Models for Existing Agents</h3>
                <p className="mb-4">To change the model for an existing agent:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open the agent in the f4rmhouse dashboard</li>
                  <li>Click on "Settings" in the sidebar</li>
                  <li>Navigate to the "Model" tab</li>
                  <li>Select a new model from the dropdown</li>
                  <li>Click "Save Changes" to update the agent</li>
                </ol>
              </div>
            </section>

            <section className="mb-12" id="custom-models">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Using Custom Models</h2>
              <p className="mb-4">f4rmhouse allows you to use your own custom models or connect to self-hosted models:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Self-Hosted Models</h3>
                <p className="mb-4">To connect f4rmhouse to a self-hosted model:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Set up your model server with an OpenAI-compatible API</li>
                  <li>Enter the model details including the API endpoint</li>
                </ol>
                <CodeBlock isMultiline={true}>{`// Example configuration in .env file
CUSTOM_MODEL_ENDPOINT=http://your-model-server:8000/v1
CUSTOM_MODEL_KEY=your-api-key`}</CodeBlock>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Fine-Tuned Models</h3>
                <p className="mb-4">If you have fine-tuned a model with OpenAI or another provider:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Select "Fine-tuned Model" as the model type</li>
                  <li>Enter your model ID (e.g., ft:gpt-3.5-turbo:your-org:custom-name:1234)</li>
                  <li>Provide your API key for the model provider</li>
                </ol>
              </div>
            </section>

            <section className="mb-12" id="model-parameters">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Model Parameters</h2>
              <p className="mb-4">Customize how models behave by adjusting various parameters:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Common Parameters</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Temperature</strong> - Controls randomness (0.0-2.0). Lower values make responses more deterministic.</li>
                  <li><strong>Max Tokens</strong> - Maximum length of model responses.</li>
                  <li><strong>Top P</strong> - Controls diversity via nucleus sampling (0.0-1.0).</li>
                  <li><strong>Frequency Penalty</strong> - Reduces repetition of token sequences (-2.0 to 2.0).</li>
                  <li><strong>Presence Penalty</strong> - Encourages the model to talk about new topics (-2.0 to 2.0).</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Parameter Configuration</h3>
                <p className="mb-4">Configure model parameters in the f4rmhouse interface:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open your agent's settings</li>
                  <li>Navigate to the "Advanced" tab</li>
                  <li>Adjust the parameters as needed</li>
                  <li>Click "Save Changes" to apply</li>
                </ol>
                <CodeBlock isMultiline={true}>{`// Example model configuration in JSON
{
  "model": "gpt-4o",
  "parameters": {
    "temperature": 0.7,
    "max_tokens": 1000,
    "top_p": 0.95,
    "frequency_penalty": 0.5,
    "presence_penalty": 0.0
  }
}`}</CodeBlock>
              </div>
            </section>

            <section className="mb-12" id="model-customization">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Advanced Customization</h2>
              <p className="mb-4">Further customize your models with advanced techniques:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">System Prompts</h3>
                <p className="mb-4">Customize the system prompt to guide the model's behavior:</p>
                <CodeBlock isMultiline={true}>{`// Example system prompt
You are a helpful customer service assistant for F4rmhouse, a company that sells organic produce. 
Always be polite, concise, and accurate. If you don't know the answer to a question, 
direct the customer to email support@f4rmhouse.com rather than making up information.`}</CodeBlock>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Function Calling</h3>
                <p className="mb-4">Configure function calling capabilities for your models:</p>
                <CodeBlock isMultiline={true}>{`// Example function definition
{
  "name": "get_product_info",
  "description": "Get information about a product by its ID or name",
  "parameters": {
    "type": "object",
    "properties": {
      "product_id": {
        "type": "string",
        "description": "The ID or name of the product"
      }
    },
    "required": ["product_id"]
  }
}`}</CodeBlock>
              </div>
            </section>

            <section id="best-practices">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#86868b]/10">Best Practices</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Model Selection Tips</h3>
                  <p>Start with a smaller, more efficient model and only upgrade to more powerful models if needed. This helps control costs while ensuring adequate performance.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Parameter Optimization</h3>
                  <p>Test different parameter combinations to find the optimal settings for your specific use case. Small changes in temperature or max tokens can significantly impact model behavior.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cost Management</h3>
                  <p>Monitor usage and set up cost alerts to avoid unexpected charges. Consider implementing rate limiting for public-facing agents to prevent abuse.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
