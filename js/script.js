{
    const toggleBackground = () => {
        const body = document.querySelector("body");
        const nextColorName = document.querySelector(".js-nextColorName");
        body.classList.toggle("body--grey");
        nextColorName.innerText = body.classList.contains("body--grey") ? "białe" : "szare";
    };

    const deleteHeader = () => {
        const header = document.querySelector(".header")
        const nextDescription = document.querySelector(".js-nextDescription");
        header.remove();
        nextDescription.innerText = "Brak nagłówka"
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        const deleteHeaderButton = document.querySelector(".js-deleteHeaderButton");

        changeBackgroundButton.addEventListener("click", toggleBackground);
        deleteHeaderButton.addEventListener("click", deleteHeader);
    };

    init();

}
