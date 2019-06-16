import DateMan from './date-man.js';
export default customElements.define('custom-date', class CustomDate extends DateMan(HTMLElement) {

  static get observedAttributes() {
    return ['day', 'month', 'year', 'date', 'value', 'lang'];
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'})
  }

  connectedCallback() {
    if (super.connectedCallback) super.connectedCallback()
    if (!this.getAttribute('value')) {
      super.value = new Date().getTime();
    }
  }
  set lang(value) {
    super.lang = value;
    this.render()
  }
  set value(value) {
    this.setAttribute('value', value);
    super.value = value;
  };

  set day(value) {
    this.setAttribute('day', value);
    super.day = value;
  }

  set month(value) {
    this.setAttribute('month', value);
    super.month = value;
  }

  set date(value) {
    this.setAttribute('date', value);
    super.date = value;
  }

  set year(value) {
    this.setAttribute('year', value);
    super.year = value;
  }

  attributeChangedCallback(name, oldValue, value) {
    if (oldValue !== value && value) {
      this[name] = value;

      this.observer();
    }

  }

  observer() {
    if (super.day && super.date && super.month && super.year) {
      this.render()
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: flex;
        width: 140px;
      }
      .flex {
        flex: 1;
      }
      :host div, :host span {
        pointer-events: none;
      }
    </style>
    <div>${super.days[super.day]}</div>
    <span class="flex"></span>
    <div>${super.date}</div>
    -
    <div>${super.month}</div>
    -
    <div>${super.year}</div>
    `;
  }
})
