import type { MDXInstance } from "astro";

export const getContentByLanguage = (content:MDXInstance<Record<string, any>>[], language:string):MDXInstance<Record<string, any>>[] => {
    const filtered = content.map(
        (element) => {
          if (element.file.includes(`/${language}/`)) {
            return element
          }
        }
      );
    
      //@ts-ignore
      return filtered.filter(filter => { if (filter !== null && filter !== undefined) { return filter;}})
}