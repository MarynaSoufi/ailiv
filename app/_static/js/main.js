const dataWebshop =  [
    {
        name: "Boeket small",
        img: "media/small.png",
        price: 30,
        href: "product/boeket/index.html",
        class: "small"
    
    },
    {
        name: "Boeket medium",
        img: "media/medium.png",
        price: 40,
        href: "product/boeket/index.html" ,
        class: "medium"
    
    },
    {
        name: "Boeket large",
        img: "media/large.png",
        price: 50,
        href: "product/boeket/index.html",
        class: "large"
    }
];

(()=> {
    const app = {
        init(){
            const urlParams = new URLSearchParams(window.location.search);
            const myParam = urlParams.get('type'); 
            if(myParam) {
                this.boeketPage(myParam);
            }      
            this.shopContainer = document.querySelector(".webshop__choice");
            this.burger = document.querySelector(".burger");
            if (window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/webshop/index.html" || window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/index.html" || window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/dienst/gepersonaloseerd-bloemwerk/index.html" || window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/dienst/seizoensdecoratie/index.html") {
                this.createWebshop();
            }
            this.links = document.querySelectorAll(".elements__wrapper a");
            console.log(this.links);
            this.modalBurger();
            this.scrollToTop();            
            this.urlInlezen();  
        },
        createWebshop () {
            let str = "";
            dataWebshop.forEach(e => {
                str = `<div class="elements__wrapper"><div class="webshop__back ${e.class}">
                    <div class="webshop__element ">
                        <img src="${this.pathCondishion(e.img)}"alt="${e.name}">
                    </div>
                </div>
                <a id="${e.class}" href="${this.pathForLnk(e.href)}">${e.name}</a><span>€ ${e.price}</span></div>`;
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
                
        },
        pathForLnk (link)  {
            let a = "";
                if (window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/dienst/gepersonaloseerd-bloemwerk/index.html" || window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/dienst/seizoensdecoratie/index.html") {
                    a = "../../" + link;
                }else if (window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/webshop/index.html") {
                    a = "../" + link;
                }else {
                    a = link;
                }
                return a;
            
        },
        modalBurger () {
            const modalWindow = document.querySelector(".modal");
            this.burger.addEventListener( "click", function () {
                if(modalWindow.style.visibility === "hidden") {
                    modalWindow.style.visibility = "visible";
                    modalWindow.style.transform = "translateY(0%)";
                }else {
                    modalWindow.style.visibility = "hidden";
                    modalWindow.style.transform = "translateY(-25%)";
                }
            }); 
           
        },
        scrollToTop() {
            const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
            const rootElement = document.documentElement;
            const y = window.pageYOffset;
            const clientHeight = document.documentElement.clientHeight;

            function scrollToTop() {
                 rootElement.scrollTo({
                    top: 0,
                    behavior: "smooth"
                 });
            }  
            scrollToTopBtn.addEventListener("click",scrollToTop);   
         

            // window.addEventListener("scroll",  function () {
            //     if (y > clientHeight) {
            //         scrollToTopBtn.style.display = "block";
            //      } else {
            //         scrollToTopBtn.style.display = "none";
            //     }
            // });
            
            //    
            //     });
            // });
        },
        urlInlezen() {
            const quer = window.location.search;
            console.log(quer);
            const params = new URLSearchParams(); 
            console.log(params);
            //const boeketName = 

            this.links.forEach((e,i) =>{
                console.log(e);
                // console.log(i);
                e.addEventListener('click',function(e) {
                    e.preventDefault();
                    params.append('type', e.target.id);
                    const query = params.toString();
                    window.location.href = e.target.href + `?${query}`;
                    
                });
            });
            // we starten met een leeg URLSearchParams object
            
            // voeg type toe
            // params.append('type', 'medium');
            
            // // omzetten naar query string
            // const query = params.toString(); // type=medium
            
            // // gebruiken in url -> zelf ? toevoegen!
            // const url = '/index.html?' + query;
            // console.log(url); 
        },
        boeketPage(type) {
            const boeketPhoto = document.querySelector(".boeket__img-js");
            const boeketName = document.querySelector(".boeket__name-js");
            const boeketPrice = document.querySelector(".boeket__kost-js");
            const imgUrl = dataWebshop.find(d => d.class === type).img;
            boeketPhoto.src = "../../_static/" + imgUrl; 
            const dataName =  dataWebshop.find(d => d.class === type).name; 
            boeketName.innerHTML = dataName;    
            const dataPrice = dataWebshop.find(d => d.class === type).price; 
            boeketPrice.innerHTML = "€ " + dataPrice;
        }
        


    };
    app.init();
})();

