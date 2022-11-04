let images = ["https://miro.medium.com/max/500/1*ZhYNqU2y96_f3QkWq9oiWQ.jpeg", 
"https://www.kidscodecs.com/wp-content/uploads/2020/02/History_TS_ProgrammingMemes_image6.png",
"https://images3.memedroid.com/images/UPLOADED478/6163397ee2cb3.jpeg",
"https://imgix.ranker.com/user_node_img/50106/1002119125/original/1002119125-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375",
"https://www.kidscodecs.com/wp-content/uploads/2020/02/History_TS_ProgrammingMemes_image2.png"
]

let start = 0
// var image = document.getElementById('img') DOES NOT WORK HERE
// This is because when the page load, this is supposedly empty?

function next()
{
    var image = document.getElementById('img')
    if(start >= 4)
    {
        start = 0
    }
    else
    {
        start += 1
    }
    image.src = images[start]
}

function previous()
{
    var image = document.getElementById('img')
    if(start <= 0)
    {
        start = 4
    }
    else
    {
        start -= 1 
    }
    image.src = images[start]
}