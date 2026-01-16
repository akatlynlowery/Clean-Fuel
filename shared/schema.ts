import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const snacks = sqliteTable("snacks", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const machines = sqliteTable("machines", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  features: text("features", { mode: "json" }).$type<string[]>().notNull().default([]),
  imageUrl: text("image_url").notNull(),
});

export type Snack = InferSelectModel<typeof snacks>;
export type InsertSnack = InferInsertModel<typeof snacks>;

export type Machine = InferSelectModel<typeof machines>;
export type InsertMachine = InferInsertModel<typeof machines>;
