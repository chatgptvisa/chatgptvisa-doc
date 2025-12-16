import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

const root = path.join(process.cwd(), 'content');

export async function getMDXContent(locale: string, slug: string) {
  // Normalize slug
  const realSlug = slug.replace(/\.mdx?$/, '');

  // Try locale specific file first
  let filePath = path.join(root, locale, `${realSlug}.mdx`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(root, locale, `${realSlug}.md`);
  }

  // Fallback to English if not found?
  // Ideally we show 404 or fallback. Let's return null to handle in page.
  if (!fs.existsSync(filePath)) {
    // try en
    const enFilePath = path.join(root, 'en', `${realSlug}.mdx`);
    if (fs.existsSync(enFilePath)) {
      filePath = enFilePath;
    } else {
      const enFilePathMd = path.join(root, 'en', `${realSlug}.md`);
      if (fs.existsSync(enFilePathMd)) {
        filePath = enFilePathMd;
      } else {
        return null;
      }
    }
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: fileContent,
    options: { parseFrontmatter: true }
  });

  return { meta: frontmatter, content, slug: realSlug };
}
