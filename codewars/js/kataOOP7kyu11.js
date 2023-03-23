/* For this exercise you will be strengthening your page-fu mastery. 
You will complete the PaginationHelper class,
which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values 
and an integer indicating how many items will be allowed per each page. 
The types of values contained within the collection/array are not relevant. 
*/

function PaginationHelper(collection, itemsPerPage){
  let arr = [];
  let page = [];
  let count = 0;
  for (let item of collection) {
    page.push(item)
    count += 1;
    if( count === itemsPerPage ||
    collection.indexOf(item) + 1 === collection.length ) {
      arr.push(page)
      count = 0
      page = [];
    }
  }
  let obj = {
    thisObj: collection,
    lengthObj: arr.length,
    thisObjectWithPage: arr
  }
  this.prototype = obj
  return this
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  console.log(this.prototype.thisObj.length)
  return this.prototype.lengthObj;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  console.log(this.prototype.thisObjectWithPage.length)
  return this.prototype.thisObj.length;

}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if(!this.prototype.thisObjectWithPage[pageIndex]) {
    return -1;
  }
  return this.prototype.thisObjectWithPage[pageIndex].length;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  let count = 0;
  console.log(this.prototype.thisObjectWithPage.length)
  for (let i = 0; i < this.prototype.thisObjectWithPage.length; i += 1) {
    for(let j = 0; j < this.prototype.thisObjectWithPage[i].length; j += 1) {
      
      if(count === itemIndex) return i;
      count += 1
    }
  }
  return -1;
}

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
var helper = new PaginationHelper([
  1,  2,  3,  4,  5,  6,  7,  8,
  9, 10, 11, 12, 13, 14, 15, 16,
 17, 18, 19, 20, 21, 22, 23, 24
], 10);
console.log(helper.pageCount()); //should == 2
console.log(helper.itemCount()); //should == 6
console.log(helper.pageItemCount(0)); //should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(0)); //should == 1 (zero based index)
console.log(helper.pageIndex(2)); //should == 0
console.log(helper.pageIndex(20)); //should == -1
console.log(helper.pageIndex(-10)); //should == -1

// better solution 1:
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection, this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  return pageIndex < this.pageCount() 
    ? Math.min(this.itemsPerPage, this.collection.length - pageIndex * this.itemsPerPage)
    : -1;
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  return itemIndex < this.collection.length && itemIndex >= 0
    ? Math.floor(itemIndex / this.itemsPerPage)
    : -1;
}
//better solution 2:
