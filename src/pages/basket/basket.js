import { getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/header.js";
import { Footer } from "../../widgets/footer/footer.js";

export default () => {
    let cardsBasket = [
        {
            "cardId": 1,
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Frontend-разработчик»",
            "reg-date-string": "18.08.2023 - 24.09.2023",
            "course-start-string": "26.09.2023",
        },
        {
            "cardId": 2,
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Project manager»",
            "reg-date-string": "18.08.2023 - 24.09.2023",
            "course-start-string": "26.09.2023",
        },
        {
            "cardId": 3,
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
         </main>
         ${Footer()}
        `
    })
}