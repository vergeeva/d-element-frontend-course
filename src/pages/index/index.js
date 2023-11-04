import { getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/header.js";
import { Footer } from "../../widgets/footer/footer.js";
import {Card} from "../../shared/ui/slider/card/card.js";

export default () => {

    return getPage({
        title: "Главная",
        body: `
        ${Header()}
        <main class="main__container">
        <h1>Популярные товары</h1>
            ${
            Card({
                cardAttrs: {
                    src: "/images/comp1.png",
                    alt: "Frontend-разработчик",
                    subtitle: "Бесплатный офлайн курс",
                    title: "«Frontend-разработчик»"
                }
            })
        }
        
        </main>
        ${Footer()}
        `
    })
}
