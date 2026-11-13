import { getCollection, type CollectionEntry } from "astro:content";
import { languages, type Lang } from "../i18n/ui";

export type ProjectEntry = CollectionEntry<"projects">;

export interface Project {
  slug: string;
  lang: Lang;
  entry: ProjectEntry;
}

function parseId(id: string): { slug: string; lang: string } {
  const [slug = "", lang = ""] = id.split("/");
  return { slug, lang };
}

/**
 * Published projects in one language.
 * The build fails if a published project is missing in a language.
 */
export async function getPublishedProjects(lang: Lang): Promise<Project[]> {
  const published = await getCollection(
    "projects",
    ({ data }) => data.published,
  );
  const bySlug = new Map<string, Map<string, ProjectEntry>>();
  for (const entry of published) {
    const { slug, lang: entryLang } = parseId(entry.id);
    if (!bySlug.has(slug)) bySlug.set(slug, new Map());
    bySlug.get(slug)!.set(entryLang, entry);
  }

  const projects: Project[] = [];
  for (const [slug, entries] of bySlug) {
    for (const required of languages) {
      if (!entries.has(required)) {
        throw new Error(
          `Project "${slug}" is published but "${required}.md" is missing or not published.`,
        );
      }
    }
    projects.push({ slug, lang, entry: entries.get(lang)! });
  }
  return projects.sort((a, b) => a.slug.localeCompare(b.slug));
}
