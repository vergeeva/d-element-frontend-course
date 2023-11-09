import { commonComponentProps, getAttrs } from "../../../lib/index.js";

export function promoInfo (props) {
    const { extraClasses = {}, extraAttrs = {}, baseClass = "promo-info", getCN, promoAttrs } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `<div class="${getClassName("",  extraClasses)}" ${getAttrs(extraAttrs)}>
                <div class="${getClassName("wrapper")}">
                      <span class="${getClassName("title")}">${promoAttrs["title"]}</span>
                      <div class="${getClassName("content-wrapper")}">
                          <div class="${getClassName("content-group")}">
                              <span class="${getClassName("content-text")}">${promoAttrs["content-text"]}</span>
                              <span class="${getClassName("content-subtitle")}">${promoAttrs["content-subtitle"]}</span>
                          </div>
                          <img class="${getClassName("qr")}" src="${promoAttrs["qr-src"]}" alt="qr-code">
                      </div>                   
                </div>
            </div>  
            `;
}