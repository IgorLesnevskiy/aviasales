import React, {useEffect, useState} from "react";
import Skeleton  from "react-loading-skeleton";

import './styles.scss';

function Logo(props) {
	const {
		url,
		imageSrc,
		alt,
		title,
	} = props;

	const [isLoading, setLoadingStatus] = useState(true);

	useEffect(() => {
		setLoadingStatus(false);
	}, []);

	return (
		<React.Fragment>
			<div className={"logo"}>
				<a href={url} className={"logo__link"}>
					{isLoading
						? <Skeleton circle={true} width={60} height={60} />
						: <img
							className={"logo__image"}
							src={imageSrc}
							alt={alt}
							title={title} />
					}
				</a>
			</div>
		</React.Fragment>
	)
}

export default Logo;
