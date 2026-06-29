"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

type AccordionProps = React.ComponentPropsWithoutRef<"div"> & {
  type?: "single" | "multiple"
  collapsible?: boolean
  [key: string]: any
}

type AccordionItemProps = React.ComponentPropsWithoutRef<"details"> & {
  value?: string
  [key: string]: any
}

type AccordionTriggerProps = React.ComponentPropsWithoutRef<"summary"> & {
  [key: string]: any
}

type AccordionContentProps = React.ComponentPropsWithoutRef<"div"> & {
  [key: string]: any
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type, collapsible, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-2", className)} {...props} />
  )
)
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<HTMLDetailsElement, AccordionItemProps>(
  ({ className, value, ...props }, ref) => (
    <details ref={ref} className={cn("", className)} {...props} />
  )
)
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<HTMLElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <summary
      ref={ref as any}
      className={cn(
        "flex list-none items-center justify-between py-4 text-sm font-medium transition-all text-left",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-red-600 text-muted-foreground transition-transform duration-200" />
    </summary>
  )
)
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("overflow-hidden text-sm", className)} {...props}>
      <div className="pb-4 pt-0">{children}</div>
    </div>
  )
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
