import { useMemo } from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

export default function MarkdownContent({ content, className = 'prose-blog' }) {
  const html = useMemo(() => {
    const rawHtml = marked.parse(content, { breaks: false, gfm: true })
    return DOMPurify.sanitize(rawHtml)
  }, [content])

  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
