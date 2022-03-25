import { useState } from "react";

let today = () => new Date().toISOString().slice(0, 10)

const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia",
	"Bonaire",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands",
	"Central African Republic",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands",
	"Colombia",
	"Comoros",
	"Congo",
	"Congo",
	"Cook Islands",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands [Malvinas]",
	"Faroe Islands",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories",
	"Gabon",
	"Gambia",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia",
	"Moldova",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates",
	"United Kingdom of Great Britain and Northern Ireland",
	"United States Minor Outlying Islands",
	"United States of America",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela",
	"Viet Nam",
	"Virgin Islands",
	"Virgin Islands",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];

let initialForm = {
    nickname:"",
    name:"",
    lastname:"",
    password:"",
    repeatPassword:"",
    country:"",
    date:"",  
}

let initialErrors = {
    nickname:"",
    name:"",
    lastname:"",
    password:"",
    repeatPassword:"",
    country:"",
    date:"",  
}

const RegisterForm = ({setRegister,setRegistered}) => {

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState(initialErrors);
	const [completed, setCompleted] = useState(true);

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!form.nickname||!form.password||!form.name||!form.lastname||!form.repeatPassword||!form.country||!form.date){
			setCompleted(false)
            return
        }else if(errors.nickname||errors.password||errors.name||errors.lastname||errors.repeatPassword||errors.country||errors.date){
            return
        }
        
        setCompleted(true)
        setForm(initialForm)
		setRegistered(true)
		setRegister(false)
		
		setTimeout(()=> {
			setRegistered(false)
		} ,4000)
    }

    const nicknameValidation = (e) =>{

        let regexNickname = /^[\wÑñ\-\.]+$/;


        if(form.nickname.trim().length>30) setErrors({
            ...errors,
            [e.target.name]: "Nickname can't be longer than 30 characters"
        })

        else if( !regexNickname.test( form.nickname.trim() ) ) setErrors({
            ...errors,
            [e.target.name]: `Nickname can only use alphanumeric characters and "_ - ." symbols`
        })

        else setErrors({
            ...errors,
            [e.target.name]:""
        })
    }

	const nameValidation = (e) =>{

        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]+$/;


        if(form.name.trim().length>20) setErrors({
            ...errors,
            [e.target.name]: "Name can't be longer than 20 characters"
        })

        else if( !regexName.test( form.name.trim() ) ) setErrors({
            ...errors,
            [e.target.name]: `Name can only use alphabetic characters`
        })

        else setErrors({
            ...errors,
            [e.target.name]:""
        })
    }

	const lastnameValidation = (e) =>{

        let regexLastname = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]+$/;


        if(form.lastname.trim().length>20) setErrors({
            ...errors,
            [e.target.name]: "Lastame can't be longer than 20 characters"
        })

        else if( !regexLastname.test( form.lastname.trim() ) ) setErrors({
            ...errors,
            [e.target.name]: `Lastname can only use alphabetic characters`
        })

        else setErrors({
            ...errors,
            [e.target.name]:""
        })
    }

	const passwordValidation = (e) =>{

        let regexPassword = /^[\wÑñ\-\.\$\#\*\=]+$/;
		let regexSpecialChar = /\_|\-|\.|\$|\#|\*|\=/;
		let regexHasNumber = /[0-9]/;
		let regexHasLetter = /(?=(.*[a-z]){5,})/;


        if(form.password.length>40) setErrors({
            ...errors,
            [e.target.name]: "password can't be longer than 40 characters"
        })

        else if( !regexPassword.test( form.password ) ) setErrors({
            ...errors,
            [e.target.name]: `Password can only use alphanumeric characters and "_ - . $ # * =" symbols`
        })

		else if( form.password.length<8 ) setErrors({
            ...errors,
            [e.target.name]: `Password should have at least 8 characters`
        })

		else if( !regexSpecialChar.test( form.password ) ) setErrors({
            ...errors,
            [e.target.name]: `Password should have at least one special character "_ - . $ # * ="`
        })

		else if( !regexHasNumber.test( form.password ) ) setErrors({
            ...errors,
            [e.target.name]: `Password should have at least one number`
        })

		else if( !regexHasLetter.test( form.password ) ) setErrors({
            ...errors,
            [e.target.name]: `Password should have at least five letter`
        })

        else setErrors({
            ...errors,
            [e.target.name]:""
        })
    }

	const repeatPasswordValidation = (e) =>{

        if(form.password !== form.repeatPassword) setErrors({
            ...errors,
            [e.target.name]: "Passwords don't match"
        })

        else setErrors({
            ...errors,
            [e.target.name]:""
        })
    }

	const countryValidation = (e) =>{

        let verification = countryList.find(element=> element===form.country)
		
		if(!verification)
		setErrors({
            ...errors,
            [e.target.name]: "Invalid Country"
        })

        else setErrors({
            ...errors,
            [e.target.name]:""
        })
    }

	const dateValidation = (e) =>{
		
		if( parseInt(form.date.slice(0,4)) > 2014 )
		setErrors({
            ...errors,
            [e.target.name]: "You must be older to use this app"
        })

        else setErrors({
            ...errors,
            [e.target.name]:""
        })
    }

	

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" name="nickname" placeholder="Nickname" onChange={handleChange} value={form.nickname} onBlur={nicknameValidation} required/>
			{!errors.nickname || <h6 style={{color:"#FF0000"}}>{errors.nickname}</h6>}

            <input type="text" name="name" placeholder="Name" onChange={handleChange} value={form.name} onBlur={nameValidation} required/>
			{!errors.name || <h6 style={{color:"#FF0000"}}>{errors.name}</h6>}

            <input type="text" name="lastname" placeholder="Lastname" onChange={handleChange} value={form.lastname} onBlur={lastnameValidation} required/>
			{!errors.lastname || <h6 style={{color:"#FF0000"}}>{errors.lastname}</h6>}

            <input type="password" name="password" placeholder="Password" onChange={handleChange} value={form.password} onBlur={passwordValidation} required/>
			{!errors.password || <h6 style={{color:"#FF0000"}}>{errors.password}</h6>}

            <input type="password" name="repeatPassword" placeholder="Repeat Password" onChange={handleChange} value={form.repeatPassword} onBlur={repeatPasswordValidation} required/>
			{!errors.repeatPassword || <h6 style={{color:"#FF0000"}}>{errors.repeatPassword}</h6>}

            <select name="country" onChange={handleChange} value={form.country} onBlur={countryValidation} required>
                <option value="" defaultValue>Select Country</option>
                {countryList.map((el,index)=> <option value={el} key={index}>{el}</option>)}
            </select>
			{!errors.country || <h6 style={{color:"#FF0000"}}>{errors.country}</h6>}

            <input type="date" name="date" max={today()} min="1900-01-01" onChange={handleChange} value={form.date} onBlur={dateValidation} required/>
			{!errors.date || <h6 style={{color:"#FF0000"}}>{errors.date}</h6>}

            {completed || <h5 style={{color:"#FF0000"}}>Incomplete Data</h5>}
            <input type="submit" value="Register"/>
        </form>
     );
}
 
export default RegisterForm;