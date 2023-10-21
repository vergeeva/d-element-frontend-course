/**
 * Модель скрипта описывает основную JS-логику.
 * Может служить как самостоятельным скриптом, так и отправной точкой для монтирования иных компонентов.
 */
export default class FooterModel {

    static selector = "[data-js-header]";

    static instance = null

    constructor() {
        if (FooterModel.instance) {
            return FooterModel.instance;
        }

        this.node = document.querySelector(FooterModel.selector);
        FooterModel.instance = this;

        console.debug(FooterModel.instance)
    }

}