import { getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/header.js";
import { Footer } from "../../widgets/footer/footer.js";

export default () => {

    return getPage({
        title: "О нас",
        body: `         
         <main class="main-container">
            ${Header()}
            <h1>Что-нибудь о нас</h1>
         </main>
         ${Footer()}
        `
    })
}