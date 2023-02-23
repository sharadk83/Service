-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 23, 2023 at 11:10 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `admin_1`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_details`
--

CREATE TABLE `contact_details` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `mobile` varchar(50) DEFAULT NULL,
  `purpose` varchar(250) DEFAULT NULL,
  `service_name` varchar(100) DEFAULT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_details`
--

INSERT INTO `contact_details` (`id`, `first_name`, `last_name`, `email`, `address`, `mobile`, `purpose`, `service_name`, `date`) VALUES
(74, 'ayush', 'arya', 'ayusharya0506@gmail.com', 'Aditya Nagar', '9907066094', 'hgg', 'Electrician', '2023-02-17'),
(75, 'yogesh', 'Arya', 'ayusharya0506@gmail.com', 'Aditya Nagar', '9907066094', 'painting work in home', 'painters', '2023-02-17'),
(76, 'golu', 'arya', 'ayusharya0506@gmail.com', 'vijay nagar', '9907066094', 'cleaning ', 'House cleaning ', '2023-02-17'),
(77, 'golu', 'arya', 'ayusharya6395@gmail.com', 'Aditya Nagar', '9907066094', 'bathroom shower creak', 'Plumbers', '2023-02-17'),
(78, 'Ayush', 'arya', 'ayusharya6395@gmail.com', 'Aditya Nagar', '9907066094', 'asasaasas', 'Plumbers', '2023-02-17'),
(79, 'ayush', 'arya', 'ayusharya0506@gmail.com', 'vijay nagarjkjkjkj', '9907066094', 'jkjjkjkj', 'Plumbers', '2023-02-20');

-- --------------------------------------------------------

--
-- Table structure for table `main_service`
--

CREATE TABLE `main_service` (
  `id` int(11) NOT NULL,
  `service_name` varchar(50) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `img_path` varchar(100) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `main_service`
--

INSERT INTO `main_service` (`id`, `service_name`, `title`, `description`, `img_path`, `start_date`, `end_date`) VALUES
(8, 'Plumbers', 'Plumbers', '<p><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">The origin of the word \"plumber\" dates from the<span>&nbsp;</span></span><a href=\"https://en.wikipedia.org/wiki/Roman_Empire\" title=\"Roman Empire\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none rgb(255, 255, 255); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px;\">Roman Empire</a><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">.</span><sup id=\"cite_ref-3\" class=\"reference\" style=\"line-height: 1; unicode-bidi: isolate; white-space: nowrap; font-weight: 400; font-style: normal; font-size: 11.2px; color: rgb(32, 33, 34); font-family: sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><a href=\"https://en.wikipedia.org/wiki/Plumber#cite_note-3\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none;\">[3]</a></sup><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span></span><sup id=\"cite_ref-4\" class=\"reference\" style=\"line-height: 1; unicode-bidi: isolate; white-space: nowrap; font-weight: 400; font-style: normal; font-size: 11.2px; color: rgb(32, 33, 34); font-family: sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><a href=\"https://en.wikipedia.org/wiki/Plumber#cite_note-4\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none;\">[4]</a></sup><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>Roman roofs used lead in conduits and drain pipes</span><sup id=\"cite_ref-5\" class=\"reference\" style=\"line-height: 1; unicode-bidi: isolate; white-space: nowrap; font-weight: 400; font-style: normal; font-size: 11.2px; color: rgb(32, 33, 34); font-family: sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><a href=\"https://en.wikipedia.org/wiki/Plumber#cite_note-5\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none;\">[5]</a></sup><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>and some were also covered with lead; lead was also used for<span>&nbsp;</span></span><a href=\"https://en.wikipedia.org/wiki/Piping\" title=\"Piping\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none rgb(255, 255, 255); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px;\">piping</a><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>and for making baths.</span><sup id=\"cite_ref-6\" class=\"reference\" style=\"line-height: 1; unicode-bidi: isolate; white-space: nowrap; font-weight: 400; font-style: normal; font-size: 11.2px; color: rgb(32, 33, 34); font-family: sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><a href=\"https://en.wikipedia.org/wiki/Plumber#cite_note-6\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none;\">[6]</a></sup><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>The<span>&nbsp;</span></span><a href=\"https://en.wikipedia.org/wiki/Latin\" title=\"Latin\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none rgb(255, 255, 255); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px;\">Latin</a><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>for<span>&nbsp;</span></span><a href=\"https://en.wikipedia.org/wiki/Lead\" title=\"Lead\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none rgb(255, 255, 255); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px;\">lead</a><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>is<span>&nbsp;</span></span><i style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span title=\"Latin-language text\"><i lang=\"la\">plumbum</i></span></i><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">. In medieval times, anyone who worked with lead was referred to as a plumber; this can be seen from an extract about workmen fixing a roof in Westminster Palace; they were referred to as plumbers: \"To Gilbert de Westminster, plumber, working about the roof of the pantry of the little hall, covering it with lead, and about various defects in the roof of the little hall\".</span><sup id=\"cite_ref-plum1_7-0\" class=\"reference\" style=\"line-height: 1; unicode-bidi: isolate; white-space: nowrap; font-weight: 400; font-style: normal; font-size: 11.2px; color: rgb(32, 33, 34); font-family: sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><a href=\"https://en.wikipedia.org/wiki/Plumber#cite_note-plum1-7\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none;\">[7]</a></sup><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>Thus a person with expertise in working with lead was first known as a<span>&nbsp;</span></span><i style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Plumbarius</i><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>which was later shortened to<span>&nbsp;</span></span><i style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">plumber</i><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">.</span></p>', 'image-1676027384045.Plumbers-1.jpg', '2023-02-01', '2023-02-22'),
(9, 'Electrician', 'electrician', '<p><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">An<span>&nbsp;</span></span><b style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">electrician</b><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>is a<span>&nbsp;</span></span><a href=\"https://en.wikipedia.org/wiki/Tradesman\" title=\"Tradesman\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none rgb(255, 255, 255); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px;\">tradesperson</a><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>specializing in<span>&nbsp;</span></span><a href=\"https://en.wikipedia.org/wiki/Electrical_wiring\" title=\"Electrical wiring\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none rgb(255, 255, 255); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px;\">electrical wiring</a><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>of buildings, transmission lines, stationary machines, and related equipment. Electricians may be employed in the installation of new electrical components or the maintenance and repair of existing electrical infrastructure.</span><sup id=\"cite_ref-1\" class=\"reference\" style=\"line-height: 1; unicode-bidi: isolate; white-space: nowrap; font-weight: 400; font-style: normal; font-size: 11.2px; color: rgb(32, 33, 34); font-family: sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><a href=\"https://en.wikipedia.org/wiki/Electrician#cite_note-1\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none;\">[1]</a></sup><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>Electricians may also specialize in wiring ships, airplanes, and other mobile platforms, as well as data and cable lines.</span></p>', 'image-1676027116996.5serone.jpg', '2023-02-01', '2023-02-22'),
(14, 'Painters', 'painter', '<p style=\"margin: 0.5em 0px; color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">\"<b>Painter Man</b>\" is a song written by<span>&nbsp;</span><a href=\"https://en.wikipedia.org/wiki/United_Kingdom\" title=\"United Kingdom\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none;\">British</a><span>&nbsp;</span>singer Kenny Pickett and guitarist<span>&nbsp;</span><a href=\"https://en.wikipedia.org/wiki/Eddie_Phillips_(musician)\" title=\"Eddie Phillips (musician)\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none;\">Eddie Phillips</a>, first recorded by their group<span>&nbsp;</span><a href=\"https://en.wikipedia.org/wiki/The_Creation_(band)\" title=\"The Creation (band)\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none;\">the Creation</a><span>&nbsp;</span>and released as a single in October 1966. Written as a response to their<span>&nbsp;</span><a href=\"https://en.wikipedia.org/wiki/Avant-garde\" title=\"Avant-garde\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none;\">avant-garde</a><span>&nbsp;</span>stage show, the single was their only top-forty hit on the<span>&nbsp;</span><a href=\"https://en.wikipedia.org/wiki/UK_Singles_Chart\" title=\"UK Singles Chart\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none;\">UK Singles Chart</a>, reaching number 36. It fared better in<span>&nbsp;</span><a href=\"https://en.wikipedia.org/wiki/West_Germany\" title=\"West Germany\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none;\">West Germany</a>, where it reached number eight. It was later issued on their album<span>&nbsp;</span><i><a href=\"https://en.wikipedia.org/wiki/We_Are_Paintermen\" title=\"We Are Paintermen\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none;\">We Are Paintermen</a></i>.</p><p style=\"margin: 0.5em 0px; color: rgb(32, 33, 34); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">One of the Creation\'s most well-known and popular compositions, the song has been covered by several artists. The first cover was that of the New Zealand band<span>&nbsp;</span><a href=\"https://en.wikipedia.org/wiki/Larry%27s_Rebels\" title=\"Larry\'s Rebels\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none;\">Larry\'s Rebels</a>, who in 1967 took the song to number six on<span>&nbsp;</span><a href=\"https://en.wikipedia.org/wiki/Kent_Music_Report\" title=\"Kent Music Report\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none;\">Kent Music Report</a>. A later version by<span>&nbsp;</span><a href=\"https://en.wikipedia.org/wiki/Boney_M.\" title=\"Boney M.\" style=\"text-decoration: none; color: rgb(51, 102, 204); background: none;\">Boney M.</a><span>&nbsp;</span>reached the top-ten worldwide, including in the UK.</p>', 'image-1676634649569.painting-contractors.jpg', '2023-02-07', '2023-02-26'),
(15, 'House cleaning ', 'House cleaning services', '<p><span style=\"color: rgb(32, 33, 36); font-family: arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Dusting, sweeping, mopping, and washing floors, toilets, showers, tubs, driveways, windows, and counters. Vacuuming carpets, upholstery, and any other dusty surface. Cleaning all surfaces in the kitchen and bathroom. Making beds and fluffing pillows.</span></p>', 'image-1675937403814.shutterstock_657213997.jpg', '2023-02-09', '2023-02-23');

-- --------------------------------------------------------

--
-- Table structure for table `otp_tbl`
--

CREATE TABLE `otp_tbl` (
  `email` varchar(50) NOT NULL,
  `otp` varchar(11) NOT NULL,
  `times` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `otp_tbl`
--

INSERT INTO `otp_tbl` (`email`, `otp`, `times`) VALUES
('', '845065', '2023-01-30 05:32:42'),
('', '804652', '2023-01-30 05:34:18'),
('', '807329', '2023-01-30 05:39:13'),
('', '615654', '2023-01-30 05:52:48'),
('', '794869', '2023-01-30 05:55:24'),
('', '448725', '2023-01-30 05:57:44'),
('', '520058', '2023-01-30 05:57:57'),
('', '711898', '2023-01-30 05:58:03'),
('', '644482', '2023-01-30 06:01:25'),
('', '105563', '2023-01-30 06:01:44'),
('ayusharya0506@gmail.com', '475586', '2023-01-30 06:12:11'),
('ayusharya0506@gmail.com', '701977', '2023-01-30 06:13:23'),
('ayusharya0506@gmail.com', '952329', '2023-01-30 06:19:03'),
('ayusharya0506@gmail.com', '891869', '2023-01-30 06:22:22'),
('ayusharya0506@gmail.com', '319422', '2023-01-30 06:22:36'),
('ayusharya0506@gmail.com', '655231', '2023-01-30 06:22:50'),
('ayusharya0506@gmail.com', '426276', '2023-01-30 06:22:59'),
('ayusharya0506@gmail.com', '933670', '2023-01-30 06:26:33'),
('ayusharya0506@gmail.com', '904898', '2023-01-30 06:31:43'),
('ayusharya0506@gmail.com', '713475', '2023-01-30 06:32:14'),
('ayusharya0506@gmail.com', '891516', '2023-01-30 06:33:28'),
('ayusharya0506@gmail.com', '712367', '2023-01-30 07:25:34'),
('ayusharya0506@gmail.com', '951829', '2023-01-30 07:27:24'),
('ayusharya0506@gmail.com', '986340', '2023-01-30 07:30:56'),
('ayusharya0506@gmail.com', '155794', '2023-01-30 07:36:40'),
('ayusharya0506@gmail.com', '841974', '2023-01-30 07:43:56'),
('ayusharya0506@gmail.com', '893835', '2023-01-30 07:47:11'),
('ayusharya0506@gmail.com', '631096', '2023-01-30 07:58:51'),
('ayusharya0506@gmail.com', '435226', '2023-01-30 08:06:26'),
('ayusharya0506@gmail.com', '272906', '2023-01-30 08:24:46'),
('ayusharya0506@gmail.com', '638433', '2023-01-30 08:29:02'),
('ayusharya0506@gmail.com', '519498', '2023-01-30 08:31:35'),
('ayusharya0506@gmail.com', '287529', '2023-01-30 08:32:57'),
('ayusharya0506@gmail.com', '183570', '2023-01-30 08:34:39'),
('ayusharya0506@gmail.com', '107739', '2023-01-30 08:35:48'),
('ayusharya0506@gmail.com', '327134', '2023-01-30 08:37:00'),
('ayusharya0506@gmail.com', '667971', '2023-01-30 08:37:41'),
('ayusharya0506@gmail.com', '151118', '2023-01-30 08:38:53'),
('ayusharya0506@gmail.com', '238669', '2023-01-30 08:39:36'),
('ayusharya0506@gmail.com', '755650', '2023-01-30 08:45:17'),
('ayusharya0506@gmail.com', '806367', '2023-01-30 08:46:14'),
('ayusharya0506@gmail.com', '681898', '2023-01-30 08:47:15'),
('ayusharya0506@gmail.com', '897185', '2023-01-30 08:52:05'),
('ayusharya0506@gmail.com', '781953', '2023-01-30 09:11:52'),
('ayusharya0506@gmail.com', '457484', '2023-01-30 09:12:43'),
('ayusharya0506@gmail.com', '809833', '2023-01-30 09:13:16'),
('ayusharya0506@gmail.com', '435602', '2023-01-30 09:18:20'),
('ayusharya0506@gmail.com', '248740', '2023-01-30 09:18:40'),
('ayusharya0506@gmail.com', '605429', '2023-01-30 09:23:45'),
('ayusharya0506@gmail.com', '355746', '2023-01-30 09:25:39'),
('ayusharya0506@gmail.com', '793368', '2023-01-30 09:27:21'),
('ayusharya0506@gmail.com', '777386', '2023-01-30 09:28:43'),
('ayusharya0506@gmail.com', '697088', '2023-01-30 09:30:13'),
('ayusharya0506@gmail.com', '270589', '2023-01-30 09:36:12'),
('ayusharya0506@gmail.com', '374918', '2023-01-30 09:50:39'),
('ayusharya0506@gmail.com', '232161', '2023-01-30 09:51:14'),
('ayusharya0506@gmail.com', '110935', '2023-01-30 09:52:34'),
('ayusharya0506@gmail.com', '447901', '2023-01-30 10:10:49'),
('ayusharya0506@gmail.com', '578263', '2023-01-30 12:37:48'),
('ayusharya0506@gmail.com', '329768', '2023-01-30 13:10:11'),
('ayusharya0506@gmail.com', '597225', '2023-01-30 13:11:25'),
('ayusharya0506@gmail.com', '452688', '2023-01-30 13:27:16'),
('ayusharya0506@gmail.com', '591404', '2023-01-30 13:27:25'),
('ayusharya0506@gmail.com', '319436', '2023-01-30 13:28:28'),
('ayusharya0506@gmail.com', '343709', '2023-01-30 13:29:47'),
('ayusharya0506@gmail.com', '197049', '2023-01-30 13:33:57'),
('ayusharya0506@gmail.com', '128030', '2023-01-30 13:38:54'),
('ayusharya0506@gmail.com', '540535', '2023-01-31 04:31:49'),
('ayusharya0506@gmail.com', '632368', '2023-01-31 04:33:07'),
('ayusharya0506@gmail.com', '618229', '2023-01-31 05:01:01'),
('ayusharya0506@gmail.com', '506311', '2023-01-31 05:04:50'),
('ayusharya0506@gmail.com', '964851', '2023-01-31 05:06:35'),
('ayusharya0506@gmail.com', '367524', '2023-01-31 05:07:28'),
('ayusharya0506@gmail.com', '831968', '2023-01-31 05:08:29'),
('ayusharya0506@gmail.com', '504303', '2023-01-31 05:08:50'),
('ayusharya0506@gmail.com', '460725', '2023-02-03 10:35:44'),
('ayusharya0506@gmail.com', '484742', '2023-02-13 07:39:27'),
('ayusharya0506@gmail.com', '387000', '2023-02-13 08:04:14'),
('ayusharya0506@gmail.com', '158476', '2023-02-13 08:05:04'),
('ayusharya0506@gmail.com', '113089', '2023-02-13 08:06:05'),
('ayusharya0506@gmail.com', '573536', '2023-02-13 08:17:59'),
('ayusharya0506@gmail.com', '664884', '2023-02-13 08:22:11'),
('ayusharya0506@gmail.com', '489893', '2023-02-13 08:22:28'),
('ayusharya0506@gmail.com', '864029', '2023-02-13 08:23:02'),
('ayusharya0506@gmail.com', '615839', '2023-02-13 08:23:27');

-- --------------------------------------------------------

--
-- Table structure for table `sub_service`
--

CREATE TABLE `sub_service` (
  `id` int(11) NOT NULL,
  `service_name` varchar(50) DEFAULT NULL,
  `sub_service_name` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `img_path` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sub_service`
--

INSERT INTO `sub_service` (`id`, `service_name`, `sub_service_name`, `description`, `img_path`) VALUES
(2, '8', 'plumne', '<p>asas</p>', 'image-1677138019601.352-3522630_electrical-repair-clipart-electrician-png.png');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(50) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `gender` varchar(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `area` varchar(250) DEFAULT NULL,
  `mobile_no` varchar(20) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `experience` varchar(11) DEFAULT NULL,
  `service_name` varchar(250) DEFAULT NULL,
  `service_charge` varchar(50) DEFAULT NULL,
  `upload_file` varchar(250) DEFAULT NULL,
  `document_type` varchar(50) DEFAULT NULL,
  `document_file` varchar(250) DEFAULT NULL,
  `user_role` int(10) DEFAULT NULL,
  `current_date` date DEFAULT NULL,
  `update_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `gender`, `email`, `country`, `state`, `address`, `city`, `area`, `mobile_no`, `password`, `experience`, `service_name`, `service_charge`, `upload_file`, `document_type`, `document_file`, `user_role`, `current_date`, `update_date`) VALUES
(139, 'Ayush', 'Arya', 'Male', 'ayusharya6395@gmail.com', 'india', 'MP', 'vijay nagar', 'shajapur', NULL, '9907099070', '123456', NULL, NULL, NULL, NULL, NULL, NULL, 3, '2023-02-03', '2023-02-03'),
(146, 'Rahul', 'Gandhi', NULL, 'ayusharya0506@gmail.com', NULL, NULL, 'vijay nagar', 'shajapur', 'near by hanuman tapmple', '9907099070', '369852', '2 year', 'House cleaning , Painters, Plumbers, Electrician', '1000', 'image-1675753278059.man-3583424_1280.webp', 'IDENTITY CARD', 'image-1675753278062.pest-control-service-logo-cartoon-illustration-57635167.jpg', 2, '2023-02-07', '2023-02-22'),
(147, 'test', 'test', NULL, 'ayusharya6395@gmail.com', NULL, NULL, 'vijay nagar', 'indore', 'near by hanuman tapmple', '9907099070', '123456', '3 year', 'Plumbers, Electrician, Painters, House cleaning ', '1000', 'image-1675949354585.352-3522630_electrical-repair-clipart-electrician-png.png', 'IDENTITY CARD', 'image-1675949354591.352-3522630_electrical-repair-clipart-electrician-png.png', 2, '2023-02-09', '2023-02-22'),
(150, 'Rahul', 'sharma', NULL, 'ayusharya0506@gmail.com', NULL, NULL, 'vijay nagar', 'indore', 'near by hanuman tapmple', '9907099070', '123456', '1 year', 'Plumbers, Electrician', '1500', 'image-1676901899008.What-does-an-electrician-do-during-their-daytoday-career-_819_6064015_0_14114472_1000.jpg', 'AADHAAR CARD', 'image-1676901899016.1000_F_399822445_pk1SJ0o1vTuRpIti0uh0px5tN2YLN3l3.jpg', 2, '2023-02-20', '2023-02-22'),
(151, 'Ayush', 'Arya', NULL, 'ayusharya6395@gmail.com', NULL, NULL, 'Aditya Nagar', 'shajapur', 'near by hanuman tapmple', '9907099070', '123456', '5 year', 'Plumbers,Electrician,Painters,House cleaning ', '2000', 'image-1677045618221.indian-construction-site-manager-standing-260nw-2060102003.webp', 'AADHAAR CARD', 'image-1677045618234.1000_F_399822445_pk1SJ0o1vTuRpIti0uh0px5tN2YLN3l3.jpg', 2, '2023-02-22', NULL),
(152, 'salman', 'khan', NULL, 'ayusharya0506@gmail.com', NULL, NULL, 'Aditya Nagar', 'shajapur', 'test1,test2', '9907099070', '123456', '2 year', 'Electrician,Plumbers,Painters,House cleaning ', '200', 'image-1677045728344.shutterstock_2139282303-1.jpg', 'AADHAAR CARD', 'image-1677045728346.1000_F_399822445_pk1SJ0o1vTuRpIti0uh0px5tN2YLN3l3.jpg', 2, '2023-02-22', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_details`
--
ALTER TABLE `contact_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `main_service`
--
ALTER TABLE `main_service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_service`
--
ALTER TABLE `sub_service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_details`
--
ALTER TABLE `contact_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT for table `main_service`
--
ALTER TABLE `main_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `sub_service`
--
ALTER TABLE `sub_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
