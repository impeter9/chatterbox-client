var Friends = {

  storage: [],
  
  toggleStatus: function () {
    return true;
  },

};

$('.username').on('click', Friends.toggleStatus);