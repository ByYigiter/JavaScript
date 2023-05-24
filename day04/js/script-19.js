function setMode(){


        // const btnToggle = document.querySelector(".toggle-btn");

    const isDark = document.body.classList.contains("dark");

    if(isDark){
        document.body.classList.remove("dark");
        btnToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    else{
        document.body.classList.add("dark");
        btnToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}