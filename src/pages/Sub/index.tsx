import {FC} from "react";
import {useNavigate} from "react-router";

const Sub: FC = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/");
    }

    return (
        <>
            <h1>サブコンテンツ</h1>
            <button onClick={onClick}>メインコンテンツへ遷移</button>
        </>
    );
}
export default Sub;