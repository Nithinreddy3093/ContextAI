export interface PageContent {
  title: string;
  url: string;
  description: string;
  headings: string[];
  paragraphs: string[];
}

export function extractPageContent(): PageContent {
  const title = document.title;

  const url = window.location.href;

  const description =
    document
      .querySelector('meta[name="description"]')
      ?.getAttribute("content") ?? "";

  const headings = Array.from(
    document.querySelectorAll("h1,h2,h3")
  )
    .map((h) => h.textContent?.trim() ?? "")
    .filter(Boolean);

  const paragraphs = Array.from(
    document.querySelectorAll("p")
  )
    .map((p) => p.textContent?.trim() ?? "")
    .filter(Boolean)
    .slice(0, 10);

  return {
    title,
    url,
    description,
    headings,
    paragraphs,
  };
}