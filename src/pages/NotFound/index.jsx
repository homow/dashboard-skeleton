import {useNavigate} from "react-router-dom";
import Button from "@components/ui/Button";

export default function NotFound() {
    const navigate = useNavigate();
    const hasBackPath = window.history.length;

    const goBack = () => navigate(-1);
    const goHome = () => navigate("/");

    return (
        <section className="h-full flex flex-col items-center justify-center gap-6 px-4 text-center">
            <h1 className="text-6xl font-extrabold text-rose-500">404</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
                صفحه‌ای که دنبالشی وجود نداره.
            </p>

            <div className="flex gap-4 mt-4 flex-wrap justify-center">
                {hasBackPath > 1 && (
                    <Button
                        text="بازگشت به صفحه قبل"
                        onClick={goBack}
                        className="px-6 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition-colors"
                    />
                )}
                <Button
                    text="بازگشت به خانه"
                    onClick={goHome}
                    className="px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg transition-colors"
                />
            </div>
        </section>
    )
}
