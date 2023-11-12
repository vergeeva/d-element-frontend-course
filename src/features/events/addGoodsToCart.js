export function addGoodsToCart(courseId)
{
    let cart = JSON.parse(localStorage.getItem("cart")).toArray();
    if (cart !== null)
    {
        cart.push(courseId);
    }
    else
    {
        cart = [ courseId ];
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
}