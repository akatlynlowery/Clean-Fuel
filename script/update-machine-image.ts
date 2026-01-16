import { db } from "../server/db";
import { machines } from "@shared/schema";
import { eq } from "drizzle-orm";

async function run() {
  const res = await db
    .update(machines)
    .set({ imageUrl: "/haha-vending.jpg" })
    .where(eq(machines.name, "HA HA Vending Plus 440"))
    .returning();

  console.log(`Updated ${res.length} rows:`, res);

  const rows = await db.select().from(machines).limit(20);
  console.log("Current machines in DB after update:");
  for (const r of rows) {
    console.log({ id: r.id, name: r.name, imageUrl: r.imageUrl });
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});