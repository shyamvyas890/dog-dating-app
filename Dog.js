class Dog {
    constructor(data){
        Object.assign(this,data);
    }
    
    getDogHtml(){
        const {name, age, bio}= this;
        return `
           <div class="info" id="add">     
                <div class="intro"> ${name}, ${age}</div>
                <div class="bio">${bio}</div>
            </div>
        `;
    }
}

export {Dog};
