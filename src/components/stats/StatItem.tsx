import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatItemProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  loading: boolean;
  error: boolean;
}

export function StatItem({ icon: Icon, label, value, loading, error }: StatItemProps) {
  return (
    <div className="flex items-center text-[#2ec62e] gap-2">
      <Icon className="h-4 w-4" />
      <p>
        {loading ? 'Loading...' : 
         error ? `${label}: Unavailable` :
         `${label}: ${value}`}
      </p>
    </div>
  );
}