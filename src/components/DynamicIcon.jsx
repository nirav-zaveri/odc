import {
  Stethoscope,
  Sparkles,
  AlignCenter,
  Activity,
  Anchor,
  Baby,
  Scissors,
  HeartPulse,
  Layers,
  Smile,
  HelpCircle,
} from 'lucide-react'

// Explicit registry (rather than `import * as Icons`) so unused lucide icons
// tree-shake out of the production bundle. Add an entry here whenever a new
// icon name is introduced in src/data/site.js.
const registry = {
  Stethoscope,
  Sparkles,
  AlignCenter,
  Activity,
  Anchor,
  Baby,
  Scissors,
  HeartPulse,
  Layers,
  Smile,
}

// Renders a lucide-react icon by its string name (as stored in site data),
// so data files can stay plain JSON-like objects without importing components.
export default function DynamicIcon({ name, className = 'h-6 w-6', ...rest }) {
  const IconComponent = registry[name] || HelpCircle
  return <IconComponent className={className} {...rest} />
}
