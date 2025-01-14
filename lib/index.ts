#!/usr/bin/env node

import bannedWords from "./rules/banned-words"
import twoParams from "./rules/two-params"
import tscircuitDeps from "./rules/tscircuit-deps"
import contextPattern from "./rules/context-pattern"

const plugin = {
  // preferred location of name and version
  meta: {
    name: "@tscircuit/lint",
    version: "0.0.1",
  },
  rules: {
    "banned-words": bannedWords,
    "two-params": twoParams,
    "tscircuit-deps": tscircuitDeps,
    "context-pattern": contextPattern,
  },
}

// for ESM
export default plugin
