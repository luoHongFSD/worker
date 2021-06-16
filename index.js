function worker(fn, parameter) {
  return new Promise((resolve) => {
    const blob = new Blob(
      [
        `${fn.toString()} 
     onmessage = (e)=>{
      postMessage(${fn.name}(...e.data));
     }   
   `,
      ],
      { type: "text/javascript" }
    );
    const url = URL.createObjectURL(blob);
    const worker = new Worker(url);
    worker.postMessage(parameter);
    worker.onmessage = (event) => {
      resolve(event.data);
      worker.terminate();
    };
  });
}

export default worker;
