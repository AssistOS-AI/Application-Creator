const getPageData = async (id) => {
    return {
        name: "Page Name",
        widgetName: "Widget Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
}

export class ApplicationEditPageModal{
    constructor(element, invalidate) {
        this.element = element;
        this.invalidate = invalidate;
        this.invalidate();
        this.id= this.element.getAttribute('data-id');
    }
    async beforeRender(){
        if(this.id){
            await this.handleEditRender();
        }else{
            await this.handleAddRender();
        }
    }
    async handleAddRender(){
        this.modalName = "Add Page";
        this.actionButton="Add";
        this.actionFn=`addPage`;
    }
    async handleEditRender(){
        const pageData = await getPageData(this.id);
        this.description = pageData.description;
        this.widgetName = pageData.widgetName;
        this.name = pageData.name;
        this.data = pageData.data;
        this.modalName="Edit Page";
        this.actionButton="Save";
        this.actionFn=`editPage`;
    }

    async afterRender(){

    }
    async closeModal(){
        await assistOS.UI.closeModal(this.element,{shouldInvalidate:this.shouldInvalidate});
    }
    async addPage(){
        console.log('addPage');
        await this.closeModal();
    }
    async editPage(){
        console.log('editPage');
        await this.closeModal();
    }
}