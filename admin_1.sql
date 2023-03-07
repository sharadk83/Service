-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 07, 2023 at 07:19 AM
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
-- Table structure for table `add_benner`
--

CREATE TABLE `add_benner` (
  `img_path` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `add_benner`
--

INSERT INTO `add_benner` (`img_path`) VALUES
('image-1677244269213.pexels-ono-kosuki-5974325.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `contact_details_tbl`
--

CREATE TABLE `contact_details_tbl` (
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
-- Dumping data for table `contact_details_tbl`
--

INSERT INTO `contact_details_tbl` (`id`, `first_name`, `last_name`, `email`, `address`, `mobile`, `purpose`, `service_name`, `date`) VALUES
(74, 'ayush', 'arya', 'ayusharya0506@gmail.com', 'Aditya Nagar', '9907066094', 'hgg', 'Electrician', '2023-02-17'),
(75, 'yogesh', 'Arya', 'ayusharya0506@gmail.com', 'Aditya Nagar', '9907066094', 'painting work in home', 'painters', '2023-02-17'),
(76, 'golu', 'arya', 'ayusharya0506@gmail.com', 'vijay nagar', '9907066094', 'cleaning ', 'House cleaning ', '2023-02-17'),
(77, 'golu', 'arya', 'ayusharya6395@gmail.com', 'Aditya Nagar', '9907066094', 'bathroom shower creak', 'Plumbers', '2023-02-17'),
(78, 'Ayush', 'arya', 'ayusharya6395@gmail.com', 'Aditya Nagar', '9907066094', 'asasaasas', 'Plumbers', '2023-02-17'),
(79, 'ayush', 'arya', 'ayusharya0506@gmail.com', 'vijay nagarjkjkjkj', '9907066094', 'jkjjkjkj', 'Plumbers', '2023-02-20'),
(80, 'ayush', 'arya', 'ayusharya0506@gmail.com', 'vijay nagar', '9907066094', 'house Clining', 'Home-Inquiry', '2023-03-03'),
(82, 'ayush', 'arya', 'ayusharya0506@gmail.com', 'vijay nagar', '9907066094', 'eeeee', 'Electrician', '2023-03-03');

-- --------------------------------------------------------

--
-- Table structure for table `faq_tbl`
--

CREATE TABLE `faq_tbl` (
  `id` int(11) NOT NULL,
  `service_id` varchar(50) DEFAULT NULL,
  `service_type` varchar(50) DEFAULT NULL,
  `service_name` varchar(100) DEFAULT NULL,
  `question` varchar(250) DEFAULT NULL,
  `answer` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faq_tbl`
--

INSERT INTO `faq_tbl` (`id`, `service_id`, `service_type`, `service_name`, `question`, `answer`) VALUES
(42, '1', 'main_service', 'Electrician', 'The standard Lorem Ipsum passage, used since the 1500s', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do'),
(43, '7', 'main_service', 'Plumbers', ' freestar  freestar What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramb', '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio'),
(44, '1', 'main_service', 'Electrician', 'The standard Lorem Ipsum passage, used since the 1500s', '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'),
(45, '1', 'main_service', 'Electrician', 'The standard Lorem Ipsum passage, used since the 1500s', '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio'),
(46, '7', 'main_service', 'Plumbers', 'The standard Lorem Ipsum passage, used since the 1500s', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'),
(47, '7', 'main_service', 'Plumbers', 'The standard Lorem Ipsum passage, used since the 1500s', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
(48, '9', 'sub_service', 'Fan', 'Section 1.10.32 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia vo'),
(49, '9', 'sub_service', 'Fan', 'Section 1.10.32 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia v'),
(51, '10', 'sub_service', 'Moter', 'Section 1.10.33 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mo');

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
('ayusharya0506@gmail.com', '615839', '2023-02-13 08:23:27'),
('ayusharya0506@gmail.com', '753723', '2023-03-03 09:28:02');

-- --------------------------------------------------------

--
-- Table structure for table `services_tbl`
--

CREATE TABLE `services_tbl` (
  `id` int(11) NOT NULL,
  `service_name` varchar(50) DEFAULT NULL,
  `service_type` varchar(50) DEFAULT NULL,
  `main_service_id` varchar(50) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `img_path` varchar(250) DEFAULT NULL,
  `thumbnail_path` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services_tbl`
--

INSERT INTO `services_tbl` (`id`, `service_name`, `service_type`, `main_service_id`, `description`, `img_path`, `thumbnail_path`) VALUES
(1, 'Electrician', 'main_service', NULL, '<p><strong style=\"background-color: rgb(255, 255, 255); color: rgb(4, 12, 40); font-weight: 500; font-family: arial, helvetica, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;\">Installs and repairs electrical wiring, systems, and fixtures in buildings</strong><span style=\"color: rgb(32, 33, 36); font-family: &quot;Google Sans&quot;, arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 22px;\"><span style=\"font-family: arial, helvetica, sans-serif; font-size: 14px;\"><span style=\"background-color: rgb(255, 255, 255);\">.</span><span style=\"font-size: 14px;\"> Installs conduits and pipes to house electrical wires and cables. Ensures piping complies with electrical codes. Installs circuit breakers and other electrical hardware and connects wi</span></span></span><span style=\"color: rgb(32, 33, 36); font-family: &quot;Google Sans&quot;, arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 22px;\"><span style=\"font-family: arial, helvetica, sans-serif; font-size: 14px;\"><span style=\"font-size: 14px;\">ring to them</span></span><span style=\"font-size: 22px;\">.</span></span></p>', 'image-1677931148291.5serone.jpg', 'thumbnail-image-1677931148291.5serone.jpg'),
(7, 'Plumbers', 'main_service', NULL, '<p><span style=\"color: rgb(32, 33, 36); font-family: &quot;Google Sans&quot;, arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 14px;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>', 'image-1677930556906.VIGILANT-plumber-fixing-a-sink-shutterstock_132523334-e1448389230378.jpg', 'thumbnail-image-1677930556906.VIGILANT-plumber-fixing-a-sink-shutterstock_132523334-e1448389230378.jpg'),
(9, 'Fan', 'sub_service', '1', '<p><span style=\"color: rgb(32, 33, 36); font-family: &quot;Google Sans&quot;, arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 14px;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span><span style=\"font-size: 14px;\"></span></p>', 'image-1677934565718.download (3).jpg', 'thumbnail-image-1677934565718.download (3).jpg'),
(10, 'Moter', 'sub_service', '1', '<p><span style=\"color: rgb(32, 33, 36); font-family: &quot;Google Sans&quot;, arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 14px;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span></p>', 'image-1677934594215.home-pump.jpg', 'thumbnail-image-1677934594215.home-pump.jpg'),
(11, 'Water Tank', 'sub_service', '7', '<p><span style=\"color: rgb(32, 33, 36); font-family: &quot;Google Sans&quot;, arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 14px;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span><span style=\"font-size: 14px;\"></span></p>', 'image-1677934983432.plastic-water-tank-500x500.webp', 'thumbnail-image-1677934983432.plastic-water-tank-500x500.webp'),
(12, 'House Cleaners', 'main_service', NULL, '<p><span style=\"font-size: 14px;\"><span style=\"color: rgb(32, 33, 36); font-family: &quot;Google Sans&quot;, arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;\">Housekeepers are&nbsp;</span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(4, 12, 40); font-weight: 500; font-family: &quot;Google Sans&quot;, arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 22px;\">responsible for cleaning and reporting any safety hazards to the homeowner or manager in charge</strong></span><span style=\"color: rgb(32, 33, 36); font-family: &quot;Google Sans&quot;, arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 14px;\">. They must complete tasks like vacuuming, sweeping, emptying trash cans, dusting shelves, cleaning windows, and mopping floors. Some Housekeepers change linens, wash dishes, and do light ironing and laundry.</span><br></p>', 'image-1678081174021.shutterstock_657213997.jpg', 'thumbnail-image-1678081174021.shutterstock_657213997.jpg'),
(13, 'Painters', 'main_service', NULL, '<p><strong style=\"background-color: rgb(255, 255, 255); color: rgb(4, 12, 40); font-weight: 500; font-family: &quot;Google Sans&quot;, arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;\">Applies paints, sealers, and solvents to exterior and interior building surfaces such as plaster, sheetrock, concrete, and wood</strong><span style=\"color: rgb(32, 33, 36); font-family: &quot;Google Sans&quot;, arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 14px;\">. Performs building exterior and interior caulking, finish repair, mud and tape, and texturing tasks. Operates equipment such as airless spray equipment, scaffolding, and motorized lifts</span><br></p>', 'image-1678081276785.painting-contractors.jpg', 'thumbnail-image-1678081276785.painting-contractors.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user_tbl`
--

CREATE TABLE `user_tbl` (
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
-- Dumping data for table `user_tbl`
--

INSERT INTO `user_tbl` (`id`, `first_name`, `last_name`, `gender`, `email`, `country`, `state`, `address`, `city`, `area`, `mobile_no`, `password`, `experience`, `service_name`, `service_charge`, `upload_file`, `document_type`, `document_file`, `user_role`, `current_date`, `update_date`) VALUES
(139, 'Ayush', 'Arya', 'Male', 'ayusharya6395@gmail.com', 'india', 'MP', 'vijay nagar', 'shajapur', NULL, '9907099070', '123456', NULL, NULL, NULL, NULL, NULL, NULL, 3, '2023-02-03', '2023-02-03'),
(180, 'Test', 'Test', NULL, 'ayusharya0506@gmail.com', NULL, NULL, 'vijay nagar', 'indore', 'near by hanuman tapmple', '9907099070', '123456', '3 year', 'Plumbers, Electrician, Painters, House cleaning ', '500', 'thumbnail-image-1677216668773.shutterstock_2139282303-1.jpg', 'AADHAAR CARD', 'thumbnail-image-1677216668775.1000_F_399822445_pk1SJ0o1vTuRpIti0uh0px5tN2YLN3l3.jpg', 2, '2023-02-24', '2023-02-24'),
(181, 'golu', 'arya', NULL, 'ayusharya6395@gmail.com', NULL, NULL, 'vijay nagar', 'indore', 'near by hanuman tapmple', '9907099070', '123456', '4 year', 'Painters,Plumbers,Electrician,House cleaning ', '1500', 'thumbnail-image-1677217097272.stock-vector-sympathetic-painter-dressed-in-work-clothes-he-carries-a-brush-273627476.jpg', 'AADHAAR CARD', 'thumbnail-image-1677217097665.1000_F_399822445_pk1SJ0o1vTuRpIti0uh0px5tN2YLN3l3.jpg', 2, '2023-02-24', NULL),
(182, 'Test', 'test', NULL, 'ayush@gmail.com', NULL, NULL, 'vijay nagar', 'indore', 'B.S.N college', '9907099070', '123456', '1 year', 'Plumbers,Electrician,Painters,House cleaning ', '500', 'thumbnail-image-1677217186588.AmanElectrician-Indore-MP.jpeg', 'AADHAAR CARD', 'thumbnail-image-1677217186589.1000_F_399822445_pk1SJ0o1vTuRpIti0uh0px5tN2YLN3l3.jpg', 2, '2023-02-24', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_details_tbl`
--
ALTER TABLE `contact_details_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faq_tbl`
--
ALTER TABLE `faq_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services_tbl`
--
ALTER TABLE `services_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_tbl`
--
ALTER TABLE `user_tbl`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_details_tbl`
--
ALTER TABLE `contact_details_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `faq_tbl`
--
ALTER TABLE `faq_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `services_tbl`
--
ALTER TABLE `services_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user_tbl`
--
ALTER TABLE `user_tbl`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=183;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
