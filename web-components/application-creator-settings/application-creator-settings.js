const getWidgets = (id) => {
    return [
        "widget1",
        "widget2",
        "widget3",
        "widget4",
        "widget5",
        "widget6",
        "widget7",
        "widget8",
    ]
}

export class ApplicationCreatorSettings {
    constructor(element, invalidate) {
        this.element = element;
        this.invalidate = invalidate;
        this.pageName="Settings"
        this.invalidate();
    }

    async beforeRender(){
            this.color="#d0d0d0";
            this.textColor="#000000";
            this.initialPrompt="";
            this.knowledge="";
            this.chatIndications="";
            this.chatSize=30;
            this.widgets=getWidgets().map(widget=>`<option value="${widget}">${widget}</option>`).join('');
    }

    async afterRender(){

    }
    async saveSettings(eventTarget){
        console.log('saveSettings');
    }
}