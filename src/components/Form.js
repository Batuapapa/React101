
import React, {useState} from 'react';
function Form () {
    const [form, setForm] = useState({name: "", surname: "", gender: "0"});
    const handleChange =(e) => {
        setForm({...form,[e.target.name]: e.target.value});
        // setForm((prev) => ({...form,[e.target.name]: e.target.value}));


    };
    // const [name,setName] = useState("");
    // const [surname,setSurname] = useState("");
    // const [gender,setGender] = useState("0");

  return (
    <div>
        <div>İSİM - SOYİSİM</div>
        <input placeholder='İsim' 
         name='name'
         value={form.name} 
         onChange={handleChange}/>     
         <input placeholder='Soyisim'
         name='surname'
         value={form.surname}
         onChange={handleChange}
         /> 
        <br/><br/>
        <div>
            <div>Cinsiyet</div>
            <select value={form.gender} onChange={handleChange} name="gender">
                <option value={0}>Erkek</option>
                <option value={1}>Kadın</option>
             </select>
        </div>
        <hr/>
        <div>İsim : <strong>{form.name} {form.surname}</strong></div>
        <div>Cinsiyet : <strong>{form.gender === '0' ? 'Erkek': 'Kadın'}</strong></div>
    </div>
  )
}
export default Form; 