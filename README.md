# hy-worker

A web worker is dynamically encapsulated based on the blob object, and some functions with a relatively large amount of calculation can be converted into a webworker to execute. Prevent blocking the main thread.

基于 blob 对象动态封装一个 web worker,可以对一些计算量比较大的函数，转换为 webworker 去执行。防止阻塞主线程。

```
import worker from "hy-worker"

function test(a,b){
  return a+b
}
worker(test,[a,b]).then((res)=>{console.log(res)})


```
