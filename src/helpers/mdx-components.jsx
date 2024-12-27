import CodeSnippet from "@/components/CodeSnippet";
import dynamic from "next/dynamic";

export const COMPONENT_MAP = {
  pre: CodeSnippet,
  DivisionGroupsDemo: dynamic(() => import("@/components/DivisionGroupsDemo")),
  CircularColorsDemo: dynamic(() => import("@/components/CircularColorsDemo")),
}