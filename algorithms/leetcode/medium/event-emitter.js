/* 
Design an EventEmitter class. 
This interface is similar (but with some differences) to the one found in Node.js 
or the Event Target interface of the DOM. The EventEmitter should allow for 
subscribing to events and emitting them.
*/

class EventEmitter {
  events = {};

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
    return {
      unsubscribe: () => {
        this.events[eventName] = this.events[eventName].filter(
          (value) => value !== callback
        );
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (this.events[eventName]) {
      return this.events[eventName].map((callback) => callback(...args));
    }

    return [];
  }
}
