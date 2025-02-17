--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: projects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    name text,
    language text,
    properties text[],
    language_image text,
    property_image text,
    main_topic text,
    project_image text,
    github_link text
);


ALTER TABLE public.projects OWNER TO postgres;

--
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.projects_id_seq OWNER TO postgres;

--
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.projects (id, name, language, properties, language_image, property_image, main_topic, project_image, github_link) FROM stdin;
1	Space Invaders	python	{pygame}	/assets/img/pythonIcon.png	/assets/img/gamesLogo.jpg	Spiele	/assets/img/sonstigesTitelbild.jpg	https://github.com/Stefanb0711/SpaceInvaders.git
3	WetterApp	javascript	{react,api}	/assets/img/javaScriptLogo.png	/assets/img/frontendBackendGraphic.png	Frontend-Backend	/assets/img/sonstigesTitelbild.jpg	https://github.com/Stefanb0711/WetterAppReactExpress.git
4	WifiCafefinder	python	{api,flask,webdesign}	/assets/img/pythonIcon.png	/assets/img/frontendBackendGraphic.png	Frontend-Backend	/assets/img/sonstigesTitelbild.jpg	https://github.com/Stefanb0711/Python-WifiCafeFinderUsingAPI.git
6	Image Color Palette Generator	python	{bildverarbeitung,datascience,flask}	/assets/img/pythonIcon.png	/assets/img/frontendBackendGraphic.png	Frontend-Backend	/assets/img/sonstigesTitelbild.jpg	https://github.com/Stefanb0711/ImageColorPaletteGenerator.git
7	TodolistFlask	python	{flask,sqlalchemy}	/assets/img/pythonIcon.png	/assets/img/frontendBackendGraphic.png	Frontend-Backend	/assets/img/sonstigesTitelbild.jpg	https://github.com/Stefanb0711/TodolistFlask.git
5	Portfolioseite	javascript	{react,express,templateverwendung,postgresql,sortierfunktion,apierstellung}	/assets/img/javaScriptLogo.png	/assets/img/frontendBackendGraphic.png	Frontend-Backend	/assets/img/sonstigesTitelbild.jpg	\N
8	Onlineshop	python	{flask,paypalintegration,sqlalchemy,backend}	/assets/img/pythonIcon.png	/assets/img/frontendBackendGraphic.png	Frontend-Backend	/assets/img/sonstigesTitelbild.jpg	https://github.com/Stefanb0711/eCommerceWebsite.git
9	Website f├╝r It-Firma	python	{flask,templateverwendung,automatisierteformulare,email-dns-abfrage,sicherheitsfeatures}	/assets/img/pythonIcon.png	/assets/img/frontendBackendGraphic.png	Frontend-Backend	/assets/img/awbItStartseite.png	https://github.com/Stefanb0711/AWB-ItWebsite.git
11	TodolistReact	javascript	{react,express,postgresql}	/assets/img/javaScriptLogo.png	/assets/img/frontendBackendGraphic.png	Frontend-Backend	/assets/img/sonstigesTitelbild.jpg	https://github.com/Stefanb0711/TodoListReactExpress.git
13	Deaths Involving Police Dataanalysis	python	{pandas,grafischedarestellungvondaten,matplotlib,seaborny,plotly}	/assets/img/pythonIcon.png	/assets/img/dataAnalysisLogo.png	Dataanalysis	/assets/img/deathsInvolvingPoliceStartBild.png	https://github.com/Stefanb0711/DeathsInvolvinPoliceDataAnalysis.git
25	SocialNetwork	javascript	{angular,express,sockets,postgresql}	/assets/img/javaScriptLogo.png	/assets/img/frontendBackendGraphic.png	Frontend-Backend	/assets/img/FrontendBackend/socialNetworkAngular/angularLogo.svg	https://github.com/Stefanb0711/chatAppAngular.git
14	Spacerace Dataanalysis	python	{pandas,grafischedarestellungvondaten,matplotlib,seaborny,plotly}	/assets/img/pythonIcon.png	/assets/img/dataAnalysisLogo.png	Dataanalysis	/assets/img/spaceRaceStartBild.png	https://github.com/Stefanb0711/SpaceRaceDataAnalysis.git
15	Breakout	python	{pygame}	/assets/img/pythonIcon.png	/assets/img/gamesLogo.jpg	Spiele	/assets/img/breakoutStartBild.png	https://github.com/Stefanb0711/Breakout.git
16	TicTacToe	python	{oop,konsole}	/assets/img/pythonIcon.png	/assets/img/gamesLogo.jpg	Spiele	/assets/img/ticTacToeStartbild.png	https://github.com/Stefanb0711/TicTacToeOOP.git
17	Audiobook Converter	python	{gui,tkinter}	/assets/img/pythonIcon.png	/assets/img/guiProgramming.png	Gui	/assets/img/audiobookConverterStartBild.png	https://github.com/Stefanb0711/AudiobookConverter.git
18	Verschwindender Text Programm	python	{gui,tkinter}	/assets/img/pythonIcon.png	/assets/img/guiProgramming.png	Gui	/assets/img/disappearingTextWritingAppStart.png	https://github.com/Stefanb0711/DisappearingTextWritingApp.git
19	Typingspeed Tester	python	{gui,tkinter}	/assets/img/pythonIcon.png	/assets/img/guiProgramming.png	Gui	/assets/img/typingSpeedTester.png	https://github.com/Stefanb0711/TypingSpeedTester.git
20	Wasserzeichensetzer	python	{gui,tkinter,bildmanipulation}	/assets/img/pythonIcon.png	/assets/img/guiProgramming.png	Gui	/assets/img/wasserzeichenSetzerStartBild.png	https://github.com/Stefanb0711/Wasserzeichensetzer.git
21	Finanznews Webscraper	python	{webscraping,flask,error-handling}	/assets/img/pythonIcon.png	/assets/img/frontendBackendGraphic.png	Frontend-Backend	/assets/img/sonstigesTitelbild.jpg	https://github.com/Stefanb0711/FinanceNewsWebscraper.git
24	Automated Dinosaur Game	python	{guiautomation}	/assets/img/pythonIcon.png	/assets/img/gamesLogo.jpg	Spiele	/assets/img/dinosaurGameStart.png	https://github.com/Stefanb0711/PythonGUIAutomation.git
26	Netzwerkhacking	\N	{preconncection-attacken,deauthentifierzungsattacken,wep/wpa1/wpa2-cracking,man-in-the-middle-attacken,arp-spoofing,dns-spoofing,wireshark,best-paractices}	\N	/assets/img/ethicalHackingLogo.jpg	Ethical-Hacking	/assets/img/EthicalHacking/network.jpg	\N
22	Morsecode Converter	python	{konsole,oop}	/assets/img/pythonIcon.png	/assets/img/sonstigesTitelbild.jpg	Gui	/assets/img/sonstigesTitelbild.jpg	https://github.com/Stefanb0711/ConsoleProgramms.git
27	Computerhacking	\N	{serverside-attacken,payloads,backdoors,clientside-attacken,antivierenprogramme-auslisten,trojaner,viren-harmlos-aussehen-lassen,fake-email-kampagnen,fremden-browser-fernsteuern}	\N	/assets/img/ethicalHackingLogo.jpg	Ethical-Hacking	/assets/img/EthicalHacking/computerHacking.jpg	\N
28	Websitehacking	\N	{click-jacking,informationsbeschaffung,websites-des-selben-servers-finden,subdomains-finden,file-upload-vulnerabilities,code-executions-vulnearbility,file-inclusion-vulnerability,sql-injections,html-Injections,reflected-xss,stored-xss,best-practices}	\N	/assets/img/ethicalHackingLogo.jpg	Ethical-Hacking	/assets/img/EthicalHacking/websiteHacking.jpg	\N
\.


--
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.projects_id_seq', 6, true);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

