import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.snacks.list.path, async (req, res) => {
    const snacks = await storage.getSnacks();
    res.json(snacks);
  });

  app.get(api.machines.list.path, async (req, res) => {
    const machines = await storage.getMachines();
    res.json(machines);
  });

  // Seed Data
  const existingSnacks = await storage.getSnacks();
  if (existingSnacks.length === 0) {
    await storage.createSnack({
      name: "Quest Bar",
      description: "21g of protein to keep you going.",
      category: "Snack",
      imageUrl: "/quest-bars.jpg",
    });

    await storage.createSnack({
      name: "Chomps Beef Sticks",
      description:
        "Zero sugar, grass-fed beef sticks with 10g+ protein (varies by flavor).",
      category: "Snack",
      imageUrl: "/chomps.jpg",
    });

    await storage.createSnack({
      name: "Celsius",
      description: "A refreshing energy drink to boost your day.",
      category: "Drink",
      imageUrl: "/celsius.webp",
    });

    await storage.createSnack({
      name: "Mixed Nuts & Trail Mix",
      description:
        "Premium blend of almonds, cashews, and dried fruit. Perfect protein-packed snack.",
      category: "Snack",
      imageUrl: "/planters.avif",
    });

    await storage.createSnack({
      name: "Nature Valley Granola Bar",
      description:
        "Wholesome oats and honey. A classic, delicious granola bar packed with natural goodness.",
      category: "Snack",
      imageUrl: "/nature-valley.jpg",
    });
  }
}