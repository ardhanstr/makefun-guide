// free-bounties.mjs
//
// Lists the free bounties that are open on make.fun right now.
// Uses only the Node standard library and the site's public API,
// so it needs no API key, no install and no account.
//
// Usage:
//   node free-bounties.mjs

const API_BASE = "https://make.fun/api/competitions";
const PAGE_SIZE = 100;

function isFree(entry) {
  const fee = entry.entryFeeUsd;
  return fee === null || fee === undefined || fee === 0;
}

function isOpen(entry) {
  return entry.status === "open";
}

async function fetchPage(cursor) {
  const url = new URL(API_BASE);
  url.searchParams.set("status", "open");
  url.searchParams.set("limit", String(PAGE_SIZE));
  if (cursor) {
    url.searchParams.set("cursor", cursor);
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`GET ${url} failed with HTTP ${response.status}`);
  }
  return response.json();
}

async function fetchAllOpen() {
  const collected = [];
  let cursor = null;
  do {
    const page = await fetchPage(cursor);
    const items = Array.isArray(page.items) ? page.items : [];
    collected.push(...items);
    cursor = page.next_cursor ?? null;
  } while (cursor);
  return collected;
}

function pad(text, width) {
  const value = String(text ?? "");
  return value.length >= width ? value : value + " ".repeat(width - value.length);
}

function printTable(rows) {
  const titleWidth = Math.max(
    "Title".length,
    ...rows.map((row) => row.title.length),
  );
  const slugWidth = Math.max(
    "Slug".length,
    ...rows.map((row) => row.slug.length),
  );
  const header = `${pad("Title", titleWidth)}  ${pad("Slug", slugWidth)}  ${pad("Prize (USDC)", 12)}  Deadline (UTC)`;
  console.log(header);
  console.log("-".repeat(header.length));
  for (const row of rows) {
    console.log(
      `${pad(row.title, titleWidth)}  ${pad(row.slug, slugWidth)}  ${pad(row.prize, 12)}  ${row.deadline}`,
    );
  }
  console.log(`\n${rows.length} free ${rows.length === 1 ? "bounty" : "bounties"} open.`);
}

async function main() {
  const entries = await fetchAllOpen();
  const free = entries
    .filter(isOpen)
    .filter(isFree)
    .map((entry) => ({
      title: entry.title ?? entry.slug ?? "(no title)",
      slug: entry.slug ?? entry.id ?? "(no slug)",
      prize: entry.rewardAmount ?? entry.potUsd ?? 0,
      deadline: entry.deadline ?? "(no deadline)",
    }))
    .sort((a, b) => String(a.deadline).localeCompare(String(b.deadline)));
  if (free.length === 0) {
    console.log("No free bounties are open right now.");
    return;
  }
  printTable(free);
}

main().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
});
