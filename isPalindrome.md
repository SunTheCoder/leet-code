# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
my first thought was to somehow reverse the number. i remmebered you can't do that on an array; but you can do that on a string.

# Approach
<!-- Describe your approach to solving the problem. -->
i decided to use methods

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Each step has a time complexity of 𝑂(𝑛)
O(n), and these steps are performed sequentially. Thus, the total time complexity is 𝑂(𝑛)

O(n)+O(n)+O(n)+O(n)+O(n)=O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
0(n)

# Code
```typescript []
function isPalindrome(x: number): boolean {
    
    let reversed = x.toString().split("").reverse().join("")
    if ( reversed === x.toString() ) {
        return true
    }
    return false
    
};
```