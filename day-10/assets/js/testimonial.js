

function fetchUrl(url) {
    return new Promise((resolve, rejact) => {
        const xhr = new XMLHttpRequest()

        xhr.open("GET", url, true);

        xhr.onerror = () => {
            rejact("network error!");
        }
        xhr.onload = () => {
            resolve(JSON.parse(xhr .responseText));
        }
        xhr.send()
    })
}


function html(item) {
    return `
    <div class="testimonial">
        <img src="${item.image}" alt="testimonial">
        <p class="quote">${item.content}</p>
        <p class="author">${item.autor}</p>
        <p class="author">${item.rating}<i class="fa fa-star" aria-hidden="true"></i></p>
    </div>`;
}

async function allTestimonial() {
    const testimonials = await fetchUrl(" https://api.npoint.io/27fe843b4402d3dfc780")

    let testimonialHtml = ``;
    TestimoniData.forEach((item) => {
        testimonialHtml += html(item);
    });
    document.getElementById("testimonials").innerHTML = testimonialHtml;
}

allTestimonial();

async function filterTestimonials(rating) {
    const testimonials = await fetchUrl(" https://api.npoint.io/27fe843b4402d3dfc780")
    let testimonialHtml = ``;
    const testimonialFilter = TestimoniData.filter((item) => {
        return item.rating === rating;
    });

    if (testimonialFilter.length === 0) {
        testimonialHtml = `<h1> Data not found!</h1>`;
    } else {
        testimonialFilter.forEach((item) => {
            testimonialHtml += html(item);
        });
    }
    document.getElementById("testimonials").innerHTML = testimonialHtml
}