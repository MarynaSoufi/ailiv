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
            window.currentIndex = null;      
            this.btnToCard = document.querySelector(".boeket__btn");
            this.winkelCard = document.querySelector(".mandje");
            this.close = document.querySelector(".close-js");
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
            this.winkelCardModal();
            this.LightBox();
            this.sameAdress();
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
                if(window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/index.html" || window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/gepersonalizeerde_bloemwerk.html" || window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/sezoendecoratie.html" || window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/webshop.html") {
                    shopContainer.innerHTML += str;
                }
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
            var rootElement = document.documentElement;
              window.addEventListener('scroll', function() {
                if(pageYOffset >20){
                    scrollToTopBtn.style.visibility = 'visible';
                    scrollToTopBtn.addEventListener('click', function() {
                        rootElement.scrollTo({
                            top: 0,
                            behavior: "smooth"
                          });
                    });
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
        },
        winkelCardModal() {
            const modalWindow = document.querySelector(".card__modal");
            this.winkelCard.addEventListener('click', function() {
                modalWindow.style.display = 'block';
            });
            this.close.addEventListener('click', function() {
                modalWindow.style.display = 'none';
            });
            modalWindow.addEventListener('click', function(e) {
                if (e.target == modalWindow) {
                    modalWindow.style.display = 'none';
                }
            });
            if(window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/boeket.html") {
                this.btnToCard.addEventListener('click', function(e) {
                    e.preventDefault();
                    modalWindow.style.display = 'block';
                });
            }
        },
        LightBox() {
            const images = document.querySelectorAll(".example__element");
            const imagesModal = document.querySelector(".bloem-modal");
            const close = document.querySelector(".close");
            const slide = document.querySelectorAll(".bloem-slide");
            const column = document.querySelectorAll(".column");
            const next = document.querySelector(".next");
            const prev = document.querySelector(".prev");
            if(window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/gepersonalizeerde_bloemwerk.html") {
                images.forEach((e, i) =>{
                    e.addEventListener('click', function() {
                        imagesModal.style.display = "block";
                        slide.forEach((f,n) => {
                            if(i==n) {
                                f.style.display = "block";
                                window.currentIndex = n;

                            }else {
                                f.style.display = "none";
                            }
                        });
                        column.forEach((e,k)=> {
                            e.addEventListener("click",function() {
                                slide.forEach((d, l)=> {
                                    if(l == k) {
                                        d.style.display = "block";
                                        window.currentIndex = l;
                                    }else {
                                        d.style.display = "none";
                                    }
                                });
                            });
                        });
                    });
                });
                close.addEventListener('click', function() {
                    imagesModal.style.display = "none";
                });
                imagesModal.addEventListener('click', function(e) {
                    if (e.target == imagesModal) {
                        imagesModal.style.display = 'none';
                    }
                });
                next.addEventListener('click', function() {
                    for (let i = 0; i < slide.length; i++) {
                        slide[i].style.display = "none";
                        
                    }
                    if(window.currentIndex >= 3){
                        window.currentIndex = 0;
                    } else {
                        window.currentIndex++;
                    }
                    slide[window.currentIndex].style.display = "block";
                });
                prev.addEventListener('click', function() {
                    for (let i = 0; i < slide.length; i++) {
                        slide[i].style.display = "none";
                    }       
                    if(window.currentIndex <= 0){
                        window.currentIndex = 3;
                    } else {
                        window.currentIndex--;
                    }
                    slide[window.currentIndex].style.display = "block";                
                });
            }
        },
        sameAdress() {
            if(window.location.pathname === "/atwork-1_project_1-MarynaSoufi/app/chekout.html") {
                const check = document.querySelector(".check-js");
                const form = document.querySelector(".if-not");
                check.addEventListener("change", function(e) {
                    if(check.checked) {
                        form.style.display = "none";
                    }else {
                        form.style.display = "block";
                    }
                })
            }
        }
        // hideContent(a) {
        //     for (let i = a; i < slide.length; i++) {
        //         slide[i].style.display = "none";
        //     }
        // },
        // showTabContent(b) {
        //     for (let i = b; i < slide.length; i++) {
        //         if(slide[i].style.display == "none") {
        //             slide.style.display = "block";
        //         }
        //     }  
        // }

    };
    app.init();
})();

