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
  `Email` text NOT NULL,
  PRIMARY KEY (SNo)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `Profile` (
  `Sno` int NOT NULL AUTO_INCREMENT,
  `RollNo` text NOT NULL,
  `Name` text NOT NULL,
  `Phone number` text NOT NULL,
  `Year` int(11) NOT NULL,
  `Email` text NOT NULL,
  `Address` text NOT NULL,
  PRIMARY KEY (SNo)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Standard Login values for testing different environments.

INSERT INTO Login VALUES (1,'12345','root',MD5('root'),1,'root@toor.com');
INSERT INTO Login VALUES (2,'67890','studentroot',MD5('studentroot'),2,'studentroot@toor.com');
INSERT INTO Login VALUES (3,'34567','profroot',MD5('profroot'),3,'profroot@toor.com');
INSERT INTO Login VALUES (4,'24689','modroot',MD5('modroot'),4,'modroot@toor.com');

insert into Profile values(1,'12345','Someone','999999999',2,'root@toor.com','blablabla blabla bla blalbalbalballalbla');
insert into Profile values(2,'67890','Someone2','888888888',3,'studentroot@toor.com','blablabla blabla bla blalbalbalballalbla');
insert into Profile values(3,'34567','Someone3','777777777',1,'profroot@toor.com','blablabla blabla bla blalbalbalballalbla');
insert into Profile values(4,'24689','Someone4','666666666',3,'modroot@toor.com','blablabla blabla bla blalbalbalballalbla');
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


CREATE TABLE IF NOT EXISTS `store` (
  `itemID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` text NOT NULL,
  `Name` text NOT NULL,
  `ItemDescription` text NOT NULL,
  `CategoryID` text NOT NULL,
  `Quantity` int(11) NOT NULL,
  `MRP` double(10,0) NOT NULL,
  `DealPrice` double(10,0) NOT NULL,
  `Available` int(11) NOT NULL,
  PRIMARY KEY (`itemID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`itemID`, `UserID`, `Name`, `ItemDescription`, `CategoryID`, `Quantity`, `MRP`, `DealPrice`, `Available`) VALUES
(1, '1', 'Chair', 'Loren ipsum Dolor chetos lays banana buga buga bugaaa', '2', 0, 2300, 1800, 1),
(2, '1', 'Table', 'Loren ipsum Dolor chetos lays banana buga buga bugaaa', '2', 0, 1300, 1000, 1),
(3, '1', 'Fan', 'Loren ipsum Dolor chetos lays banana buga buga bugaaa', '1', 0, 300, 180, 1),
(4, '1', 'Cycle', 'Loren ipsum Dolor chetos lays banana buga buga bugaaa', '3', 0, 4300, 2800, 1);

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
------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `like_history` (
  `sno` int(11) NOT NULL,
  `username` text NOT NULL,
  `activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


--
-- Table structure for table `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `commentID` int(11) NOT NULL AUTO_INCREMENT,
  `sno` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `userID` int(11) NOT NULL,
  `username` text NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`commentID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Keeping log track of user logins
--

CREATE TABLE IF NOT EXISTS `USAGE_HISTORY`(
  `IP_ADDRESS` text NOT NULL,
  `LoginID` text NOT NULL,
  `LoginTime` datetime NOT NULL,
  `LogoutTime` datetime
)
