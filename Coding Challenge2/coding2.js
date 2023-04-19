let arr = [14, 35, 6, 1, 34, 54]

console.log(minMax(arr))

function minMax(arr) {

    let minVal = arr[0]
    let maxVal = arr[0]

    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] < minVal)
        {
            minVal = arr[i]
        }

        if(arr[i] > maxVal)
        {
            maxVal = arr[i]
        }
    }
	
    let finArr = []
	finArr.push(minVal)
	finArr.push(maxVal)
	return finArr
}