import { NotionAPI } from 'notion-client'
import { customSlugMap } from '@/lib/config'
import NotionPage from '@/components/NotionPage'

export const revalidate = 60

export default async function Page({ params }) {
  const notion = new NotionAPI()
  const { pageId: rawPageId } = await params
  const pageId = customSlugMap[rawPageId] || rawPageId
  
  let recordMap;
  try {
    recordMap = await notion.getPage(pageId)
  } catch (error) {
    console.error("Error fetching Notion page", error)
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: "white" }}>Failed to load requested page.</h1>
      </main>
    )
  }

  return (
    <main>
      <NotionPage recordMap={recordMap} />
    </main>
  )
}
