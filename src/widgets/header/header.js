import { commonComponentProps, getAttrs } from "../../shared/lib/index.js";
import { Logo } from "../../shared/ui/logo/logo.js";
import { Navigation } from "../../shared/ui/nav/nav.js";
export function Header(props)
{
    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "header",
        getCN
    } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod);
    return `
        <header class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-header="">
            <div class="${getClassName("logo")}"> 
                ${Logo({ imgSrc: "/icons/logo.svg" })}
            </div>
            <div class="${getClassName("nav-wrapper")}">
                ${Navigation({ navAttrs: { "/": "Главная", "/about.html": "О Нас" } })}
            </div>
        </header>
    `
}