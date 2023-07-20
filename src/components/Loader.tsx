import anime from 'animejs';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
	const [animationRef, setAnimationRef] = useState<
		ReturnType<typeof anime> | undefined
	>();

	useEffect(() => {
		setAnimationRef(
			anime({
				targets: '#loader path',
				strokeDashoffset: [anime.setDashoffset, 0],
				easing: 'easeInOutSine',
				duration: 1500,
				direction: 'alternate',
				loop: false
			})
		);
	}, []);

	return (
		<>
			<Head>
				<title>Hang on, loading content...</title>
				<meta name="description" content="Hey 👋🏻, I am Falguni Sarkar." />
			</Head>
			<div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-white h-screen overflow-hidden px-4 sm:px-0">
				<svg
					width="635"
					height="437"
					viewBox="0 0 635 437"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					id="loader"
				>
					<path
						d="M303.4 411V362.4H318.7V411H303.4ZM318.7 384.3L312.3 379.3C313.567 373.633 315.7 369.233 318.7 366.1C321.7 362.967 325.867 361.4 331.2 361.4C333.533 361.4 335.567 361.767 337.3 362.5C339.1 363.167 340.667 364.233 342 365.7L332.9 377.2C332.233 376.467 331.4 375.9 330.4 375.5C329.4 375.1 328.267 374.9 327 374.9C324.467 374.9 322.433 375.7 320.9 377.3C319.433 378.833 318.7 381.167 318.7 384.3ZM368.709 412.1C363.442 412.1 358.742 411.033 354.609 408.9C350.542 406.7 347.342 403.667 345.009 399.8C342.675 395.933 341.509 391.567 341.509 386.7C341.509 381.833 342.642 377.5 344.909 373.7C347.242 369.833 350.375 366.8 354.309 364.6C358.242 362.4 362.675 361.3 367.609 361.3C372.409 361.3 376.642 362.333 380.309 364.4C383.975 366.467 386.842 369.333 388.909 373C391.042 376.667 392.109 380.867 392.109 385.6C392.109 386.467 392.042 387.4 391.909 388.4C391.842 389.333 391.675 390.433 391.409 391.7L349.509 391.8V381.3L384.909 381.2L378.309 385.6C378.242 382.8 377.809 380.5 377.009 378.7C376.209 376.833 375.009 375.433 373.409 374.5C371.875 373.5 369.975 373 367.709 373C365.309 373 363.209 373.567 361.409 374.7C359.675 375.767 358.309 377.3 357.309 379.3C356.375 381.3 355.909 383.733 355.909 386.6C355.909 389.467 356.409 391.933 357.409 394C358.475 396 359.942 397.567 361.809 398.7C363.742 399.767 366.009 400.3 368.609 400.3C371.009 400.3 373.175 399.9 375.109 399.1C377.042 398.233 378.742 396.967 380.209 395.3L388.609 403.7C386.209 406.5 383.309 408.6 379.909 410C376.509 411.4 372.775 412.1 368.709 412.1ZM427.494 412C424.227 412 421.227 411.367 418.494 410.1C415.76 408.833 413.527 407.1 411.794 404.9C410.06 402.633 409.06 400.067 408.794 397.2V376.7C409.06 373.833 410.06 371.233 411.794 368.9C413.527 366.567 415.76 364.733 418.494 363.4C421.227 362.067 424.227 361.4 427.494 361.4C432.094 361.4 436.16 362.5 439.694 364.7C443.294 366.9 446.094 369.9 448.094 373.7C450.16 377.5 451.194 381.833 451.194 386.7C451.194 391.567 450.16 395.9 448.094 399.7C446.094 403.5 443.294 406.5 439.694 408.7C436.16 410.9 432.094 412 427.494 412ZM424.694 398.2C426.894 398.2 428.794 397.7 430.394 396.7C432.06 395.7 433.36 394.333 434.294 392.6C435.227 390.867 435.694 388.9 435.694 386.7C435.694 384.433 435.227 382.433 434.294 380.7C433.36 378.967 432.06 377.633 430.394 376.7C428.794 375.7 426.927 375.2 424.794 375.2C422.66 375.2 420.76 375.7 419.094 376.7C417.494 377.633 416.227 378.967 415.294 380.7C414.36 382.433 413.894 384.433 413.894 386.7C413.894 388.9 414.327 390.867 415.194 392.6C416.127 394.333 417.427 395.7 419.094 396.7C420.76 397.7 422.627 398.2 424.694 398.2ZM399.494 431.5V362.4H414.794V374.9L412.294 386.7L414.594 398.5V431.5H399.494ZM482.966 412.1C477.7 412.1 473 411.033 468.866 408.9C464.8 406.7 461.6 403.667 459.266 399.8C456.933 395.933 455.766 391.567 455.766 386.7C455.766 381.833 456.9 377.5 459.166 373.7C461.5 369.833 464.633 366.8 468.566 364.6C472.5 362.4 476.933 361.3 481.866 361.3C486.666 361.3 490.9 362.333 494.566 364.4C498.233 366.467 501.1 369.333 503.166 373C505.3 376.667 506.366 380.867 506.366 385.6C506.366 386.467 506.3 387.4 506.166 388.4C506.1 389.333 505.933 390.433 505.666 391.7L463.766 391.8V381.3L499.166 381.2L492.566 385.6C492.5 382.8 492.066 380.5 491.266 378.7C490.466 376.833 489.266 375.433 487.666 374.5C486.133 373.5 484.233 373 481.966 373C479.566 373 477.466 373.567 475.666 374.7C473.933 375.767 472.566 377.3 471.566 379.3C470.633 381.3 470.166 383.733 470.166 386.6C470.166 389.467 470.666 391.933 471.666 394C472.733 396 474.2 397.567 476.066 398.7C478 399.767 480.266 400.3 482.866 400.3C485.266 400.3 487.433 399.9 489.366 399.1C491.3 398.233 493 396.967 494.466 395.3L502.866 403.7C500.466 406.5 497.566 408.6 494.166 410C490.766 411.4 487.033 412.1 482.966 412.1ZM534.052 412C529.585 412 525.585 410.9 522.052 408.7C518.585 406.5 515.818 403.5 513.752 399.7C511.752 395.9 510.752 391.567 510.752 386.7C510.752 381.833 511.752 377.5 513.752 373.7C515.818 369.9 518.585 366.9 522.052 364.7C525.585 362.5 529.585 361.4 534.052 361.4C537.318 361.4 540.252 362.033 542.852 363.3C545.518 364.567 547.685 366.333 549.352 368.6C551.018 370.8 551.952 373.333 552.152 376.2V397.2C551.952 400.067 551.018 402.633 549.352 404.9C547.752 407.1 545.618 408.833 542.952 410.1C540.285 411.367 537.318 412 534.052 412ZM537.152 398.2C540.418 398.2 543.052 397.133 545.052 395C547.052 392.8 548.052 390.033 548.052 386.7C548.052 384.433 547.585 382.433 546.652 380.7C545.785 378.967 544.518 377.633 542.852 376.7C541.252 375.7 539.385 375.2 537.252 375.2C535.118 375.2 533.218 375.7 531.552 376.7C529.952 377.633 528.652 378.967 527.652 380.7C526.718 382.433 526.252 384.433 526.252 386.7C526.252 388.9 526.718 390.867 527.652 392.6C528.585 394.333 529.885 395.7 531.552 396.7C533.218 397.7 535.085 398.2 537.152 398.2ZM547.452 411V397.9L549.752 386.1L547.452 374.3V362.4H562.452V411H547.452ZM580.124 411V342.3H595.424V411H580.124ZM569.124 375.4V362.4H606.424V375.4H569.124ZM619.348 412.1C616.748 412.1 614.581 411.2 612.848 409.4C611.114 407.6 610.248 405.433 610.248 402.9C610.248 400.233 611.114 398.033 612.848 396.3C614.581 394.5 616.748 393.6 619.348 393.6C622.014 393.6 624.181 394.5 625.848 396.3C627.581 398.033 628.448 400.233 628.448 402.9C628.448 405.433 627.581 407.6 625.848 409.4C624.181 411.2 622.014 412.1 619.348 412.1Z"
						fill="#080808"
					/>
					<mask
						id="path-2-outside-1_362_24"
						maskUnits="userSpaceOnUse"
						x="0"
						y="216"
						width="375"
						height="98"
						fill="#080808"
					>
						<rect fill="white" y="216" width="375" height="98" />
						<path d="M26.1 292C21.7667 292 17.8333 290.9 14.3 288.7C10.8333 286.5 8.06667 283.533 6 279.8C4 276 3 271.767 3 267.1C3 262.367 4 258.133 6 254.4C8.06667 250.6 10.8333 247.6 14.3 245.4C17.8333 243.133 21.7667 242 26.1 242C29.7667 242 33 242.8 35.8 244.4C38.6667 245.933 40.9333 248.067 42.6 250.8C44.2667 253.533 45.1 256.633 45.1 260.1V273.9C45.1 277.367 44.2667 280.467 42.6 283.2C41 285.933 38.7667 288.1 35.9 289.7C33.0333 291.233 29.7667 292 26.1 292ZM27.9 281.6C30.6333 281.6 33 281 35 279.8C37.0667 278.533 38.6667 276.8 39.8 274.6C40.9333 272.4 41.5 269.867 41.5 267C41.5 264.133 40.9333 261.6 39.8 259.4C38.6667 257.2 37.0667 255.5 35 254.3C33 253.033 30.6333 252.4 27.9 252.4C25.2333 252.4 22.8667 253.033 20.8 254.3C18.8 255.5 17.2 257.2 16 259.4C14.8667 261.6 14.3 264.133 14.3 267C14.3 269.867 14.8667 272.4 16 274.6C17.2 276.8 18.8 278.533 20.8 279.8C22.8667 281 25.2333 281.6 27.9 281.6ZM51.8 291H40.8V278.1L42.7 266.4L40.8 254.8V219H51.8V291Z" />
						<path d="M86.3078 292C81.5078 292 77.1745 290.933 73.3078 288.8C69.5078 286.6 66.4745 283.6 64.2078 279.8C62.0078 276 60.9078 271.733 60.9078 267C60.9078 262.267 62.0078 258.033 64.2078 254.3C66.4078 250.5 69.3745 247.5 73.1078 245.3C76.9078 243.1 81.1078 242 85.7078 242C90.1745 242 94.1078 243.033 97.5078 245.1C100.974 247.167 103.674 250 105.608 253.6C107.608 257.2 108.608 261.3 108.608 265.9C108.608 266.7 108.541 267.533 108.408 268.4C108.341 269.2 108.208 270.1 108.008 271.1H68.6078V262.1H102.308L98.2078 265.7C98.0745 262.767 97.5078 260.3 96.5078 258.3C95.5078 256.3 94.0745 254.767 92.2078 253.7C90.4078 252.633 88.1745 252.1 85.5078 252.1C82.7078 252.1 80.2745 252.7 78.2078 253.9C76.1412 255.1 74.5411 256.8 73.4078 259C72.2745 261.133 71.7078 263.7 71.7078 266.7C71.7078 269.7 72.3078 272.333 73.5078 274.6C74.7078 276.867 76.4078 278.633 78.6078 279.9C80.8078 281.1 83.3411 281.7 86.2078 281.7C88.6745 281.7 90.9411 281.267 93.0078 280.4C95.1411 279.533 96.9411 278.267 98.4078 276.6L105.408 283.7C103.074 286.433 100.241 288.5 96.9078 289.9C93.5745 291.3 90.0411 292 86.3078 292Z" />
						<path d="M132.845 291L110.945 243H123.145L139.845 282.1H132.645L149.445 243H161.145L139.245 291H132.845Z" />
						<path d="M188.261 292C183.461 292 179.128 290.933 175.261 288.8C171.461 286.6 168.428 283.6 166.161 279.8C163.961 276 162.861 271.733 162.861 267C162.861 262.267 163.961 258.033 166.161 254.3C168.361 250.5 171.328 247.5 175.061 245.3C178.861 243.1 183.061 242 187.661 242C192.128 242 196.061 243.033 199.461 245.1C202.928 247.167 205.628 250 207.561 253.6C209.561 257.2 210.561 261.3 210.561 265.9C210.561 266.7 210.494 267.533 210.361 268.4C210.294 269.2 210.161 270.1 209.961 271.1H170.561V262.1H204.261L200.161 265.7C200.028 262.767 199.461 260.3 198.461 258.3C197.461 256.3 196.028 254.767 194.161 253.7C192.361 252.633 190.128 252.1 187.461 252.1C184.661 252.1 182.228 252.7 180.161 253.9C178.094 255.1 176.494 256.8 175.361 259C174.228 261.133 173.661 263.7 173.661 266.7C173.661 269.7 174.261 272.333 175.461 274.6C176.661 276.867 178.361 278.633 180.561 279.9C182.761 281.1 185.294 281.7 188.161 281.7C190.628 281.7 192.894 281.267 194.961 280.4C197.094 279.533 198.894 278.267 200.361 276.6L207.361 283.7C205.028 286.433 202.194 288.5 198.861 289.9C195.528 291.3 191.994 292 188.261 292Z" />
						<path d="M219.379 291V219H230.379V291H219.379Z" />
						<path d="M264.621 292C259.954 292 255.721 290.9 251.921 288.7C248.121 286.433 245.088 283.4 242.821 279.6C240.621 275.8 239.521 271.567 239.521 266.9C239.521 262.233 240.621 258.033 242.821 254.3C245.088 250.567 248.121 247.6 251.921 245.4C255.721 243.133 259.954 242 264.621 242C269.354 242 273.621 243.1 277.421 245.3C281.221 247.5 284.221 250.5 286.421 254.3C288.688 258.033 289.821 262.233 289.821 266.9C289.821 271.567 288.688 275.8 286.421 279.6C284.221 283.4 281.221 286.433 277.421 288.7C273.621 290.9 269.354 292 264.621 292ZM264.621 281.4C267.354 281.4 269.754 280.8 271.821 279.6C273.954 278.333 275.588 276.6 276.721 274.4C277.921 272.2 278.521 269.7 278.521 266.9C278.521 264.1 277.921 261.633 276.721 259.5C275.521 257.367 273.888 255.7 271.821 254.5C269.754 253.233 267.354 252.6 264.621 252.6C261.954 252.6 259.554 253.233 257.421 254.5C255.354 255.7 253.721 257.367 252.521 259.5C251.388 261.633 250.821 264.1 250.821 266.9C250.821 269.7 251.388 272.2 252.521 274.4C253.721 276.6 255.354 278.333 257.421 279.6C259.554 280.8 261.954 281.4 264.621 281.4Z" />
						<path d="M324.669 292C321.002 292 317.735 291.233 314.869 289.7C312.002 288.1 309.735 285.933 308.069 283.2C306.469 280.467 305.669 277.367 305.669 273.9V260.1C305.669 256.633 306.502 253.533 308.169 250.8C309.835 248.067 312.102 245.933 314.969 244.4C317.835 242.8 321.069 242 324.669 242C329.002 242 332.902 243.133 336.369 245.4C339.902 247.6 342.669 250.6 344.669 254.4C346.735 258.133 347.769 262.367 347.769 267.1C347.769 271.767 346.735 276 344.669 279.8C342.669 283.533 339.902 286.5 336.369 288.7C332.902 290.9 329.002 292 324.669 292ZM322.869 281.6C325.535 281.6 327.869 281 329.869 279.8C331.935 278.533 333.535 276.8 334.669 274.6C335.869 272.4 336.469 269.867 336.469 267C336.469 264.133 335.869 261.6 334.669 259.4C333.535 257.2 331.935 255.5 329.869 254.3C327.869 253.033 325.535 252.4 322.869 252.4C320.202 252.4 317.835 253.033 315.769 254.3C313.702 255.5 312.102 257.2 310.969 259.4C309.835 261.6 309.269 264.133 309.269 267C309.269 269.867 309.835 272.4 310.969 274.6C312.102 276.8 313.702 278.533 315.769 279.8C317.835 281 320.202 281.6 322.869 281.6ZM298.969 311V243H309.969V255.9L308.069 267.6L309.969 279.2V311H298.969Z" />
						<path d="M363.716 292C361.583 292 359.816 291.3 358.416 289.9C357.083 288.433 356.416 286.667 356.416 284.6C356.416 282.467 357.083 280.7 358.416 279.3C359.816 277.9 361.583 277.2 363.716 277.2C365.85 277.2 367.583 277.9 368.916 279.3C370.316 280.7 371.016 282.467 371.016 284.6C371.016 286.667 370.316 288.433 368.916 289.9C367.583 291.3 365.85 292 363.716 292Z" />
					</mask>
					<path
						d="M26.1 292C21.7667 292 17.8333 290.9 14.3 288.7C10.8333 286.5 8.06667 283.533 6 279.8C4 276 3 271.767 3 267.1C3 262.367 4 258.133 6 254.4C8.06667 250.6 10.8333 247.6 14.3 245.4C17.8333 243.133 21.7667 242 26.1 242C29.7667 242 33 242.8 35.8 244.4C38.6667 245.933 40.9333 248.067 42.6 250.8C44.2667 253.533 45.1 256.633 45.1 260.1V273.9C45.1 277.367 44.2667 280.467 42.6 283.2C41 285.933 38.7667 288.1 35.9 289.7C33.0333 291.233 29.7667 292 26.1 292ZM27.9 281.6C30.6333 281.6 33 281 35 279.8C37.0667 278.533 38.6667 276.8 39.8 274.6C40.9333 272.4 41.5 269.867 41.5 267C41.5 264.133 40.9333 261.6 39.8 259.4C38.6667 257.2 37.0667 255.5 35 254.3C33 253.033 30.6333 252.4 27.9 252.4C25.2333 252.4 22.8667 253.033 20.8 254.3C18.8 255.5 17.2 257.2 16 259.4C14.8667 261.6 14.3 264.133 14.3 267C14.3 269.867 14.8667 272.4 16 274.6C17.2 276.8 18.8 278.533 20.8 279.8C22.8667 281 25.2333 281.6 27.9 281.6ZM51.8 291H40.8V278.1L42.7 266.4L40.8 254.8V219H51.8V291Z"
						stroke="#080808"
						strokeWidth="6"
						mask="url(#path-2-outside-1_362_24)"
					/>
					<path
						d="M86.3078 292C81.5078 292 77.1745 290.933 73.3078 288.8C69.5078 286.6 66.4745 283.6 64.2078 279.8C62.0078 276 60.9078 271.733 60.9078 267C60.9078 262.267 62.0078 258.033 64.2078 254.3C66.4078 250.5 69.3745 247.5 73.1078 245.3C76.9078 243.1 81.1078 242 85.7078 242C90.1745 242 94.1078 243.033 97.5078 245.1C100.974 247.167 103.674 250 105.608 253.6C107.608 257.2 108.608 261.3 108.608 265.9C108.608 266.7 108.541 267.533 108.408 268.4C108.341 269.2 108.208 270.1 108.008 271.1H68.6078V262.1H102.308L98.2078 265.7C98.0745 262.767 97.5078 260.3 96.5078 258.3C95.5078 256.3 94.0745 254.767 92.2078 253.7C90.4078 252.633 88.1745 252.1 85.5078 252.1C82.7078 252.1 80.2745 252.7 78.2078 253.9C76.1412 255.1 74.5411 256.8 73.4078 259C72.2745 261.133 71.7078 263.7 71.7078 266.7C71.7078 269.7 72.3078 272.333 73.5078 274.6C74.7078 276.867 76.4078 278.633 78.6078 279.9C80.8078 281.1 83.3411 281.7 86.2078 281.7C88.6745 281.7 90.9411 281.267 93.0078 280.4C95.1411 279.533 96.9411 278.267 98.4078 276.6L105.408 283.7C103.074 286.433 100.241 288.5 96.9078 289.9C93.5745 291.3 90.0411 292 86.3078 292Z"
						stroke="#080808"
						strokeWidth="6"
						mask="url(#path-2-outside-1_362_24)"
					/>
					<path
						d="M132.845 291L110.945 243H123.145L139.845 282.1H132.645L149.445 243H161.145L139.245 291H132.845Z"
						stroke="#080808"
						strokeWidth="6"
						mask="url(#path-2-outside-1_362_24)"
					/>
					<path
						d="M188.261 292C183.461 292 179.128 290.933 175.261 288.8C171.461 286.6 168.428 283.6 166.161 279.8C163.961 276 162.861 271.733 162.861 267C162.861 262.267 163.961 258.033 166.161 254.3C168.361 250.5 171.328 247.5 175.061 245.3C178.861 243.1 183.061 242 187.661 242C192.128 242 196.061 243.033 199.461 245.1C202.928 247.167 205.628 250 207.561 253.6C209.561 257.2 210.561 261.3 210.561 265.9C210.561 266.7 210.494 267.533 210.361 268.4C210.294 269.2 210.161 270.1 209.961 271.1H170.561V262.1H204.261L200.161 265.7C200.028 262.767 199.461 260.3 198.461 258.3C197.461 256.3 196.028 254.767 194.161 253.7C192.361 252.633 190.128 252.1 187.461 252.1C184.661 252.1 182.228 252.7 180.161 253.9C178.094 255.1 176.494 256.8 175.361 259C174.228 261.133 173.661 263.7 173.661 266.7C173.661 269.7 174.261 272.333 175.461 274.6C176.661 276.867 178.361 278.633 180.561 279.9C182.761 281.1 185.294 281.7 188.161 281.7C190.628 281.7 192.894 281.267 194.961 280.4C197.094 279.533 198.894 278.267 200.361 276.6L207.361 283.7C205.028 286.433 202.194 288.5 198.861 289.9C195.528 291.3 191.994 292 188.261 292Z"
						stroke="#080808"
						strokeWidth="6"
						mask="url(#path-2-outside-1_362_24)"
					/>
					<path
						d="M219.379 291V219H230.379V291H219.379Z"
						stroke="#080808"
						strokeWidth="6"
						mask="url(#path-2-outside-1_362_24)"
					/>
					<path
						d="M264.621 292C259.954 292 255.721 290.9 251.921 288.7C248.121 286.433 245.088 283.4 242.821 279.6C240.621 275.8 239.521 271.567 239.521 266.9C239.521 262.233 240.621 258.033 242.821 254.3C245.088 250.567 248.121 247.6 251.921 245.4C255.721 243.133 259.954 242 264.621 242C269.354 242 273.621 243.1 277.421 245.3C281.221 247.5 284.221 250.5 286.421 254.3C288.688 258.033 289.821 262.233 289.821 266.9C289.821 271.567 288.688 275.8 286.421 279.6C284.221 283.4 281.221 286.433 277.421 288.7C273.621 290.9 269.354 292 264.621 292ZM264.621 281.4C267.354 281.4 269.754 280.8 271.821 279.6C273.954 278.333 275.588 276.6 276.721 274.4C277.921 272.2 278.521 269.7 278.521 266.9C278.521 264.1 277.921 261.633 276.721 259.5C275.521 257.367 273.888 255.7 271.821 254.5C269.754 253.233 267.354 252.6 264.621 252.6C261.954 252.6 259.554 253.233 257.421 254.5C255.354 255.7 253.721 257.367 252.521 259.5C251.388 261.633 250.821 264.1 250.821 266.9C250.821 269.7 251.388 272.2 252.521 274.4C253.721 276.6 255.354 278.333 257.421 279.6C259.554 280.8 261.954 281.4 264.621 281.4Z"
						stroke="#080808"
						strokeWidth="6"
						mask="url(#path-2-outside-1_362_24)"
					/>
					<path
						d="M324.669 292C321.002 292 317.735 291.233 314.869 289.7C312.002 288.1 309.735 285.933 308.069 283.2C306.469 280.467 305.669 277.367 305.669 273.9V260.1C305.669 256.633 306.502 253.533 308.169 250.8C309.835 248.067 312.102 245.933 314.969 244.4C317.835 242.8 321.069 242 324.669 242C329.002 242 332.902 243.133 336.369 245.4C339.902 247.6 342.669 250.6 344.669 254.4C346.735 258.133 347.769 262.367 347.769 267.1C347.769 271.767 346.735 276 344.669 279.8C342.669 283.533 339.902 286.5 336.369 288.7C332.902 290.9 329.002 292 324.669 292ZM322.869 281.6C325.535 281.6 327.869 281 329.869 279.8C331.935 278.533 333.535 276.8 334.669 274.6C335.869 272.4 336.469 269.867 336.469 267C336.469 264.133 335.869 261.6 334.669 259.4C333.535 257.2 331.935 255.5 329.869 254.3C327.869 253.033 325.535 252.4 322.869 252.4C320.202 252.4 317.835 253.033 315.769 254.3C313.702 255.5 312.102 257.2 310.969 259.4C309.835 261.6 309.269 264.133 309.269 267C309.269 269.867 309.835 272.4 310.969 274.6C312.102 276.8 313.702 278.533 315.769 279.8C317.835 281 320.202 281.6 322.869 281.6ZM298.969 311V243H309.969V255.9L308.069 267.6L309.969 279.2V311H298.969Z"
						stroke="#080808"
						strokeWidth="6"
						mask="url(#path-2-outside-1_362_24)"
					/>
					<path
						d="M363.716 292C361.583 292 359.816 291.3 358.416 289.9C357.083 288.433 356.416 286.667 356.416 284.6C356.416 282.467 357.083 280.7 358.416 279.3C359.816 277.9 361.583 277.2 363.716 277.2C365.85 277.2 367.583 277.9 368.916 279.3C370.316 280.7 371.016 282.467 371.016 284.6C371.016 286.667 370.316 288.433 368.916 289.9C367.583 291.3 365.85 292 363.716 292Z"
						stroke="#080808"
						strokeWidth="6"
						mask="url(#path-2-outside-1_362_24)"
					/>
					<mask
						id="path-3-outside-2_362_24"
						maskUnits="userSpaceOnUse"
						x="295"
						y="123"
						width="316"
						height="99"
						fill="#080808"
					>
						<rect fill="white" x="295" y="123" width="316" height="99" />
						<path d="M321.1 199C316.767 199 312.833 197.9 309.3 195.7C305.833 193.5 303.067 190.533 301 186.8C299 183 298 178.767 298 174.1C298 169.367 299 165.133 301 161.4C303.067 157.6 305.833 154.6 309.3 152.4C312.833 150.133 316.767 149 321.1 149C324.767 149 328 149.8 330.8 151.4C333.667 152.933 335.933 155.067 337.6 157.8C339.267 160.533 340.1 163.633 340.1 167.1V180.9C340.1 184.367 339.267 187.467 337.6 190.2C336 192.933 333.767 195.1 330.9 196.7C328.033 198.233 324.767 199 321.1 199ZM322.9 188.6C325.633 188.6 328 188 330 186.8C332.067 185.533 333.667 183.8 334.8 181.6C335.933 179.4 336.5 176.867 336.5 174C336.5 171.133 335.933 168.6 334.8 166.4C333.667 164.2 332.067 162.5 330 161.3C328 160.033 325.633 159.4 322.9 159.4C320.233 159.4 317.867 160.033 315.8 161.3C313.8 162.5 312.2 164.2 311 166.4C309.867 168.6 309.3 171.133 309.3 174C309.3 176.867 309.867 179.4 311 181.6C312.2 183.8 313.8 185.533 315.8 186.8C317.867 188 320.233 188.6 322.9 188.6ZM346.8 198H335.8V185.1L337.7 173.4L335.8 161.8V126H346.8V198Z" />
						<path d="M381.308 199C376.508 199 372.174 197.933 368.308 195.8C364.508 193.6 361.474 190.6 359.208 186.8C357.008 183 355.908 178.733 355.908 174C355.908 169.267 357.008 165.033 359.208 161.3C361.408 157.5 364.374 154.5 368.108 152.3C371.908 150.1 376.108 149 380.708 149C385.174 149 389.108 150.033 392.508 152.1C395.974 154.167 398.674 157 400.608 160.6C402.608 164.2 403.608 168.3 403.608 172.9C403.608 173.7 403.541 174.533 403.408 175.4C403.341 176.2 403.208 177.1 403.008 178.1H363.608V169.1H397.308L393.208 172.7C393.074 169.767 392.508 167.3 391.508 165.3C390.508 163.3 389.074 161.767 387.208 160.7C385.408 159.633 383.174 159.1 380.508 159.1C377.708 159.1 375.274 159.7 373.208 160.9C371.141 162.1 369.541 163.8 368.408 166C367.274 168.133 366.708 170.7 366.708 173.7C366.708 176.7 367.308 179.333 368.508 181.6C369.708 183.867 371.408 185.633 373.608 186.9C375.808 188.1 378.341 188.7 381.208 188.7C383.674 188.7 385.941 188.267 388.008 187.4C390.141 186.533 391.941 185.267 393.408 183.6L400.408 190.7C398.074 193.433 395.241 195.5 391.908 196.9C388.574 198.3 385.041 199 381.308 199Z" />
						<path d="M428.126 199C425.459 199 422.892 198.667 420.426 198C417.959 197.267 415.692 196.267 413.626 195C411.559 193.667 409.759 192.067 408.226 190.2L415.226 183.2C416.892 185.133 418.792 186.6 420.926 187.6C423.126 188.533 425.592 189 428.326 189C430.792 189 432.659 188.633 433.926 187.9C435.192 187.167 435.826 186.1 435.826 184.7C435.826 183.233 435.226 182.1 434.026 181.3C432.826 180.5 431.259 179.833 429.326 179.3C427.459 178.7 425.459 178.1 423.326 177.5C421.259 176.9 419.259 176.1 417.326 175.1C415.459 174.033 413.926 172.6 412.726 170.8C411.526 169 410.926 166.667 410.926 163.8C410.926 160.733 411.626 158.1 413.026 155.9C414.492 153.7 416.526 152 419.126 150.8C421.792 149.6 424.959 149 428.626 149C432.492 149 435.892 149.7 438.826 151.1C441.826 152.433 444.326 154.467 446.326 157.2L439.326 164.2C437.926 162.467 436.326 161.167 434.526 160.3C432.726 159.433 430.659 159 428.326 159C426.126 159 424.426 159.333 423.226 160C422.026 160.667 421.426 161.633 421.426 162.9C421.426 164.233 422.026 165.267 423.226 166C424.426 166.733 425.959 167.367 427.826 167.9C429.759 168.433 431.759 169.033 433.826 169.7C435.959 170.3 437.959 171.167 439.826 172.3C441.759 173.367 443.326 174.833 444.526 176.7C445.726 178.5 446.326 180.867 446.326 183.8C446.326 188.467 444.692 192.167 441.426 194.9C438.159 197.633 433.726 199 428.126 199Z" />
						<path d="M455.495 198V150H466.495V198H455.495ZM460.995 141.2C459.128 141.2 457.561 140.567 456.295 139.3C455.095 138.033 454.495 136.467 454.495 134.6C454.495 132.733 455.095 131.167 456.295 129.9C457.561 128.633 459.128 128 460.995 128C462.928 128 464.495 128.633 465.695 129.9C466.895 131.167 467.495 132.733 467.495 134.6C467.495 136.467 466.895 138.033 465.695 139.3C464.495 140.567 462.928 141.2 460.995 141.2Z" />
						<path d="M498.832 219C493.765 219 489.332 218.067 485.532 216.2C481.732 214.4 478.665 211.833 476.332 208.5L483.532 201.3C485.465 203.7 487.665 205.5 490.132 206.7C492.599 207.9 495.565 208.5 499.032 208.5C503.365 208.5 506.799 207.367 509.332 205.1C511.865 202.9 513.132 199.867 513.132 196V184.2L515.032 173.6L513.132 162.9V150H524.132V196C524.132 200.6 523.065 204.6 520.932 208C518.799 211.467 515.832 214.167 512.032 216.1C508.232 218.033 503.832 219 498.832 219ZM498.332 197C494.065 197 490.199 195.967 486.732 193.9C483.332 191.767 480.632 188.867 478.632 185.2C476.699 181.533 475.732 177.433 475.732 172.9C475.732 168.367 476.699 164.3 478.632 160.7C480.632 157.1 483.332 154.267 486.732 152.2C490.199 150.067 494.065 149 498.332 149C502.132 149 505.465 149.767 508.332 151.3C511.199 152.833 513.432 154.967 515.032 157.7C516.632 160.367 517.432 163.5 517.432 167.1V178.9C517.432 182.433 516.599 185.567 514.932 188.3C513.332 191.033 511.099 193.167 508.232 194.7C505.365 196.233 502.065 197 498.332 197ZM500.532 186.6C503.199 186.6 505.532 186.033 507.532 184.9C509.532 183.767 511.065 182.2 512.132 180.2C513.265 178.133 513.832 175.733 513.832 173C513.832 170.267 513.265 167.9 512.132 165.9C511.065 163.833 509.532 162.233 507.532 161.1C505.532 159.967 503.199 159.4 500.532 159.4C497.865 159.4 495.499 159.967 493.432 161.1C491.432 162.233 489.865 163.833 488.732 165.9C487.599 167.9 487.032 170.267 487.032 173C487.032 175.667 487.599 178.033 488.732 180.1C489.865 182.167 491.432 183.767 493.432 184.9C495.499 186.033 497.865 186.6 500.532 186.6Z" />
						<path d="M569.252 198V170.3C569.252 167.1 568.218 164.467 566.152 162.4C564.152 160.333 561.552 159.3 558.352 159.3C556.218 159.3 554.318 159.767 552.652 160.7C550.985 161.633 549.685 162.933 548.752 164.6C547.818 166.267 547.352 168.167 547.352 170.3L543.052 167.9C543.052 164.233 543.852 161 545.452 158.2C547.052 155.333 549.252 153.1 552.052 151.5C554.918 149.833 558.118 149 561.652 149C565.252 149 568.452 149.933 571.252 151.8C574.052 153.6 576.252 155.967 577.852 158.9C579.452 161.767 580.252 164.767 580.252 167.9V198H569.252ZM536.352 198V150H547.352V198H536.352Z" />
						<path d="M599.83 199C597.696 199 595.93 198.3 594.53 196.9C593.196 195.433 592.53 193.667 592.53 191.6C592.53 189.467 593.196 187.7 594.53 186.3C595.93 184.9 597.696 184.2 599.83 184.2C601.963 184.2 603.696 184.9 605.03 186.3C606.43 187.7 607.13 189.467 607.13 191.6C607.13 193.667 606.43 195.433 605.03 196.9C603.696 198.3 601.963 199 599.83 199Z" />
					</mask>
					<path
						d="M321.1 199C316.767 199 312.833 197.9 309.3 195.7C305.833 193.5 303.067 190.533 301 186.8C299 183 298 178.767 298 174.1C298 169.367 299 165.133 301 161.4C303.067 157.6 305.833 154.6 309.3 152.4C312.833 150.133 316.767 149 321.1 149C324.767 149 328 149.8 330.8 151.4C333.667 152.933 335.933 155.067 337.6 157.8C339.267 160.533 340.1 163.633 340.1 167.1V180.9C340.1 184.367 339.267 187.467 337.6 190.2C336 192.933 333.767 195.1 330.9 196.7C328.033 198.233 324.767 199 321.1 199ZM322.9 188.6C325.633 188.6 328 188 330 186.8C332.067 185.533 333.667 183.8 334.8 181.6C335.933 179.4 336.5 176.867 336.5 174C336.5 171.133 335.933 168.6 334.8 166.4C333.667 164.2 332.067 162.5 330 161.3C328 160.033 325.633 159.4 322.9 159.4C320.233 159.4 317.867 160.033 315.8 161.3C313.8 162.5 312.2 164.2 311 166.4C309.867 168.6 309.3 171.133 309.3 174C309.3 176.867 309.867 179.4 311 181.6C312.2 183.8 313.8 185.533 315.8 186.8C317.867 188 320.233 188.6 322.9 188.6ZM346.8 198H335.8V185.1L337.7 173.4L335.8 161.8V126H346.8V198Z"
						stroke="#080808"
						strokeWidth="6"
						mask="url(#path-3-outside-2_362_24)"
					/>
					<path
						d="M381.308 199C376.508 199 372.174 197.933 368.308 195.8C364.508 193.6 361.474 190.6 359.208 186.8C357.008 183 355.908 178.733 355.908 174C355.908 169.267 357.008 165.033 359.208 161.3C361.408 157.5 364.374 154.5 368.108 152.3C371.908 150.1 376.108 149 380.708 149C385.174 149 389.108 150.033 392.508 152.1C395.974 154.167 398.674 157 400.608 160.6C402.608 164.2 403.608 168.3 403.608 172.9C403.608 173.7 403.541 174.533 403.408 175.4C403.341 176.2 403.208 177.1 403.008 178.1H363.608V169.1H397.308L393.208 172.7C393.074 169.767 392.508 167.3 391.508 165.3C390.508 163.3 389.074 161.767 387.208 160.7C385.408 159.633 383.174 159.1 380.508 159.1C377.708 159.1 375.274 159.7 373.208 160.9C371.141 162.1 369.541 163.8 368.408 166C367.274 168.133 366.708 170.7 366.708 173.7C366.708 176.7 367.308 179.333 368.508 181.6C369.708 183.867 371.408 185.633 373.608 186.9C375.808 188.1 378.341 188.7 381.208 188.7C383.674 188.7 385.941 188.267 388.008 187.4C390.141 186.533 391.941 185.267 393.408 183.6L400.408 190.7C398.074 193.433 395.241 195.5 391.908 196.9C388.574 198.3 385.041 199 381.308 199Z"
						stroke="#080808"
						strokeWidth="6"
						mask="url(#path-3-outside-2_362_24)"
					/>
					<path
						d="M428.126 199C425.459 199 422.892 198.667 420.426 198C417.959 197.267 415.692 196.267 413.626 195C411.559 193.667 409.759 192.067 408.226 190.2L415.226 183.2C416.892 185.133 418.792 186.6 420.926 187.6C423.126 188.533 425.592 189 428.326 189C430.792 189 432.659 188.633 433.926 187.9C435.192 187.167 435.826 186.1 435.826 184.7C435.826 183.233 435.226 182.1 434.026 181.3C432.826 180.5 431.259 179.833 429.326 179.3C427.459 178.7 425.459 178.1 423.326 177.5C421.259 176.9 419.259 176.1 417.326 175.1C415.459 174.033 413.926 172.6 412.726 170.8C411.526 169 410.926 166.667 410.926 163.8C410.926 160.733 411.626 158.1 413.026 155.9C414.492 153.7 416.526 152 419.126 150.8C421.792 149.6 424.959 149 428.626 149C432.492 149 435.892 149.7 438.826 151.1C441.826 152.433 444.326 154.467 446.326 157.2L439.326 164.2C437.926 162.467 436.326 161.167 434.526 160.3C432.726 159.433 430.659 159 428.326 159C426.126 159 424.426 159.333 423.226 160C422.026 160.667 421.426 161.633 421.426 162.9C421.426 164.233 422.026 165.267 423.226 166C424.426 166.733 425.959 167.367 427.826 167.9C429.759 168.433 431.759 169.033 433.826 169.7C435.959 170.3 437.959 171.167 439.826 172.3C441.759 173.367 443.326 174.833 444.526 176.7C445.726 178.5 446.326 180.867 446.326 183.8C446.326 188.467 444.692 192.167 441.426 194.9C438.159 197.633 433.726 199 428.126 199Z"
						stroke="#080808"
						strokeWidth="6"
						mask="url(#path-3-outside-2_362_24)"
					/>
					<path
						d="M455.495 198V150H466.495V198H455.495ZM460.995 141.2C459.128 141.2 457.561 140.567 456.295 139.3C455.095 138.033 454.495 136.467 454.495 134.6C454.495 132.733 455.095 131.167 456.295 129.9C457.561 128.633 459.128 128 460.995 128C462.928 128 464.495 128.633 465.695 129.9C466.895 131.167 467.495 132.733 467.495 134.6C467.495 136.467 466.895 138.033 465.695 139.3C464.495 140.567 462.928 141.2 460.995 141.2Z"
						stroke="#080808"
						strokeWidth="6"
						mask="url(#path-3-outside-2_362_24)"
					/>
					<path
						d="M498.832 219C493.765 219 489.332 218.067 485.532 216.2C481.732 214.4 478.665 211.833 476.332 208.5L483.532 201.3C485.465 203.7 487.665 205.5 490.132 206.7C492.599 207.9 495.565 208.5 499.032 208.5C503.365 208.5 506.799 207.367 509.332 205.1C511.865 202.9 513.132 199.867 513.132 196V184.2L515.032 173.6L513.132 162.9V150H524.132V196C524.132 200.6 523.065 204.6 520.932 208C518.799 211.467 515.832 214.167 512.032 216.1C508.232 218.033 503.832 219 498.832 219ZM498.332 197C494.065 197 490.199 195.967 486.732 193.9C483.332 191.767 480.632 188.867 478.632 185.2C476.699 181.533 475.732 177.433 475.732 172.9C475.732 168.367 476.699 164.3 478.632 160.7C480.632 157.1 483.332 154.267 486.732 152.2C490.199 150.067 494.065 149 498.332 149C502.132 149 505.465 149.767 508.332 151.3C511.199 152.833 513.432 154.967 515.032 157.7C516.632 160.367 517.432 163.5 517.432 167.1V178.9C517.432 182.433 516.599 185.567 514.932 188.3C513.332 191.033 511.099 193.167 508.232 194.7C505.365 196.233 502.065 197 498.332 197ZM500.532 186.6C503.199 186.6 505.532 186.033 507.532 184.9C509.532 183.767 511.065 182.2 512.132 180.2C513.265 178.133 513.832 175.733 513.832 173C513.832 170.267 513.265 167.9 512.132 165.9C511.065 163.833 509.532 162.233 507.532 161.1C505.532 159.967 503.199 159.4 500.532 159.4C497.865 159.4 495.499 159.967 493.432 161.1C491.432 162.233 489.865 163.833 488.732 165.9C487.599 167.9 487.032 170.267 487.032 173C487.032 175.667 487.599 178.033 488.732 180.1C489.865 182.167 491.432 183.767 493.432 184.9C495.499 186.033 497.865 186.6 500.532 186.6Z"
						stroke="#080808"
						strokeWidth="6"
						mask="url(#path-3-outside-2_362_24)"
					/>
					<path
						d="M569.252 198V170.3C569.252 167.1 568.218 164.467 566.152 162.4C564.152 160.333 561.552 159.3 558.352 159.3C556.218 159.3 554.318 159.767 552.652 160.7C550.985 161.633 549.685 162.933 548.752 164.6C547.818 166.267 547.352 168.167 547.352 170.3L543.052 167.9C543.052 164.233 543.852 161 545.452 158.2C547.052 155.333 549.252 153.1 552.052 151.5C554.918 149.833 558.118 149 561.652 149C565.252 149 568.452 149.933 571.252 151.8C574.052 153.6 576.252 155.967 577.852 158.9C579.452 161.767 580.252 164.767 580.252 167.9V198H569.252ZM536.352 198V150H547.352V198H536.352Z"
						stroke="#080808"
						strokeWidth="6"
						mask="url(#path-3-outside-2_362_24)"
					/>
					<path
						d="M599.83 199C597.696 199 595.93 198.3 594.53 196.9C593.196 195.433 592.53 193.667 592.53 191.6C592.53 189.467 593.196 187.7 594.53 186.3C595.93 184.9 597.696 184.2 599.83 184.2C601.963 184.2 603.696 184.9 605.03 186.3C606.43 187.7 607.13 189.467 607.13 191.6C607.13 193.667 606.43 195.433 605.03 196.9C603.696 198.3 601.963 199 599.83 199Z"
						stroke="#080808"
						strokeWidth="6"
						mask="url(#path-3-outside-2_362_24)"
					/>
					<path
						d="M35.4 100V51.4H50.7V100H35.4ZM43.1 44.7C40.7 44.7 38.7 43.9 37.1 42.3C35.5667 40.6333 34.8 38.6333 34.8 36.3C34.8 33.9 35.5667 31.9 37.1 30.3C38.7 28.7 40.7 27.9 43.1 27.9C45.5 27.9 47.4667 28.7 49 30.3C50.5333 31.9 51.3 33.9 51.3 36.3C51.3 38.6333 50.5333 40.6333 49 42.3C47.4667 43.9 45.5 44.7 43.1 44.7ZM93.5742 100V72.3C93.5742 69.7667 92.7742 67.7333 91.1742 66.2C89.6409 64.6 87.6742 63.8 85.2742 63.8C83.6076 63.8 82.1409 64.1667 80.8742 64.9C79.6076 65.5667 78.6076 66.5667 77.8742 67.9C77.1409 69.1667 76.7742 70.6333 76.7742 72.3L70.8742 69.4C70.8742 65.6 71.7076 62.2667 73.3742 59.4C75.0409 56.5333 77.3409 54.3333 80.2742 52.8C83.2742 51.2 86.6409 50.4 90.3742 50.4C93.9742 50.4 97.1409 51.2667 99.8742 53C102.674 54.6667 104.874 56.9 106.474 59.7C108.074 62.5 108.874 65.5667 108.874 68.9V100H93.5742ZM61.4742 100V51.4H76.7742V100H61.4742ZM136.401 101.2C133.534 101.2 130.701 100.833 127.901 100.1C125.167 99.3667 122.601 98.3333 120.201 97C117.867 95.6 115.867 94 114.201 92.2L122.901 83.4C124.501 85.1333 126.401 86.5 128.601 87.5C130.801 88.4333 133.201 88.9 135.801 88.9C137.601 88.9 138.967 88.6333 139.901 88.1C140.901 87.5667 141.401 86.8333 141.401 85.9C141.401 84.7 140.801 83.8 139.601 83.2C138.467 82.5333 137.001 81.9667 135.201 81.5C133.401 80.9667 131.501 80.4 129.501 79.8C127.501 79.2 125.601 78.3667 123.801 77.3C122.001 76.2333 120.534 74.7667 119.401 72.9C118.267 70.9667 117.701 68.5333 117.701 65.6C117.701 62.4667 118.501 59.7667 120.101 57.5C121.701 55.1667 123.967 53.3333 126.901 52C129.834 50.6667 133.267 50 137.201 50C141.334 50 145.134 50.7333 148.601 52.2C152.134 53.6 155.001 55.7 157.201 58.5L148.501 67.3C146.967 65.5 145.234 64.2333 143.301 63.5C141.434 62.7667 139.601 62.4 137.801 62.4C136.067 62.4 134.767 62.6667 133.901 63.2C133.034 63.6667 132.601 64.3667 132.601 65.3C132.601 66.3 133.167 67.1 134.301 67.7C135.434 68.3 136.901 68.8333 138.701 69.3C140.501 69.7667 142.401 70.3333 144.401 71C146.401 71.6667 148.301 72.5667 150.101 73.7C151.901 74.8333 153.367 76.3667 154.501 78.3C155.634 80.1667 156.201 82.6333 156.201 85.7C156.201 90.4333 154.401 94.2 150.801 97C147.267 99.8 142.467 101.2 136.401 101.2ZM192.502 101C189.235 101 186.235 100.367 183.502 99.1C180.768 97.8333 178.535 96.1 176.802 93.9C175.068 91.6333 174.068 89.0667 173.802 86.2V65.7C174.068 62.8333 175.068 60.2333 176.802 57.9C178.535 55.5667 180.768 53.7333 183.502 52.4C186.235 51.0667 189.235 50.4 192.502 50.4C197.102 50.4 201.168 51.5 204.702 53.7C208.302 55.9 211.102 58.9 213.102 62.7C215.168 66.5 216.202 70.8333 216.202 75.7C216.202 80.5667 215.168 84.9 213.102 88.7C211.102 92.5 208.302 95.5 204.702 97.7C201.168 99.9 197.102 101 192.502 101ZM189.702 87.2C191.902 87.2 193.802 86.7 195.402 85.7C197.068 84.7 198.368 83.3333 199.302 81.6C200.235 79.8667 200.702 77.9 200.702 75.7C200.702 73.4333 200.235 71.4333 199.302 69.7C198.368 67.9667 197.068 66.6333 195.402 65.7C193.802 64.7 191.935 64.2 189.802 64.2C187.668 64.2 185.768 64.7 184.102 65.7C182.502 66.6333 181.235 67.9667 180.302 69.7C179.368 71.4333 178.902 73.4333 178.902 75.7C178.902 77.9 179.335 79.8667 180.202 81.6C181.135 83.3333 182.435 84.7 184.102 85.7C185.768 86.7 187.635 87.2 189.702 87.2ZM164.502 120.5V51.4H179.802V63.9L177.302 75.7L179.602 87.5V120.5H164.502ZM223.974 100V51.4H239.274V100H223.974ZM231.674 44.7C229.274 44.7 227.274 43.9 225.674 42.3C224.141 40.6333 223.374 38.6333 223.374 36.3C223.374 33.9 224.141 31.9 225.674 30.3C227.274 28.7 229.274 27.9 231.674 27.9C234.074 27.9 236.041 28.7 237.574 30.3C239.108 31.9 239.874 33.9 239.874 36.3C239.874 38.6333 239.108 40.6333 237.574 42.3C236.041 43.9 234.074 44.7 231.674 44.7ZM250.048 100V51.4H265.348V100H250.048ZM265.348 73.3L258.948 68.3C260.215 62.6333 262.348 58.2333 265.348 55.1C268.348 51.9667 272.515 50.4 277.848 50.4C280.182 50.4 282.215 50.7667 283.948 51.5C285.748 52.1667 287.315 53.2333 288.648 54.7L279.548 66.2C278.882 65.4667 278.048 64.9 277.048 64.5C276.048 64.1 274.915 63.9 273.648 63.9C271.115 63.9 269.082 64.7 267.548 66.3C266.082 67.8333 265.348 70.1667 265.348 73.3ZM315.357 101.1C310.09 101.1 305.39 100.033 301.257 97.9C297.19 95.7 293.99 92.6667 291.657 88.8C289.324 84.9333 288.157 80.5667 288.157 75.7C288.157 70.8333 289.29 66.5 291.557 62.7C293.89 58.8333 297.024 55.8 300.957 53.6C304.89 51.4 309.324 50.3 314.257 50.3C319.057 50.3 323.29 51.3333 326.957 53.4C330.624 55.4667 333.49 58.3333 335.557 62C337.69 65.6667 338.757 69.8667 338.757 74.6C338.757 75.4667 338.69 76.4 338.557 77.4C338.49 78.3333 338.324 79.4333 338.057 80.7L296.157 80.8V70.3L331.557 70.2L324.957 74.6C324.89 71.8 324.457 69.5 323.657 67.7C322.857 65.8333 321.657 64.4333 320.057 63.5C318.524 62.5 316.624 62 314.357 62C311.957 62 309.857 62.5667 308.057 63.7C306.324 64.7667 304.957 66.3 303.957 68.3C303.024 70.3 302.557 72.7333 302.557 75.6C302.557 78.4667 303.057 80.9333 304.057 83C305.124 85 306.59 86.5667 308.457 87.7C310.39 88.7667 312.657 89.3 315.257 89.3C317.657 89.3 319.824 88.9 321.757 88.1C323.69 87.2333 325.39 85.9667 326.857 84.3L335.257 92.7C332.857 95.5 329.957 97.6 326.557 99C323.157 100.4 319.424 101.1 315.357 101.1ZM355.742 101.1C353.142 101.1 350.976 100.2 349.242 98.4C347.509 96.6 346.642 94.4333 346.642 91.9C346.642 89.2333 347.509 87.0333 349.242 85.3C350.976 83.5 353.142 82.6 355.742 82.6C358.409 82.6 360.576 83.5 362.242 85.3C363.976 87.0333 364.842 89.2333 364.842 91.9C364.842 94.4333 363.976 96.6 362.242 98.4C360.576 100.2 358.409 101.1 355.742 101.1Z"
						fill="#080808"
					/>
				</svg>
			</div>
		</>
	);
};

export default Loader;
