const ListBlogg = [{
        id: 1,
        title: "Blogg 1",
        image: "src/img/blogg/Recipes-1.png",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In suscipit minus at mollitia nulla. Fuga, facere eius earum nesciunt asperiores accusamus laudantium, doloribus suscipit adipisci iste dolorum natus non aliquid.",
        date: "2020-01-01",
        category: 1
    },
    {
        id: 2,
        title: "Blogg 2",
        image: "src/img/blogg/Recipes-2.png",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In suscipit minus at mollitia nulla. Fuga, facere eius earum nesciunt asperiores accusamus laudantium, doloribus suscipit adipisci iste dolorum natus non aliquid.Blogg",
        date: "2020-01-01",
        category: 2
    },
    {
        id: 3,
        title: "Blogg 3",
        image: "src/img/blogg/Recipes-3.png",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In suscipit minus at mollitia nulla. Fuga, facere eius earum nesciunt asperiores accusamus laudantium, doloribus suscipit adipisci iste dolorum natus non aliquid.g",
        date: "2020-01-01",
        category: 3
    },
    {
        id: 4,
        title: "Blogg 4",
        image: "src/img/blogg/Recipes-4.png",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In suscipit minus at mollitia nulla. Fuga, facere eius earum nesciunt asperiores accusamus laudantium, doloribus suscipit adipisci iste dolorum natus non aliquid.",
        date: "2020-01-01",
        category: 4
    },
    {
        id: 5,
        title: "Blogg 5",
        image: "src/img/blogg/Recipes-5.png",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In suscipit minus at mollitia nulla. Fuga, facere eius earum nesciunt asperiores accusamus laudantium, doloribus suscipit adipisci iste dolorum natus non aliquid.",
        date: "2020-01-01",
        category: 5
    },
    {
        id: 6,
        title: "Blogg 6",
        image: "src/img/blogg/Recipes-6.png",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In suscipit minus at mollitia nulla. Fuga, facere eius earum nesciunt asperiores accusamus laudantium, doloribus suscipit adipisci iste dolorum natus non aliquid.",
        date: "2020-01-01",
        category: 6

    },

]
const BloggCate = [{
        id: 1,
        name: "Cooking recipe",
    },
    {
        id: 2,
        name: "Review corner",
    },
    {
        id: 3,
        name: "Main dishes",
    },
    {
        id: 4,
        name: "Side dishes",
    },
    {
        id: 5,
        name: "Cookbook",
    },
    {
        id: 6,
        name: "Travel",
    },


]
const Blogg = document.querySelector(".latest-recipes__list");




function ListCategoryBlogg() {
    const CategoryBlogg = document.querySelector(".list__category-aside");
    if (CategoryBlogg) {
        for (let item of BloggCate) {
            CategoryBlogg.innerHTML += `
        <li>
            <a  href="./blogg.html?cateId=${item.id}">${item.name}</a>
        </li>
        `
        }
    }
}
ListCategoryBlogg();

function showBloggPage(data) {
    const Blogg = document.querySelector(".latest-recipes__list");
    if (Blogg) {
        Blogg.innerHTML = '';
        for (let item of data) {
            Blogg.innerHTML += `
            <div class="latest-recipes__list">
            <div class="latest-recipes__list--item">
                <img src="${item.image}" alt="">
                <h2>${item.title}</h2>
                <p>${item.content}</p>
            </div>
            </div>`
        }
    }
}



function reRender() {
    const cateId = new URLSearchParams(window.location.search).get("cateId");
    const bloggByCategory = ListBlogg.filter(function(item) {
        return item.category == cateId
    })
    if (cateId) {
        showBloggPage(bloggByCategory)
    } else {
        showBloggPage(ListBlogg)
    }
}
reRender();