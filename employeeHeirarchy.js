// employeeHeirarchy = {
// 	‘S’:[‘T’,W’]
// 	‘T’:[‘U’]
// 	'W':[‘V’]
// 	'V':[]
// 	'U':[]
// }
// Callstack [ s: 5]
// employeeCount(employeeHeirarchy,S) // 5
// employeeCount(employeeHeirarchy,W) // 2
// employeeCount(employeeHeirarchy,U) // 1

function employeeCount(employeeHeirarchy,id) {
    if(employeeHeirarchy[id].length) return 1
    let count = 1
    for(let neighbor of employeeHeirarchy[id]){
        count += employeeCount(employeeHeirarchy,neighbor)
    }
    return count
}
employeeHeirarchy = {
    	S:['T','W'],
    	T:['U'],
    	W:['V'],
    	V:[],
    	U:[]      
}

employeeCount(employeeHeirarchy,S) // 5
employeeCount(employeeHeirarchy,W) // 2
employeeCount(employeeHeirarchy,U) // 1



