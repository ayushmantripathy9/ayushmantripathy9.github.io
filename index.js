var str1 = "Hello There"
var str2 = "Welcome to the my Personal Website :)"
var speed = 80
var main_box = "main-box"
var total_time = str1.length*speed + str2.length*speed

$("document").ready(() => {
    typewrite(str1, 0)
    setTimeout(
        function () {
            document.getElementById(main_box).innerHTML = ""
            typewrite(str2, 0)
            setTimeout(
                function () {
                    document.getElementById(main_box).style.display = "none"  
                },
                str1.length*speed + str2.length*speed
            )
        }, 
        str1.length*speed+500
    )

    setTimeout(
        function () {
            document.getElementById(main_box).innerHTML = "<h1 style='font-size:1.5rem;'>Ayushman Tripathy</h1><h6 style='color:#fff5c0'>Core Member of Vision and Language Group, IIT Roorkee</h6>"
            document.getElementById(main_box).style.display = "block"
        },
        total_time+2000
    )
    
});

function typewrite (text, i) {
    if (i < text.length) {
        document.getElementById(main_box).innerHTML += text.charAt(i)
        setTimeout(() => { typewrite(text, i+1) }, speed)
    }
}