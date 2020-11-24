const dataWebshop =  [

    {
        name: "Boeket small",
        img: "media/small.png",
        price: 30,
        href: "#",
        class: "small"
    
    },
    {
        name: "Boeket medium",
        img: "media/medium.png",
        price: 40,
        href: "#" ,
        class: "medium"
    
    },
    {
        name: "Boeket large",
        img: "media/large.png",
        price: 50,
        href: "#",
        class: "large"
    }
];

(()=> {
    const app = {
        init(){
            this.shopContainer = document.querySelector(".webshop__choice");
            console.log(this.shopContainer);
            this.createWebshop();
            this.burger = document.querySelector(".webshop__")

        },
        createWebshop () {
            let str = "";
            dataWebshop.forEach(e => {
                str = `<div class="elements__wrapper"><div class="webshop__back ${e.class}">
                    <div class="webshop__element ">
                        <img src="${this.pathCondishion(e.img)}"alt="${e.name}">
                    </div>
                </div>
                <a href="${e.href}">${e.name}</a><span>€ ${e.price}</span></div>`;
                this.shopContainer.innerHTML += str;
            });
            
        },
        pathCondishion (img){
            let a = "";
                if (window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/index.html") {
                   a = "_static/" +img;
                }  else if (window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/webshop/index.html") {
                    a = "../_static/" + img;
                } else if (window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/dienst/gepersonaloseerd-bloemwerk/index.html" || window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/dienst/seizoensdecoratie/index.html") {
                    a = "../../_static/" + img;
                }
                return a;
                
        }
        


    };
    app.init();
})();

