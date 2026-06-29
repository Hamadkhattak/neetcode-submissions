class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        length=len(nums)
        i=0
        while(i!=length):
            k=i+1
            while(k!=length):
                if(nums[i]==nums[k]):
                    return True
                else:
                    k=k+1
            i=i+1
        return False                   


        