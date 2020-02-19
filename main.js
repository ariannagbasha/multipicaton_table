// output the header row
document.write('<span class="cell header">&times;</span>');
for (let i = 0; i <= 10; i++) {
    document.write('<span class="cell header">' + i + '</span>');
    for(let j = 0; j <= 10; j++) {
        document.write('span class="cell"' + i*j + '</span>')
    }
    document.write('<br>');
}

// TODO: Write two nested for loops to output the rest of the multiplication table

