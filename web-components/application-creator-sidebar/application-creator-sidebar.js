const sidebarItems = [
    "Settings",
    "Pages",
    "Menu",
    "Preview"
]

export class ApplicationCreatorSidebar {
    constructor(element, invalidate) {
        this.element = element;
        this.invalidate = invalidate;
        this.applicationPagesRoot = document.querySelector('#application-page-container');
        this.invalidate();
    }

    async beforeRender() {
        this.sidebarItems = sidebarItems.map(item => {
            this[`open${item}`] = function (eventTarget) {
                this.applicationPagesRoot.innerHTML = `<application-creator-${item.toLowerCase()} data-presenter="application-creator-${item.toLowerCase()}"></application-creator-${item.toLowerCase()}>`;
            };
            return `<li class="application-sidebar-item" data-local-action="open${item}">${item}</li>`;
        }).join('');
    }

    async afterRender() {

    }
}