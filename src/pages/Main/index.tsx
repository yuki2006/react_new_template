import {FC} from "react";
import {useNavigate} from "react-router";

const Main: FC = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/sub");
    }

    return (
        <>
            <h1>コンテンツ</h1>
            <button onClick={onClick}>サブコンテンツへ遷移</button>
        </>
    );
}
export default Main;