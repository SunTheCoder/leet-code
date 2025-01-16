function reverseWords(s) {
    var trimmed = s.trim();
    var sArray = Array.from(s);
    console.log(sArray);
    // console.log(sArray.reverse())
    // console.log(sArray.reverse().join(" ").trim())
    return sArray.reverse().join(" ").trim();
}
;
console.log(reverseWords("how are you"));
