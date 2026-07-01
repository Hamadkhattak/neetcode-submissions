class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
          var newStrs=strs.map(word=>
            word.split('')
          

        );
        // console.log(newStrs);

        
    
    var output=[];
   
    for(var i=0;i<newStrs.length;i++){
        var unique=output.every((obj)=>{
            if (obj.includes([...newStrs[i]].join(''))){
                return false
            }
            else return true
        })
        if(!unique) {continue}
         var rest=[[...newStrs[i]].join('')];
        //  console.log(rest);
     
    
     
        for(var j=i+1;j<newStrs.length;j++){

           
             
              var a=[...newStrs[i]];
              var b=[...newStrs[j]];

            if (a.sort().join('') ===
b.sort().join('')){
               
                 rest=[...rest,[...newStrs[j]].join('')];
                //  console.log(`2nd /n ${rest}`)
                ;
            }
          ;
        }
         output=[...output,[...rest]];
        console.log(`Ansswer `);
        // console.log(output);



    }
   return output
    }
}
