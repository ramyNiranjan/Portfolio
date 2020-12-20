import { createClient } from "contentful";

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: SPACE,
  accessToken: ACCESS_TOKEN,
});

export async function fetchIntoText() {
  const entries = await client.getEntries({ content_type: "intro" });
  if (entries.items) return entries.items;
}
export async function fetchSkills() {
  const entries = await client.getEntries({ content_type: "skills" });
  if (entries.items) return entries.items;
}

export default { fetchIntoText, fetchSkills };
