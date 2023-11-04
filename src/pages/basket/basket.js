import { getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/header.js";
import { Footer } from "../../widgets/footer/footer.js";

export default () => {

    return getPage({
        title: "Корзина",
        body: `
        ${Header()}      
         <main class="main__container">
            
         </main>
         ${Footer()}
        `
    })
}