import { getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/header.js";
import { Footer } from "../../widgets/footer/footer.js";
import { Slider } from "../../shared/ui/slider/slider.js";
import { aboutInfo } from "../../shared/ui/static/about_us/index.js";
import { promoInfo } from "../../shared/ui/static/promo_info/index.js";


export default () => {
    let cards = [
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
    ];
    let aboutInfoAttrs = {
        "title": "О нас",
        "blocks": [
            { "title": "> 100 сотрудников",
                "caption": "Аттестованных middle и senior разработчиков со всеми необходимыми " +
                    "компетенциями для создания качественных продуктов, которые занимают призовые места " +
                    "на всероссийских и международных конкурсах." },
            { "title": "Своя диджитал академия",
                "caption": "Курсы по основам управления проектами, веб-разработки, программированию. " +
                    "Много практики, основанной на проектах нашей компании, познавательные лекции и " +
                    "море интерактива." }

        ]
    }
    let promoInfoAttrs = {
        "title": "Как пройти курс",
        "content-text": "Записывайтесь и получайте новые знания! Делайте репост и отправляйте друзьям, которым эта новость будет полезна.",
        "content-subtitle": "Ждем вас на наших курсах!",
        "qr-src": "/images/qr.png"
    }

    return getPage({
        title: "Главная",
        body: `
        ${Header()}
        <main class="main__container with-ellipse-bg">
        <h1 class="page-header">Популярные товары</h1>
            ${
            Slider({
                baseClass: "courses-slider",
                cardsInfo: cards
            })
        }  
        <div class="index__static-wrapper">
            ${aboutInfo(
            { infoAttrs: aboutInfoAttrs }
        )}     
            ${promoInfo(
            { promoAttrs: promoInfoAttrs }
        )}  
        </div>
        </main>
        ${Footer()}
        `
    })
}
