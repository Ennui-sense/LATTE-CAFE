import "./Interior.scss";

import firstImage from "/img/interior/1.jpg"
import secondImage from "/img/interior/2.jpg"
import thirdImage from "/img/interior/3.jpg"

const Interior = () => {
	return (
		<section className="interior">
			<div className="interior__inner container">
				<img src={firstImage} alt="" className="interior__image interior__image--1" width={644} height={300}/>
				<img src={secondImage} alt="" className="interior__image interior__image--2" width={644} height={640}/>
				<img src={thirdImage} alt="" className="interior__image interior__image--3" width={644} height={300}/>
			</div>
		</section>
	)
}

export default Interior