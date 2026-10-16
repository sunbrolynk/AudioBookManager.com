import { parse } from 'parse5';

export function inspectHtml(source) {
  const document = parse(source);
  const ids = new Set();
  const links = [];
  const scripts = [];
  const styles = [];
  const styleAttributes = [];
  let baseHref;

  const textOf = (node) =>
    (node.childNodes ?? [])
      .map((child) => child.nodeName === '#text' ? child.value : '')
      .join('');

  const visit = (node) => {
    if (node.tagName) {
      const attrs = Object.fromEntries(
        (node.attrs ?? []).map(({ name, value }) => [name, value])
      );

      if (Object.hasOwn(attrs, 'id')) ids.add(attrs.id);
      if (node.tagName === 'a' && attrs.name) ids.add(attrs.name);

      if (
        ['a', 'area', 'link'].includes(node.tagName) &&
        Object.hasOwn(attrs, 'href')
      ) {
        links.push({ tag: node.tagName, href: attrs.href });
      }

      if (
        node.tagName === 'base' &&
        baseHref === undefined &&
        Object.hasOwn(attrs, 'href')
      ) {
        baseHref = attrs.href;
      }

      if (node.tagName === 'script' && !Object.hasOwn(attrs, 'src')) {
        scripts.push(textOf(node));
      }
      if (node.tagName === 'style') styles.push(textOf(node));
      if (Object.hasOwn(attrs, 'style')) styleAttributes.push(attrs.style);
    }

    for (const child of node.childNodes ?? []) visit(child);
    // Template contents are inert until instantiated, but still need inspection.
    if (node.content) visit(node.content);
  };

  visit(document);
  return { ids, links, scripts, styles, styleAttributes, baseHref };
}
