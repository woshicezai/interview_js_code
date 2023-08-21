/**
 * 观察者和订阅通知两种模式
 * 观察者：没有中间角色
 * 订阅通知：有中间角色，可以做一些额外逻辑，例如通知过滤
 */

/**
 * 观察者
 */

let subject = {
  observers: [],
  notify() {
    this.observers.forEach((observer) => observer.update());
  },
  attach(observer) {
    this.observers.push(observer);
  },
};

let observer = {
  update() {
    console.log("update");
  },
};

subject.attach(observer);
subject.notify();

/**
 * 订阅观察
 */
let pubulisher = {
  publish(pubsub) {
    pubsub.publish();
  },
};

let subscriber = {
  update() {
    console.log("update");
  },
  subscriber(pubsub) {
    pubsub.subscriber(this);
  },
};

let pubsub = {
  subscribers: [],
  publish() {
    this.subscribers.forEach((subscriber) => subscriber.update());
  },
  subscriber(subscriber) {
    this.subscribers.push(subscriber);
  },
};

subscriber.subscriber(pubsub);
pubulisher.publish(pubsub);
