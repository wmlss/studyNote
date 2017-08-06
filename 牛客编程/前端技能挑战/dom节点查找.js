//题目描述：查找两个节点的最近的一个共同父节点，可以包括节点自身
//输入描述：oNode1 和 oNode2 在同一文档中，且不会为相同的节点

//利用jq  node1.contains(node2) node2元素是否在node1之下
function commonParentNode(oNode1, oNode2) {
  while(true) {
    //oNode1或oNode1的父节点是否包含oNode2，是则返回当前的oNode1
    if(oNode1.contains(oNode2)) {
      return oNode1;
    } else {
    //不是则oNode1赋值为其父节点
      oNode1 = oNode1.parentNode;
    }
  }
}
