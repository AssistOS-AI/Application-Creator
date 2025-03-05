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
    }

    async afterRender(){

    }
    async saveSettings(eventTarget){
        console.log('saveSettings');
    }
}