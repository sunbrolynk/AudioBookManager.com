// A deliberately restricted formatting grammar, not a general HTML sanitizer.
// Only attribute-free b, em, code, and br tags are accepted.
// Literal less-than signs in prose must be written as &lt;.
/** @param {unknown} value */
export function translationHtml(value) {
  if (typeof value !== 'string') {
    throw new TypeError('Formatted translation must be a string');
  }

  const stack = [];
  let position = 0;
  while ((position = value.indexOf('<', position)) !== -1) {
    const match = /^(<br[ \t\r\n\f]*[/]?>|<([/]?)(b|em|code)>)/.exec(value.slice(position));
    if (!match) {
      throw new Error('Unsupported markup in formatted translation');
    }

    const [, token, closing, tag] = match;
    if (tag) {
      if (closing) {
        if (stack.pop() !== tag) {
          throw new Error('Unbalanced formatting in translation');
        }
      } else {
        stack.push(tag);
      }
    }
    position += token.length;
  }

  if (stack.length) {
    throw new Error('Unclosed formatting in translation');
  }
  return value;
}
