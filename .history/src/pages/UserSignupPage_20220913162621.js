import React from "react";
import { signup } from "../api/apiCalls";
import Input from "../components/Input";
import { withTranslation } from "react-i18next";

class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false,
        errors: {}

    }

    onChange = event => {
        const { t } = this.props;
        const { name, value } = event.target;
        const errors = { ...this.state.errors }
        errors[name] = undefined;
        if (name === 'password' || name === 'passwordRepeat') {
            if (name === 'password' && value !== this.state.passwordRepeat) {
                errors.passwordRepeat = t("Password mismatch")
            } else if (name === 'passwordRepeat' && value !== this.state.password) {
                errors.passwordRepeat = t("Password mismatch")
            } else {
                errors.passwordRepeat = undefined
            }
        }
        this.setState({
            [name]: value,
            errors
        })
    }

    onClickSignup = async event => {
        event.preventDefault();

        const { username, displayName, password } = this.state;

        const body = {
            username,
            displayName,
            password
        }
        this.setState({ pendingApiCall: true });

        try {
            const response = await signup(body)
        } catch (error) {
            if (error.response.data.validationsErrors) { this.setState({ errors: error.response.data.validationsErrors }) }
        }


        this.setState({ pendingApiCall: false })


    }

    onChangeLanguage = language =>{
        const {i18n} =this.props;
        i18n.changeLanguage(language)
    } 


    render() {
        const { pendingApiCall, errors } = this.state;
        const { username, displayName, password, passwordRepeat } = errors;
        const { t } = this.props;

        return (
            <div className="container my-5">
                <form>
                    <h1 className="text-center">{t("Sign Up")}</h1>
                    <Input
                        name="username"
                        label={t("Username")}
                        error={username}
                        onChange={this.onChange}
                    ></Input>
                    <Input
                        name="displayName"
                        label={t("Display Name")}
                        error={displayName}
                        onChange={this.onChange}
                    ></Input>

                    <Input
                        name="password"
                        label={t("Password")}
                        error={password}
                        onChange={this.onChange}
                        type="password"
                    ></Input>
                    <Input
                        name="passwordRepeat"
                        label={t("Password Repeat")}
                        error={passwordRepeat}
                        onChange={this.onChange}
                        type="password"
                    ></Input>


                    <div className="text-center my-4">
                        <button className="btn btn-primary"
                            onClick={this.onClickSignup}
                            disabled={pendingApiCall || passwordRepeat !== undefined}
                        >
                            {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}
                            {t("Sign Up")}


                        </button>
                    </div>
                    <div>
                        <img className="mr-2" src="https://countryflagsapi.com/png/tr" height={24} alt="Turkish Flag" onClick={()=>this.onChangeLanguage('tr')}></img>
                        <img className="ml-2" src="https://countryflagsapi.com/png/us" height={24} alt="USA Flag" onClick={()=>this.onChangeLanguage('en')}></img>
                    </div>
                </form>
            </div>


        )
    }
}

const UserSignupPageWithTranslation = withTranslation()(UserSignupPage)


export default UserSignupPageWithTranslation;