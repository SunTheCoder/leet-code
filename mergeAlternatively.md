# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I figured iteration was defintiely necessary. I realized one pointer is all that is needed and could go thru both at the same time. 
# Approach
<!-- Describe your approach to solving the problem. -->
I sed one pouinter to interate through bnoth words. I purposely checked word1 before word2 in order to keep the desired order. This function essentially zips them together and doesnt fall apart if one is longer than the other.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```typescript []
function mergeAlternately(word1: string, word2: string): string {
    let merged: string = ""
    for (let i = 0; i < word1.length || i < word2.length; i++) {
        if (word1[i]) merged += (word1[i]) 
        if (word2[i]) merged += (word2[i])
    }
    return merged
};
```