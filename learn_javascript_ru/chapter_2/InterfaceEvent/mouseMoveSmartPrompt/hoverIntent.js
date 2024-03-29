'use strict';

// Здесь показан набросок класса
// с возможностями, которые нам понадобятся

class HoverIntent {

  constructor({
    sensitivity = 0.1, // скорость ниже 0.1px/ms значит "курсор на элементе"
    interval = 100, // измеряем скорость каждые 100ms: определяем дистанцию между предыдущей и новой позицией.
    elem,
    over,
    out
  }) {
    this.sensitivity = sensitivity;
    this.interval = interval;
    this.elem = elem;
    this.over = over;
    this.out = out;

    // убедитесь, что "this" сохраняет своё значение для обработчиков.
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    this.trackSpeed = this.trackSpeed.bind(this);
    // назначаем обработчики
    elem.addEventListener("mouseover", this.onMouseOver);
    elem.addEventListener("mouseout", this.onMouseOut);

    // продолжите с этого места

  }

  onMouseOver(event) {
    if(this.isOverElement) return;

    this.isOverElement = true;

    this.prevX = event.pageX;
    this.prevY = event.pageY;
    this.prevTime = Date.now();

    this.elem.addEventListener("mousemove", this.onMouseMove);
    this.checkSpeedInterval = setInterval(this.trackSpeed, this.interval);
  }

  onMouseOut(event) {
    if(!event.relatedTarget || !this.elem.contains(event.relatedTarget)) {
      this.isOverElement = false;
      this.elem.removeEventListener("mousemove", this.onMouseMove);
      clearInterval(this.checkSpeedInterval);
      if(this.isHover) {
        this.out.call(this.elem, event);
        this.isHover = false;
      }
    }
  }

  onMouseMove(event) {
    this.lastX = event.pageX;
    this.lastY = event.pageY;
    this.lastTime = Date.now();
  }
  
  trackSpeed() {
    let speed;

    if(!this.lastTime || this.lastTime == this.prevTime) {
      speed = 0;
    } else {
      speed = Math.sqrt (
        Math.pow(this.prevX - this.lastX, 2) +
        Math.pow(this.prevY - this.lastY, 2)
      ) / (this.lastTime - this.prevTime);
    }

    if(speed < this.sensitivity) {
      clearInterval(this.checkSpeedInterval);
      this.isHover = true;
      this.over.call(this.elem);
    } else {
      this.prevX = this.lastX;
      this.prevY = this.lastY;
      this.prevTime = this.lastTime;
    }
  }

  destroy() {
    this.elem.removeEventListener("mousemove", this.onMouseMove);
    this.elem.removeEventListener("mouseover", this.onMouseOver);
    this.elem.removeEventListener("mouseout", this.onMouseOut);
  }

}