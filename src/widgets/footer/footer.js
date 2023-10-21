import { commonComponentProps, getAttrs } from "../../shared/lib/index.js";

export function Footer(props)
{
    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "footer",
        getCN
    } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod);
    return `
        <footer class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-footer="">
            <div class="${getClassName("caption", extraClasses)}">Футер странички</div>
        </footer>
    `
}