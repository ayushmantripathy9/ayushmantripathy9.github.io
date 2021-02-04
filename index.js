var str1 = "Hello Dinku"
var str2 = "Welcome to the world of development :)"
var speed = 80
var welcome_dinku = "welcome-dinku"
var total_time = str1.length*speed + str2.length*speed

$("document").ready(() => {
    typewrite(str1, 0)
    setTimeout(
        function () {
            document.getElementById(welcome_dinku).innerHTML = ""
            typewrite(str2, 0)
            setTimeout(
                function () {
                    document.getElementById(welcome_dinku).style.display = "none"  
                },
                str1.length*speed + str2.length*speed
            )
        }, 
        str1.length*speed+500
    )

    setTimeout(
        function () {
            document.getElementById(welcome_dinku).innerHTML = "<h1 style='font-size:1.5rem;'>Ayushman Tripathy</h1><h6 style='color:#fff5c0'>Core Member of Vision and Language Group, IIT Roorkee</h6>"
            document.getElementById(welcome_dinku).style.display = "block"
        },
        total_time+2000
    )
    
});

function typewrite (text, i) {
    if (i < text.length) {
        document.getElementById(welcome_dinku).innerHTML += text.charAt(i)
        setTimeout(() => { typewrite(text, i+1) }, speed)
    }
}