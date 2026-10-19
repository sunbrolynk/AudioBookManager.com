import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

const script = new URL('../scripts/announce-translation-review.py', import.meta.url).pathname;
// Loads the script as a module, so only language_for runs: no event, token or network.
const languageFor = (branch) => JSON.parse(execFileSync('python3', ['-I', '-B', '-c', `
import importlib.util, json, sys
spec = importlib.util.spec_from_file_location("announce", sys.argv[1])
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)
print(json.dumps(mod.language_for(sys.argv[2])))`, script, branch], { encoding: 'utf8' }));

test('every live and newly translated language gets its English name', () => {
  for (const code of ['en-gb', 'uk', 'en-ca', 'en-au', 'cs', 'da', 'de', 'es', 'fi', 'fr', 'it', 'ja', 'ko', 'nb', 'nl', 'pl', 'pt-br', 'sv', 'zh-cn', 'zh-tw']) {
    const result = languageFor(`translation/${code}`);
    assert.equal(result?.[0], code, code);
    assert.ok(result[1].length > 2, code);
  }
  assert.deepEqual(languageFor('translation/fi'), ['fi', 'Finnish']);
});

test('publish branches, unknown codes and anything shaped oddly are refused', () => {
  for (const branch of ['translation/publish-fi', 'translation/xx', 'translation/fi-', 'translation/FI', 'translation/fi/../de', 'translation/zh-hans', 'translation/fi\n', 'feature/fi', 'translation/']) {
    assert.equal(languageFor(branch), null, JSON.stringify(branch));
  }
});

const threadFrom = (body, guild) => JSON.parse(execFileSync('python3', ['-I', '-B', '-c', `
import importlib.util, json, sys
spec = importlib.util.spec_from_file_location("announce", sys.argv[1])
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)
print(json.dumps(mod.thread_from_issue(sys.argv[2], sys.argv[3])))`, script, body, guild], { encoding: 'utf8' }));

test('a review issue reuses its Discord thread only on this server', () => {
  assert.equal(threadFrom('Discord thread: https://discord.com/channels/111/222', '111'), '222');
  assert.equal(threadFrom('Discord thread: https://discord.com/channels/999/222', '111'), null);
  assert.equal(threadFrom('https://discord.com/channels/111/222/333', '111'), null);
  assert.equal(threadFrom('no thread here', '111'), null);
  assert.equal(threadFrom('https://discord.com/channels/1111/222', '111'), null);
});
