# B5-Assignment-1


Blog


Question 1: What are some differences between interfaces and types in TypeScript?

Answer: Interface and type are used in TypeScript to know about the object shape. There are some differences between the Interface and types.

Interface: 
We can extend the interface and add the new property also.
Basically, an interface is used to define an object structure.
Interface can’t do a direct union type.
If you declare the same interface more than once, it gets merged.
Most of the time, interfaces use object structure and class design

Types:
In the types, we can’t use the same name multiple times, so it gives an error.
Object, union, intersection, primitive- use for all of the types.
Type can’t extend. But the syntax can be a little different and complicated.
Most of the case types use complex type composition.


Question 2.

2. What is the use of the keyof keyword in TypeScript? Provide an example.
Answer: keyof is a utility keyword in TypeScript that creates a union type of all keys of an object type.
When will you use TypeScript?
You want to access a specific property of an object, but you want to keep it type-safe.
Example : 
type Product = {
  id: number;
  name: string;
  price: number;
};

function getProductProperty(product: Product, key: keyof Product) {
  return product[key];
}

const product1: Product = {
  id: 101,
  name: "Wireless Mouse",
  price: 850,
};


