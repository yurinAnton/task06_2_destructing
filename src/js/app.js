// TODO: write your code here

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]	
}


const specialObj = {...character.special};

const extractArr = function (specialObj) {
  for (let prop in specialObj) {
      if (!prop.description) {
        Object.setPrototypeOf(specialObj, description = "Описание не доступно")
      } 
    }
    return specialObj;
}


// console.log(extractArr())

