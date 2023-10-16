const runApp = async () => {
    switch (process.env.NODE_ENV) {
        case "development":
            await import("../shared/api/mocks/browser.js")
                .then(async ({ worker }) => {
                    await worker.start().then(() => {
                        console.debug("App dev run")
                    })
                })
    }
}

runApp()
    .catch((err) => {
        console.error(err)
    })