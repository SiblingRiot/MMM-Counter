Module.register("MMM-Counter", {
  defaults: {
    initialValue: 0,
    maxValue: 10000
  },

  start: function() {
    this.counterValue = this.config.initialValue;
  },

  getDom: function() {
    var wrapper = document.createElement("div");
    wrapper.className = "counter";

    var counterValueElement = document.createElement("span");
    counterValueElement.innerHTML = this.counterValue;

    var incrementButton = document.createElement("button");
    incrementButton.innerHTML = "+";
    incrementButton.addEventListener("click", () => {
      this.counterValue = Math.min(this.counterValue + 1, this.config.maxValue);
      counterValueElement.innerHTML = this.counterValue;
    });

    var resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset";
    resetButton.addEventListener("click", () => {
      this.counterValue = this.config.initialValue;
      counterValueElement.innerHTML = this.counterValue;
    });

    wrapper.appendChild(incrementButton);
    wrapper.appendChild(counterValueElement);
    wrapper.appendChild(resetButton);

    return wrapper;
  }
});
  
  
  
