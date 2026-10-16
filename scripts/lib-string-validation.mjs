// Validate translated string trees without modifying either input.
export function validateStrings(source, target, path = 'strings') {
  const problems = [];

  const placeholders = (text) => {
    const counts = {};
    for (const match of text.matchAll(/\{[A-Za-z_][A-Za-z0-9_]*\}/g)) {
      counts[match[0]] = (counts[match[0]] ?? 0) + 1;
    }
    return JSON.stringify(
      Object.entries(counts).sort(([a], [b]) => a.localeCompare(b))
    );
  };

  const visit = (expected, actual, location) => {
    if (Array.isArray(expected)) {
      if (!Array.isArray(actual) || actual.length !== expected.length) {
        problems.push(`${location}: expected a list of ${expected.length} items`);
        return;
      }
      expected.forEach((item, index) =>
        visit(item, actual[index], `${location}[${index}]`)
      );
      return;
    }

    if (expected !== null && typeof expected === 'object') {
      if (actual === null || typeof actual !== 'object' || Array.isArray(actual)) {
        problems.push(`${location}: expected an object`);
        return;
      }
      for (const [key, value] of Object.entries(expected)) {
        visit(
          value,
          Object.hasOwn(actual, key) ? actual[key] : undefined,
          `${location}.${key}`
        );
      }
      return;
    }

    if (typeof expected !== 'string') {
      problems.push(`${location}: reference value must be a string`);
      return;
    }
    if (typeof actual !== 'string' || !actual.trim()) {
      problems.push(`${location}: missing or empty translation`);
      return;
    }
    if (placeholders(expected) !== placeholders(actual)) {
      problems.push(`${location}: placeholder names or counts differ`);
    }
  };

  visit(source, target, path);
  return problems;
}
