import { Block } from "./Block.mjs";

export class Board {
  width;
  height;
  falling = new Block();
  row;
  column;
 

  constructor(width, height ) {
    this.width = width;
    this.height = height;
    
  }

 

  drop (anyBlock) {
    //console.log("checking this falling", this.falling)
    this.falling = anyBlock;
    console.log("get is", anyBlock.get());
    this.row=1;
    this.column=2;
    console.log('row and column 1 are', this.row, this.column)
    
  }

  hasFallen (){
    //console.log("checking this falling 4", this.falling != null)
   return ((this.falling.get()!= null))
  }

  tick(){
    this.row += 1;
    console.log("row 2 here is", this.row);
  }

  // assignSpot(row, column){

  // }

  toString() {
    let s = ""
    //console.log("checking this falling 3", this.falling.get())
    //console.log("has fallen ", this.hasFallen())
    for (let i = 1 ; i<=this.height; i++){
      for (let j = 1 ; j<=this.width; j++){
        //console.log("has fallen ", this.hasFallen())
        if (this.hasFallen() && i === this.row && j === this.column){
          s += this.falling.get();
          //console.log("s is" , s)

        }
        else{
          s  += "."
        }
         
      }
      s += "\n"  
    }
    return (s);
    
  }



}


