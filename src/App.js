import './App.css';
import React from 'react';
import ParticlesBg from 'particles-bg';
import { useState, useRef } from 'react';
import { FaChair, FaGamepad, FaGithub, FaHeadphones, FaKeyboard, FaLaptop,FaTshirt,FaMicrophone,FaShoePrints, FaLaptopCode, FaMobile, FaMouse, FaSoundcloud, FaSpeakerDeck, FaVideo, FaWatchmanMonitoring, FaWheelchair, FaXbox, } from 'react-icons/fa';
import { FiHeadphones, FiInstagram, FiMonitor, FiShoppingBag, FiSpeaker, FiYoutube } from 'react-icons/fi';
import { AiOutlineDown, AiOutlineLaptop } from 'react-icons/ai';
import { RiServerLine } from 'react-icons/ri';
import { MdChair, MdChairAlt, MdOutlineChair } from 'react-icons/md';
import { FiTwitter } from "react-icons/fi";
import { FaBlogger } from "react-icons/fa";
//import { SiAntdesign } from 'react-icons/si';
//import { GiSlippers } from 'react-icons/gi';
//import { CgHeadset } from 'react-icons/cg';
//import { FaTshirt } from 'react-icons/fa';
import TextLoop from "react-text-loop";
import Typist from 'react-typist';

function App() {

	const [dark, setdark] = useState(false);
	const card = useRef(null);

	let cursor_config = {
		show: true,
		blink: true,
		element: '🔨',
		hideWhenDone: true,
	};

	function toogle() {
		setdark(!dark);
	}
	function HandleScrollDown() {
		card.current.scrollTop = card.current.scrollHeight;
	}
	return (
		<div className="d-flex content-center">

			{/* {block ?
				<a target="_blank" onClick={() => setblock()} rel="noreferrer" href="https://shp.ee/aswgeeb?smtt=0.0.9">
					<div className="ads" >

					</div>
				</a>
				: ''
			} */}
			<div className={`card ${dark ? 'dark-theme' : ''}`}>
				<div className={`toogle ${dark ? 'light' : 'dark'}`} onClick={() => toogle()}></div>
				<div className={`bg-dark ${dark ? 'active' : ''}`}></div>
				<div ref={card} className="card-body  custom-scrollbar">
					<div>
						<img className="card-avatar" src="feb.jpg" alt="avatar" />
					</div>
					<div className="card-title">
						<Typist startDelay={100} cursor={cursor_config}>
							Rekomendasi tokopedia <br />
							<Typist.Delay ms={500} hideWhenDone={true} hideWhenDoneDelay={true} />
							
							<span className="subtitle">jangan lupa di checkout gais</span><br />
							<Typist.Delay ms={100} hideWhenDone={true} hideWhenDoneDelay={true} />
							<span className="subtitle">Thanks</span>
						</Typist>
					</div>

					<div className="card-title">
						{/*Project Freelance{' '}*/}
						<TextLoop interval={3000}>
							<span className="text-blue">Klik Link dibawah ini :</span>
							<span className="text-blue">Buat kamu yang tertarik!</span>
							<span className="text-blue">thanks you!</span>
						</TextLoop>
					</div>
					<div >

						{/* Xbox / Game */}
						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/pPZghO1zjKb">
							<div className="btn-action">
								<FaXbox className='icon' />
								<span>Xbox Series X</span>
							</div>
						</a>
						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/grRoRQSzjKb">
							<div className="btn-action">
								<FaXbox className='icon' />
								<span>Xbox Series S</span>
							</div>
						</a>
						
						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/VySAXpYHxxb">
							<div className="btn-action">
								<FaGamepad className='icon' />
								<span>Cooling Stand Xbox Series S</span>
							</div>
						</a>

				{/* Elekrtonik */}						
						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/IX0ZjffAjKb">
							<div className="btn-action">
								<FaKeyboard className='icon' />
								<span>Keyborad Mechanical Koodo Solar</span>
							</div>
						</a>


                        <a target="_blank" rel="noreferrer" href="https://tokopedia.link/Gai1QfmAjKb">
							<div className="btn-action">
								<FaKeyboard className='icon' />
								<span>Paket Keyboard + Mouse Logitech</span>
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/lrkH0rCNCyb">
							<div className="btn-action">
								<FaVideo className='icon' />
								<span>Video Capture Live Streaming</span>
							</div>
						</a>

				{/* Laptop */}
						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/adOHsVDAjKb">
							<div className="btn-action">
								<FaLaptop className='icon' />
								<span>Laptop HP 14s-dq3109TU</span>
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/qNNXZiNAjKb">
							<div className="btn-action">
								<FaLaptop className='icon' />
								<span>Laptop HP 15s-fq5148TU</span>
							</div>
						</a>

					
					{/* Furniture Kursi Gaming */}
						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/xgSvZPWJxxb">
							<div className="btn-action">
								<FaChair className='icon' />
								<span>ONEX GX1 Gaming Chair</span>
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/qn886viBjKb">
							<div className="btn-action">
								<FaChair className='icon' />
								<span>ONEX GX3 Gaming Chair</span>
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/gbHUT0tBjKb">
							<div className="btn-action">
								<FaTshirt className='icon' />
								<span>Outerwear Unisex Erigo Sweatshirt</span>
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/R7aJEWyBjKb">
							<div className="btn-action">
								<FaTshirt className='icon' />
								<span>Kemeja Unisex Erigo Short Sleeve </span>
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/R7aJEWyBjKb">
							<div className="btn-action">
								<FaTshirt className='icon' />
								<span>Kemeja Unisex Erigo Short Sleeve </span>
							</div>
						</a>
						
						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/ZOFqRgtKjKb">
							<div className="btn-action">
								<FiHeadphones className='icon' />
								<span>Logitech G733 LIGHTSPEED</span>
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/7DKpzlWJjKb">
							<div className="btn-action">
								<FiHeadphones className='icon' />
								<span>TWS BASEUS-WM01 </span>
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/w1o2EPtkGxb">
							<div className="btn-action">
								<FiHeadphones className='icon' />
								<span>Headset Razen Kraken X</span>
							</div>
						</a>
						
						<a id='shopee-af' target="_blank" rel="noreferrer" href="https://tokopedia.link/bAwJbbfoGxb">
							<div className="btn-action">
								<FaHeadphones className='icon' />
								<span>JBL On-Ear T500</span>
							</div>
							</a>

					{/* microphone */}

						<a id='shopee-af' target="_blank" rel="noreferrer" href="https://tokopedia.link/bAwJbbfoGxb">
								<div className="btn-action">
									<FaMicrophone className='icon' />
									<span>JBL Quantum Stream</span>
								</div>
							</a>
						
							<a id='shopee-af' target="_blank" rel="noreferrer" href="https://tokopedia.link/cKlHk4bLjKb">
								<div className="btn-action">
									<FaMicrophone className='icon' />
									<span>TNW-N11 Microphone Wireless</span>
								</div>
							</a>

							<a id='shopee-af' target="_blank" rel="noreferrer" href="https://tokopedia.link/JOCX8RdLjKb">
								<div className="btn-action">
									<FaMicrophone className='icon' />
									<span>TNW X9 Microphone Wireless</span>
								</div>
							</a>

							<a id='shopee-af' target="_blank" rel="noreferrer" href="https://tokopedia.link/wOlsI9gLjKb">
								<div className="btn-action">
									<FaMicrophone className='icon' />
									<span>TNW-N8 Wireless Microphone </span>
								</div>
							</a>

							<a id='shopee-af' target="_blank" rel="noreferrer" href="https://tokopedia.link/VMbrutlLjKb">
								<div className="btn-action">
									<FaMicrophone className='icon' />
									<span>Fantech Leviosa MCX01 </span>
								</div>
							</a>

							<a id='shopee-af' target="_blank" rel="noreferrer" href="https://tokopedia.link/uKssNpoLjKb">
								<div className="btn-action">
									<FaMicrophone className='icon' />
									<span>Redragon Gaming Microphone </span>
								</div>
							</a>

					{/* speaker */}
					</div>
						<a id='shopee-af' target="_blank" rel="noreferrer" href="https://tokopedia.link/FirmBayKjKb">
							<div className="btn-action">
								<FiSpeaker className='icon' />
								<span>JBL Go 2 Portable Speaker</span>
							</div>
						</a>


					


						
				</div>
				<div className='scroll-info' onClick={HandleScrollDown}> <span className='scroll-text'>Scroll Down</span ><AiOutlineDown size={12} /></div>

			</div>
			<ParticlesBg type="thick" bg={true} />

		</div>
	);
}

export default App;
