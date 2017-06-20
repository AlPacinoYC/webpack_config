import '../css/main.css';
var greeter = require('./Greeter.js');
let demoComponent = greeter();
console.log(demoComponent)
document.body.appendChild(demoComponent);

//热更新必须要这个
if(module.hot){
    module.hot.accept('./Greeter.js',()=>{
        const nextComponent=greeter();
        document.body.replaceChild(nextComponent,demoComponent);
        demoComponent=nextComponent;
    })
}



