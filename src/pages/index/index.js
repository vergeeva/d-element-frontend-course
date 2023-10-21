import { getPage } from "../../shared/lib/index.js";
import { Button } from "../../shared/ui/button/button.js";
import { Header } from "../../widgets/header/header.js";
import { Footer } from "../../widgets/footer/footer.js";

export default () => {

    return getPage({
        title: "Главная",
        body: `
        ${Header()}
        <main class="main-container">
        <h1>Главная страница</h1>
            ${Button({
            label: "Нажми на меня!",
            extraAttrs: {
                "data-js-require": true,
                "id": "btn"
            },
            extraClasses: {
                isHidden: false,
                isDisabled: false,
            }
            })}
        </main>
        ${Footer()}
        `
    })
}
