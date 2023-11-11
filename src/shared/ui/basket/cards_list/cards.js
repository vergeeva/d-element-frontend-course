import { commonComponentProps, getAttrs } from "../../../lib/index.js";
import { BasketCard } from "../card/card.js";


export function BasketCardsList (props) {
    const { cardsInfo = [], extraClasses = {}, extraAttrs = {}, baseClass = "basket-cards", getCN } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    let cardsHtml = ``;
    for (let i = 0; i < cardsInfo.length; i++)
    {
        cardsHtml += `${
            BasketCard({ cardAttrs: cardsInfo[i] })
        }`
    }

    return `<div class="${getClassName("", extraClasses)} " ${getAttrs(extraAttrs)}>
                 <div class="${getClassName("container")}"> 
                      ${cardsHtml}
                 </div>
            </div>
            `;
}