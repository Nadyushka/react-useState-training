import React from 'react';
import {CurrentBankomat} from "./CurrentBankomat";
import {MoneyType} from "./App";

type CityPropsType = {
    data: Array<MoneyType>
}

export const City = (props: CityPropsType) => {

    const mappedMoney = props.data.map((elem: MoneyType, index) => {
        return (
            <CurrentBankomat money={elem}/>
        )
    })


    // пока это пропускам
    // const mappedMoney = props.data.map((el: MoneyType, index) => (
    //      return <li key={index}>
    //             / <div>{elem.banknotes}</div>
    //             <div>{elem.value}</div>
    //             <div>{elem.number}</div>
    //         </li>
    // ))


    return (
        <div>
            <div>Ну все парни, мапимся -выводим наши денюжки</div>
            <div>На верстку ПОКА не обращаем внимания , сейчас занимаемся логикой</div>
            <div>{mappedMoney}</div>
        </div>
    );
};
//1
// Вроде все норм, но нужно причесать код. Давайте создадим const mappedMoney = props.data.map(el=>el...)
// Т.е. нам нужно вынести map из вертски, оставив в верстке только mappedMoney

//2
// Отлично, но теперь давайте совсем все сделаем по красоте. Вынесем верстку в отдельную компоненту и ее замапим!
// Ну и наконец давайте версточку натянем, для этого будем использовать StyledComponents
// yarn add styled-components
// yarn add @types/styled-components

//3
// Вроде все норм, ну точнее почти норм- дублирование-это грех. Хотелось бы от него избавиться.
// И StyledComponents нам в этом отлично поможет, ведь он может принимать пропсы!
// Как это сделать в документашке