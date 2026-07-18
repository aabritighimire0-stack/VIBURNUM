const slider = document.querySelector(".products-grid");

document.getElementById("next").onclick = () => {

    slider.scrollBy({

        left:320,
        behavior:"smooth"

    });

};

document.getElementById("prev").onclick = () => {

    slider.scrollBy({

        left:-320,
        behavior:"smooth"

    });

};



// Footer Fade In Animation

const footer = document.querySelector("footer");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            footer.classList.add("show");
        }
    });
},{
    threshold:0.2
});

observer.observe(footer);


// Smooth Scroll (for future anchor links)

document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});