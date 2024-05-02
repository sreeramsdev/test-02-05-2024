// 2. Print unique values from an array

// [1, 2, 3, 3, 4, 5, 5]

// Ans: [ 1, 2, 3, 4, 5 ]

var arr=[1,2,3,3,4,5,5]
var arr1=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]==arr[i+1]){
     arr1.push(arr[i])
        
    }
   
}
console.log(arr1)