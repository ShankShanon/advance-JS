const students = [
    {id: 21, name: 'omor Sunny'},
    {id: 25, name: 'Manna'},
    {id: 31, name: 'Salman'},
    {id: 29, name: 'Dipjol'}

];
const names = students.map(s => s.name);
const id = students.map (s => s.id);
const bigger = students.filter (s => s.id> 25);
const biggerOne = students.find( s => s.id> 22);
console.log(biggerOne);


// for(var i = 0; i < students.length; i++)