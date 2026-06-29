class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        slist=[char for char in s]
        tlist=list(t)
        slist.sort()
        tlist.sort()
        for i,k in zip(slist,tlist):
            if i!=k:
                return False
        return True