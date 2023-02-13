const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const judgeVegetable = function(vegetables, metric) {

  var max = 0, position = 0;
 
  for(let i = 0; i < vegetables.length; i++) {
    if(vegetables[i][metric]> max) {
      max = vegetables[i][metric];
      position = i;
    }
  }
  return vegetables[position].submitter;
}

const metric = 'plumpness'
console.log(judgeVegetable(vegetables, metric));