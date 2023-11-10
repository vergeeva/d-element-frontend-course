/**
 * Модель скрипта описывает основную JS-логику.
 * Может служить как самостоятельным скриптом, так и отправной точкой для монтирования иных компонентов.
 */
export default class FilterModel {

    static selector = "[data-js-filter]";

    static instance = null

    constructor() {
        if (FilterModel.instance) {
            return FilterModel.instance;
        }

        this.node = document.querySelector(FilterModel.selector);
        FilterModel.instance = this;

        console.debug(FilterModel.instance)
    }

}