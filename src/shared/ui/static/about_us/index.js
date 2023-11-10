import { commonComponentProps, getAttrs } from "../../../lib/index.js";

export function aboutInfo (props) {
    const { extraClasses = {}, extraAttrs = {}, baseClass = "about-info", getCN, infoAttrs } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    let blocksHtml = "";
    for (let i = 0; i < infoAttrs["blocks"].length; i++)
    {
        blocksHtml += `
            <span class="${getClassName("block-title")}">
                ${infoAttrs["blocks"][i]["title"]}
            </span> 
            <span class="${getClassName("block-caption")}">
                ${infoAttrs["blocks"][i]["caption"]}
            </span>
        `;
    }
    return `<div class="${getClassName("",  extraClasses)}" ${getAttrs(extraAttrs)}>
                <div class="${getClassName("wrapper")}">
                      <span class="${getClassName("title")}">${infoAttrs["title"]}</span>
                      ${blocksHtml}
                </div>
            </div>  
            `;
}