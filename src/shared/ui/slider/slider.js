import { commonComponentProps, getAttrs } from "../../lib/index.js";
import { Card } from "./card/card.js";

export function Slider (props) {
    const { cardsInfo = [], extraClasses = {}, extraAttrs = {}, baseClass = "slider", getCN } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    let cardsHtml = ``;
    for (let i = 0; i < cardsInfo.length; i++)
    {
        cardsHtml += `${
            Card({
                cardAttrs: {
                    src: cardsInfo[i]["src"],
                    alt: cardsInfo[i]["alt"],
                    subtitle: cardsInfo[i]["subtitle"],
                    title: cardsInfo[i]["title"]
                }
            })
        }`
    }

    return `<div class="${getClassName("", extraClasses)} swiper-container" ${getAttrs(extraAttrs)}>
                <button class="slider__left-arrow"></button>
                 <div class="${getClassName("cards-container")} swiper-wrapper"> 
                      ${cardsHtml}
                 </div>
                 <button class="slider__right-arrow"></button>
              
             <link rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
             />         
            <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
            <script>
                new Swiper('.${getClassName("", extraClasses)}', {
                    navigation: {
                        nextEl: '.slider__right-arrow',
                        prevEl: '.slider__left-arrow'
                    },
                    loop: false,
                    slidesPerView: 4,
                })
            </script>
            </div>
            `;
}