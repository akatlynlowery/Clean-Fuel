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
      name: "Organic Trail Mix",
      description: "A perfect blend of nuts, dried fruits, and dark chocolate.",
      category: "Snack",
      imageUrl: "https://images.unsplash.com/photo-1599599810769-bcde5a45dd80",
    });
    await storage.createSnack({
      name: "Protein Power Bar",
      description: "20g of plant-based protein to keep you going.",
      category: "Snack",
      imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
    });
    await storage.createSnack({
      name: "Sparkling Citrus Water",
      description: "Refreshing zero-sugar carbonated water with a hint of lemon.",
      category: "Drink",
      imageUrl: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3",
    });
     await storage.createSnack({
      name: "Veggie Chips",
      description: "Crispy, baked vegetable chips with sea salt.",
      category: "Snack",
      imageUrl: "https://images.unsplash.com/photo-1604543788775-68074df098d6",
    });
  }

  const existingMachines = await storage.getMachines();
  if (existingMachines.length === 0) {
    await storage.createMachine({
      name: "Eco-Vendor 3000",
      description: "Energy-efficient vending machine with smart temperature control.",
      features: ["Contactless Payment", "Energy Star Certified", "Remote Inventory Monitoring"],
      imageUrl: "https://images.unsplash.com/photo-1618214227926-78e73449c253",
    });
    await storage.createMachine({
      name: "Compact Healthy Station",
      description: "Perfect for smaller offices or gyms, packed with healthy choices.",
      features: ["Small Footprint", "Digital Display", "Customizable Rack"],
      imageUrl: "https://images.unsplash.com/photo-1579893962659-3cb911df1312",
    });
  }

  return httpServer;
}
