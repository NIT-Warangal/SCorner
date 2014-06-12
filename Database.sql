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
-- Type 1 : Complaint
-- Type 2 : Request
-- Type 3 : Enhancement
-- Type 4 : Rant

CREATE TABLE IF NOT EXISTS `AnonymousPosts` (
  `Sno` int NOT NULL AUTO_INCREMENT,
	`Date` datetime NOT NULL,
	`PostContent` text NOT NULL,
	`Type` int NOT NULL,
  `LikeCount` int NOT NULL,
  `Name` text NOT NULL,
  PRIMARY KEY(Sno)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Sample Values for Anonymous Posts

INSERT INTO `AnonymousPosts` (`Date`, `PostContent`, `Type`,`LikeCount`,`Name`) VALUES
('2014-06-02 00:00:00', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam officiis distinctio similique consequuntur provident eveniet aliquid reprehenderit. Dignissimos, expedita, omnis? Rerum, itaque, alias mollitia omnis quos quas a tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, praesentium, a, velit excepturi saepe fuga vel unde labore quae reiciendis enim sit quod nesciunt. Esse sed corporis quam eos ratione!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, earum, sit, repudiandae nostrum itaque quia maiores vel amet placeat tenetur voluptatem eaque odit impedit voluptate nulla! Blanditiis officiis atque architecto?', 1,0,"Anonymous"),
('2014-06-02 00:00:00', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam officiis distinctio similique consequuntur provident eveniet aliquid reprehenderit. Dignissimos, expedita, omnis? Rerum, itaque, alias mollitia omnis quos quas a tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, praesentium, a, velit excepturi saepe fuga vel unde labore quae reiciendis enim sit quod nesciunt. Esse sed corporis quam eos ratione!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, earum, sit, repudiandae nostrum itaque quia maiores vel amet placeat tenetur voluptatem eaque odit impedit voluptate nulla! Blanditiis officiis atque architecto?', 1,0,"Anonymous"),
('2014-06-25 00:00:00', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam officiis distinctio similique consequuntur provident eveniet aliquid reprehenderit. Dignissimos, expedita, omnis? Rerum, itaque, alias mollitia omnis quos quas a tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, praesentium, a, velit excepturi saepe fuga vel unde labore quae reiciendis enim sit quod nesciunt. Esse sed corporis quam eos ratione!', 2,0,"Anonymous"),
('2014-06-27 00:00:00', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam officiis distinctio similique consequuntur provident eveniet aliquid reprehenderit. Dignissimos, expedita, omnis? Rerum, itaque, alias mollitia omnis quos quas a tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, praesentium, a, velit excepturi saepe fuga vel unde labore quae reiciendis enim sit quod nesciunt. Esse sed corporis quam eos ratione!', 3,0,"Anonymous"),
('2014-06-20 00:00:00', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam officiis distinctio similique consequuntur provident eveniet aliquid reprehenderit. Dignissimos, expedita, omnis? Rerum, itaque, alias mollitia omnis quos quas a tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, praesentium, a, velit excepturi saepe fuga vel unde labore quae reiciendis enim sit quod nesciunt. Esse sed corporis quam eos ratione!', 4,0,"Anonymous");

--
-- Table structure for table `store`
--
CREATE TABLE IF NOT EXISTS `store` (
  `UserID` text NOT NULL,
  `Name` text NOT NULL,
  `CategoryID` text NOT NULL,
  `MRP` double(10,0) NOT NULL,
  `DealPrice` double(10,0) NOT NULL,
  `Available` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`UserID`, `Name`, `CategoryID`, `MRP`, `DealPrice`, `Available`) VALUES
('12345', 'Chair', '2', 2300, 1800, 1),
('12345', 'Table', '2', 1300, 1000, 1),
('12345', 'Fan', '1', 300, 180, 1),
('12345', 'Cycle', '3', 4300, 2800, 1);

-- --------------------------------------------------------

--
-- Table structure for table `store_categories`
--

CREATE TABLE IF NOT EXISTS `store_categories` (
  `CategoryID` int(11) NOT NULL,
  `CategoryName` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `store_categories`
--

INSERT INTO `store_categories` (`CategoryID`, `CategoryName`) VALUES
(1, 'Electronics'),
(2, 'Furniture'),
(3, 'Transport');
