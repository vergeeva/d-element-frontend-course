import { getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/header.js";
import { Footer } from "../../widgets/footer/footer.js";
import { Filter } from "../../widgets/filter/filter.js";
import {Card} from "../../shared/ui/slider/card/card.js";

export default () => {
    let filterItems = [
        {
            "filter-id": 0,
            "filter-name": "Все курсы"
        },
        {
            "filter-id": 1,
            "filter-name": "Бэкенд-разработка"
        },
        {
            "filter-id": 2,
            "filter-name": "Веб-разработка"
        },
        {
            "filter-id": 3,
            "filter-name": "Мобильная разработка"
        },
        {
            "filter-id": 4,
            "filter-name": "Анализ данных"
        },
        {
            "filter-id": 5,
            "filter-name": "IT-инфраструктура"
        },
        {
            "filter-id": 6,
            "filter-name": "Управление разработкой"
        }
    ];
    let cardsCatalog = [
        {
            "src": "/images/comp.png",
            "alt": "Заставка курса",
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Frontend-разработчик»"
        },
        {
            "src": "/images/comp1.png",
            "alt": "Заставка курса",
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Project manager»"
        },
        {
            "src": "/images/green.png",
            "alt": "Заставка курса",
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Frontend-разработчик»"
        },
        {
            "src": "/images/img.png",
            "alt": "Заставка курса",
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Project manager»"
        },
        {
            "src": "/images/comp.png",
            "alt": "Заставка курса",
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Frontend-разработчик»"
        },
        {
            "src": "/images/green.png",
            "alt": "Заставка курса",
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Frontend-разработчик»"
        },
        {
            "src": "/images/img.png",
            "alt": "Заставка курса",
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Project manager»"
        },
        {
            "src": "/images/comp1.png",
            "alt": "Заставка курса",
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Frontend-разработчик»"
        },
        {
            "src": "/images/comp1.png",
            "alt": "Заставка курса",
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Project manager»"
        },
        {
            "src": "/images/green.png",
            "alt": "Заставка курса",
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Frontend-разработчик»"
        },
        {
            "src": "/images/img.png",
            "alt": "Заставка курса",
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Project manager»"
        },
        {
            "src": "/images/comp.png",
            "alt": "Заставка курса",
            "subtitle": "Бесплатный офлайн курс",
            "title": "«Frontend-разработчик»"
        },
    ];

    let cardsHtml = ``;
    for (let i = 0; i < cardsCatalog.length; i++)
    {
        cardsHtml += `${
            Card({
                cardAttrs: {
                    src: cardsCatalog[i]["src"],
                    alt: cardsCatalog[i]["alt"],
                    subtitle: cardsCatalog[i]["subtitle"],
                    title: cardsCatalog[i]["title"]
                }
            })
        }`
    }
    return getPage({
        title: "Каталог",
        body: `
        ${Header()}
        <main class="main__container">
        <h1 class="page-header">Каталог</h1>
        <div class="catalog__filter-wrapper">
                ${Filter({
            filterAttrs: filterItems
        })}
        <div class="catalog__cards-wrapper">
            ${cardsHtml}
        </div>
        </div>
        </main>
        ${Footer()}
        `
    })
}
