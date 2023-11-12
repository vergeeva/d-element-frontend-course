import { sleep } from "../sleep/sleep.js";
export function getPopularGoodsList()
{
    sleep(3000).finally( () =>
    {
        return fetch("/api/get_popular_goods").then(res => res.json().cards)
    });
}