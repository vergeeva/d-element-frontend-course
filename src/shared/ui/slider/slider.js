import { commonComponentProps, getAttrs } from "../../lib/index.js";
import {Card} from "./card/card.js";

export function Slider (props) {
    const { label = "", extraClasses = {}, extraAttrs = {}, baseClass = "btn", getCN, cardsInfo } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    let cardsHtml = ``;
    Object.entries(cardsInfo).forEach(
        ([ key, value ]) =>
        {
            cardsHtml += `            ${
                Card({
                    cardAttrs: {
                        src: "/images/comp1.png",
                        alt: "Frontend-разработчик",
                        subtitle: "Бесплатный офлайн курс",
                        title: "«Frontend-разработчик»"
                    }
                })
            }`
        }
    )

    return `<div class="${getClassName("",  extraClasses)}" ${getAttrs(extraAttrs)}>
                ${children || `<span class="${getClassName("label")}">${label}</span>`}
            </div>   
            `;
}