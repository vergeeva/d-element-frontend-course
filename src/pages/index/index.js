import { getPage } from "../../shared/lib/index.js";

export default () => {

    return getPage({
        title: "Главная",
        body: `
            <h1>Главная</h1>          
            <nav>
                <ul>
                    <li>
                        <a href="/index.html">Главная</a>
                    </li>
                    <li>
                        <a href="/about.html">О Нас</a>
                    </li>
                </ul>
            </nav>
        `
    })
}