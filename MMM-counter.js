Module.register("manual-counter", {
  defaults: {
    initialValue: 0,
    maxValue: 1000,
    localStorageKey: "manual-counter-value"
  },

  start: function() {
    this.loadCounterValue();
  },

  getDom: function() {
    var wrapper = document.createElement("div");
    wrapper.className = "counter";

    var counterValueElement = document.createElement("span");
    counterValueElement.innerHTML = this.counterValue;
    
    var incrementButton = document.createElement("button");
    incrementButton.innerHTML = "+";
    
    var resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset";
    
    wrapper.appendChild(incrementButton);
    wrapper.appendChild(counterValueElement);
    wrapper.appendChild(resetButton);
    
    incrementButton.addEventListener("click", () => {
      this.incrementCounter();
      counterValueElement.innerHTML = this.counterValue;
    });

    resetButton.addEventListener("click", () => {
      this.resetCounter();
      counterValueElement.innerHTML = this.counterValue;
    });
    
    return wrapper;
  },

  incrementCounter: function() {
    this.counterValue = Math.min(this.counterValue + 1, this.config.maxValue);
    localStorage.setItem(this.config.localStorageKey, this.counterValue);
  },

  resetCounter: function() {
    this.counterValue = this.config.initialValue;
    localStorage.setItem(this.config.localStorageKey, this.counterValue);
  },

  loadCounterValue: function() {
    var savedValue = localStorage.getItem(this.config.localStorageKey);
    this.counterValue = savedValue ? parseInt(savedValue) : this.config.initialValue;
  }

});
  
  
  
