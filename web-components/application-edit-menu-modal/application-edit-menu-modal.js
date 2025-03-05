const getMenuItemData = async (id) => {
    return {
        name: "Menu Item Name",
        widgetName: "Widget Name"
    }
}
const getPageData = async (id) => {
    return {
        name: "Page Name",
        widgetName: "Widget Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
}
export class ApplicationEditMenuModal{
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
        this.modalName = "Add Menu Item";
        this.actionButton="Add";
        this.actionFn=`addMenuItem`;
    }
    async handleEditRender(){
        this.modalName="Edit Menu Item";
        this.actionButton="Save";
        this.actionFn=`editMenuItem`;
        const pageData = await getPageData(this.id);
        this.pageName = pageData.name;
        const menuItemData = await getMenuItemData(this.id);
        this.name= menuItemData.name;
        this.widgetName = menuItemData.widgetName;
    }

    async afterRender(){

    }
    async closeModal(){
        await assistOS.UI.closeModal(this.element,{shouldInvalidate:this.shouldInvalidate});
    }
    async addMenuItem(){
        console.log('addMenuItem');
        await this.closeModal();
    }
    async editMenuItem(){
        console.log('editMenuItem');
        await this.closeModal();
    }
}

