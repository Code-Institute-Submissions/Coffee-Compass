const indexFunc = () =>{
    let instructions = document.querySelectorAll(".instructions-div");
    
    instructions.forEach((instruction) => {
        instruction.addEventListener("click", () =>{
            instruction.classList.add("animation");
            setTimeout(() => {
                instruction.classList.remove("animation")
            }, 1000);
        });
    });
};
indexFunc();