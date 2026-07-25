"use client";

import Image from "next/image";
import { useState } from "react";

export type AppEntry = {
  id: string;
  name: string;
  icon: string;
  iconAlt: string;
  status?: string;
  description: string;
  highlights?: string[];
};

export function AppsAccordion({ apps }: { apps: AppEntry[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <ul className="divide-y divide-line border-y border-line">
      {apps.map((app) => {
        const isOpen = openId === app.id;

        return (
          <li key={app.id} className="app-item">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : app.id)}
              className="flex w-full items-center gap-4 py-4 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Image
                src={app.icon}
                alt={app.iconAlt}
                width={48}
                height={48}
                className="size-12 shrink-0 rounded-[12px] shadow-sm"
              />
              <span className="min-w-0 flex-1">
                <span className="block text-lg font-medium tracking-tight text-foreground">
                  {app.name}
                </span>
                {app.status ? (
                  <span className="mt-0.5 block text-sm text-muted">
                    {app.status}
                  </span>
                ) : null}
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className={`size-5 shrink-0 text-muted transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M5 7.5 10 12.5 15 7.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="pb-5 pl-16 pr-2">
                  <p className="max-w-prose text-[0.975rem] leading-relaxed text-muted">
                    {app.description}
                  </p>
                  {app.highlights && app.highlights.length > 0 ? (
                    <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                      {app.highlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
