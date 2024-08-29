document.addEventListener("DOMContentLoaded",function(){
    async function loadNavbar() {
        try {
            const res = await fetch('navbar.html');
            const data = await res.text();
            document.getElementById('navbar').innerHTML=data;

            const hamburger= document.querySelector('.hamburger');
            const mobileNav= document.querySelector('.mobile-nav');

            if (hamburger && mobileNav){
                hamburger.addEventListener('click',()=>{
                    hamburger.classList.toggle('active');
                    mobileNav.classList.toggle('active');
                });
            }
            else {
                console.error ('Hamburger or mobileNav element not found');
            }
        }
        catch (error){
            console.error('error');
        }
    }
    loadNavbar();
});

function rotateCube(xRotation, yRotation) {
    const cube = document.querySelector('.cube');
    cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
}

// Desktop: Mouse movement
document.addEventListener('mousemove', function(e) {
    let xRotation = (e.clientY / window.innerHeight - 0.5) * 90;
    let yRotation = (e.clientX / window.innerWidth - 0.5) * 90;
    rotateCube(xRotation, yRotation);
});

// Mobile: Device orientation
window.addEventListener('deviceorientation', function(e) {
    let xRotation = e.beta - 45; // Tilting forward and backward
    let yRotation = e.gamma;     // Tilting left and right
    rotateCube(xRotation, yRotation);
});

// Mobile: Touch movement as fallback
document.addEventListener('touchmove', function(e) {
    let touch = e.touches[0];
    let xRotation = (touch.clientY / window.innerHeight - 0.5) * 90;
    let yRotation = (touch.clientX / window.innerWidth - 0.5) * 90;
    rotateCube(xRotation, yRotation);
});

document.getElementById("myFooter").addEventListener("click", function() {
    this.classList.add("active");
    document.getElementById("overlay").style.display="flex";
    
    // Αφαίρεση της κλάσης active μετά από 2 δευτερόλεπτα (2000 milliseconds)
    setTimeout(() => {
      this.classList.remove("active");
      document.getElementById("overlay").style.display="none";
    }, 3000);
  });