module.exports = function check(str, bracketsConfig) {
  let arr=str.split(''), i, j;
  let difficulty = bracketsConfig.length;
  let lengthBeforeChecking=0 /*, lengthAfterChecking=0*/;
  while (arr.length!=lengthBeforeChecking)
  {
    lengthBeforeChecking=arr.length;
    for(i=0; i<lengthBeforeChecking; i++)
    for(j=0; j<difficulty; j++)
    {
      if((arr[i]==bracketsConfig[j][0]) && (arr[i+1]==bracketsConfig[j][1])){
      arr.splice(i,2); break;``
      }
    }
  }
 // arr.slice(0,4);
  if (arr.length==0) return true;
  else return false;
}
