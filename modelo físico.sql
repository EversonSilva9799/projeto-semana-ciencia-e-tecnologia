/*

TbPost


*/
USE instagramclone;

CREATE TABLE TbPost(
id SERIAL PRIMARY KEY,
autor VARCHAR(80) NOT NULL,
legenda TEXT,
imagem VARCHAR(255) NOT NULL
);

ALTER TABLE Tbpost ADD uniqueStore VARCHAR(255) NOT NULL;




/*  Procedure para pegar postagens  */
#DROP PROCEDURE spGetPostagens;
DELIMITER $$
CREATE PROCEDURE spGetPostagens()
BEGIN 
	SELECT * FROM TbPost ORDER BY id DESC;
END $$

DELIMITER ;


CALL spGetPostagens();



/*  Procedure para pegar uma postagem  */
DROP PROCEDURE spGetPostagem;
DELIMITER $$
CREATE PROCEDURE spGetPostagem(idPesquisa VARCHAR(255), pesquisaPor SMALLINT)
BEGIN
	IF pesquisaPor = 0 THEN
		SELECT * FROM TbPost WHERE id = idPesquisa;
	ELSEIF pesquisaPor = 1 THEN
		SELECT * FROM TbPost WHERE uniqueStore = idPesquisa;
	END IF;
END $$
DELIMITER ;


CALL spGetPostagens();
CALL spGetPostagem(222, 0);




/* Procedure para cadastrar postagem */
drop procedure spCadastrarPostagem;
DELIMITER $$
CREATE PROCEDURE spCadastrarPostagem(autor VARCHAR(80), legenda TEXT, imagem VARCHAR(255), uniqueStore VARCHAR(255))
BEGIN
	INSERT INTO TbPost(autor, legenda, imagem, uniqueStore)
	VALUES(autor, legenda, imagem, uniqueStore);

END $$
DELIMITER ;


CALL spCadastrarPostagem("everson", "Minha postagem também está no ar", "https://static3.depositphotos.com/1000434/268/i/450/depositphotos_2683262-stock-photo-moon.jpg");



/*  Procedure para deletar uma postagem  */

DELIMITER $$
CREATE PROCEDURE spDeletarPostagem(idDeletar INT)
BEGIN
	DELETE FROM TbPost WHERE id = idDeletar;
END $$
DELIMITER ;

#CALL spDeletarPostagem(1);