export function getPopularGoodsList()
{
    return fetch("/api/get_popular_goods").then((res) =>
        {
            return res.json().cards;
        }).catch((res) => console.log(res));
}