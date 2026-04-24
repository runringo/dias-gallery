'use client';

import { useState } from 'react';

interface TabProps {
  overview: string;
  brief: string;
  processLog: { date: string; task: string }[];
}

export default function ProjectTabs({ overview, brief, processLog }: TabProps) {
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'THE_BRIEF' | 'PROCESS_LOG'>('OVERVIEW');

  const tabs = ['OVERVIEW', 'THE_BRIEF', 'PROCESS_LOG'] as const;

  return (
    <div className="max-w-2xl">
      <div className="flex gap-8 border-b border-white/10 mb-8 font-mono text-[10px] tracking-widest overflow-x-auto whitespace-nowrap scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 transition-all relative ${
              activeTab === tab ? 'text-accent' : 'text-white/30 hover:text-white/60'
            }`}
          >
            {tab}_
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"></span>
            )}
          </button>
        ))}
      </div>

      <div className="min-h-[300px] animate-in fade-in duration-500">
        {activeTab === 'OVERVIEW' && (
          <p className="text-xl text-white/70 leading-relaxed font-light">
            {overview}
          </p>
        )}

        {activeTab === 'THE_BRIEF' && (
          <p className="text-xl text-white/70 leading-relaxed font-light">
            {brief}
          </p>
        )}

        {activeTab === 'PROCESS_LOG' && (
          <div className="space-y-4 font-mono text-xs">
            {processLog.map((log, i) => (
              <div key={i} className="flex gap-6 border-b border-white/5 pb-4 group">
                <span className="text-white/20 group-hover:text-accent transition-colors">[{log.date}]</span>
                <span className="text-white/60 group-hover:text-white transition-colors">{log.task}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
