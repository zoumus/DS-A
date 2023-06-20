
function getFinalData(data, updates) {
    let j = 0;
    while(j < updates.length) {
        for(let i = 0; i < data.length; i++){
            let l = updates[j][0] -1;
            let r = updates[j][1] -1;
            if(i >= l && i <= r) data[i] = data[i] * (-1);
        }
        j++;   
    }
    return data;
}