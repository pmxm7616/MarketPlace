#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, join, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const requiredPaths = [
  'AGENTS.md',
  'README.md',
  'doc/README.md',
  'doc/product/core-scope.md',
  'doc/architecture/domain-contracts.md',
  'doc/ai-governance/decision-policy.md',
  'doc/ai-governance/task-protocol.md',
  'doc/development/quality-gates.md',
  'doc/security/security-baseline.md',
  'doc/testing/testing-strategy.md',
  '.github/workflows/governance.yml',
  '.github/pull_request_template.md',
];

export function listMarkdown(root) {
  const files = [];
  function walk(folder) {
    for (const entry of readdirSync(folder, { withFileTypes: true })) {
      if (['.git', '.next', 'node_modules', 'dist', 'coverage'].includes(entry.name)) continue;
      const full = join(folder, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile() && extname(full).toLowerCase() === '.md') files.push(full);
    }
  }
  walk(root);
  return files;
}

export function validateGovernance(root) {
  const errors = [];
  for (const path of requiredPaths) {
    if (!existsSync(resolve(root, path))) errors.push(`Missing required file: ${path}`);
  }

  for (const path of listMarkdown(root)) {
    const source = readFileSync(path, 'utf8');
    const relative = path.slice(root.length + 1).split(sep).join('/');
    if (!/^#\s+\S/m.test(source)) errors.push(`Missing H1: ${relative}`);
    // Strip fenced code blocks so examples of Markdown syntax do not count as actual links.
    const body = source.replace(/^```[\s\S]*?^```/gm, '');
    const matches = body.matchAll(/!?\[[^\]\n]*\]\(([^\)]+)\)/g);
    for (const match of matches) {
      let target = match[1].trim().replace(/^<|>$/g, '').split(/\s+"|\s+'/)[0];
      if (!target || /^(?:https?:|mailto:|tel:|#|data:)/i.test(target)) continue;
      target = target.split('#')[0].split('?')[0];
      try { target = decodeURIComponent(target); }
      catch { errors.push(`Invalid URL encoding in ${relative}: ${match[1]}`); continue; }
      const destination = resolve(dirname(path), target);
      if (!existsSync(destination)) errors.push(`Broken link in ${relative}: ${match[1]}`);
    }
  }
  return errors;
}

const invoked = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invoked) {
  const root = resolve(process.argv[2] ?? join(dirname(fileURLToPath(import.meta.url)), '..'));
  const errors = validateGovernance(root);
  if (errors.length) {
    for (const error of errors) console.error(`ERROR: ${error}`);
    console.error(`Governance validation failed: ${errors.length} error(s)`);
    process.exitCode = 1;
  } else {
    console.log(`Governance validation PASS: ${listMarkdown(root).length} Markdown file(s), required paths and local links.`);
  }
}
