import "./style.pcss"
import "../shared/ui/button/button.pcss";
import "../widgets/header/header.pcss";
import "../shared/ui/nav/nav.pcss";
import HeaderModel from "../widgets/header/model/index.js";

const runApp = async () => {
    const runWidgets = () => {
        new HeaderModel()
    }
    switch (process.env.NODE_ENV) {
        case "development":
            await import("../shared/api/mocks/browser.js")
                .then(async ({ worker }) => {
                    await worker.start().then(() => {
                        console.debug("App dev run")
                        runWidgets()
                    })
                })
    }
}

runApp()
    .catch((err) => {
        console.error(err)
    })