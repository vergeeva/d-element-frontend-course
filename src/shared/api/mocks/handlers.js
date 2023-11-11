import { rest } from "msw"

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
    rest.post("/set_cart", (req, res, ctx) => {

        return res(
            // Respond with a 200 status code
            ctx.status(200),
        )
    }),

    rest.get("/user", (req, res, ctx) => {
        return res(
            ctx.status(200), ctx.json({
                username: "admin",
            }),
        )
    }),
]