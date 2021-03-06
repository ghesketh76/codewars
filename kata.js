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

// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

function bouncingBall(h,  bounce,  window) {
    if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
      return h < window ? -1 : 2 + bouncingBall((h* bounce), bounce, window)
    } else {
      return -1
    }
  }

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
  const sArr = s.split('')
  let middle = []
  if(sArr.length % 2 === 0){
    middle.push(sArr[(sArr.length / 2)-1], sArr[(sArr.length / 2)] )
  } else {
    middle.push(sArr[sArr.length /2 - 0.5])
  }
  
  return middle.join('')
}

// Given an array of integers, return a new array with each value doubled.

function maps(y){
    return y.map(x => x*2)
   }

// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    let posArr = []
    
    const reducer = (acc, item) => {
      return acc + item
    }
    if (arr.length === 0) {
      return 0
    } else {
      for (i = 0; i< arr.length; i++){
        if (arr[i] > 0) {
          posArr.push(arr[i])
        }
      }
    }
    
    return posArr.reduce(reducer, 0)
  }

 // Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

 function upArray(arr){
    let newArr = arr
    if ( arr[arr.length - 1] < 0) {
      return null
    } else {
      if (arr[arr.length-1] === 9) {
        newArr[newArr.length - 2] = arr[arr.length - 2] + 1
        newArr[newArr.length -1] = 0
      } else {
        newArr[newArr.length -1] = arr[arr.length -1] + 1
      }
    }
    return newArr
  }

// count unique elements in an array

var uniqueCount=function(iterable){
    const arr = iterable.split('')
    let uniq = {}
    for (i=0; i<arr.length; i++) {
      uniq[arr[i]] = 1 + uniq[arr[i]] || 1
    }
    return uniq
  }

//  Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements

var uniqueInOrder=function(iterable){
    let uniq = []
    for (i=0; i<iterable.length; i++) {
      if (iterable[i] != iterable[i+1]) {
        uniq.push(iterable[i])
      }
    }
    return uniq
  }

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    let i = 0
    while(num.toString().length !== 1) {
      num = num.toString().split('').reduce((a,b) => a*b)
      i++
    }
    return i
  }

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    let uniq = []
    let not = []
    for (i = 0; i<a.length; i++){
      if (b.includes(a[i])){
        uniq.push(a[i])
      } else {
        not.push(a[i])
      }
    }
    return not
  }

  function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    let newList = []
    for (i=0; i<l.length; i++){
      if (Number.isInteger(l[i])) {
        newList.push(l[i])
      }
                           
    }
    return newList
  }