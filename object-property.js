const students = [
    {id: 113, name: 'Ifti'},
    {id: 121, name: 'sinha'},
    {id:133, name:'saha'}
];

const name=students.map(s=>s.name);
const ids=students.map(s=>s.id);
const olders=students.map(s=>s.id>113);
const olderOne=students.find(s=>s.id>113);
console.log(olderOne);