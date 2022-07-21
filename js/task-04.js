class Counter {
  refs = {};
  constructor(containerSelector) {
    this.refs.container = document.querySelector(containerSelector);
    this.refs.btnDecr = this.refs.container.querySelector(
      '[data-action="decrement"]',
    );
    this.refs.btnIncr = this.refs.container.querySelector(
      '[data-action="increment"]',
    );
    this.refs.counter = this.refs.container.querySelector('#value');
    this.counterValue = 0;
    this.render();
    this.refs.container.addEventListener('click', this.eventHandler.bind(this));
  }
  eventHandler(event) {
    switch (event.target.dataset.action) {
      case 'decrement':
        this.counterValue -= 1;
        break;
      case 'increment':
        this.counterValue += 1;
        break;
      default:
        return;
    }
    this.render();
  }
  render() {
    this.refs.counter.textContent = this.counterValue;
  }
}
new Counter('#counter');
