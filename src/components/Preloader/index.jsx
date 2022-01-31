import './index.scss';
import Lottie from "lottie-react";
import preloader from '../../assets/preloader.json';

export default function Preloader({status}) {
    return (
        <div className={status ? "preloader" : "preloader hidden"}>
            <Lottie
                animationData={preloader}
                loop="loop"
                autoplay="autoplay"
                width="100%"
                height="100%"
            />
        </div>
    )
}