// You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let posArr = []
    for (i=0; i < arr.length; i++) {
      if (arr[i] > 0) {
        posArr.push(arr[i])
      }
    }
    
    return posArr.reduce((a,b) => a+b, 0) 
  }

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    if (bool) {
      return 'Yes'
    } else {
      return 'No'
    }
  }


// Reverse a string without using .reverse

function solution(str){
    let r=''
    for (i=str.length - 1; i>=0; i--){
      r+= str[i]
    }
    return r
  }

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
  }