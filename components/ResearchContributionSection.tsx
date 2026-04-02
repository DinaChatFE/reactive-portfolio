"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  FileText,
  Microscope,
  Presentation,
  Sparkles,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

type ContributionType = "Publication" | "Research" | "Talk";

interface ContributionItem {
  id: string;
  title: string;
  type: ContributionType;
  venue: string;
  year: string;
  summary: string;
  impactLabel: string;
  impactValue: string;
  tags: string[];
}

const contributions: ContributionItem[] = [
  {
    id: "graph-neural-learning",
    title: "Graph Neural Signals for Regional Mobility Forecasting",
    type: "Research",
    venue: "Data Intelligence Lab, RUPP",
    year: "2025",
    summary:
      "Designed a spatiotemporal modeling pipeline that improved traffic flow prediction and enabled faster what-if simulation for policy experiments.",
    impactLabel: "Prediction Uplift",
    impactValue: "+18%",
    tags: ["Graph ML", "Time Series", "Python"],
  },
  {
    id: "visual-analytics-paper",
    title: "Visual Analytics Patterns for Human-Centered Dashboards",
    type: "Publication",
    venue: "SEA Applied Computing Journal",
    year: "2024",
    summary:
      "Co-authored an editorial-style framework for blending clarity, accessibility, and storytelling in data-heavy interfaces.",
    impactLabel: "Citation Growth",
    impactValue: "42",
    tags: ["HCI", "UX Research", "Data Viz"],
  },
  {
    id: "ai-engineering-talk",
    title: "From Prototype to Product: Responsible AI in Practice",
    type: "Talk",
    venue: "Cambodia Tech Summit",
    year: "2026",
    summary:
      "Delivered a practitioner keynote on guardrails, evaluation loops, and stakeholder communication in production AI teams.",
    impactLabel: "Attendees Reached",
    impactValue: "700+",
    tags: ["AI Ops", "Product", "Governance"],
  },
  {
    id: "multimodal-detection-study",
    title: "Multimodal Defect Detection for Smart Manufacturing",
    type: "Research",
    venue: "Industrial AI Collaborative",
    year: "2026",
    summary:
      "Built a late-fusion approach combining vision and sensor streams to reduce false positives in quality inspection pipelines.",
    impactLabel: "False Positives",
    impactValue: "-27%",
    tags: ["Computer Vision", "MLOps", "Edge"],
  },
];

const filters: Array<"All" | ContributionType> = [
  "All",
  "Research",
  "Publication",
  "Talk",
];

function getTypeIcon(type: ContributionType) {
  if (type === "Research") {
    return <Microscope className="h-4 w-4" />;
  }

  if (type === "Publication") {
    return <FileText className="h-4 w-4" />;
  }

  return <Presentation className="h-4 w-4" />;
}

export function ResearchContributionSection() {
  const [activeFilter, setActiveFilter] = useState<"All" | ContributionType>("All");
  const [activeId, setActiveId] = useState(contributions[0]?.id ?? "");

  const visibleContributions = useMemo(() => {
    if (activeFilter === "All") {
      return contributions;
    }

    return contributions.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  const resolvedActiveId = visibleContributions.some((item) => item.id === activeId)
    ? activeId
    : (visibleContributions[0]?.id ?? "");

  const activeContribution =
    visibleContributions.find((item) => item.id === resolvedActiveId) ?? visibleContributions[0];

  return (
    <section id="research" className="w-full mt-24 mx-auto max-w-6xl px-6 scroll-mt-32">
      <FadeIn delay={0.25}>
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Research Contribution
            </p>
            <h2 className="text-4xl font-display font-bold tracking-tight sm:text-5xl">
              Building Knowledge Through Applied Work
            </h2>
          </div>
          <p className="max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed">
            Selected studies, publications, and speaking sessions where I transform technical exploration into practical outcomes for teams and communities.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.35}>
        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`relative overflow-hidden rounded-full border px-5 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "border-primary/40 text-primary"
                    : "border-white/10 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="research-filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/15"
                    transition={{ type: "spring", stiffness: 280, damping: 26 }}
                  />
                )}
                {filter}
              </button>
            );
          })}
        </div>
      </FadeIn>

      <div className="grid gap-6 overflow-visible lg:grid-cols-[1.45fr_1fr]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid gap-4 px-1"
          >
            {visibleContributions.map((item, index) => {
              const selected = item.id === resolvedActiveId;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActiveId(item.id)}
                  onFocus={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.35 }}
                  whileHover={{ y: -4 }}
                  className={`group relative overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 ${
                    selected
                      ? "border-primary/40 bg-surface-container shadow-[0_14px_40px_-24px_rgba(255,144,104,0.65)]"
                      : "border-white/10 bg-surface-container-low hover:border-primary/35 hover:bg-surface-container"
                  }`}
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/70 px-3 py-1 text-[10px] font-bold text-secondary-foreground">
                      {getTypeIcon(item.type)}
                      {item.type}
                    </span>
                    <span>{item.venue}</span>
                    <span className="text-primary">{item.year}</span>
                  </div>

                  <h3 className="pr-10 text-2xl font-display font-semibold leading-tight transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-wider text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-primary/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <FadeIn delay={0.45}>
          <div className="sticky top-32 overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-b from-primary/10 to-surface-container-low p-6 sm:p-7">
            {activeContribution ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeContribution.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                      Impact Snapshot
                    </p>
                    <h3 className="text-2xl font-display font-semibold leading-tight">
                      {activeContribution.title}
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {activeContribution.impactLabel}
                    </p>
                    <motion.p
                      className="mt-2 text-4xl font-display font-bold text-primary"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35 }}
                    >
                      {activeContribution.impactValue}
                    </motion.p>

                    <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        key={activeContribution.id + "-bar"}
                        initial={{ width: 0 }}
                        animate={{ width: "78%" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-tertiary"
                      />
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {activeContribution.summary}
                  </p>
                </motion.div>
              </AnimatePresence>
            ) : (
              <p className="text-sm text-muted-foreground">No contribution available for this filter.</p>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
