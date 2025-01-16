function reverseWords(s: string): string {
    const trimmed= s.trim()
    const sArray: string[] = Array.from(s)
    console.log(sArray) 
    // console.log(sArray.reverse())
    // console.log(sArray.reverse().join(" ").trim())

    return sArray.reverse().join(" ").trim()
};

console.log(reverseWords("how are you"))