import express from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(
  httpServer: Server,
  app: express.Express
): Promise<Server> {
  // Serve static files from the public directory
  app.use(express.static(path.join(__dirname, "../client/public")));

  // Fallback to index.html for all routes (SPA behavior)
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });

  return httpServer;
}
