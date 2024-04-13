const   main_container = document.querySelector(".main");
const header = document.createElement('header');
header.innerHTML = `
               <div><a href=""><img src="./img/logo.svg" alt="логотип" class = "logo"></a></div>
               <ul>
                   <a href=""><li class="">electric scateboards</li></a>
                   <a href=""><li class="">electric scooters</li></a>
                   <a href=""><li class="">accessories</li></a>
                   <a href=""><li class="">gift card</li></a>
                   <a href=""><li class="">more info</li></a>
               </ul>
               <div class="header_profile">
                    <a href=""><img src = "./img/profile.svg" alt="profile"></a>
                    <a href=""><img src = "./img/cart.svg" alt="cart"></a>
               </div>
`;
main_container.insertAdjacentElement('afterbegin', header);

