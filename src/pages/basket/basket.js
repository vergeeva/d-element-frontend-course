import { getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/header.js";
import { Footer } from "../../widgets/footer/footer.js";
import { BasketCardsList } from "../../shared/ui/basket/cards_list/cards.js";
import { TotalCart } from "../../shared/ui/basket/total-card/total.js";

export default () => {
    let cardsBasket = [
        {
            "cardId": 1,
            "src": "/images/comp.png",
            "alt": "Заставка курса",
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Frontend-разработчик»",
            "reg-date-string": "18.08.2023 - 24.09.2023",
            "course-start-string": "26.09.2023",
        },
        {
            "cardId": 2,
            "src": "/images/green.png",
            "alt": "Заставка курса",
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Project manager»",
            "reg-date-string": "18.08.2023 - 24.09.2023",
            "course-start-string": "26.09.2023",
        },
        {
            "cardId": 3,
            "src": "/images/comp1.png",
            "alt": "Заставка курса",
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Project manager»",
            "reg-date-string": "18.08.2023 - 24.09.2023",
            "course-start-string": "26.09.2023",
        },
    ];
    let totalBasket =
        {
            "countOfGoods": 3,
            "goodsPrice": 24000,
            "promoCode": "",
            "finalPrice": 24000
        }

    return getPage({
        title: "Корзина",
        body: `
        ${Header()}      
         <main class="main__container">
            <h1 class="page-header">Корзина</h1>
            <div class="basket-container">
             ${BasketCardsList({ cardsInfo: cardsBasket })}
            ${TotalCart({ CartValues: totalBasket })}
            </div>
            <a class="link-to-catalog" href="catalog.html">Продолжить покупки</a>
         </main>
         ${Footer()}
        `
    })
}