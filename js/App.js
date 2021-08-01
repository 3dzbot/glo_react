/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */

/* Определяю минимальные служебные компонены */
const LinkStyule = {
	color: 'red'
};
const LazyStyleObj = {
	LazyStyleObj1: { backgroundImage: 'url(./images/1.svg)' },
	LazyStyleObj2: { backgroundImage: 'url(./images/2.svg)' },
	LazyStyleObj3: { backgroundImage: 'url(./images/3.svg)' },
	LazyStyleObj4: { backgroundImage: 'url(./images/4.svg)' },
};

/* компонены HTML-елементов (блоков) */
const LogoElem = props => <div className={props.classes}></div>;
const BtnElem = props => <button className={props.classes}><span>{props.title}</span></button>;
const InputElem = props => <input type={props.type} placeholder={props.placeholder} />;
const PhoneLink = props => <div className={props.wrapClass}><a href={'tel:' + props.phone}>{props.phone}</a></div>;
const SliderBtnNav = props => <button className={props.classes}><svg width="9" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z"></path></svg></button>;
const FeaturesSliderItem = props => (
	<div className="features-slider_item">
		<div className="features-img" style={props.style}></div>
		<div className="features-feature">{props.title}</div>
	</div>
);
const CreatorElem = props => <div className="footer-websurfer"><span className="footer-websurfer_build">{props.title}</span>&nbsp;<a style={LinkStyule} href={props.link} rel="noreferrer" target="_blank">{props.name}</a></div>;

const HeaderSection = () => (
	<header>
		<div className="wrapper">
			<div className="header">
				<a href="#"><LogoElem classes="header-logo" /></a>
				<a href="tel:888" className="header-phone"></a>
				<PhoneLink wrapClass="header-phonelink" phone="+7(962)556-1234" />
			</div>
		</div>
	</header>
);

const MainSection = () => (
	<main>
		<div className="wrapper">
			<div className="main">
				<h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
				<div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более.
				</div>
				<BtnElem title="Подробнее" classes="btn main-btn" />
			</div>
		</div>
	</main>
);

const FeaturesSection = () => (
	<section className="features">
		<div className="wrapper">
			<div className="features-wrapper">
				<h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
				<div className="features-subhead">О нас</div>
				<div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                    сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
                    оратору отточить.
				</div>
				<div className="features-slider">
					<div className="features-slider_items">
						<FeaturesSliderItem style={LazyStyleObj.LazyStyleObj1} title="Первое целевое преимущество" />
						<FeaturesSliderItem style={LazyStyleObj.LazyStyleObj2} title="Второе целевое преимущество" />
						<FeaturesSliderItem style={LazyStyleObj.LazyStyleObj3} title="Третье целевое преимущество" />
						<FeaturesSliderItem style={LazyStyleObj.LazyStyleObj4} title="Четвертое целевое преимущество" />
					</div>
					<SliderBtnNav classes="features-slider-arrow features-slider-prev" />
					<SliderBtnNav classes="features-slider-arrow features-slider-next" />
				</div>
			</div>
		</div>
	</section>
);

const ContactSection = () => (
	<section className="contact">
		<div className="wrapper">
			<div className="contact-wrapper">
				<h2 className="contact-title">Остались вопросы?</h2>
				<div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
				<form action="../mailer.smart.php" className="contact-form">
					<InputElem type="text" placeholder="Ваше имя" />
					<InputElem type="tel" placeholder="Телефон" />
					<InputElem type="email" placeholder="E-mail" />
					<BtnElem title="Позвоните мне" classes="btn contact-btn" />
				</form>
				<div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
				</div>
			</div>
		</div>
	</section>
);

const FooterSection = () => (
	<footer>
		<div className="footer">
			<LogoElem classes="footer-logo" />
			<div className="footer-company"><span>© {new Date().getFullYear()} XXXcompany. Все права защищены.</span></div>
			<a href="tel:888" className="footer-phone"></a>
			<CreatorElem title="Сделано " name="zoduaks" link="https://zoduaks.onhh.ru/" />
			<PhoneLink wrapClass="footer-phonelink" phone="+7(962)556-1234" />
		</div>
	</footer>
);

const RenderJSX = () => (
	<div>
		<HeaderSection/>
		<MainSection/>
		<FeaturesSection/>
		<ContactSection/>
		<FooterSection />
	</div>
);

ReactDOM.render(<RenderJSX />, document.getElementById('app'));