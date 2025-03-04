const sidebarItems = [
    "Settings",
    "Pages",
    "Menu",
    "Preview"
]

export class ApplicationCreatorSidebar{
    constructor(element,invalidate){
        this.element = element;
        this.invalidate = invalidate;
        this.invalidate();
    }
    async beforeRender(){
        this.sidebarItems =sidebarItems.map(item=>{
            return `<li class="sidebar-item" data-local-action="open${item}">${item}</li>`
        })
    }
    async afterRender(){

    }
    openSettings(){
        console.log("Settings")
    }
    openPages(){
        console.log("Pages")
    }
    openMenu(){
        console.log("Menu")
    }
    openPreview(){
        console.log("Preview")
    }
}