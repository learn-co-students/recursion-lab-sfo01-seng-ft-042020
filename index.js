function printString(string) {
    console.log(string[0]);
    if (string.length > 1) {
      let substring = string.slice(1);
      printString(substring);
    } else {
      return true;
    }
  }

  function reverseString(string) {
    if (string.length < 2) {
      return string;
    } else {
      return reverseString(string.substring(1)) + string[0];
    }
  }

  function isPalindrome(string) {
    // check if first and last letter match
    //  check if second and second to last match...
    let l = string.length;
    if (l < 2) {
      return true;
    } else if (string[l - 1] === string[0]) {
      return isPalindrome(string.substring(1, l - 1));
    } else {
      return false;
    }
  }
  
  function addUpTo(nums, index) {
    return index ? nums[index] + addUpTo(nums, --index) : nums[index];
  }
  
  function maxOf(nums) {
    if (nums.length > 1) {
      nums[0] > nums[1]
        ? (nums = [nums[0], ...nums.slice(2)])
        : (nums = [nums[1], ...nums.slice(2)]);
      return maxOf(nums);
    } else {
      return nums[0];
    }
  }
  
  function includesNumber(nums, target) {
    while (nums.length > 0) {
      let num = nums.shift();
      if (num === target) {
        return true;
      } else {
        return includesNumber(nums, target);
      }
    }
    return false;
  }