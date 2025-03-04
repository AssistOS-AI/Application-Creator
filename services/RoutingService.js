const APPLICATION_CREATOR_PAGE = "application-creator-landing";

export class RoutingService {
    constructor() {
        if (RoutingService.instance) {
            return RoutingService.instance;
        } else {
            RoutingService.instance = this;
            return this;
        }
    }

    async navigateToLocation(locationArray = [], appName) {
        if (locationArray.length === 0 || locationArray[0] === APPLICATION_CREATOR_PAGE) {
            const pageUrl = `${assistOS.space.id}/${appName}/${APPLICATION_CREATOR_PAGE}`;
            await assistOS.UI.changeToDynamicPage(APPLICATION_CREATOR_PAGE, pageUrl);
            return;
        }
        if (locationArray[locationArray.length - 1] !== APPLICATION_CREATOR_PAGE) {
            console.error(`Invalid URL: URL must end with ${APPLICATION_CREATOR_PAGE}`);
            return;
        }
        const webComponentName = locationArray[locationArray.length - 1];
        const pageUrl = `${assistOS.space.id}/${appName}/${locationArray.join("/")}`;
        await assistOS.UI.changeToDynamicPage(webComponentName, pageUrl);
    }

    static navigateInternal(subpageName, presenterParams) {
        const composePresenterParams = (presenterParams) => {
            let presenterParamsString = "";
            Object.keys(presenterParams).forEach((key) => {
                presenterParamsString += ` data-${key}='${presenterParams[key]}'`;
            });
            return presenterParamsString;
        }
        const appContainer = document.querySelector("#books-generator-app-container")
        appContainer.innerHTML = `<${subpageName} data-presenter="${subpageName}" ${composePresenterParams(presenterParams)}></${subpageName}>`;
    }
}
