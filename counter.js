Module.register("counter", {
    start: function() {
      this.counter = 0;
    },
  
    getDom: function() {
      var wrapper = document.createElement("div");
      wrapper.innerHTML = this.counter;
      return wrapper;
    },
  
    notificationReceived: function(notification, payload) {
      if (notification === "INCREMENT_COUNTER") {
        this.counter += payload;
        this.updateDom();
      }
    }
  });

  
  
  