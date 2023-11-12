import { rest } from "msw"
import { addGoodsToCart } from "../../../features/events/addGoodsToCart.js";

export const handlers = [
    rest.get("/api/get_popular_goods", (req, res, ctx) => {

        return res(
            // Respond with a 200 status code
            ctx.status(200), ctx.json({
                cards: [
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
                ]
            })
        )
    }),
    rest.get("/api/get_filter_params", (req, res, ctx) => {

        return res(
            // Respond with a 200 status code
            ctx.status(200), ctx.json([
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
            ])
        )
    }),
    rest.get("/api/get_cards_catalog", (req, res, ctx) => {

        return res(
            // Respond with a 200 status code
            ctx.status(200), ctx.json([
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
            ])
        )
    }),
    rest.get("/api/get_goods_in_cart", (req, res, ctx) => {

        return res(
            // Respond with a 200 status code
            ctx.status(200), ctx.json([
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
            ])
        )
    }),
    rest.post("/api/add_course_to_cart", async (req, res, ctx) => {

        let course_id = await req.json().id;
        addGoodsToCart(course_id);

        return res(
            // Respond with a 200 status code
            ctx.status(200), ctx.json({ "basket": courses })
        )
    }),

]

let courses = [];