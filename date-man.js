
export default Base => {
  if (!Base) Base = class {
    constructor() {
      // super()
    }
  }
  return class DateMan extends Base {
    constructor() {
      super()
    }
    // connectedCallback() {
    //   if (super.connectedCallback) super.connectedCallback()
    // }
    get months() {
       return  ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
     }

     get days() {
       if (this.lang === 'nl') return ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
       return ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
     }
    set lang(value) {
      this._lang = value;
    }

    get lang() {
      return this._lang;
    }

    set value(value) {
      this._value = value;
      this.setAttribute('value', value);
      const date = new Date(Number(value));
      this.day = date.getDay();
      this.date = date.getDate();
      this.month = date.getMonth();
      this.year = date.getFullYear();
    };

    set day(value) {
      this._day = value;
      this.setAttribute('day', value);
    }

    set month(value) {
      this._month = value;
    }

    set date(value) {
      this._date = value;
    }

    set year(value) {
      this._year = value;
    }

    get day() {
      return this._day;
    }

    get month() {
      return this._month;
    }

    get date() {
      return this._date;
    }

    get year() {
      return this._year;
    }

    next(day) {
      if (typeof day === 'string') day = this.days.indexOf(day);
      const date = new Date(Number(this._value));
      if (day === date.getDay()) {
        this.value = date.setDate(date.getDate() - date.getDay() + 7 + day)
      } else {
        this.value = date.setDate(date.getDate() - date.getDay() + day)
      }

    }

  }
}
