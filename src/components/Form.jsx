
import formtext from '../assets/formtext.png'

function Form() {
    return (
        <div className="form-container">
            <div className='form-content'>
                <span className='form-info'>
                    <h2>Newslleter</h2>
                    <p>Get news about articles and updates in your inbox.</p>
                </span>
            </div>
            <form>
                <input type='text' placeholder='Name' required />
                <input type='email' placeholder='Email' required />
                <input type='message' placeholder='Message' required />
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default Form