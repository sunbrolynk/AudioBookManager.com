// Reject unsafe destinations before Markdown is converted to HTML.
export function validateMarkdownUrl(value, image = false) {
  if (typeof value !== 'string') {
    throw new Error('Markdown URL must be a string');
  }

  // Browsers ignore some whitespace/control characters when parsing schemes.
  const normalized = value.replace(/[\u0000-\u0020\u007f-\u009f]/g, '');
  const scheme = normalized.match(/^([a-z][a-z0-9+.-]*):/i)?.[1].toLowerCase();
  const allowed = image ? ['http', 'https'] : ['http', 'https', 'mailto', 'tel'];

  if (scheme && !allowed.includes(scheme)) {
    throw new Error('Unsupported URL scheme in Markdown');
  }
}

export const markdownSafeUrls = {
  name: 'markdown-safe-urls',
  link(node) {
    validateMarkdownUrl(node.url);
  },
  image(node) {
    validateMarkdownUrl(node.url, true);
  },
  definition(node) {
    // Definitions may be used by either links or images.
    validateMarkdownUrl(node.url);
  },
};
