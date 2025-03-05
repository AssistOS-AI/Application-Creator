const getPageData = async (id) => {
    return {
        name: "Page Name",
        widgetName: "Widget Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
}
const getWidgets = async () => {
    return [
        {name: "Widget Name 1"},
        {name: "Widget Name 2"},
        {name: "Widget Name 3"},
        {name: "Widget Name 4"},
        {name: "Widget Name 5"},
        {name: "Widget Name 6"},
        {name: "Widget Name 7"}
    ]
}

export class ApplicationEditPageModal {
    constructor(element, invalidate) {
        this.element = element;
        this.invalidate = invalidate;
        this.invalidate();
        this.id = this.element.getAttribute('data-id');
    }

    async beforeRender() {
        if (this.id) {
            await this.handleEditRender();
        } else {
            await this.handleAddRender();
        }
        this.widgets = `<select class="application-form-item-select" name="selectedPage" id="selectedPage">${
            (await getWidgets()).map(widget => {
                return `<option value="${widget.name}">${widget.name}</option>`
            }).join('')}</select>`
    }

    async handleAddRender() {
        this.modalName = "Add Page";
        this.actionButton = "Add";
        this.actionFn = `addPage`;

        this.disabled = '';
    }

    async handleEditRender() {
        const pageData = await getPageData(this.id);
        this.description = pageData.description;
        this.widgetName = pageData.widgetName;
        this.name = pageData.name;
        this.data = pageData.data;
        this.modalName = "Edit Page";
        this.actionButton = "Save";
        this.actionFn = `editPage`;
        this.widgets = `<input type="text" class="application-form-item-input" id="selectedPage" name="selectedPage" value="${pageData.widgetName}">`
        this.disabled = 'disabled';
    }

    async afterRender() {

    }

    async closeModal() {
        await assistOS.UI.closeModal(this.element, {shouldInvalidate: this.shouldInvalidate});
    }

    async addPage() {
        console.log('addPage');
        await this.closeModal();
    }

    async editPage() {
        console.log('editPage');
        await this.closeModal();
    }
}