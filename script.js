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
        },
        //this is keypress event js 
       keypressfunction: function(){  // this is for only known that is keypress event
   console.log("subrat this is keypress event..");
   },
   keypressfunction: function(event){  //this is for know that which key we press
     console.log(event)
   },
   keypressfunction: function(event){  //this is for know how many key we press in only key not given his details 
     console.log(event.key);
   },
   keyupfunction: function(){
    console.log("subrat this is keyup event")
   },
   keydownfunction: function(event){
     console.log(event)
   } 
    }
});
