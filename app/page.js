import { NotionAPI } from 'notion-client'
import NotionPage from '@/components/NotionPage'

// Revalidate data every 60 seconds (Incremental Static Regeneration)
export const revalidate = 60

export default async function Page() {
  const notion = new NotionAPI()
  // Use your Root Notion Page ID here
  const pageId = '32655b01728280e19e88e6780537b201'
  
  let recordMap;
  try {
    recordMap = await notion.getPage(pageId)
  } catch (error) {
    console.error("Error fetching Notion page", error)
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: "white" }}>Failed to load portfolio data.</h1>
      </main>
    )
  }

  return (
    <main>
      <NotionPage recordMap={recordMap} />
    </main>
  )
}
