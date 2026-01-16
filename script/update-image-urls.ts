import { db } from "../server/db";
import { snacks } from "@shared/schema";
import { eq, like } from "drizzle-orm";

async function run() {
  console.log("Searching for snacks with old image URL...");

  // Update that specific percent-encoded filename
  const result = await db
    .update(snacks)
    .set({ imageUrl: "/quest-chocolate-chip.webp" })
    .where(eq(snacks.imageUrl, "/quest%20chocolate%20chip.webp"))
    .returning();

  console.log(`Updated ${result.length} row(s):`, result);

  // Also replace any other entries with '%20' in them by converting to hyphen
  const rowsWithSpace = await db
    .select()
    .from(snacks)
    .where(like(snacks.imageUrl, "%25%20%25"));

  if (rowsWithSpace.length > 0) {
    for (const row of rowsWithSpace) {
      const newUrl = row.imageUrl.replace(/%20/g, "-");
      await db
        .update(snacks)
        .set({ imageUrl: newUrl })
        .where(eq(snacks.id, row.id))
        .run();
      console.log(`Replaced ${row.imageUrl} -> ${newUrl}`);
    }
  } else {
    console.log("No other '%20' entries found.");
  }

  // Also check for spaces in raw values (in case literal spaces exist)
  const rowsWithLiteralSpace = await db
    .select()
    .from(snacks)
    .where(like(snacks.imageUrl, "% %"));

  if (rowsWithLiteralSpace.length > 0) {
    for (const row of rowsWithLiteralSpace) {
      const newUrl = row.imageUrl.replace(/ /g, "-");
      await db
        .update(snacks)
        .set({ imageUrl: newUrl })
        .where(eq(snacks.id, row.id))
        .run();
      console.log(`Replaced literal space ${row.imageUrl} -> ${newUrl}`);
    }
  } else {
    console.log("No entries with literal spaces found.");
  }

  console.log("Done.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});