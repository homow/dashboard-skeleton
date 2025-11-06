import {useEffect, useState, useRef} from "react";
import Button from "@components/ui/Button";
import {useAuth} from "@/context/AuthContext";
import Input from "@components/ui/forms/Input";
import CheckBox from "@components/ui/forms/CheckBox";
import AlertModal from "@components/ui/modals/AlertModal";
import {ErrorMessageInputs} from "@components/ui/Fragments";
import loginHandler from "@api/handlers/loginHandler.js";
import {cn} from "@utils/ui-utils.js";
import logo from "@img/logo.webp"

export default function Login() {
    // state variables
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [alertModalData, setAlertModalData] = useState({type: "error", message: ""});
    const [isOpenAlertModal, setIsOpenAlertModal] = useState(false);
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    // ref
    const inputRef = useRef(null);
    const {setAuthInfo} = useAuth();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // focus and set title
    useEffect(() => {
        document.title = "ورود به اکانت ادمین | آشیانه";
        inputRef?.current?.focus();
    }, []);

    // login handler
    const submitHandler = async event => {
        event.preventDefault();
        setLoading(true);

        const trimmedEmail = email.trim().toLowerCase();
        const trimPassword = password.trim();

        const newErrors = {
            email: trimmedEmail ? "" : "ایمیل رو وارد کن",
            password: trimPassword ? "" : "پسورد رو وارد کن",
        }

        if (newErrors.email || newErrors.password) {
            setLoading(false);
            setErrors(newErrors);
            return;
        }

        if (!emailRegex.test(trimmedEmail)) {
            setLoading(false);
            setErrors({...newErrors, email: "فرمت ایمیل اشتباهه"});
            return;
        }

        const userInfo = {
            email: email.trim().toLowerCase(),
            password: password.trim(),
            remember
        };

        await loginHandler(userInfo, setAlertModalData, setIsOpenAlertModal, setAuthInfo, setLoading);
        setLoading(false);
    }

    // set email handler
    const setEmailHandler = event => {
        setEmail(event.target.value);
        if (emailRegex.test(event.target.value) && errors.email) {
            setErrors({
                ...errors,
                email: ""
            });
        } else if (!emailRegex.test(event.target.value)) {
            setErrors({...errors, email: "فرمت ایمیل اشتباهه"})
        }
    }

    // set password handler
    const setPasswordHandler = event => {
        setPassword(event.target.value);
        if (event.target.value && errors.password) setErrors({
            ...errors,
            password: ""
        });
    }

    // show and hide password button
    const ShowPasswordButton = () => {
        return (
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide Password" : "Show Password"}
                className="absolute right-2 top-1/2 text-sm text-gray-500 hover:text-violet-500 cursor-pointer"
            >
                {showPassword ? "مخفی" : "نمایش"}
            </button>
        )
    }

    return (
        <>
            {/* alert modal for state */}
            <AlertModal {...alertModalData} isOpen={isOpenAlertModal} setIsOpen={setIsOpenAlertModal} setData={setAlertModalData}/>

            {/* logo */}
            <img
                id={"login-logo"}
                className={"max-w-10 top-2 left-2 absolute xs:top-5 xs:left-5 xs:max-w-20"}
                src={`${logo}`}
                alt="logo"
            />

            <section className="flex items-center justify-center min-h-screen">
                <div className="max-w-9/10 w-full xs:max-w-sm sm:max-w-md bg-white/10 rounded-2xl shadow-lg space-y-6 p-3 xs:p-8">
                    <h2 className="text-2xl font-bold text-center">خوش اومدی</h2>
                    <p className="text-sm text-center text-secondary-txt">
                        به پنل مدیریت وارد شو.
                    </p>

                    <form className="space-y-6" onSubmit={submitHandler}>
                        <div>
                            <Input
                                type={"text"}
                                id={"email"}
                                value={email}
                                name={"email"}
                                ref={inputRef}
                                label={"ایمیل"}
                                autoComplete={"email"}
                                onChange={setEmailHandler}
                                placeholder={"you@example.com"}
                                className={cn("text-sm xs:text-base", errors.email && "border-rose-600 bg-rose-600/10")}
                                dir={"ltr"}
                            />
                            <ErrorMessageInputs msg={errors.email}/>
                        </div>

                        <div>
                            <Input
                                id="password"
                                label={"پسورد"}
                                value={password}
                                name={"password"}
                                placeholder={"******"}
                                parentClassName={"relative"}
                                onChange={setPasswordHandler}
                                children={<ShowPasswordButton/>}
                                type={showPassword ? "text" : "password"}
                                className={cn("text-sm xs:text-base", errors.password && "border-rose-600 bg-rose-600/10")}
                                dir={"ltr"}
                            />
                            <ErrorMessageInputs msg={errors.password}/>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-400">
                            <CheckBox
                                id={"remember"}
                                checked={remember}
                                onChange={setRemember}
                                label={"منو یادت باشه"}
                            />
                        </div>

                        <Button
                            type={"submit"}
                            text={loading ? "در حال پردازش" : "ارسال"}
                            disabled={loading}
                        />
                    </form>
                </div>
            </section>
        </>
    );
};