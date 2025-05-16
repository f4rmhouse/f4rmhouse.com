import Link from 'next/link';
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DocumentationItemProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
}

export default function DocumentationItem({ title, description, icon: Icon, href = "/docs/usage" }: DocumentationItemProps) {
  return (
    <Link href={href} className="hover:underline border-b border-neutral-600 border-neutral-300">
      <h2 className="font-bold mt-5">
        {Icon && <Icon className="inline h-8 w-4 mr-1" />}
        {title}
      </h2>
      <p>{description}</p>
    </Link>
  );
}
