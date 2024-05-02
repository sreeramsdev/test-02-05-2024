// 5. Check given string is palindrome or not

// Example: 
// Madam (true)
// Peace (false)

var str="madam"
var reverse=""
for(let i=0;i<str.length;i++){
reverse=str.charAt(i)+reverse
}
console.log(reverse)
if(reverse==str){
 console.log(true)
}
else{
 console.log(false)
}