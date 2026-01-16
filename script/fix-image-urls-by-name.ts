import { db } from "../server/db";
import { snacks } from "@shared/schema";
import { eq } from "drizzle-orm";

async function run() {
  const mapping: { name: string; imageUrl: string }[] = [
    { name: "Quest Bar", imageUrl: "/quest-chocolate-chip.webp" },
    { name: "Chomps Beef Sticks", imageUrl: "/CHOMPS.avif" },
    { name: "Celsius", imageUrl: "/Celcius.avif" },
  ];

  for (const m of mapping) {
    const res = await db
      .update(snacks)
      .set({ imageUrl: m.imageUrl })
      .where(eq(snacks.name, m.name))
      .returning();

    console.log(`Updated ${res.length} rows for ${m.name}:`, res);
  }

  // Print updated rows
  const rows = await db.select().from(snacks).limit(20);
  console.log("Current snacks in DB after update:");
  for (const r of rows) {
    console.log({ id: r.id, name: r.name, imageUrl: r.imageUrl });
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});