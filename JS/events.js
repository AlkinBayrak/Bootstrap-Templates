// const urunContainer = document.getElementById("urunContainer");
// const ekleBtn = document.getElementById("ekleBtn");

// function Click()
// {
//     let input = document.createElement("input");
//     input.setAttribute("type","text");
//     urunContainer.appendChild(input);
//     let label = document.createElement("label");
//     label.textContent = "Kek";
//     urunContainer.appendChild(label);
    
// }

// ekleBtn.addEventListener("click",Click);

// function OnClicks()
// {
//     let input = document.createElement("input");
//     input.setAttribute("type","text");
//     urunContainer.appendChild(input);
//     let inputs = document.createElement("input");
//     inputs.setAttribute("type","button");
//     inputs.value = "Ekles";
//     urunContainer.appendChild(inputs);

//     urunContainer.appendChild(document.createElement("br"));
// }

document.addEventListener("DOMContentLoaded", () =>{
    const ekleBtn = document.querySelector('#ekleBtn');
    const urunContainer = document.querySelector('#urunContainer');

    ekleBtn.onclick=() =>{
        const label = document.createElement('label');
        label.textContent = "Urun Adi :";
        const input = document.createElement('input');
        input.type = "text";
        input.placeholder = "Urun Adı Giriniz"

        urunContainer.appendChild(label);
        urunContainer.appendChild(input);
    }
});