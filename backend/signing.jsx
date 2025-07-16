

 


const signupSchema = Yup. object().shape({

    email: Yup.string()
    .email('Invalid email')
})