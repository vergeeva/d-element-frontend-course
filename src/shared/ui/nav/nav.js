import { commonComponentProps, getAttrs } from "../../lib/index.js";
export function Navigation(props)
{
    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "nav",
        getCN,
        navAttrs = {}
    } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

    let navItems = "";
    Object.entries(navAttrs).forEach(
        ([ key, value ]) =>
        {
            navItems += `<li class="${getClassName("item")}">
                            <a href="${key}" class="${getClassName("link")}" >${value}</a>
                        </li>`
        }
    )

    return `
            <nav class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
                <ul class="${getClassName("items", extraClasses)}">
                    ${navItems}              
                </ul>
            </nav>
    `
}