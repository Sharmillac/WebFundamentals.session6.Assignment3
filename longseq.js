  function writeLongSeq()
  {
        alert('test');
        findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
	findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
	findMaxSequence([3, 2, 1]);
  }


  function findMaxSequence(pArr)
  {
     var lLongestArr = [] ,lRunnningArr = [];

     for(var i = 0 ;i < pArr.length; i++)
     { 
            if(lRunnningArr.length == 0)
            {
               lRunnningArr[0] = pArr[i];
             
               continue;
            }
            if(lRunnningArr[lRunnningArr.length - 1] < (pArr[i] ))
                 lRunnningArr[lRunnningArr.length] =  pArr[i];
            else
	    {
		 if((lRunnningArr.length > lLongestArr.length && lRunnningArr.length > 0)  )
		 {
                        
			lLongestArr = lRunnningArr;
                        lRunnningArr = [];
                        lRunnningArr[0] =  pArr[i];
		 }

            } 
     }

    // lLongestArr  = lRunnningArr;
    if( lLongestArr .length  > 1)
         document.write("<p>"+pArr.length+ ".."+ lLongestArr  + "</p>");
    else
         document.write("<p>None</p>");
    return;

 }


  