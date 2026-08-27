// Minimal YAML-frontmatter parser — deliberately dependency-free.
// Supports the flat `key: value` and `key: [a, b, c]` shapes Decap CMS
// writes for this project's blog collection. Not a general YAML parser.
export function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const [, frontmatter, content] = match
  const data = {}

  frontmatter.split(/\r?\n/).forEach((line) => {
    if (!line.trim() || line.trim().startsWith('#')) return
    const idx = line.indexOf(':')
    if (idx === -1) return
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()

    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((v) => stripQuotes(v.trim()))
        .filter(Boolean)
    } else {
      value = stripQuotes(value)
    }

    data[key] = value
  })

  return { data, content: content.trim() }
}

function stripQuotes(value) {
  // Double-quoted: unescape \" and \\ so a title like
  //   title: "\"Will It Hurt?\" — An Honest Answer"
  // renders with real quote marks rather than literal backslashes.
  if (value.length >= 2 && value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1).replace(/\\(["\\])/g, '$1')
  }
  // Single-quoted: YAML escapes an apostrophe by doubling it ('' -> ').
  if (value.length >= 2 && value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1).replace(/''/g, "'")
  }
  return value
}
