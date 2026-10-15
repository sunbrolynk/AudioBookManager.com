// Renders raw HTML in markdown as literal text, so nothing in a release note or doc can inject markup.
export const htmlAsText = {
  name: 'html-as-text',
  html(node, ctx) {
    ctx.replaceNode(node, { type: 'text', value: node.value });
  },
};
