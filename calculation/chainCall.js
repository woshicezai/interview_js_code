class PlayBoy {
  constructor() {
    this.queue = [];
    //!! bind this 这个很重要，否则在next函数里的this就指向了setTimeout的环境
    setTimeout(this.next.bind(this), 0);
  }
  sayHi() {
    this.queue.push(() => {
      console.log("hi");
      this.next();
    });
    return this;
  }
  play(name) {
    this.queue.push(() => {
      console.log("play" + name);
      this.next();
    });
    return this;
  }

  sleep(timeout) {
    this.queue.push(() => {
      setTimeout(() => {
        this.next();
      }, timeout);
    });
    return this;
  }

  next() {
    const callback = this.queue.shift();
    callback && callback();
  }
}

const boy = new PlayBoy("Tom");
boy.sayHi().sleep(1000).play("王者").sleep(1000).play("跳一跳");
