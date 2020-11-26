const dataWebshop =  [
    {
        name: "Boeket small",
        img: "_static/media/small.png",
        price: 30,
        href: "boeket.html",
        class: "small"
    
    },
    {
        name: "Boeket medium",
        img: "_static/media/medium.png",
        price: 40,
        href: "boeket.html" ,
        class: "medium"
    
    },
    {
        name: "Boeket large",
        img: "_static/media/large.png",
        price: 50,
        href: "boeket.html ",
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
            if(window.location.pathname !== "/atwork-1_project_1-MarynaSoufi/app/boeket.html" || window.location.pathname !== "/atwork-1_project_1-MarynaSoufi/app/chekout.html") {
                this.createWebshop();
            }
            this.burger = document.querySelector(".burger");
            this.links = document.querySelectorAll(".elements__wrapper a");
            console.log(this.links);
            this.modalBurger();
            this.scrollToTop();            
            this.urlInlezen();  
        },
        createWebshop () {
            const shopContainer = document.querySelector(".webshop__choice");
            let str = "";
            dataWebshop.forEach(e => {
                str = `<div class="elements__wrapper"><div class="webshop__back ${e.class}">
                    <div class="webshop__element ">
                        <img src="${e.img}"alt="${e.name}">
                    </div>
                </div>
                <a id="${e.class}" href="${e.href}">${e.name}</a><span>€ ${e.price}</span></div>`;
                shopContainer.innerHTML += str;
            });
            
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
            const scrollToTopBtn = document.querySelector(".toTop__wrapper");
            //const y = window.pageYOffset;
            //const clientHeight = document.documentElement.clientHeight;
              window.addEventListener('scroll', function() {
                // scrollToTopBtn.visible = (pageYOffset < document.documentElement.clientHeight);
                if(pageYOffset >20){
                    scrollToTopBtn.style.visibility = 'visible';
                }else if(pageYOffset < document.documentElement.clientHeight) {
                    scrollToTopBtn.style.visibility = 'hidden';
                }
              });
        },
        urlInlezen() {
            const params = new URLSearchParams(); 
            console.log(params);
            this.links.forEach((e) =>{
                console.log(e);
                e.addEventListener('click',function(e) {
                    e.preventDefault();
                    params.append('type', e.target.id);
                    const query = params.toString();
                    window.location.href = e.target.href + `?${query}`;
                });
            });
        },
        boeketPage(type) {
            const boeketPhoto = document.querySelector(".boeket__img-js");
            const boeketName = document.querySelector(".boeket__name-js");
            const boeketPrice = document.querySelector(".boeket__kost-js");
            const imgUrl = dataWebshop.find(d => d.class === type).img;
            boeketPhoto.src = imgUrl; 
            const dataName =  dataWebshop.find(d => d.class === type).name; 
            boeketName.innerHTML = dataName;    
            const dataPrice = dataWebshop.find(d => d.class === type).price; 
            boeketPrice.innerHTML = "€ " + dataPrice;
        }
    };
    app.init();
})();

