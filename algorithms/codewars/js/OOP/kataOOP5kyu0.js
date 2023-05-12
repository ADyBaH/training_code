/*
For this exercise you will be strengthening your page-fu mastery.
You will complete the PaginationHelper class,
which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an
integer indicating how many items will be allowed per each page.
The types of values contained within the collection/array are not relevant.
*/

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  console.log(collection, itemsPerPage)
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
  return this.prototype.thisObj.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return this.prototype.thisObjectWithPage.length;

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