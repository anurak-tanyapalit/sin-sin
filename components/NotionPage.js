'use client'

import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { inverseSlugMap } from '@/lib/config'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
// used for collection views
import 'rc-dropdown/assets/index.css'
import 'mac-scrollbar/dist/mac-scrollbar.css'

// Dynamically import elements to support complicated Notion block types
const Collection = dynamic(
  () => import('react-notion-x/build/third-party/collection').then((m) => m.Collection),
  { ssr: false }
)
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  { ssr: false }
)

export default function NotionPage({ recordMap }) {
  if (!recordMap) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ paddingBottom: '10vh' }}>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={true}
        mapPageUrl={(pageId) => {
          const cleanId = pageId.replace(/-/g, '')
          return inverseSlugMap[cleanId] ? `/${inverseSlugMap[cleanId]}` : `/${cleanId}`
        }}
        components={{
          nextLink: Link,
          Collection,
          Pdf
        }}
      />
    </div>
  )
}
