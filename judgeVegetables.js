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

const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {
  let highVal = 0
  let winnerName = ''
  let i = 0
  for (i ; i < vegetables.length; i++) {
    if (vegetables[i][metric] > highVal) {
      highVal = vegetables[i][metric]
      winnerName = vegetables[i]['submitter']
    }
  }
  return winnerName
}


console.log(judgeVegetable(vegetables, metric))