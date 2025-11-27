import {useForm} from "react-router-dom"

const LoginForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm()

    const onSubmit = values => {
        console.log(values)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}></form>
    )
}

export default LoginForm