function search(nums, target) {
    if(nums.length === 0) return -1;
    let mid = Math.floor(nums.length/2);
    if(target === nums[mid]) return mid;
    
    if(target < mid) {
        return search(nums.slice(0, mid), target)
    } else {
        let stack = search(nums.slice(mid+1), target);
        if (stack !== -1) {
            return stack + mid + 1
        } else {
            return -1;
        }
    }
}