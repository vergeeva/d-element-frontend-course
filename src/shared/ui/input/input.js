import { commonComponentProps, getAttrs } from "../../lib/index.js";

export function Input (props) {
    const { placeholder = "", extraClasses = {}, extraAttrs = {}, baseClass = "inputEl", getCN, children } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `<input class="${getClassName("",  extraClasses)}" ${getAttrs(extraAttrs)}
                placeholder="${placeholder} ${children ? children : ""}">
           `;
}