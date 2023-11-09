import { commonComponentProps, getAttrs } from "../../shared/lib/index.js";

export function Filter(props)
{
    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "filter",
        getCN,
        filterAttrs = []
    } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod);
    let filterHtml = `<button class="${getClassName("accept-button")} ${getClassName("active_filter")}" id=${filterAttrs[0]["filter-id"]}>
            ${filterAttrs[0]["filter-name"]}
        </button> `;
    for (let i = 1; i < filterAttrs.length; i++)
    {
        filterHtml += `<button class="${getClassName("accept-button")}" id=${filterAttrs[i]["filter-id"]}>
            ${filterAttrs[i]["filter-name"]}
        </button> `;
    }
    return `
        <section class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-footer="">
           <div class="${getClassName("wrapper")}">
                ${filterHtml}
            </div>
        </section>
    `
}