import fs from "fs";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Leaf } from "lucide-react";

// Render the Lucide Leaf to SVG markup and write to client/public/favicon.svg
const raw = renderToStaticMarkup(<Leaf stroke="#0f172a" fill="none" />);
const svg = `<?xml version="1.0" encoding="UTF-8"?>\n${raw.replace(
  "<svg",
  '<svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"',
)}\n`;

fs.writeFileSync("client/public/favicon.svg", svg, "utf-8");
console.log("Wrote client/public/favicon.svg");
