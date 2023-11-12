function deleteItemFromCart(courseId)
{
    let cart = JSON.parse(localStorage.getItem("cart")).toArray();
    if (cart !== null)
    {
        cart.remove(courseId);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}