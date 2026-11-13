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

type AppPageCollection = "privacy" | "support";

export interface AppPage<C extends AppPageCollection> {
  slug: string;
  lang: Lang;
  entry: CollectionEntry<C>;
}

export type PrivacyPage = AppPage<"privacy">;
export type SupportPage = AppPage<"support">;

const placeholderPattern = /À COMPLÉTER|TO BE COMPLETED/i;

/**
 * Pages attached to an app (privacy, support) in one language.
 * Drafts are only served by the dev server.
 * The build fails if a published page is missing in a language
 * or still contains a field to complete.
 */
async function getAppPages<C extends AppPageCollection>(
  collection: C,
  lang: Lang,
): Promise<AppPage<C>[]> {
  const all = (await getCollection(collection)) as CollectionEntry<C>[];
  const entries = all.filter(
    (entry) => entry.data.published || import.meta.env.DEV,
  );
  const pages: AppPage<C>[] = [];
  for (const entry of entries) {
    // id looks like "<slug>/<collection>/<lang>"
    const [slug = "", , entryLang = ""] = entry.id.split("/");
    if (entry.data.published) {
      const text = `${JSON.stringify(entry.data)}\n${entry.body ?? ""}`;
      if (placeholderPattern.test(text)) {
        throw new Error(
          `Page "${entry.id}" is published but still has fields to complete.`,
        );
      }
      for (const required of languages) {
        const sibling = entries.find(
          (other) =>
            other.id === `${slug}/${collection}/${required}` &&
            other.data.published,
        );
        if (!sibling) {
          throw new Error(
            `Page "${slug}/${collection}" is published but "${required}.md" is missing or not published.`,
          );
        }
      }
    }
    if (entryLang === lang) pages.push({ slug, lang, entry });
  }
  return pages;
}

export const getPrivacyPages = (lang: Lang) => getAppPages("privacy", lang);
export const getSupportPages = (lang: Lang) => getAppPages("support", lang);
