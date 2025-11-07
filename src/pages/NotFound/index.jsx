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
                The page you're looking for doesn’t exist
            </p>

            <div className="flex gap-4 mt-4 flex-wrap justify-center">
                {hasBackPath > 1 && (
                    <Button
                        text="Back to Last Page"
                        onClick={goBack}
                    />
                )}
                <Button
                    text="Back to Home"
                    onClick={goHome}
                    className="bg-rose-500 hover:bg-rose-600"
                />
            </div>
        </section>
    )
}