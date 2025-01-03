// Fuzzy search implementation
export function fuzzySearch(needle, haystack) {
  const hlen = haystack.length;
  const nlen = needle.length;
  if (nlen > hlen) {
    return false;
  }
  if (nlen === hlen) {
    return needle === haystack;
  }
  outer: for (let i = 0, j = 0; i < nlen; i++) {
    const nch = needle[i].toLowerCase();
    while (j < hlen) {
      if (haystack[j++].toLowerCase() === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

// Calculate similarity score
export function calculateScore(needle, haystack) {
  const str1 = needle.toLowerCase();
  const str2 = haystack.toLowerCase();
  const len1 = str1.length;
  const len2 = str2.length;
  
  if (len1 === 0) return 1;
  if (len2 === 0) return 0;
  
  const matrix = Array(len1 + 1).fill().map(() => Array(len2 + 1).fill(0));
  
  for (let i = 0; i <= len1; i++) matrix[i][0] = i;
  for (let j = 0; j <= len2; j++) matrix[0][j] = j;
  
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  
  const maxLen = Math.max(len1, len2);
  return 1 - matrix[len1][len2] / maxLen;
}

// Sort and highlight search results
export function processSearchResults(query, items, keys = ['title']) {
  if (!query) return items.map(item => ({ ...item, score: 0, highlight: item.title }));
  
  return items
    .map(item => {
      let maxScore = 0;
      let matchedText = '';
      
      keys.forEach(key => {
        const text = item[key].toString();
        const score = calculateScore(query, text);
        if (score > maxScore) {
          maxScore = score;
          matchedText = text;
        }
      });
      
      // Highlight matching characters
      const highlight = matchedText.replace(new RegExp(query, 'gi'), match => `<mark>${match}</mark>`);
      
      return {
        ...item,
        score: maxScore,
        highlight
      };
    })
    .filter(item => item.score > 0.3) // Adjust threshold as needed
    .sort((a, b) => b.score - a.score);
}
