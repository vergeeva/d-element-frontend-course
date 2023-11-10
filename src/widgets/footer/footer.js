import { commonComponentProps, getAttrs } from "../../shared/lib/index.js";
import { Navigation} from "../../shared/ui/nav/nav.js";

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
           <div class="${getClassName("nav-wrapper")}">
                ${Navigation({
                    navAttrs: {
                        "courses": "Курсы",
                        "about-us": "О нас",
                        "feedback": "Отзывы",
                        "contacts": "Контакты",
                    },
                })}
                <a class="${getClassName("agreement")}">Политика конфиденциальности</a>
            </div>
            <hr class="${getClassName("decorative-line")}">
            <div class="${getClassName("contacts")}">
                <div class="${getClassName("address")}">
                    <span class="${getClassName("address-title")}">Наш адрес</span>
                    <span>г. Челябинск, ул. Лесопарковая 5/2</span>                   
                </div>
                <div class="${getClassName("email")}">
                    <span class="${getClassName("email-title")}">Эл. почта</span>
                    <span>info@d-element.ru</span>                   
                </div>
            </div>
        </footer>
    `
}