import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import logo from './assets/LOGO NUTRI AI 1.png';
import celular from './assets/CELULAR PRINCIPAL 1.png';
import cameraemoji from './assets/Camera.webp';
import fotodieta from './assets/FOTO DIETA 1.jpg';
import microfone from './assets/Microfone.webp';
import fotodieta2 from './assets/dieta.jpg';
import Testimonial1 from './components/depoimento.jsx';

const Hero6 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const trigger = useRef(null);
    const modal = useRef(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!modal.current) return;
            if (
                !modalOpen ||
                modal.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setModalOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!modalOpen || keyCode !== 27) return;
            setModalOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <div className="relative">
            <Navbar />

            <div className="relative bg-white pt-[120px] md:pt-[130px] lg:pt-[160px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4">
                            <div className="hero-content text-center">
                                <h1 className="mx-auto mb-3 max-w-[680px] text-4xl font-bold !leading-[1.208] text-black sm:text-5xl">
                                    Siga sua dieta com a ajuda da I.A e a
                                    simplicidade do Whatsapp
                                </h1>
                                <p className="mx-auto mb-9 max-w-[480px] text-base text-black">
                                    Nunca foi tão fácil contar as calorias,
                                    macro e micronutrientes de sua dieta. Com o
                                    Nutri AI você terá um assistente 24h por dia
                                    para te auxiliar na sua dieta.
                                </p>
                                <ul className="flex flex-wrap items-center justify-center">
                                    <li className="mx-2 mb-3 sm:mx-4">
                                        <button
                                            onClick={() => {}}
                                            className="inline-flex items-center justify-center rounded-md bg-emerald-400 px-7 py-[14px] text-center text-base font-medium text-dark hover:bg-emerald-300 transition-all duration-300"
                                        >
                                            Comece agora
                                        </button>
                                    </li>
                                    <li className="mx-2 mb-3 sm:mx-4">
                                        <button
                                            ref={trigger}
                                            onClick={() =>
                                                setModalOpen(!modalOpen)
                                            }
                                            className="flex items-center text-base font-medium text-black hover:opacity-90 transition-all duration-300"
                                        >
                                            <span className="mr-4 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-emerald-400">
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M13.6077 6.63397C14.2743 7.01887 14.2743 7.98112 13.6077 8.36602L2.35767 14.8612C1.691 15.2461 0.857665 14.765 0.857665 13.9952L0.857666 1.00481C0.857666 0.23501 1.691 -0.246117 2.35767 0.138783L13.6077 6.63397Z"
                                                        fill="#000000"
                                                    />
                                                </svg>
                                            </span>
                                            Assistir vídeo
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full px-4 overflow-hidden">
                            <div className="relative z-10 mx-auto max-w-[845px]">
                                <div className="mt-16 flex justify-center items-center">
                                    <img
                                        src={celular}
                                        alt="Celular"
                                        className="w-1/2 md:w-1/3 items-center hover:scale-105 transition-all duration-300 rounded-t-xl rounded-tr-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-70 ${
                        modalOpen ? 'block' : 'hidden'
                    }`}
                >
                    <div
                        ref={modal}
                        onFocus={() => setModalOpen(true)}
                        onBlur={() => setModalOpen(false)}
                        className="mx-auto w-full max-w-[550px] bg-white"
                    >
                        <iframe
                            className="h-[320px] w-full"
                            src={
                                modalOpen === true
                                    ? 'https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1'
                                    : ''
                            }
                        ></iframe>
                    </div>

                    <button
                        onClick={() => setModalOpen(false)}
                        className="absolute right-0 top-0 flex h-20 w-20 cursor-pointer items-center justify-center text-body-color hover:bg-black"
                    >
                        <svg
                            viewBox="0 0 16 15"
                            className="h-8 w-8 fill-current"
                        >
                            <path d="M3.37258 1.27L8.23258 6.13L13.0726 1.29C13.1574 1.19972 13.2596 1.12749 13.373 1.07766C13.4864 1.02783 13.6087 1.00141 13.7326 1C13.9978 1 14.2522 1.10536 14.4397 1.29289C14.6272 1.48043 14.7326 1.73478 14.7326 2C14.7349 2.1226 14.7122 2.24439 14.6657 2.35788C14.6193 2.47138 14.5502 2.57419 14.4626 2.66L9.57258 7.5L14.4626 12.39C14.6274 12.5512 14.724 12.7696 14.7326 13C14.7326 13.2652 14.6272 13.5196 14.4397 13.7071C14.2522 13.8946 13.9978 14 13.7326 14C13.6051 14.0053 13.478 13.984 13.3592 13.9375C13.2404 13.8911 13.1326 13.8204 13.0426 13.73L8.23258 8.87L3.38258 13.72C3.29809 13.8073 3.19715 13.8769 3.08559 13.925C2.97402 13.9731 2.85405 13.9986 2.73258 14C2.46737 14 2.21301 13.8946 2.02548 13.7071C1.83794 13.5196 1.73258 13.2652 1.73258 13C1.73025 12.8774 1.753 12.7556 1.79943 12.6421C1.84586 12.5286 1.91499 12.4258 2.00258 12.34L6.89258 7.5L2.00258 2.61C1.83777 2.44876 1.74112 2.23041 1.73258 2C1.73258 1.73478 1.83794 1.48043 2.02548 1.29289C2.21301 1.10536 2.46737 1 2.73258 1C2.97258 1.003 3.20258 1.1 3.37258 1.27Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header
            className={
                'absolute left-4 md:left-12 top-0 z-20 flex w-10/12 items-center'
            }
        >
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full">
                        <img
                            src={logo}
                            alt="Logo"
                            className="ml-1.5 cursor-pointer"
                            onClick={() => {
                                '#teste';
                            }}
                        />
                    </div>
                    <div className="flex w-full items-center justify-between px-4 pt-20 sm:pt-0">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className={` ${
                                    open && 'navbarTogglerActive'
                                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                                    !open && 'hidden'
                                } `}
                            >
                                <ul className="block lg:flex">
                                    <ListItem NavLink="#">Início</ListItem>
                                    <ListItem NavLink="#">Planos</ListItem>
                                    <ListItem NavLink="#">FAQ</ListItem>
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <a
                                href="#"
                                className="inline-block px-5 py-2 transition-all duration-300 text-base font-medium text-black hover:opacity-50"
                            >
                                Entrar
                            </a>

                            <button
                                onClick={() => {}}
                                className="inline-block rounded-md bg-emerald-400 px-7 py-2 text-base font-medium text-black hover:bg-emerald-400 hover:text-dark transition-all duration-300"
                            >
                                Cadastre-se
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

const ListItem = ({ children, NavLink }) => {
    return (
        <>
            <li>
                <a
                    href={NavLink}
                    className="flex py-2 text-base font-medium text-dark hover:text-primary hover:opacity-100 dark:text-black lg:ml-10 lg:inline-flex lg:text-black lg:hover:text-black lg:hover:opacity-50"
                >
                    {children}
                </a>
            </li>
        </>
    );
};

function App() {
    return (
        <body>
            <Hero6 />
            {/* segunda sessao */}
            <div className="bg-black py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12 2xl:gap-20">
                        <div className="h-64 overflow-hidden rounded-lg flex justify-center md:h-auto">
                            <img
                                src={fotodieta}
                                alt="Foto Dieta"
                                className="w-2/3 rounded-lg object-cover object-center"
                            />
                        </div>

                        <div className="flex justify-center flex-col">
                            <img
                                src={cameraemoji}
                                alt="camera"
                                className="w-10 mb-5 mx-auto"
                            />

                            <h1 className="text-3xl font-bold mb-6 text-center text-white">
                                Adicione refeições com fotos
                            </h1>

                            <p className="mb-6 sm:text-lg md:mb-8 text-white text-center">
                                Envie uma foto da sua refeição e calcularemos
                                automaticamente as calorias e nutrientes ao
                                longo do dia. Incluindo produtos
                                industrializados.
                            </p>
                            <button
                                onClick={() => {}}
                                className="mx-auto bg-emerald-400 py-2.5 px-5 rounded-lg text-white border border-emerald-600 font-medium text-sm outline-none transition duration-100 hover:bg-emerald-500 focus-visible:ring ring-emerald-300 active:bg-emerald-600 md:text-base"
                            >
                                Comece agora
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* // segunda sessao */}

            {/* terceira sessao */}
            <div className="bg-slate-50	 py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12 2xl:gap-20">
                        <div className="order-2 md:order-1 flex justify-center flex-col">
                            <img
                                src={microfone}
                                alt="camera"
                                className="w-10 mb-5 mx-auto"
                            />

                            <h1 className="text-3xl font-bold mb-6 text-center text-stone-900">
                                Adicione refeições com áudios e textos
                            </h1>

                            <p className="mb-6 text-stone-900 sm:text-lg md:mb-8 text-center">
                                Envie áudios ou textos sobre suas refeições e
                                nossa IA reconhece os alimentos, incluindo
                                produtos industrializados.
                            </p>
                            <button
                                onClick={() => {}}
                                className="mx-auto bg-emerald-400 text-white py-2.5 px-5 rounded-lg border border-emerald-600 font-medium text-sm outline-none transition duration-100 hover:bg-emerald-500 focus-visible:ring ring-emerald-300 active:bg-emerald-600 md:text-base"
                            >
                                Comece agora
                            </button>
                        </div>
                        <div className="h-64 overflow-hidden rounded-lg flex justify-center md:h-auto order-1 md:order-2">
                            <img
                                src={fotodieta}
                                alt="Foto Dieta"
                                className="w-2/3 rounded-lg object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* // terceira sessao */}

            {/* quarta sessao */}
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    {/* <!-- texto - início --> */}
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-stone-900 md:mb-6 lg:text-3xl">
                            Benefícios de usar o nosso assistente!
                        </h2>

                        <p className="mx-auto max-w-screen-md text-center text-stone-900 md:text-lg">
                            Nosso assitente é o melhor do mercado para te
                            auxiliar na sua dieta. Vou te mostrar alguns
                            benefícios você vai ter ao usar o Nutri AI.
                        </p>
                    </div>
                    {/* <!-- texto - fim --> */}

                    <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
                        {/* <!-- feature - início --> */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    />
                                </svg>
                            </div>

                            <div>
                                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                                    Controle de Peso
                                </h3>
                                <p className="mb-2 text-gray-500">
                                    Com o monitoramento preciso da ingestão
                                    calórica e dos exercícios, é mais fácil
                                    manter ou alcançar o peso desejado.
                                </p>
                            </div>
                        </div>
                        {/* <!-- feature - fim --> */}

                        {/* <!-- feature - início --> */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>

                            <div>
                                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                                    Melhora na Nutrição
                                </h3>
                                <p className="mb-2 text-gray-500">
                                    A análise detalhada de macronutrientes e
                                    micronutrientes ajuda a garantir uma dieta
                                    balanceada e nutritiva.
                                </p>
                            </div>
                        </div>
                        {/* <!-- feature - fim --> */}

                        {/* <!-- feature - início --> */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                    />
                                </svg>
                            </div>

                            <div>
                                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                                    Hidratação Adequada
                                </h3>
                                <p className="mb-2 text-gray-500">
                                    Os lembretes personalizados para consumo de
                                    água ajudam a manter o corpo bem hidratado.
                                </p>
                            </div>
                        </div>
                        {/* <!-- feature - fim --> */}

                        {/* <!-- feature - início --> */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>

                            <div>
                                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                                    Redução do Risco de Doenças
                                </h3>
                                <p className="mb-2 text-gray-500">
                                    A escolha de alimentos mais saudáveis, pode
                                    reduzir o risco de doenças crônicas como
                                    diabetes e doenças cardíacas.
                                </p>
                            </div>
                        </div>
                        {/* <!-- feature - fim --> */}

                        {/* <!-- feature - início --> */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            </div>

                            <div>
                                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                                    Aumento da Energia
                                </h3>
                                <p className="mb-2 text-gray-500">
                                    Uma dieta equilibrada e adequada às
                                    necessidades individuais pode aumentar os
                                    níveis de energia.
                                </p>
                            </div>
                        </div>
                        {/* <!-- feature - fim --> */}

                        {/* <!-- feature - início --> */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            </div>

                            <div>
                                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                                    Melhora na Digestão
                                </h3>
                                <p className="mb-2 text-gray-500">
                                    A escolha de alimentos ricos em fibras e
                                    nutrientes essenciais pode melhorar a saúde
                                    digestiva.
                                </p>
                            </div>
                        </div>
                        {/* <!-- feature - fim --> */}
                    </div>
                </div>
            </div>
            {/* // quarta sessao */}

            {/* quinta sessao*/}

            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col border border-gray-300 overflow-hidden rounded-lg bg-emerald-400 sm:flex-row md:h-80">
                        {/* <!-- imagem - início --> */}
                        <div className="order-first h-48 w-full bg-emerald-400 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
                            <img
                                src={fotodieta2}
                                loading="lazy"
                                alt="Foto dieta"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        {/* <!-- imagem - fim --> */}

                        {/* <!-- conteúdo - início --> */}
                        <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                            <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
                                Tenha o melhor assistente na palma da sua mão!
                            </h2>

                            <p className="mb-8 max-w-md text-white">
                                Você vai ter acesso de um assistente 24h por dia
                                e 7 dias na semana, onde ele vai te auxiliar e
                                te ajudar em toda a sua dieta, trazendo
                                informações sobre sua refeição, os
                                macronutrientes dos alimentos e muito mais.
                            </p>

                            <div className="mt-auto">
                                <button
                                    onClick={() => {}}
                                    className="inline-block rounded-lg border border-emerald-600 bg-emerald-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none transition duration-100 hover:bg-emerald-600 focus-visible:ring active:bg-gray-200 md:text-base"
                                >
                                    Falar com nossa equipe
                                </button>
                            </div>
                        </div>
                        {/* <!-- conteúdo - fim --> */}
                    </div>
                </div>
            </div>

            {/* //quinta sessao*/}

            {/* Sexta sessao*/}

            <Testimonial1 />

            {/* //Sexta sessao*/}

            {/* Sétima sessao*/}

            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                    {/* <!-- texto - início --> */}
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                            Escolha o plano ideal para você
                        </h2>

                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quae ullam natus velit cupiditate ea fuga
                            maxime similique vero praesentium, vel, quo
                            consectetur animi accusantium, iure repudiandae quos
                            eum amet sint.
                        </p>
                    </div>
                    {/* <!-- texto - fim --> */}

                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-0">
                        {/* <!-- plano basic - início --> */}
                        <div className="w-full rounded-lg border border-gray-300 bg-gray-200 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3">
                            <div className="mb-4">
                                <h3 className="text-2xl font-semibold text-stone-900 sm:text-3xl">
                                    Basic
                                </h3>
                                <p className="text-stone-900">Isso</p>
                            </div>

                            <div className="mb-1 space-x-2">
                                <span className="text-xl text-stone-900 text-indigo-100">
                                    De{' '}
                                    <span className="line-through text-stone-900">R$49</span>
                                </span>
                            </div>
                            <div className="mb-4 space-x-2">
                                <span className="text-4xl font-bold text-emerald-500">
                                    R$29
                                </span>
                                <span className="text-2xl text-stone-900">
                                    /mês
                                </span>
                            </div>

                            <ul className="mb-6 space-y-2 text-emerald-500">
                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span className="text-stone-900">Benefício maravilhoso</span>
                                </li>

                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span className="text-stone-900">Incrível demais</span>
                                </li>

                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span className="text-stone-900">Suporte básico</span>
                                </li>
                            </ul>

                            <button
                                onClick={() => {}}
                                className="block w-full rounded-lg bg-emerald-500 px-8 py-3 text-center text-sm font-semibold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-emerald-600 focus-visible:ring active:text-gray-200 md:text-base"
                            >
                                Quero ser Basic
                            </button>
                        </div>
                        {/* <!-- plano basic - fim --> */}

                        {/* <!-- plano pro - início --> */}
                        <div className="w-full rounded-lg bg-gradient-to-tr from-emerald-500 to-emerald-400 p-6 shadow-xl sm:w-1/2 sm:p-8">
                            <div className="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row">
                                <div>
                                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                                        Professional
                                    </h3>
                                    <p className="text-indigo-100">
                                        Isso + Aquilo
                                    </p>
                                </div>

                                <span className="order-first inline-block rounded-full bg-emerald-300 bg-opacity-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white lg:order-none">
                                    O QUERIDINHO
                                </span>
                            </div>
                            <div className="mb-1 space-x-2">
                                <span className="text-xl text-indigo-100">
                                    De{' '}
                                    <span className="line-through">R$199</span>
                                </span>
                            </div>
                            <div className="mb-4 space-x-2">
                                <span className="text-4xl font-bold text-white">
                                    R$99
                                </span>
                                <span className="text-2xl text-white">
                                    /mês
                                </span>
                            </div>

                            <ul className="mb-6 space-y-2 text-white">
                                {/* <!-- feat - início --> */}
                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span>Só alegria</span>
                                </li>
                                {/* <!-- feat - end --> */}

                                {/* <!-- feat - início --> */}
                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span>Mas também ousadia</span>
                                </li>
                                {/* <!-- feat - end --> */}

                                {/* <!-- feat - início --> */}
                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span>Corinthians 1 x 5 Bahia</span>
                                </li>
                                {/* <!-- feat - end --> */}

                                {/* <!-- feat - início --> */}
                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span>Palmeiras tem Mundial</span>
                                </li>
                                {/* <!-- feat - end --> */}

                                {/* <!-- feat - início --> */}
                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span>Suporte Premium</span>
                                </li>
                                {/* <!-- feat - end --> */}
                            </ul>

                            <button
                                onClick={() => {}}
                                className="block w-full rounded-lg border border-emerald-400 bg-emerald-600 bg-opacity-50 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-emerald-700 focus-visible:ring active:bg-emerald-700 md:text-base"
                            >
                                Quero ser Pro
                            </button>
                        </div>
                        {/* <!-- plano pro - fim --> */}
                    </div>
                </div>
            </div>

            {/* //Sétima sessao*/}
        </body>
    );
}

export default App;
