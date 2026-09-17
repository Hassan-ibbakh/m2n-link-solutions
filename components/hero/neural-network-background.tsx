"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type NodePoint = { id: string; x: number; y: number; radius: number; core?: boolean };
type Connection = { from: string; to: string; emphasis?: boolean };

const nodes: NodePoint[] = [
  { id: "core", x: 300, y: 250, radius: 18, core: true },
  { id: "north", x: 268, y: 104, radius: 6 },
  { id: "east", x: 466, y: 174, radius: 8 },
  { id: "south-east", x: 432, y: 372, radius: 6 },
  { id: "south", x: 264, y: 414, radius: 8 },
  { id: "west", x: 92, y: 304, radius: 7 },
  { id: "north-west", x: 126, y: 150, radius: 5 },
  { id: "far-east", x: 548, y: 286, radius: 5 },
  { id: "far-south", x: 368, y: 458, radius: 4 },
  { id: "inner-west", x: 188, y: 232, radius: 4 },
];

const connections: Connection[] = [
  { from: "core", to: "north", emphasis: true },
  { from: "core", to: "east", emphasis: true },
  { from: "core", to: "south-east" },
  { from: "core", to: "south" },
  { from: "core", to: "west", emphasis: true },
  { from: "core", to: "inner-west" },
  { from: "north-west", to: "north" },
  { from: "north-west", to: "west" },
  { from: "north", to: "east" },
  { from: "east", to: "far-east" },
  { from: "far-east", to: "south-east" },
  { from: "south-east", to: "far-south" },
  { from: "far-south", to: "south" },
  { from: "south", to: "west" },
];

const particles = [
  { connection: 0, delay: 0 },
  { connection: 1, delay: 1.4 },
  { connection: 4, delay: 2.5 },
  { connection: 10, delay: 1.8 },
  { connection: 12, delay: 3.2 },
];

function getNode(id: string) {
  return nodes.find((node) => node.id === id) ?? nodes[0];
}

export function NeuralNetworkBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.15 });
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 65, damping: 22, mass: 0.7 });
  const y = useSpring(pointerY, { stiffness: 65, damping: 22, mass: 0.7 });

  useEffect(() => {
    if (reduceMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || window.matchMedia("(pointer: coarse)").matches) return;
      const bounds = containerRef.current?.getBoundingClientRect();
      if (!bounds || event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) return;
      pointerX.set((event.clientX - bounds.left - bounds.width / 2) / 34);
      pointerY.set((event.clientY - bounds.top - bounds.height / 2) / 34);
    };
    const resetPointer = () => {
      pointerX.set(0);
      pointerY.set(0);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", resetPointer);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", resetPointer);
    };
  }, [pointerX, pointerY, reduceMotion]);

  const active = isInView && !reduceMotion;

  return <div ref={containerRef} aria-hidden="true" className="neural-network-background">
    <motion.div className="neural-network-parallax" style={reduceMotion ? undefined : { x, y }}>
      <svg viewBox="0 0 600 500" role="presentation">
        <defs>
          <radialGradient id="neural-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ef735b" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ef735b" stopOpacity="0.12" />
          </radialGradient>
        </defs>
        <motion.g className="neural-orbits" animate={active ? { rotate: 360 } : undefined} transition={{ duration: 48, ease: "linear", repeat: Infinity }} style={{ transformOrigin: "300px 250px" }}>
          <ellipse cx="300" cy="250" rx="244" ry="174" />
          <ellipse cx="300" cy="250" rx="196" ry="128" transform="rotate(30 300 250)" />
          <ellipse cx="300" cy="250" rx="150" ry="218" transform="rotate(-48 300 250)" />
        </motion.g>
        <motion.g className="neural-system" animate={active ? { rotate: [0, 360] } : undefined} transition={{ duration: 90, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "300px 250px" }}>
          <g className="neural-connections">
            {connections.map((connection, index) => {
              const from = getNode(connection.from);
              const to = getNode(connection.to);
              return <motion.line key={`${connection.from}-${connection.to}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} animate={active ? { opacity: connection.emphasis ? [0.18, 0.42, 0.18] : [0.1, 0.26, 0.1] } : undefined} transition={{ duration: 3.8 + (index % 3), delay: index * 0.12, repeat: Infinity, ease: "easeInOut" }} />;
            })}
          </g>
          <g className="neural-particles">
            {particles.map((particle) => {
              const connection = connections[particle.connection];
              const from = getNode(connection.from);
              const to = getNode(connection.to);
              return <motion.circle key={`${particle.connection}-${particle.delay}`} r="3.2" cx={from.x} cy={from.y} animate={active ? { cx: [from.x, to.x], cy: [from.y, to.y], opacity: [0, 1, 0] } : { opacity: 0 }} transition={{ duration: 3, delay: particle.delay, repeat: Infinity, ease: "linear" }} />;
            })}
          </g>
          <g className="neural-nodes">
            {nodes.map((node, index) => <motion.circle key={node.id} className={node.core ? "neural-node neural-core" : "neural-node"} cx={node.x} cy={node.y} r={node.radius} fill={node.core ? "url(#neural-core)" : undefined} animate={active ? { r: node.core ? [node.radius, node.radius + 2, node.radius] : [node.radius, node.radius + (index % 2 ? 0.8 : 1.4), node.radius], opacity: node.core ? [0.7, 1, 0.7] : [0.5, 0.8, 0.5] } : undefined} transition={{ duration: node.core ? 3.2 : 3.8 + (index % 4) * 0.5, delay: index * 0.16, repeat: Infinity, ease: "easeInOut" }} />)}
          </g>
        </motion.g>
      </svg>
    </motion.div>
  </div>;
}
