
const sweets = new URL('../images/sweets_4.jpg', import.meta.url);
const windmills = new URL("../images/windmills.jpg", import.meta.url);
const spice = new URL("../images/spice.jpg", import.meta.url)
const plates = new URL("../images/plates.jpg", import.meta.url);
const lantern= new URL("../images/lantern.jpg", import.meta.url);
const marketplace = new URL("../images/marketplace.jpg", import.meta.url)

const initialCards = [
    {
        name: "Сладости",
        link: sweets
    },
    {
        name: "Вертушки",
        link: windmills
    },
    {
        name: "Пряности",
        link: spice
    },
    {
        name: "Плошки",
        link: plates
    },
    {
        name: "Фонарики",
        link: lantern
    },
    {
        name: "Базар",
        link: marketplace
    },
];

export {initialCards}