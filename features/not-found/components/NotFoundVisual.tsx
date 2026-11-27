"use client";

import { MotionConfig, motion } from "motion/react";

/**
 * Calm systems-inspired route-trace animation for the 404 page.
 * Uses GPU-composited transform/opacity only and respects prefers-reduced-motion.
 */
export function NotFoundVisual() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-lg border border-border-subtle bg-surface-low p-6 md:p-8"
      >
        <div className="flex items-center justify-between font-mono text-small text-text-secondary">
          <span className="inline-flex items-center gap-2 uppercase tracking-[0.12em]">
            <span className="relative flex size-2">
              <motion.span
                animate={{ scale: [1, 1.8, 1], opacity: [0.75, 0, 0.75] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-primary"
              />
              <span className="relative size-2 rounded-full bg-primary" />
            </span>
            ROUTE TRACE
          </span>
          <span className="text-primary">404</span>
        </div>

        <div className="my-8 flex items-center justify-between gap-3 font-mono text-small">
          <div className="rounded-sm border border-border-subtle bg-surface-elevated px-3 py-2 text-text-primary shadow-soft">
            /
          </div>

          <div className="relative h-px flex-1 overflow-hidden bg-border-strong">
            <motion.div
              animate={{ x: ["-100%", "220%"] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full w-1/3 bg-primary"
            />
          </div>

          <motion.div
            animate={{ opacity: [1, 0.55, 1] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-sm border border-primary/40 bg-surface-elevated px-3 py-2 text-primary shadow-soft"
          >
            /???
          </motion.div>
        </div>

        <div className="flex items-center justify-between border-t border-border-subtle pt-4 font-mono text-small text-text-secondary">
          <span>ERR_ROUTE_NOT_FOUND</span>
          <span>HTTP 404</span>
        </div>
      </motion.div>
    </MotionConfig>
  );
}
