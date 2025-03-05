const getPageData = async (id) => {
    return {
        name: "Page Name",
        widgetName: "Widget Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
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
    }

    async handleAddRender() {
        this.modalName = "Add Page";
        this.actionButton = "Add";
        this.actionFn = `addPage`;
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
    }

    async afterRender() {
        const fileInput = this.element.querySelector('#customFile');
        const fileLabel = this.element.querySelector('.file-input-label span:last-child');
        const iconContainer = this.element.querySelector('.file-input-label span:first-child');
        fileInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                fileLabel.textContent = file.name;
                const reader = new FileReader();
                reader.onload = function (e) {
                    iconContainer.style.width = '200px';
                    iconContainer.style.height = '200px';
                    iconContainer.style.transition = 'all 0.3s ease';
                    iconContainer.innerHTML = ` <img src="${e.target.result}" style="width: 100%; height: 100%; object-fit: contain;"> `;
                }
                reader.readAsDataURL(file);
            } else {
                fileLabel.textContent = 'No file selected';
                iconContainer.style.width = '24px';
                iconContainer.style.height = '24px';
                iconContainer.innerHTML = '<i class="fas fa-cloud-upload-alt"></i>';
            }
        });
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