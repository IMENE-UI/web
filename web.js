function averageOfEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    if (evenNumbers.length === 0) {
        return 0; // Return 0 if there are no even numbers to avoid division by zero
    }
    const sumOfEvenNumbers = evenNumbers.reduce((acc, num) => acc + num, 0);
    return sumOfEvenNumbers / evenNumbers.length;
}

// Example usage
const nums = [1, 2, 3, 4, 5, 6];
console.log(averageOfEvenNumbers(nums)); // Output: 4 (average of 2, 4, 6)
function longestWord(words) {
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

// Example usage
const wordsArray = ['apple', 'banana', 'cherry', 'pineapple'];
console.log(longestWord(wordsArray)); // Output: 'pineapple'
function averagePages(books) {
    if (books.length === 0) {
        return 0; // Return 0 if there are no books to avoid division by zero
    }
    const totalPages = books.map(book => book.pages).reduce((acc, pages) => acc + pages, 0);
    return totalPages / books.length;
}

// Example usage
const booksArray = [
    { title: 'Book 1', author: 'Author 1', pages: 200 },
    { title: 'Book 2', author: 'Author 2', pages: 300 },
    { title: 'Book 3', author: 'Author 3', pages: 150 }
];
console.log(averagePages(booksArray)); // Output: 216.666...
function stringFrequency(strings) {
    return strings.reduce((freq, str) => {
        freq[str] = (freq[str] || 0) + 1;
        return freq;
    }, {});
}

// Example usage
const stringsArray = ['hello', 'world', 'hello'];
console.log(stringFrequency(stringsArray)); // Output: { hello: 2, world: 1 }
function averageAge(people) {
    if (people.length === 0) {
        return 0; // Return 0 if there are no people to avoid division by zero
    }
    const totalAge = people.map(person => person.age).reduce((acc, age) => acc + age, 0);
    return totalAge / people.length;
}

// Example usage
const peopleArray = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
console.log(averageAge(peopleArray)); // Output: 30
