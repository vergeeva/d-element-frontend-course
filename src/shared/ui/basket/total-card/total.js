import { commonComponentProps, getAttrs } from "../../../lib/index.js";
import { Button } from "../../button/button.js";
import { Input } from "../../input/input.js";

export function TotalCart (props) {
    const { extraClasses = {}, extraAttrs = {}, baseClass = "totalCart", getCN, CartValues = {} } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `<div class="${getClassName("",  extraClasses)}" ${getAttrs(extraAttrs)}>
                <div class="${getClassName("wrapper")}">
                <span class="${getClassName("title")}">Итого</span>
                    <div class="${getClassName("values")}">
                        ${CartValues["countOfGoods"]} товара <span class="${getClassName("price")}">${CartValues["goodsPrice"].toLocaleString()} ₽</span>
                    </div>
                    <div class="${getClassName("input-promo-code")}">
                    <label for="">Промокод</label>
                        ${Input({ placeholder: "Введите промокод" })}
                    </div>
                    <hr>
                    <div  class="${getClassName("values")}">
                        Итоговая сумма: <span class="${getClassName("final-price")}">${CartValues["finalPrice"].toLocaleString()} ₽</span>
                    </div>
                    <div class="${getClassName("btn-container")}">
                         ${Button({ label: "Оформить заказ" })}
                    </div>
                </div>
            </div>  
            `;
}