// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numPages, timesCheckedOut, isDiscarded) {
        this.title = title,
            this.author = author,
            this.copyrightDate = copyrightDate,
            this.isbn = isbn,
            this.numPages = numPages,
            this.timesCheckedOut = timesCheckedOut,
            this.isDiscarded = isDiscarded
    }
    checkout(uses = 1) {
        this.timesCheckedOut += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numPages, timesCheckedOut, isDiscarded) {
        super(title, author, copyrightDate, isbn, numPages, timesCheckedOut, isDiscarded);
    }
    dispose(currentYear) {
        if (currentYear - this.copyrightDate > 5) {
            this.isDiscarded = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numPages, timesCheckedOut, isDiscarded) {
        super(title, author, copyrightDate, isbn, numPages, timesCheckedOut, isDiscarded);
    }
    dispose() {
        if (this.timesCheckedOut > 100) {
            this.isDiscarded = 'Yes';
        }
    }
}



// Declare the objects for exercises 2 and 3 here:
let goodRead = new Novel('Pride and Prejudice','Jane Austen',1813,'1111111111111',432,32,'No');
let makingTheShip = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

// Code exercises 4 & 5 here:
makingTheShip.dispose(2024);
goodRead.checkout(5);
goodRead.dispose();

console.log(makingTheShip);
console.log(goodRead);