# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use .filter method
# Approach
<!-- Describe your approach to solving the problem. -->
At first I was going to try a filter method; but then it became clear to me that it would at least eb easiest to start with a for loop. If filter somehow optimized the function; I could do that later. 

I knew that there is a need to iterate over the entire array and check each index to see if it equals val.

After that it is important to keep the data structure in mind and how it shifts with each operation. Therefore after an index is taken out; there is a need to decrement the i variable so that it does not skip over an index and miss an index that should be removed.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

The time complexity int he worst case would be 0(n)^2 because it has to pass through all of the indexes and potentially take out the val; which then causes the array to shift. this makes it O(n)^2.

The best case time complexity is O(n) assuming there are no values to take out. It will still iterate over the entire array. 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

The array is modified in place so the space complexity is O(1).

# Code
```typescript []
function removeElement(nums: number[], val: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i -= 1
        }
    }

    return nums.length
};
```