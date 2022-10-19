window.onload = () => {
    const form = document.getElementById('todo-form');
    const totalarry = [];

    form.onsubmit = (e) => {
        e.preventDefault();

        const input = document.getElementById("todo-text");        
        input.addEventListener("keyup", (event) => {
            if (event.key === "Enter" && input.value!='') {
                totalarry.push(input.value);
                input.value = '';
                console.log(JSON.stringify(totalarry));
            }
        });
    }
}