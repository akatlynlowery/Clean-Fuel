@'
import { pgTable, serial, text, varchar, jsonb } from "drizzle-orm/pg-core";

export const snacks = pgTable("snacks", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  category: varchar("category", { length: 50 }).notNull(),
  imageUrl: text("image_url").notNull(),
});

export const machines = pgTable("machines", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
features: jsonb('features').$type<string[]>().notNull().default([]),
  imageUrl: text("image_url").notNull(),
});
'@ | Out-File -Encoding utf8 server\db\schema.ts
