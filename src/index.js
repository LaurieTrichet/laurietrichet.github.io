

import "../scss/_custom.scss";

function emailComponent() {
    const element = document.getElementById('contact-email');

    element.addEventListener("click", function(event){
        window.location.href = "mailto:laurie.trichet@pm.me";
    });
}

emailComponent();