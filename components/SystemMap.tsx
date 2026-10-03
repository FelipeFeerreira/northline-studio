"use client";
import { useState } from "react";
const nodes = [
  {
    name: "Website",
    icon: "↗",
    code: "01 / CAPTURE",
    description:
      "A considered front door. Turn an initial visit into a structured inquiry.",
    payload: '{ "event": "inquiry.created" }',
  },
  {
    name: "AI",
    icon: "✳",
    code: "02 / UNDERSTAND",
    description:
      "An assistant collects context and helps visitors define their next project.",
    payload: '{ "intent": "custom_system" }',
  },
  {
    name: "Automation",
    icon: "⌁",
    code: "03 / ORCHESTRATE",
    description:
      "Validate the request and route information through a defined workflow.",
    payload: '{ "workflow": "qualify_lead" }',
  },
  {
    name: "CRM",
    icon: "▤",
    code: "04 / ORGANIZE",
    description:
      "An integration could keep qualified opportunities organized in your CRM.",
    payload: '{ "stage": "discovery" }',
  },
  {
    name: "Dashboard",
    icon: "▥",
    code: "05 / SEE THE BIG PICTURE",
    description:
      "Bring activity, leads, and workflow status into one useful interface.",
    payload: '{ "view": "operations" }',
  },
];
export default function SystemMap() {
  const [active, setActive] = useState(2);
  const node = nodes[active];
  return (
    <div
      className="system-map"
      aria-label="Interactive connected system demonstration"
    >
      <div className="map-top">
        <span>
          <span className="status-dot" /> SYSTEM ARCHITECTURE
        </span>
        <span>DEMO / 01</span>
      </div>
      <div className="map-canvas">
        <div className="map-orbit orbit-one" />
        <div className="map-orbit orbit-two" />
        <svg className="map-lines" viewBox="0 0 500 350" aria-hidden="true">
          <path
            d="M100 82L250 175L400 82M100 270L250 175L400 270"
            fill="none"
            stroke="currentColor"
            strokeDasharray="5 6"
          />
        </svg>
        {nodes.map((n, i) => (
          <button
            key={n.name}
            className={`map-node node-${i} ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
          >
            <span className="node-symbol" aria-hidden="true">
              {n.icon}
            </span>
            <span>{n.name}</span>
          </button>
        ))}
        <span className="map-coordinate">NL / CONNECTED BY DESIGN</span>
      </div>
      <div className="map-detail" aria-live="polite">
        <div className="flex items-center justify-between gap-3">
          <span className="eyebrow">{node.code}</span>
          <span className="map-counter">0{active + 1} / 05</span>
        </div>
        <p>{node.description}</p>
        <code>{node.payload}</code>
      </div>
      <p className="demo-disclaimer">
        Explore each node. Illustrative flow; no external tools are connected.
      </p>
    </div>
  );
}
