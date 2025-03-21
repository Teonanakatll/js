import Loaderr from "../../../assets/img/loader.gif"
import s from "./Preloader.module.css"

const Preloader = (props) => {
	return (
		<>
		<div className={s.bg}>

		<img className={s.preloaderImg} src={Loaderr} />
		</div>
		</>
	)
}
export default Preloader