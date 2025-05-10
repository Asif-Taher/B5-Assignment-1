//problem 1

function formatString(input: string, toUpper?: boolean): string{
    if(toUpper  === false){
        return input.toLocaleLowerCase();
    } else{
        return input.toUpperCase();
    }
}

formatString("Hello");
formatString("Hello",true);
formatString("Hello",false);

//problem 2  

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return books.filter(book => book.rating >= 4);
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];

  //problem 3    

  function concatenateArrays<T>(...arrays: T[][]): T[]
 {
    const resutl: T[] = [];
  
    for (let i = 0; i < arrays.length; i++) {
      const firstArray = arrays[i];
      for (let j = 0; j < firstArray.length; j++) {
        resutl.push(firstArray[j]);
      }
    }
  
    return resutl;
  }
  concatenateArrays(["a", "b"], ["c"]);
  concatenateArrays([1, 2], [3, 2], [5]);

  //problem 4 

  class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    public getInfo(): string {
      return `make: ${this.make}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year); 
      this.model = model;
    }
  
    public getModel(): string {
      return `model: ${this.model}`;
    }
  }
  
  const myCar = new Car("Toyota", 2020, "Corolla");

  //problem 5  
  function processValue(value: string | number): number{

    return typeof value === "string" ? value.length : value * 2;
}
processValue("hello"); 
processValue(10); 

//problem 6 

interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    return products.length === 0
      ? null: products.reduce((max, product) => product.price > max.price ? product : max
        );
  }
  
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  getMostExpensiveProduct(products);

  //problem 7 

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    return (day === Day.Saturday | day === Day.Sunday) ? "Weekend" : "Weekday";
  }
  getDayType(Day.Monday);
  getDayType(Day.Sunday);

  //problem 8 

  async function squareAsync(a: number): Promise<number> {
    return new Promise((pos, neg) => {
      setTimeout(() => {
        if (a < 0) {
          neg(new Error("Negative number not allowed"));
        } else {
          pos(a * a);
        }
      }, 1000); 
    });
  }