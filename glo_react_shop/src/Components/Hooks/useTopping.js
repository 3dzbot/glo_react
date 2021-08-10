import { useState } from 'react';

/*
чтобы вернуть обьект "кудрявые скобки" оборачиваем круглыми скобками
чтоб скрипт не подумал что это блок кода
*/
const getTopping = toppings => toppings ? toppings.map(item => ({
    name: item, 
    checked: false
})) : false;

export function useToppings(openItem) {
    const [ toppings, setToppings ] = useState(getTopping(openItem.toppings));

    const checkToppings = index => {
        setToppings(toppings.map((item, i) => {
            /* интвертируем значение */
            if(i === index) {
                item.checked = !item.checked
            }
            return item;
        }))
    }
    return  { toppings, checkToppings }
}