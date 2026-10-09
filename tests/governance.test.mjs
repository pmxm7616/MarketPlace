import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { listMarkdown, requiredPaths, validateGovernance } from '../scripts/check-governance.mjs';

function withFixture(run) {
  const root = mkdtempSync(join(tmpdir(), 'marketplace-governance-'));
  try {
    for (const path of requiredPaths) {
      const destination = join(root, path);
      mkdirSync(dirname(destination), { recursive: true });
      writeFileSync(destination, path.endsWith('.md') ? '# Document\n' : 'placeholder\n');
    }
    return run(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

test('accepts a complete document scaffold', () => withFixture(root => {
  assert.deepEqual(validateGovernance(root), []);
}));

test('detects a missing mandatory file', () => withFixture(root => {
  const { unlinkSync } = requireDeletion();
  unlinkSync(join(root, 'AGENTS.md'));
  assert.ok(validateGovernance(root).some(error => error.includes('Missing required file: AGENTS.md')));
}));

test('detects broken relative Markdown links', () => withFixture(root => {
  writeFileSync(join(root, 'README.md'), '# Start\n[broken](doc/does-not-exist.md)\n');
  assert.ok(validateGovernance(root).some(error => error.includes('Broken link')));
}));

test('accepts working local links and external URLs', () => withFixture(root => {
  writeFileSync(join(root, 'README.md'), '# Start\n[valid](doc/README.md)\n[external](https://example.com)\n');
  assert.deepEqual(validateGovernance(root), []);
}));

test('detects missing H1 in Markdown', () => withFixture(root => {
  writeFileSync(join(root, 'README.md'), 'No heading\n');
  assert.ok(validateGovernance(root).some(error => error.includes('Missing H1')));
}));

function requireDeletion() {
  return { unlinkSync: (path) => rmSync(path) };
}
