
console.log(func, func3)
let func = () => {
    let laptop = {
        cpu: 'i9',  
        ram: '8',   
        brand: 'HP',    
    
        getConfig: function(){
            console.log(this,'func');
        }
    }
    laptop.getConfig()
    console.log(this);
}

var func3 = () => {
    let laptop = {
        cpu: 'i9',  
        ram: '8',   
        brand: 'HP',    
    
        getConfig: function(){
            console.log(this,'func');
        }
    }
    laptop.getConfig()
    console.log(this);
}


function func2(){
    let laptop = {
        cpu: 'i9',  
        ram: '8',   
        brand: 'HP',    
    
        getConfig: function(){
            console.log(this);
        }
    }
    laptop.getConfig()
    console.log(this);
    func();
}

let laptop = {
    getConfig: function(){
        this.a = 'aman'
        console.log(this);

    },
}
laptop.getConfig = {}

laptop.getConfig.a = 'sdfg'
console.log(laptop.getConfig)
    
function getConfig() {
        this.a = 'aman'
        console.log(this);
}

const s = new getConfig(a);