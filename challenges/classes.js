// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.



/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order 
//to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker {
    constructor(obj) {
        this.length = obj.length;
        this.width = obj.width;
        this.height = obj.height;
    }

    volume() {
        return(this.length * this.width * this.height);
    }

    surfaceArea() {
        return(2 * (this.length*this.width + this.length*this.height + this.width*this.height));
      }
  }

  ////////////////////  Stretch task: subclass CubeMaker /////////////////////
  
  class CubeMaker extends CuboidMaker {
      constructor(obj) {
          super(obj);
      }

      volume() {
          return(this.length * this.length * this.length);
      }

      surfaceArea() {
          return(6 * this.length * this.length)
      }
  }

  /////////////////     end of stretch Task         /////////////////////////////

  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
 console.log("************* MVP task ******************")
  
  cuboid = new CuboidMaker({length: 4,width: 5,height: 5});
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130

  
  console.log("************* Stretch task: testing for a cube 10x10x10 ******************")

  cube = new CubeMaker({length: 10,width: 10,height: 10});
  console.log(`volume: ${cube.volume()}`);
  console.log(`surface: ${cube.surfaceArea()}`);
