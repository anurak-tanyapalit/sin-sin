const { NotionAPI } = require('notion-client');

async function main() {
  const notion = new NotionAPI();
  const pageId = '32655b01728280e19e88e6780537b201';
  const recordMap = await notion.getPage(pageId);
  const blocks = recordMap.block;
  
  console.log("Subpages:");
  for (const id in blocks) {
    const block = blocks[id].value;
    if (block && block.type === 'page' && block.id !== pageId) {
      console.log(`Title: ${block.properties?.title?.[0]?.[0] || 'Unknown'} | ID: ${block.id.replace(/-/g, '')}`);
    } else if (block && block.type === 'collection_view_page' || block.type === 'collection_view') {
        // collections
        const colId = block.collection_id;
        if(colId && recordMap.collection[colId]){
             console.log(`Collection: ${recordMap.collection[colId].value.name?.[0]?.[0]} | ID: ${block.id.replace(/-/g, '')}`);
        }
    }
  }
}

main().catch(console.error);
