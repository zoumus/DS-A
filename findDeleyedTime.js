function findDelayedArrivalTime(arrivalTime, delayedTime) {
    let max = arrivalTime + delayedTime;
    if(max === 24) {
        return 0
    } else if(max > 24) {
        return max - 24;
    } else {
        return max
    }
}