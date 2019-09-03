var myapp = new Vue({   //event Handling in vue js
    el: "#my-app",
    data:{
  counter: 0,
        x:0,
        y:0
   
    },
    methods:{
        increment: function(inc){
        this.counter = this.counter + inc;
        },
          decrement: function(desc){
          this.counter = this.counter - desc;
        },
         movefunction : function(event){
         this.x = event.offsetX;
         this.y = event.offsetY;
       },
          overfunction : function(){
          console.log("this is message of mouse over");
        },
         outfunction : function(){
         console.log("This is due to message of mouse out ")
        }
    }
});
