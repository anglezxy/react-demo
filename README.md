
### 组件间通信
1.1方式一：通过props传递

1）

1.2 方式二： publish

1.3 方式三 ：redux  

### react-route4

1)react 插件

2）专门实现一个spa应用


## redux是什么
1.redux 是一个独立专门用于做状态管理的js库（不是 react插件库）

2.它可以用在react angular vue等项目中，但基本与react配合使用

3.作用：集中式管理react应用中多个组件共享的状态

dispatch(action) // 分发事件 1.type 2.data

Reducers // 更改state 

### react-redux
react 插件库

专门用来简化redux编写


### redux异步编程(redux 不支持异步)
下载redux插件（异步中间件）

 npm install redux-thunk --save
 
 使用上redux调试工具
 
 下载工具依赖包
 
 npm install --save-dev redux-devtools-extension
 