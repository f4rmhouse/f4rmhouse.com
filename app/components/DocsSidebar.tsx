import React from 'react';
import Link from 'next/link';
import { Rocket, Share2, Wrench, Brain, Palette, Package } from 'lucide-react';

interface DocsSidebarProps {
  currentPage: string;
}

export default function DocsSidebar({ currentPage }: DocsSidebarProps) {
  return (
    <aside className="w-64 fixed h-screen overflow-y-auto border-r border-[#86868b]/10 dark:border-gray-800 pt-12 px-4 bg-white dark:bg-background">
      <div className="mb-6">
        <Link href="/docs" className="inline-flex items-center text-sm text-blue-500 hover:text-blue-700 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Documentation
        </Link>
      </div>
      
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Documentation</h3>
        <ul className="space-y-3">
          <li>
            <Link 
              href="/docs/usage" 
              className={`text-sm flex items-center py-1 hover:text-accent ${
                currentPage === 'usage' ? 'font-medium text-blue-500' : 'text-foreground'
              }`}
            >
              <Rocket className="w-4 h-4 mr-2" />
              Usage & Deployment
            </Link>
          </li>
          <li>
            <Link 
              href="/docs/distribution" 
              className={`text-sm flex items-center py-1 hover:text-accent ${
                currentPage === 'distribution' ? 'font-medium text-blue-500' : 'text-foreground'
              }`}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Agent Distribution
            </Link>
          </li>
          <li>
            <Link 
              href="/docs/tool_usage" 
              className={`text-sm flex items-center py-1 hover:text-accent ${
                currentPage === 'tool_usage' ? 'font-medium text-blue-500' : 'text-foreground'
              }`}
            >
              <Wrench className="w-4 h-4 mr-2" />
              Tool Usage
            </Link>
          </li>
          <li>
            <Link 
              href="/docs/model_selection" 
              className={`text-sm flex items-center py-1 hover:text-accent ${
                currentPage === 'model_selection' ? 'font-medium text-blue-500' : 'text-foreground'
              }`}
            >
              <Brain className="w-4 h-4 mr-2" />
              Model Selection
            </Link>
          </li>
          <li>
            <Link 
              href="/docs/artifacts" 
              className={`text-sm flex items-center py-1 hover:text-accent ${
                currentPage === 'artifacts' ? 'font-medium text-blue-500' : 'text-foreground'
              }`}
            >
              <Package className="w-4 h-4 mr-2" />
              Artifacts
            </Link>
          </li>
          <li>
            <Link 
              href="/docs/design" 
              className={`text-sm flex items-center py-1 hover:text-accent ${
                currentPage === 'design' ? 'font-medium text-blue-500' : 'text-foreground'
              }`}
            >
              <Palette className="w-4 h-4 mr-2" />
              Customizing Design
            </Link>
          </li>
        </ul>
      </div>
      
      {currentPage === 'usage' && (
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">On This Page</h3>
          <ul className="space-y-2">
            <li>
              <a href="#overview" className="text-sm block py-1 text-foreground hover:text-accent">
                Overview
              </a>
            </li>
            <li>
              <a href="#installation" className="text-sm block py-1 text-foreground hover:text-accent">
                Installation
              </a>
            </li>
            <li>
              <a href="#configuration" className="text-sm block py-1 text-foreground hover:text-accent">
                Configuration
              </a>
            </li>
            <li>
              <a href="#local-deployment" className="text-sm block py-1 text-foreground hover:text-accent">
                Local Deployment
              </a>
            </li>
            <li>
              <a href="#cloud-deployment" className="text-sm block py-1 text-foreground hover:text-accent">
                Cloud Deployment
              </a>
            </li>
            <li>
              <a href="#authentication" className="text-sm block py-1 text-foreground hover:text-accent">
                Authentication
              </a>
            </li>
            <li>
              <a href="#faq" className="text-sm block py-1 text-foreground hover:text-accent">
                FAQ
              </a>
            </li>
            <li>
              <a href="#troubleshooting" className="text-sm block py-1 text-foreground hover:text-accent">
                Troubleshooting
              </a>
            </li>
          </ul>
        </div>
      )}
    </aside>
  );
}
