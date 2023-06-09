/**
 * web_worker的缓存池
 */
class WorkerPool {
  constructor(workerScript, poolSize) {
    this.workerScript = workerScript;
    this.poolSize = poolSize || navigator.hardwareConcurrency || 4;
    this.workers = [];
    this.tasksQueue = [];

    for (let i = 0; i < this.poolSize; i++) {
      this.workers.push(this.createWorker());
    }
  }

  createWorker() {
    const worker = new Worker(this.workerScript);
    worker.isBusy = false;
    worker.onmessage = (event) => {
      const task = worker.currentTask;
      if (task && task.onDone) {
        task.onDone(event.data);
      }
      this.processNextTask(worker);
    };
    return worker;
  }

  processNextTask(worker) {
    if (this.tasksQueue.length > 0) {
      const task = this.tasksQueue.shift();
      worker.currentTask = task;
      worker.postMessage(task.data);
    } else {
      worker.isBusy = false;
    }
  }

  runTask(data, onDone) {
    const freeWorker = this.workers.find((worker) => !worker.isBusy);
    if (freeWorker) {
      freeWorker.isBusy = true;
      freeWorker.currentTask = { data, onDone };
      freeWorker.postMessage(data);
    } else {
      this.tasksQueue.push({ data, onDone });
    }
  }
}

// 创建一个包含 4 个 Web Workers 的线程池
const workerPool = new WorkerPool("worker-script.js", 4);

// 运行任务
workerPool.runTask({ data: "task-1" }, (result) => {
  console.log("Task 1 result:", result);
});

workerPool.runTask({ data: "task-2" }, (result) => {
  console.log("Task 2 result:", result);
});
