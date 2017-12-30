1. == 的比较中：空字符串会转为0，false转为0，true转为1
2. if(null)中 undefined和null 都会转为false（undefined和null在if()中转为布尔值且都为false）
3. == 中undefined和null都不等于false或0，但undefined==null undefined==undefined null==null//都为true, 但 null === undefined //是false
4. == 中 NaN怎么比较都是false 而且不等于自己本身
