class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       var map=new Map();
    var arr=[];
    var newnums=[...nums];
    newnums.sort();
    for(let i=0;i<newnums.length;i++){
        if(i>0){
            if(newnums[i-1]===newnums[i]){
                continue
            }
            
        }
       let count=0;
       for(let j=i;j<newnums.length;j++){
        if(newnums[i]==newnums[j]){
            count ++;
        }
        
    }
    map.set(newnums[i],count)  
    arr.push(count)
    console.log(map);
    
    
   
      
    }
    var output=[];
    arr.sort((a,b)=>a-b);
    // console.log(arr);
    var arr2=arr.slice(arr.length-k);
    // console.log(arr2);
  
  for (let [key,value] of map.entries()){
    if (arr2.includes(value)){
        output.push(key)

    }
  }   

    // console.log(newnums);
    console.log(output)
    console.log(arr)
    console.log(arr2)
    return(output);

  





    }
}
