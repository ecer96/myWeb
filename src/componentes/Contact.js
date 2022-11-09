import  '../estilos/Contact.css'

const Contact=()=>{

    return(
        
        <form class='form' id='contacto'>
            <div>
                <h1>Contact</h1>
            </div>
            <div class='form_container'>
                
                <div class='form_group'>
                    <input type='text' id='name' name='name' class='form_input' placeholder=' '  required />
                    <label for='name' class='form_label'>Name:</label>
                    <span class='form_line'></span>
                </div>

                  
                <div class='form_group'>
                    <input type='text' id='matter' name='matter' class='form_input' placeholder=' '/>
                    <label for='matter' class='form_label'>Subject:</label>
                    <span class='form_line'></span>
                </div>
                
                  
                <div class='form_group'>
                    <input type='text' id='email' name='email' class='form_input' placeholder=' ' required/>
                    <label for='email' class='form_label'>Email:</label>
                    <span class='form_line'></span>
                </div>
  
                <div class='form_group'>
                    <textarea type='text' id='message' name='message' class='form_input' placeholder='' required/>
                    <label for='message' class='form_label'>Message:</label>
                    <span class='form_line'></span>
                </div>            </div>
         <input type='submit' class='form_submit'/>
        </form>
    
 

    )
}
export default Contact;