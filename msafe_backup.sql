-- MySQL dump 10.13  Distrib 8.0.35, for Win64 (x86_64)
--
-- Host: localhost    Database: msafe
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `msafe`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `msafe` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `msafe`;

--
-- Table structure for table `lessonslearnt`
--

DROP TABLE IF EXISTS `lessonslearnt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lessonslearnt` (
  `Title` varchar(255) NOT NULL,
  `Posted_On` datetime NOT NULL,
  `Posted_By` varchar(50) NOT NULL,
  `File_Name` varchar(255) NOT NULL,
  `Views` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lessonslearnt`
--

LOCK TABLES `lessonslearnt` WRITE;
/*!40000 ALTER TABLE `lessonslearnt` DISABLE KEYS */;
INSERT INTO `lessonslearnt` VALUES ('Lessons Learnt: Improper usage of Safety Google','2020-06-02 07:00:00','Rohan Mishra','Improper_Usage.pdf',21),('Lessons Learnt: Unauthorized Forklift Operation','2020-06-02 07:00:00','Rohan Mishra','Unauthorized_Forklift.pdf',30),('Lessons Learnt: Improper usage of Safety Google','2020-06-03 07:00:00','Alice Johnson','Improper_Usage.pdf',22),('Lessons Learnt: Unauthorized Forklift Operation','2020-06-03 07:00:00','John Doe','Unauthorized_Forklift.pdf',31),('Lessons Learnt: Improper usage of Safety Google','2020-06-04 07:00:00','Jane Smith','Improper_Usage.pdf',23),('Lessons Learnt: Unauthorized Forklift Operation','2020-06-04 07:00:00','Emily Davis','Unauthorized_Forklift.pdf',32),('Lessons Learnt: Improper usage of Safety Google','2020-06-05 07:00:00','Michael Brown','Improper_Usage.pdf',24),('Lessons Learnt: Unauthorized Forklift Operation','2020-06-05 07:00:00','David Wilson','Unauthorized_Forklift.pdf',33),('Lessons Learnt: Improper usage of Safety Google','2020-06-06 07:00:00','Emma Thompson','Improper_Usage.pdf',25),('Lessons Learnt: Unauthorized Forklift Operation','2020-06-06 07:00:00','Oliver Martinez','Unauthorized_Forklift.pdf',34),('Lessons Learnt: Improper usage of Safety Google','2020-06-07 07:00:00','Sophia Lopez','Improper_Usage.pdf',26),('Lessons Learnt: Unauthorized Forklift Operation','2020-06-07 07:00:00','James Taylor','Unauthorized_Forklift.pdf',35),('Lessons Learnt: Improper usage of Safety Google','2020-06-08 07:00:00','Mia Anderson','Improper_Usage.pdf',27),('Lessons Learnt: Unauthorized Forklift Operation','2020-06-08 07:00:00','Benjamin Moore','Unauthorized_Forklift.pdf',36),('Lessons Learnt: Improper usage of Safety Google','2020-06-09 07:00:00','Charlotte Thomas','Improper_Usage.pdf',28),('Lessons Learnt: Unauthorized Forklift Operation','2020-06-09 07:00:00','Henry Martinez','Unauthorized_Forklift.pdf',37),('Lessons Learnt: Improper usage of Safety Google','2020-06-10 07:00:00','Amelia White','Improper_Usage.pdf',29),('Lessons Learnt: Unauthorized Forklift Operation','2020-06-10 07:00:00','Lucas Harris','Unauthorized_Forklift.pdf',38),('Lessons Learnt: Improper usage of Safety Google','2020-06-11 07:00:00','Evelyn Walker','Improper_Usage.pdf',30),('Lessons Learnt: Unauthorized Forklift Operation','2020-06-11 07:00:00','Alexander Young','Unauthorized_Forklift.pdf',39),('Lessons Learnt: Improper usage of Safety Google','2020-06-12 07:00:00','Harper Scott','Improper_Usage.pdf',31),('Lessons Learnt: Unauthorized Forklift Operation','2020-06-12 07:00:00','Sebastian King','Unauthorized_Forklift.pdf',40),('Lessons Learnt: Improper usage of Safety Google','2020-06-13 07:00:00','Isabella Green','Improper_Usage.pdf',32),('Lessons Learnt: Unauthorized Forklift Operation','2020-06-13 07:00:00','Jack Lee','Unauthorized_Forklift.pdf',41),('Lessons Learnt: Improper usage of Safety Google','2020-06-14 07:00:00','Ava Brown','Improper_Usage.pdf',33);
/*!40000 ALTER TABLE `lessonslearnt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `Notification_Title` varchar(255) NOT NULL,
  `Sent_To` varchar(50) NOT NULL,
  `Type` varchar(50) NOT NULL,
  `Sent_By` varchar(50) NOT NULL,
  `Time_Sent` datetime NOT NULL,
  `Attachment` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES ('nulla porttitor massa id neque aliquam vestibulum morbi blandit','Administration Team','Reminder','Rohan Mishra','2020-06-02 07:00:00','1 Attachment'),('ultrices dui sapien eget mi proin sed libero enim','Operations Team','Alerts','Rashi Tidke','2020-05-24 17:00:00','0 Attachment'),('nulla porttitor massa id neque aliquam vestibulum morbi blandit','Administration Team','Reminder','Rohan Mishra','2020-06-03 07:00:00','1 Attachment'),('ultrices dui sapien eget mi proin sed libero enim','Operations Team','Alerts','Rashi Tidke','2020-05-25 17:00:00','0 Attachment'),('nulla porttitor massa id neque aliquam vestibulum morbi blandit','Administration Team','Reminder','Rohan Mishra','2020-06-04 07:00:00','1 Attachment'),('ultrices dui sapien eget mi proin sed libero enim','Operations Team','Alerts','Rashi Tidke','2020-05-26 17:00:00','0 Attachment'),('nulla porttitor massa id neque aliquam vestibulum morbi blandit','Administration Team','Reminder','Rohan Mishra','2020-06-05 07:00:00','1 Attachment'),('ultrices dui sapien eget mi proin sed libero enim','Operations Team','Alerts','Rashi Tidke','2020-05-27 17:00:00','0 Attachment'),('nulla porttitor massa id neque aliquam vestibulum morbi blandit','Administration Team','Reminder','Rohan Mishra','2020-06-06 07:00:00','1 Attachment'),('ultrices dui sapien eget mi proin sed libero enim','Operations Team','Alerts','Rashi Tidke','2020-05-28 17:00:00','0 Attachment'),('nulla porttitor massa id neque aliquam vestibulum morbi blandit','Administration Team','Reminder','Rohan Mishra','2020-06-07 07:00:00','1 Attachment'),('ultrices dui sapien eget mi proin sed libero enim','Operations Team','Alerts','Rashi Tidke','2020-05-29 17:00:00','0 Attachment'),('nulla porttitor massa id neque aliquam vestibulum morbi blandit','Administration Team','Reminder','Rohan Mishra','2020-06-08 07:00:00','1 Attachment'),('ultrices dui sapien eget mi proin sed libero enim','Operations Team','Alerts','Rashi Tidke','2020-05-30 17:00:00','0 Attachment'),('nulla porttitor massa id neque aliquam vestibulum morbi blandit','Administration Team','Reminder','Rohan Mishra','2020-06-09 07:00:00','1 Attachment'),('ultrices dui sapien eget mi proin sed libero enim','Operations Team','Alerts','Rashi Tidke','2020-05-31 17:00:00','0 Attachment'),('nulla porttitor massa id neque aliquam vestibulum morbi blandit','Administration Team','Reminder','Rohan Mishra','2020-06-10 07:00:00','1 Attachment'),('ultrices dui sapien eget mi proin sed libero enim','Operations Team','Alerts','Rashi Tidke','2020-06-01 17:00:00','0 Attachment'),('nulla porttitor massa id neque aliquam vestibulum morbi blandit','Administration Team','Reminder','Rohan Mishra','2020-06-11 07:00:00','1 Attachment'),('ultrices dui sapien eget mi proin sed libero enim','Operations Team','Alerts','Rashi Tidke','2020-06-02 17:00:00','0 Attachment'),('nulla porttitor massa id neque aliquam vestibulum morbi blandit','Administration Team','Reminder','Rohan Mishra','2020-06-12 07:00:00','1 Attachment'),('ultrices dui sapien eget mi proin sed libero enim','Operations Team','Alerts','Rashi Tidke','2020-06-03 17:00:00','0 Attachment'),('nulla porttitor massa id neque aliquam vestibulum morbi blandit','Administration Team','Reminder','Rohan Mishra','2020-06-13 07:00:00','1 Attachment'),('ultrices dui sapien eget mi proin sed libero enim','Operations Team','Alerts','Rashi Tidke','2020-06-04 17:00:00','0 Attachment'),('nulla porttitor massa id neque aliquam vestibulum morbi blandit','Administration Team','Reminder','Rohan Mishra','2020-06-14 07:00:00','1 Attachment');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proactiveassist`
--

DROP TABLE IF EXISTS `proactiveassist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proactiveassist` (
  `NM_Number` varchar(255) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `Severity` varchar(50) NOT NULL,
  `Location` varchar(255) NOT NULL,
  `Audited_On` date NOT NULL,
  `Reported_By` varchar(255) NOT NULL,
  PRIMARY KEY (`NM_Number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proactiveassist`
--

LOCK TABLES `proactiveassist` WRITE;
/*!40000 ALTER TABLE `proactiveassist` DISABLE KEYS */;
INSERT INTO `proactiveassist` VALUES ('NM04062020008','Injury','Normal','Assembly Point','2020-04-07','Vishwas Gulavani'),('NM04062020009','Chemical Spill','Severe','Assembly Point','2020-04-07','Emily Davis'),('NM04062020010','Chemical Spill','Normal','Warehouse','2020-04-07','Mia Anderson'),('NM04072020001','Injury','Normal','Engine Shop','2020-04-07','Vishwas Gulavani'),('NM04072020002','Injury','Critical','Warehouse','2020-04-07','John Doe'),('NM04072020003','Fire','Severe','Main Office','2020-04-07','Jane Smith'),('NM04072020004','Equipment Failure','Normal','Loading Dock','2020-04-07','Alice Johnson'),('NM04072020005','Injury','Minor','Engine Shop','2020-04-07','Michael Brown'),('NM04072020006','Injury','Normal','Warehouse','2020-04-07','David Wilson'),('NM04072020007','Injury','Critical','Main Office','2020-04-07','Emma Thompson'),('NM04072020008','Fire','Normal','Loading Dock','2020-04-07','Oliver Martinez'),('NM04072020009','Injury','Minor','Engine Shop','2020-04-07','Sophia Lopez'),('NM04072020010','Equipment Failure','Severe','Assembly Point','2020-04-07','James Taylor'),('NM04072020011','Injury','Critical','Main Office','2020-04-07','Benjamin Moore'),('NM04072020012','Fire','Normal','Loading Dock','2020-04-07','Charlotte Thomas'),('NM04072020013','Injury','Minor','Engine Shop','2020-04-07','Henry Martinez'),('NM04072020014','Equipment Failure','Severe','Assembly Point','2020-04-07','Amelia White'),('NM04072020015','Chemical Spill','Normal','Warehouse','2020-04-07','Lucas Harris'),('NM04072020016','Injury','Critical','Main Office','2020-04-07','Evelyn Walker'),('NM04072020017','Fire','Normal','Loading Dock','2020-04-07','Alexander Young'),('NM04072020018','Injury','Minor','Engine Shop','2020-04-07','Harper Scott'),('NM04072020019','Equipment Failure','Severe','Assembly Point','2020-04-07','Sebastian King'),('NM04072020020','Chemical Spill','Normal','Warehouse','2020-04-07','Isabella Green'),('NM04072020021','Injury','Critical','Main Office','2020-04-07','Jack Lee'),('NM04072020022','Fire','Normal','Loading Dock','2020-04-07','Ava Brown');
/*!40000 ALTER TABLE `proactiveassist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `safetyaudit`
--

DROP TABLE IF EXISTS `safetyaudit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `safetyaudit` (
  `SAR_Number` varchar(255) NOT NULL,
  `Topic` varchar(255) NOT NULL,
  `Type_of_Audit` varchar(50) DEFAULT NULL,
  `Audited_on` datetime NOT NULL,
  `Audited_By` varchar(50) NOT NULL,
  `Observations` int NOT NULL,
  PRIMARY KEY (`SAR_Number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `safetyaudit`
--

LOCK TABLES `safetyaudit` WRITE;
/*!40000 ALTER TABLE `safetyaudit` DISABLE KEYS */;
INSERT INTO `safetyaudit` VALUES ('SAR29062020001','Daily Shutdown Safety Report','New Audit','2020-06-29 10:45:00','Vishwas Gulavani',3),('SAR29062020002','Assess the risk presented','New Audit','2020-06-02 07:00:00','Rohan Mishra',2),('SAR29062020003','Daily Shutdown Safety Report','Follow-Up Audit','2020-06-24 10:45:00','Alice Johnson',4),('SAR29062020004','Assess the risk presented','New Audit','2020-06-03 08:00:00','John Doe',3),('SAR29062020005','Daily Shutdown Safety Report','New Audit','2020-06-25 09:00:00','Jane Smith',5),('SAR29062020006','Assess the risk presented','New Audit','2020-06-04 10:00:00','Emily Davis',1),('SAR29062020007','Daily Shutdown Safety Report','Follow-Up Audit','2020-06-26 11:00:00','Michael Brown',2),('SAR29062020008','Assess the risk presented','New Audit','2020-06-05 12:00:00','David Wilson',4),('SAR29062020009','Daily Shutdown Safety Report','New Audit','2020-06-27 13:00:00','Emma Thompson',3),('SAR29062020010','Assess the risk presented','Follow-Up Audit','2020-06-06 14:00:00','Oliver Martinez',5),('SAR29062020011','Daily Shutdown Safety Report','New Audit','2020-06-28 15:00:00','Sophia Lopez',2),('SAR29062020012','Assess the risk presented','New Audit','2020-06-07 16:00:00','James Taylor',1),('SAR29062020013','Daily Shutdown Safety Report','Follow-Up Audit','2020-06-29 17:00:00','Mia Anderson',3),('SAR29062020014','Assess the risk presented','New Audit','2020-06-08 18:00:00','Benjamin Moore',4),('SAR29062020015','Daily Shutdown Safety Report','New Audit','2020-06-30 19:00:00','Charlotte Thomas',2),('SAR29062020016','Assess the risk presented','Follow-Up Audit','2020-06-09 20:00:00','Henry Martinez',5),('SAR29062020017','Daily Shutdown Safety Report','New Audit','2020-06-10 21:00:00','Amelia White',1),('SAR29062020018','Assess the risk presented','New Audit','2020-06-11 22:00:00','Lucas Harris',4),('SAR29062020019','Daily Shutdown Safety Report','Follow-Up Audit','2020-06-12 23:00:00','Evelyn Walker',3),('SAR29062020020','Assess the risk presented','New Audit','2020-06-13 07:00:00','Alexander Young',2),('SAR29062020021','Daily Shutdown Safety Report','New Audit','2020-06-14 08:00:00','Harper Scott',5),('SAR29062020022','Assess the risk presented','Follow-Up Audit','2020-06-15 09:00:00','Sebastian King',1),('SAR29062020023','Daily Shutdown Safety Report','New Audit','2020-06-16 10:00:00','Isabella Green',4),('SAR29062020024','Assess the risk presented','New Audit','2020-06-17 11:00:00','Jack Lee',3),('SAR29062020025','Daily Shutdown Safety Report','Follow-Up Audit','2020-06-18 12:00:00','Ava Brown',2);
/*!40000 ALTER TABLE `safetyaudit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `safetyindeximprovement`
--

DROP TABLE IF EXISTS `safetyindeximprovement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `safetyindeximprovement` (
  `SIIC_Number` varchar(255) NOT NULL,
  `Department` varchar(50) NOT NULL,
  `Line` varchar(50) NOT NULL,
  `datetime` datetime NOT NULL,
  `Reported_By` varchar(50) NOT NULL,
  `Status` varchar(50) NOT NULL,
  PRIMARY KEY (`SIIC_Number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `safetyindeximprovement`
--

LOCK TABLES `safetyindeximprovement` WRITE;
/*!40000 ALTER TABLE `safetyindeximprovement` DISABLE KEYS */;
INSERT INTO `safetyindeximprovement` VALUES ('SIIC03072020001','Engine Shop','Chasis Pre Assembly','2020-07-04 10:45:00','Vishwas Gulavani','60% COMPLETE'),('SIIC03072020002','Assembly Shop','Engine Dressing','2020-07-04 10:45:00','Vishwas Gulavani','100% COMPLETE'),('SIIC03072020003','Engine Shop','Chasis Pre Assembly','2020-07-05 10:45:00','John Doe','SUBMITTED'),('SIIC03072020004','Assembly Shop','Engine Dressing','2020-07-05 11:00:00','Jane Smith','SUBMITTED'),('SIIC03072020005','Engine Shop','Chasis Pre Assembly','2020-07-06 11:15:00','Alice Johnson','60% COMPLETE'),('SIIC03072020006','Assembly Shop','Engine Dressing','2020-07-06 11:30:00','Michael Brown','100% COMPLETE'),('SIIC03072020007','Engine Shop','Chasis Pre Assembly','2020-07-07 11:45:00','David Wilson','SUBMITTED'),('SIIC03072020008','Assembly Shop','Engine Dressing','2020-07-07 12:00:00','Emily Davis','60% COMPLETE'),('SIIC03072020009','Engine Shop','Chasis Pre Assembly','2020-07-08 12:15:00','Emma Thompson','100% COMPLETE'),('SIIC03072020010','Assembly Shop','Engine Dressing','2020-07-08 12:30:00','Oliver Martinez','SUBMITTED'),('SIIC03072020011','Engine Shop','Chasis Pre Assembly','2020-07-09 12:45:00','Sophia Lopez','60% COMPLETE'),('SIIC03072020012','Assembly Shop','Engine Dressing','2020-07-09 13:00:00','James Taylor','100% COMPLETE'),('SIIC03072020013','Engine Shop','Chasis Pre Assembly','2020-07-10 13:15:00','Mia Anderson','SUBMITTED'),('SIIC03072020014','Assembly Shop','Engine Dressing','2020-07-10 13:30:00','Benjamin Moore','60% COMPLETE'),('SIIC03072020015','Engine Shop','Chasis Pre Assembly','2020-07-11 13:45:00','Charlotte Thomas','100% COMPLETE'),('SIIC03072020016','Assembly Shop','Engine Dressing','2020-07-11 14:00:00','Henry Martinez','SUBMITTED'),('SIIC03072020017','Engine Shop','Chasis Pre Assembly','2020-07-12 14:15:00','Amelia White','60% COMPLETE'),('SIIC03072020018','Assembly Shop','Engine Dressing','2020-07-12 14:30:00','Lucas Harris','100% COMPLETE'),('SIIC03072020019','Engine Shop','Chasis Pre Assembly','2020-07-13 14:45:00','Evelyn Walker','SUBMITTED'),('SIIC03072020020','Assembly Shop','Engine Dressing','2020-07-13 15:00:00','Alexander Young','60% COMPLETE'),('SIIC03072020021','Engine Shop','Chasis Pre Assembly','2020-07-14 15:15:00','Harper Scott','100% COMPLETE'),('SIIC03072020022','Assembly Shop','Engine Dressing','2020-07-14 15:30:00','Sebastian King','SUBMITTED'),('SIIC03072020023','Engine Shop','Chasis Pre Assembly','2020-07-15 15:45:00','Isabella Green','60% COMPLETE'),('SIIC03072020024','Assembly Shop','Engine Dressing','2020-07-15 16:00:00','Jack Lee','100% COMPLETE'),('SIIC03072020025','Engine Shop','Chasis Pre Assembly','2020-07-16 16:15:00','Ava Brown','SUBMITTED');
/*!40000 ALTER TABLE `safetyindeximprovement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `safetypassport`
--

DROP TABLE IF EXISTS `safetypassport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `safetypassport` (
  `EmployeeID` int NOT NULL,
  `FullName` varchar(255) DEFAULT NULL,
  `CompanyName` varchar(255) DEFAULT NULL,
  `ValidFrom` datetime DEFAULT NULL,
  `ValidTill` datetime DEFAULT NULL,
  `EmployeePermit` varchar(50) DEFAULT NULL,
  `SafetyTraining` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`EmployeeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `safetypassport`
--

LOCK TABLES `safetypassport` WRITE;
/*!40000 ALTER TABLE `safetypassport` DISABLE KEYS */;
INSERT INTO `safetypassport` VALUES (1001,'John Doe','ABC Corp','2024-01-01 08:00:00','2024-06-01 17:00:00','Active','Yes'),(1002,'Jane Smith','XYZ Inc','2024-02-01 08:00:00','2024-07-01 17:00:00','Active','No'),(1003,'Emily Johnson','HighTech Solutions','2024-03-01 08:00:00','2024-08-01 17:00:00','Inactive','Yes'),(1004,'Michael Brown','FastTrack','2024-01-15 08:00:00','2024-07-15 17:00:00','Active','Yes'),(1005,'Jessica Garcia','NewAge Tech','2024-04-01 08:00:00','2024-10-01 17:00:00','Inactive','No'),(1006,'Robert Davis','EcoSystems','2024-05-01 08:00:00','2024-11-01 17:00:00','Active','Yes'),(1007,'Sarah Miller','GreenTech Innovations','2024-06-01 08:00:00','2024-12-01 17:00:00','Active','No'),(1008,'James Wilson','TechGiant','2024-07-01 08:00:00','2025-01-01 17:00:00','Inactive','Yes'),(1009,'Patricia Taylor','Bright Future Tech','2024-08-01 08:00:00','2025-02-01 17:00:00','Active','Yes'),(1010,'David Anderson','Innovatech','2024-09-01 08:00:00','2025-03-01 17:00:00','Inactive','No'),(20011667,'Rajesh Patil','G4S Security','2023-08-20 07:00:00','2023-08-20 18:00:00','Active','Yes'),(20011668,'Rajesh Patil','G4S Security','2023-08-21 07:00:00','2023-08-21 18:00:00','Inactive','No'),(20011669,'Rajesh Patil','G4S Security','2023-08-22 07:00:00','2023-08-22 18:00:00','Active','Yes'),(20011670,'Rajesh Patil','G4S Security','2023-08-23 07:00:00','2023-08-23 18:00:00','Inactive','No'),(20011671,'Rajesh Patil','G4S Security','2023-08-24 07:00:00','2023-08-24 18:00:00','Active','Yes'),(20011672,'Ramesh Singrolia','Bharat Force Services','2023-08-25 07:00:00','2023-08-25 18:00:00','Inactive','No'),(20011673,'Ramesh Singrolia','Bharat Force Services','2023-08-26 07:00:00','2023-08-26 18:00:00','Active','Yes'),(20011674,'Ramesh Singrolia','Bharat Force Services','2023-08-27 07:00:00','2023-08-27 18:00:00','Inactive','No'),(20011675,'Ramesh Singrolia','Bharat Force Services','2023-08-28 07:00:00','2023-08-28 18:00:00','Active','Yes'),(20011676,'Ramesh Singrolia','Bharat Force Services','2023-08-29 07:00:00','2023-08-29 18:00:00','Inactive','No');
/*!40000 ALTER TABLE `safetypassport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `Employee_Name` varchar(50) NOT NULL,
  `Employee_Id` int NOT NULL,
  `Designation` varchar(50) NOT NULL,
  `Email_Id` varchar(255) NOT NULL,
  `Contact_No` bigint NOT NULL,
  `Password` varchar(255) NOT NULL,
  PRIMARY KEY (`Employee_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('Jeevan Raj Singh',65425,'Sr. Operator','jeevan.singh@skoda-vw.com',9865327412,''),('Amit Verma',123456,'Technician','amit.verma@skoda-vw.com',9876543210,''),('Anand Kulkarni',123987,'Project Manager','anand.kulkarni@skoda-vw.com',9987654321,''),('Vishwas Gulvani',215463,'Chief Manager Safety','vishwas.gulvani@skoda-vw.com',8954632145,''),('Priya Mehta',234567,'Supervisor','priya.mehta@skoda-vw.com',9765432109,''),('Pooja Deshmukh',234876,'Lead Engineer','pooja.deshmukh@skoda-vw.com',9876543219,''),('Neha Sharma',345678,'HR Manager','neha.sharma@skoda-vw.com',9845632145,''),('Sunil Yadav',345679,'Safety Officer','sunil.yadav@skoda-vw.com',9654321098,''),('Rakesh Nair',345765,'Planner','rakesh.nair@skoda-vw.com',9765432108,''),('Sonal Gupta',456654,'Designer','sonal.gupta@skoda-vw.com',9654321097,''),('Anjali Patil',456789,'Analyst','anjali.patil@skoda-vw.com',9543210987,''),('Manoj Raghav',521456,'Manager','manoj.raghav@skoda-vw.com',8954632156,''),('Ajay Thakur',567543,'Architect','ajay.thakur@skoda-vw.com',9543210986,''),('Karan Gupta',567890,'Consultant','karan.gupta@skoda-vw.com',9432109876,''),('Rishi Baghel',654213,'Operator','rishi.baghel@skoda-vw.com',9852637458,''),('Meera Pandey',678432,'Surveyor','meera.pandey@skoda-vw.com',9432109875,''),('Nitin Bansal',678901,'Specialist','nitin.bansal@skoda-vw.com',9321098765,''),('Rita Singh',789012,'Coordinator','rita.singh@skoda-vw.com',9210987654,''),('Suresh Chawla',789321,'Mechanic','suresh.chawla@skoda-vw.com',9321098764,''),('Rajesh Kumar',876543,'Engineer','rajesh.kumar@skoda-vw.com',9985632145,''),('Vivek Mishra',890123,'Assistant Manager','vivek.mishra@skoda-vw.com',9109876543,''),('Geeta Kapoor',890210,'Operator','geeta.kapoor@skoda-vw.com',9210987653,''),('Rohit Sharma',901109,'Technician','rohit.sharma@skoda-vw.com',9109876542,''),('Swati Jain',901234,'Executive','swati.jain@skoda-vw.com',9098765432,''),('Simran Kaur',912098,'Engineer','simran.kaur@skoda-vw.com',9098765431,''),('Aditya Chavan',987654,'Engineer','chavanadityawork@gmail.com',9998887776,'ccalpha');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('chavanadityawork@gmail.com','ccalpha','2024-04-16 11:41:49');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'msafe'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-27 15:36:06
