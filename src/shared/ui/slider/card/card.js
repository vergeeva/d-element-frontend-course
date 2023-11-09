import { commonComponentProps, getAttrs } from "../../../lib/index.js";
import { Button } from "../../button/button.js";

export function Card (props) {
    const { extraClasses = {}, extraAttrs = {}, baseClass = "card", getCN, cardAttrs } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `<div class="${getClassName("",  extraClasses)} swiper-slide" ${getAttrs(extraAttrs)}>
                <div class="${getClassName("wrapper")}">
                    <div  class="${getClassName("image-wrapper")}">
                        <img class="${getClassName("image")}" src="${cardAttrs["src"]}" alt="${cardAttrs["alt"]}">
                    </div>
                    <div class="${getClassName("info-wrapper")}">
                        <span class="${getClassName("subtitle")}">${cardAttrs["subtitle"]}</span>
                        <span class="${getClassName("title")}">${cardAttrs["title"]}</span>
                    </div>
                    ${Button({ label: "В корзину" })}
                </div>
            </div>  
            `;
}