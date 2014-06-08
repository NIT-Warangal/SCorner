---
--- Database  Name : SCorner
---

-- Login Table.
-- Roles
-- 1. Admin
-- 2. Student
-- 3. Professor
-- 4. Moderator
CREATE TABLE IF NOT EXISTS `Login` (
  `Sno` int NOT NULL AUTO_INCREMENT,
  `RollNo` text NOT NULL,
  `UserName` text NOT NULL,
  `Password` text NOT NULL,
  `Role` int(11) NOT NULL,
  PRIMARY KEY (SNo)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Standard Login values for testing different environments.

INSERT INTO Login VALUES (1,'12345','root',MD5('root'),1);
INSERT INTO Login VALUES (2,'67890','studentroot',MD5('studentroot'),2);
INSERT INTO Login VALUES (3,'34567','profroot',MD5('profroot'),3);
INSERT INTO Login VALUES (4,'24689','modroot',MD5('modroot'),4);

-- Short Anonymous Posts. Used for ranting about problems.

CREATE TABLE IF NOT EXISTS `AnonymousPosts` (
	`Date` datetime NOT NULL,
	`PostContent` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

