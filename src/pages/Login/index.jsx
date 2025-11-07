import {useEffect, useState, useRef} from "react";
import Button from "@ui/Button";
import Input from "@ui/forms/Input";
import CheckBox from "@ui/forms/CheckBox";
import AlertModal from "@ui/modals/AlertModal";
import {useAuth} from "@context/AuthContext";
import {cn} from "@utils/ui-utils.js";

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

    // regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // focus and set title
    useEffect(() => {
        document.title = "login to Dashboard | Skeleton";
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
        console.log(userInfo);

        setAlertModalData({type: "success", message: "ورود موفقت آمیز."});
        setIsOpenAlertModal(true);

        setTimeout(() => {
            setAuthInfo({
                token: true,
                userData: {
                    id: "1",
                    role: "admin",
                    display_name: "john",
                    email: "john@exmple.com"
                }
            })

            setLoading(false);
            setIsOpenAlertModal(false);
        }, 5000)
    }

    // set email handler
    const setEmailHandler = event => {
        setEmail(event.target.value);
        if (emailRegex.test(event.target.value.trim()) && errors.email) {
            setErrors({
                ...errors,
                email: ""
            });
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

    return (
        <>
            {/* alert modal for state */}
            <AlertModal {...alertModalData} isOpen={isOpenAlertModal} setIsOpen={setIsOpenAlertModal} setData={setAlertModalData}/>

            <section className="flex items-center justify-center min-h-screen">
                <div className="max-w-9/10 w-full xs:max-w-sm sm:max-w-md bg-white/10 rounded-2xl shadow-lg space-y-6 p-3 xs:p-8">
                    <h2 className="text-2xl font-bold text-center">خوش اومدی</h2>
                    <p className="text-sm text-center text-secondary-txt">
                        ورود به داشبورد
                    </p>

                    <form className="space-y-6" onSubmit={submitHandler}>
                        <div>
                            <Input
                                dir={"ltr"}
                                type={"text"}
                                id={"email"}
                                value={email}
                                name={"email"}
                                ref={inputRef}
                                label={"ایمیل"}
                                autoComplete={"email"}
                                onChange={setEmailHandler}
                                placeholder={"you@example.com"}
                                hasError={errors.email}
                            />
                        </div>

                        <div>
                            <Input
                                dir={"ltr"}
                                id="password"
                                label={"رمز عبور"}
                                value={password}
                                name={"password"}
                                placeholder={"******"}
                                parentClassName={"relative"}
                                onChange={setPasswordHandler}
                                type={showPassword ? "text" : "password"}
                                className={cn("text-sm xs:text-base", errors.password && "border-rose-600 bg-rose-600/10")}
                                hasError={errors.password}
                            >
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? "Hide Password" : "Show Password"}
                                    className="absolute right-2 top-1/2 text-sm text-gray-500 hover:text-sky-500 cursor-pointer"
                                >
                                    {showPassword ? "مخفی" : "نمایش"}
                                </button>
                            </Input>
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
                            text={loading ? "درحال پردازش" : "ورود"}
                            disabled={loading}
                        />
                    </form>
                </div>
            </section>
        </>
    );
};