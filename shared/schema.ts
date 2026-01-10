import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const snacks = pgTable("snacks", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // e.g., 'Snack', 'Drink'
  imageUrl: text("image_url").notNull(),
});

export const machines = pgTable("machines", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  features: text("features").array(),
  imageUrl: text("image_url").notNull(),
});

export const insertSnackSchema = createInsertSchema(snacks).omit({ id: true });
export const insertMachineSchema = createInsertSchema(machines).omit({ id: true });

export type Snack = typeof snacks.$inferSelect;
export type InsertSnack = z.infer<typeof insertSnackSchema>;
export type Machine = typeof machines.$inferSelect;
export type InsertMachine = z.infer<typeof insertMachineSchema>;
