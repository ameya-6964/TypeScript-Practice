//! Since We Initialised It With types It Will Automatically Assume Its Type
//! We Dont Have T0 Explicitly Annotate
let sales = 123_456_789;
let course = "typescript";
let is_published = true;

//! Typescript Compiler Assume it As Any as We Have Not Initialised It
let level;

//! Use This Any Type With Caution
function render(document: any) {
  console.log(document);
}
