// lib/config.js
// Map friendly names to their internal Notion Page IDs.
// To find the ID, click on the page in your current website and copy the long string of letters and numbers from the URL.

export const customSlugMap = {
  // Example: 'friendly-url': '1234567890abcdef1234567890abcdef'
  'home': '32655b01728280e19e88e6780537b201'
};

// Create a reverse map for rendering pretty links automatically
export const inverseSlugMap = Object.fromEntries(
  Object.entries(customSlugMap).map(([slug, id]) => [id, slug])
);
