-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 07, 2023 at 08:06 AM
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
(7, 'macanic', 'macanic', '<p>asasassaasaas</p>', 'image-1675745596593.images.png', '2023-02-07', '2023-02-28'),
(8, 'plumbers', 'macanic', '<p>asasasasasasasasa</p>', 'image-1675745631852.104-1047973_plumber-icon-plumber-needed.png', '2023-02-07', '2023-02-28'),
(9, 'electrician', 'electrician', '<p>sasasasasasasas</p>', 'image-1675745695100.electrician-with-toolbox-and-connector-orange-cartoon-character-as-electrician-w', '2023-02-07', '2023-02-28'),
(10, 'electrician', 'electrician', '<p>asasasasa</p>', 'image-1675745722884.electrician-with-toolbox-and-connector-orange-cartoon-character-as-electrician-w', '2023-02-07', '2023-02-28');

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
('ayusharya0506@gmail.com', '460725', '2023-02-03 10:35:44');

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
(143, 'Ayush', 'Arya', NULL, 'ayusharya0506@gmail.com', NULL, NULL, 'vijay nagar', 'indore', 'B.S.N college', '9907099070', '123456', '1_year', NULL, '1000', 'image-1675433599487.pngwing.com.png', 'AADHAAR CARD', 'image-1675433599499.f15c02bfeb02d15d.webp', 2, '2023-02-03', NULL),
(144, 'Ayush', 'Arya', NULL, 'ayusharya0506@gmail.com', NULL, NULL, 'vijay nagar', 'Shajapur', 'near by hanuman tapmple', '9907099070', '123456', '2_year', NULL, '1000', 'image-1675752550242.man-3583424_1280.webp', 'AADHAAR CARD', 'image-1675752550250.f15c02bfeb02d15d.webp', 2, '2023-02-07', NULL),
(145, 'Ayush', 'Arya', NULL, 'ayusharya6395@gmail.com', NULL, NULL, 'vijay Nagar', 'indore', 'B.S.N college', '9907099070', '555555', '2_year', NULL, '1000', 'image-1675752632305.man-3583424_1280.webp', 'AADHAAR CARD', 'image-1675752632309.352-3522630_electrical-repair-clipart-electrician-png.png', 2, '2023-02-07', NULL),
(146, 'Ayush', 'Arya', NULL, 'ayusharya0506@gmail.com', NULL, NULL, 'vijay nagar', 'shajapur', 'near by hanuman tapmple', '9907099070', '369852', '10_year', 'plumbers,electrician,macanic', '1000', 'image-1675753278059.man-3583424_1280.webp', 'IDENTITY CARD', 'image-1675753278062.pest-control-service-logo-cartoon-illustration-57635167.jpg', 2, '2023-02-07', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `main_service`
--
ALTER TABLE `main_service`
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
-- AUTO_INCREMENT for table `main_service`
--
ALTER TABLE `main_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
