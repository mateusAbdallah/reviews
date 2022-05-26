const reviews = [
    {
        id: 1,
        name: 'Low Rex',
        job: 'Web Developer',
        img: 
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: 
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A incidunt ex libero tenetur earum sapiente fuga quod voluptas aut excepturi fugiat alias molestiae itaque repudiandae veniam, architecto amet delectus vero?',
    },
    {
        id: 2,
        name: 'TNT Rex',
        job: 'Web Designer',
        img: 
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text: 
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'Phila Rex',
        job: 'Intern',
        img: 
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text: 
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    {
        id: 4,
        name: 'TG Rex',
        job: 'Boss',
        img: 
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text: 
        'I am baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry'
    },
];

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function(){
   showPerson();
});

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;   
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

prevBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

nextBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem =  reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});