import { db } from "../server/db";
import { machines } from "@shared/schema";

async function run() {
  const rows = await db.select().from(machines).limit(20);
  console.log("Current machines in DB:");
  for (const r of rows) {
    console.log({ id: r.id, name: r.name, imageUrl: r.imageUrl });
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});