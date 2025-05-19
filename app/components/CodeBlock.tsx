"use client";
import React, { ReactNode, useState } from 'react';

interface CodeBlockProps {
  children: ReactNode;
  className?: string;
  isMultiline?: boolean;
}

// Helper function to format content with proper newlines
const formatContent = (content: ReactNode): ReactNode => {
  if (typeof content === 'string') {
    // Replace literal \n with actual newlines
    return content.split('\\n').join('\n');
  }
  return content;
};

export default function CodeBlock({ children, className = '', isMultiline = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    // Convert ReactNode to string
    const content = typeof children === 'string' 
      ? children 
      : children instanceof Array 
        ? children.join('\n') 
        : String(children);
    
    navigator.clipboard.writeText(content)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => console.error('Failed to copy text: ', err));
  };
  
  return (
    <div className={`bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-md p-4 relative ${className}`}>
      <button 
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
        aria-label="Copy code"
        title="Copy code"
      >
        {copied ? (
          <CheckIcon className="h-4 w-4 text-green-500" />
        ) : (
          <CopyIcon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
        )}
      </button>
      
      <div className="pr-8"> {/* Add padding to prevent text from going under the button */}
        {isMultiline ? (
          <pre className="text-sm overflow-x-auto whitespace-pre-wrap">{children}</pre>
        ) : (
          <code className="text-sm whitespace-pre-wrap">{formatContent(children)}</code>
        )}
      </div>
    </div>
  );
}

// SVG Icons
const CopyIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// For inline code snippets
export function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="bg-neutral-100 dark:bg-gray-800 text-white px-1 py-0.5 rounded">{children}</code>
  );
}
