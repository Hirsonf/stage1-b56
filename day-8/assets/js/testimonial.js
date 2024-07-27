// const testimonials = [
//     {
//         image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.architecturaldigest.in%2Fstory%2Finside-cristiano-ronaldos-record-breaking-real-estate-portfolio%2F&psig=AOvVaw3_MRmNcbJOvyW5c-COehAw&ust=1722048984201000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDF0cbaw4cDFQAAAAAdAAAAABAE",
//         content : "wii hebat",
//         author : "ronaldo"
//     },
//     {
//         image : "https://www.google.com/imgres?q=messi&imgurl=https%3A%2F%2Fcdns.klimg.com%2Fbola.net%2Fresized%2F810x540%2Flibrary%2Fupload%2F21%2F2023%2F07%2F996x664%2Flionel-messi-inter-m_532bba5.jpg&imgrefurl=https%3A%2F%2Fwww.bola.net%2Fbola_dunia_lainnya%2Fhei-lionel-messi-liga-amerika-serikat-itu-gak-gampang-e583c5.html&docid=ehFlp9PgfwiyXM&tbnid=bA3XkAN_bvXXFM&vet=12ahUKEwi979-H28OHAxUKzDgGHSyON-cQM3oECH8QAA..i&w=810&h=540&hcb=2&ved=2ahUKEwi979-H28OHAxUKzDgGHSyON-cQM3oECH8QAA",
//         content : "siuuuu",
//         author : "messi"
//     },
//     {
//         image : "https://www.google.com/imgres?q=nathan%20tjoe&imgurl=https%3A%2F%2Fimg.inews.co.id%2Fmedia%2F1200%2Ffiles%2Finews_new%2F2024%2F01%2F25%2Fnathan_tjoe_a_on.jpg&imgrefurl=https%3A%2F%2Fwww.inews.id%2Fsport%2Fsoccer%2F5-fakta-menarik-nathan-tjoe-a-on-pemain-sc-heerenveen-yang-jadi-andalan-timnas-indonesia-di-piala-asia-u-23-2024&docid=4psoAcs0qGOozM&tbnid=-6AJQad-5hmyhM&vet=12ahUKEwi0-IGi28OHAxXvzzgGHd1yKOQQM3oECHsQAA..i&w=713&h=465&hcb=2&ved=2ahUKEwi0-IGi28OHAxXvzzgGHd1yKOQQM3oECHsQAA",
//         content : "the real goat",
//         author : "nathan tjoe"
//     },
//     {
//         image : "https://www.google.com/imgres?q=marselino&imgurl=https%3A%2F%2Fcdn.rri.co.id%2Fberita%2F1%2Fimages%2F1693839605819-F%2F1693839605819-F.jpeg&imgrefurl=https%3A%2F%2Fwww.rri.co.id%2Fsepak-bola%2F346614%2Fkmsk-deinze-izinkan-marselino-ferdinan-ke-timnas-indonesia&docid=9LJ9XKxmYHtE8M&tbnid=48PTdiNXI5AxcM&vet=12ahUKEwiH-_nA28OHAxXWTGwGHa2DBrAQM3oECDkQAA..i&w=4096&h=2556&hcb=2&ved=2ahUKEwiH-_nA28OHAxXWTGwGHa2DBrAQM3oECDkQAA",
//         content : "mantap guees",
//         author : "marselino"
//     },
//     {
//         image : "",
//         content : "oyeeh",
//         author : "bayu saptaji"
//     },


// let testimonialHtml = ``
// testimonials.forEach(testimonial => {
//     testimonialHtml += `<div class="testimonial">
//     <img
//     src="${testimonial.image}/>
//     <p class="quote">${testimonial.content}</p>
//     <p class="author">${testimonial.author}</p>
//     </div>`
// })

// document.getElementById("testimonials").innerHTML = testimonialHtml


const TestimoniData = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrkap-ioOXcP-IcdB2QBsHhLMrjW94F-g9DA&s",
        content: "shuuuu",
        autor: "ir.ronaldo",
        rating: 5
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2u_lJGpM9JZWPCKRucdTlXSpr6n6CvJ_fA&s",
        content: "ngopi nyoo",
        autor: "Messi",
        rating: 4
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-zU9NDm4vLWP8mw-WP6mcjZmlRN1MF2lrw&s",
        content: "mantops",
        autor: "Nathan tejo",
        rating: 3
    },
    {
        image: "https://assets.goal.com/images/v3/blt90e0d7c80d4bbf43/Kylian-Mbappe.jpeg?auto=webp&format=pjpg&width=3840&quality=60",
        content: "wenak to",
        autor: "Ki.Mbappe",
        rating: 2
    },
    {
        image: "data:image/jpeg;base64,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",
        content: "saya dukung timnas",
        autor: "Bung toel",
        rating: 1
    }
]

function html(item) {
    return `
    <div class="testimonial">
        <img src="${item.image}" alt="testimonial">
        <p class="quote">${item.content}</p>
        <p class="author">${item.autor}</p>
        <p class="author">${item.rating}<i class="fa fa-star" aria-hidden="true"></i></p>
    </div>`;
}

function allTestimonial() {
    let testimonialHtml = ``;
    TestimoniData.forEach((item) => {
        testimonialHtml += html(item);
    });
    document.getElementById("testimonials").innerHTML = testimonialHtml;
}

allTestimonial();

function filterTestimonials(rating) {
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