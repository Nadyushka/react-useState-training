import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";

export type BanknotsType = 'Dollars' | 'RUBLS' | 'All'
export type MoneyType = {
    banknotes: BanknotsType
    value: number
    number: string
}


let defaultMoney: Array<MoneyType>  = [
    {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
    {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
]

// типизируем на входе и выходе
export const moneyFilter = (money: Array<MoneyType>, filter: BanknotsType): any => {
    if (filter !== 'All') {
       return money.filter((moneyType) => moneyType["banknotes"] === filter)
    }
    return money;
}

function App() {

    const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
    const [filter, setFilter] = useState<BanknotsType>('All')   // по умолчанию указываем все банкноты
    const filteredMoney = moneyFilter(defaultMoney, filter)

    return (
        <div className="App">
            <Country
                data={filteredMoney}   //отрисовать будем деньги после фильтрации
                setFilter={setFilter}  //useState передаем? Так можно было?!
                filter={filter}       //если не будем использовать, может вообще не передавать?
            />
        </div>
    );
}

// Итого: в этой компоненте у нас мозги. А вот отрисовка где-то глубже. Погружаемся в Country


export default App;
