document.getElementById("contact-form").addEventListener("submit", async (e)=>{
    e.preventDefault();

    //valores
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const status = document.getElementById("status");

    //quando clicado mostra uma mensagem
    status.textContent="Sending...";

    try{
    
        // enviar os dados para o dominio
        const res = await fetch("https://portfolio-api-contact.onrender.com/contact", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, email, message})
        });

        //dados transformados em json
        const data = await res.json();

        if(res.ok){
            status.textContent=data.message || "Message send!";

            e.target.reset();
            
        } else{
            status.textContent = data.error || "Oops, something went wrong.";
        }
        
    } catch(err){
        console.error(err);
        status.textContent="Network error. Try again later.";
    }
})