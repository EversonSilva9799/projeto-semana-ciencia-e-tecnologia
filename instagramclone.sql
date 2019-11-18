-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 18-Nov-2019 às 17:14
-- Versão do servidor: 10.1.36-MariaDB
-- versão do PHP: 7.0.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `instagramclone`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `spCadastrarPostagem` (`autor` VARCHAR(80), `legenda` TEXT, `imagem` VARCHAR(255), `uniqueStore` VARCHAR(255))  BEGIN
	INSERT INTO TbPost(autor, legenda, imagem, uniqueStore)
	VALUES(autor, legenda, imagem, uniqueStore);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spDeletarPostagem` (`idDeletar` INT)  BEGIN
	DELETE FROM TbPost WHERE id = idDeletar;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spGetPostagem` (`idPesquisa` VARCHAR(255), `pesquisaPor` SMALLINT)  BEGIN
	IF pesquisaPor = 0 THEN
		SELECT * FROM TbPost WHERE id = idPesquisa;
	ELSEIF pesquisaPor = 1 THEN
		SELECT * FROM TbPost WHERE uniqueStore = idPesquisa;
	END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spGetPostagens` ()  BEGIN 
	SELECT * FROM TbPost ORDER BY id DESC;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbpost`
--

CREATE TABLE `tbpost` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `autor` varchar(80) NOT NULL,
  `legenda` text,
  `imagem` varchar(255) NOT NULL,
  `uniqueStore` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tbpost`
--

INSERT INTO `tbpost` (`id`, `autor`, `legenda`, `imagem`, `uniqueStore`) VALUES
(314, 'everson', 'Boa noite', '1574093256906137287085.jpg', '15740932803861574093280386');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbpost`
--
ALTER TABLE `tbpost`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbpost`
--
ALTER TABLE `tbpost`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=315;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
