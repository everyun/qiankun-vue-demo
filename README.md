## 运行
master 为基座，module 为微应用  
分别 npm install && npm run serve 之后  
主项目访问地址 http://localhost:10010/simple/  
微应用直接地址为 http://localhost:10011/simple/  

## 复现
页面中放了 200 个 checkbox，当切换 checkbox 状态时，可以感觉到明显的卡顿  
直接访问微应用做同样的操作，没有卡顿的现象  
