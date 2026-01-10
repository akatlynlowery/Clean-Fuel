import { db } from "./db";
import { snacks, machines, type Snack, type InsertSnack, type Machine, type InsertMachine } from "@shared/schema";

export interface IStorage {
  getSnacks(): Promise<Snack[]>;
  createSnack(snack: InsertSnack): Promise<Snack>;
  getMachines(): Promise<Machine[]>;
  createMachine(machine: InsertMachine): Promise<Machine>;
}

export class DatabaseStorage implements IStorage {
  async getSnacks(): Promise<Snack[]> {
    return await db.select().from(snacks);
  }

  async createSnack(insertSnack: InsertSnack): Promise<Snack> {
    const [snack] = await db.insert(snacks).values(insertSnack).returning();
    return snack;
  }

  async getMachines(): Promise<Machine[]> {
    return await db.select().from(machines);
  }

  async createMachine(insertMachine: InsertMachine): Promise<Machine> {
    const [machine] = await db.insert(machines).values(insertMachine).returning();
    return machine;
  }
}

export const storage = new DatabaseStorage();
