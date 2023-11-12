import { commonComponentProps, getAttrs } from "../../../lib/index.js";
import { Button } from "../../button/button.js";


export function BasketCard (props) {
    const { extraClasses = {}, extraAttrs = {}, baseClass = "basket-card", getCN, cardAttrs } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `<div class="${getClassName("",  extraClasses)}" ${getAttrs(extraAttrs)}>
                <div class="${getClassName("wrapper")}">
                    <div  class="${getClassName("image-wrapper")}">
                        <img class="${getClassName("image")}" src="${cardAttrs["src"]}" alt="${cardAttrs["alt"]}">
                    </div>
                    <div class="${getClassName("info-wrapper")}">
                        <span class="${getClassName("subtitle")}">${cardAttrs["subtitle"]}</span>
                        <span class="${getClassName("title")}">${cardAttrs["title"]}</span>
                        <div>
                            Регистрация на курс: <span class="${getClassName("reg-course")}">${cardAttrs["reg-date-string"]}</span>
                        </div>
                        <div>
                            Начало курса: <span class="${getClassName("start-course")}">${cardAttrs["course-start-string"]}</span>
                        </div>
                    </div>
                    ${Button({ label: "" })}
                </div>
            </div>  
            `;
}