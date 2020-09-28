/*
user table，usrinfo，存微信基本个人信息
病人 table，包含 个人基本信息
筛查症状 table, 包含所有症状项目，以及最终分值
会诊单，appointment页面里的所有信息，
病人 table 对于会诊单，口罩单，一对多
口罩订单，包含口罩单的所有个人基本信息
病人单要有user table的foreign key
*/



create database coronavirus;

use coronavirus;

create table Users
(
    OpenID int,
    UnionID int,

    UserID int,
    WechatID varchar(25),
    Phone varchar(25),
    IDType varchar(25),
    IDNum varchar(25),
    Gender varchar(25),
    Addr varchar(50),
    Unit varchar(25),
    Department varchar(25),
    primary key(UserID)
);

create table Conditions
(
    ConditionID int,
    UserID int,
    SponAsthma boolean,
    InterAsthma boolean,
    Bronchi boolean,
    BreathShortness boolean,
    BreathFreq boolean,
    DryCough boolean,
    BreathDiff boolean,
    AsthmaSleep boolean,
    Anorexia boolean,
    Temprature float,
    HighTempDate timestamp,
    IfHubei boolean,
    HubeiDate timestamp,
    Result varchar(25),
    primary key (ConditionID),
    foreign key (UserID) references Users(UserID)
);

create table Patients
(
    PatientID int,
    PatientName varchar(25),
    UserID int,
    WechatID varchar(25),
    Phone varchar(25),
    IDType varchar(25),
    IDNum varchar(25),
    Gender varchar(25),
    Addr varchar(50),
    Unit varchar(25),
    Department varchar(25),
    primary key (PatientID),
    foreign key (UserID) references Users(UserID)
);

create table Consultations
(
    ConsultID int,
    PatientID int,
    Department varchar(25),
    primary key (ConsultID),
    foreign key (PatientID) references Patients(PatientID)
);

create table MuskOrders
(
    OrderNumber int,
    PatientID int,
    Phone varchar(25),
    IDType varchar(25),
    IDNum varchar(25),
    Gender varchar(25),
    Addr varchar(50),
    Unit varchar(25),
    MuskType varchar(25),
    MuskQuant int,
    primary key (OrderNumber),
    foreign key (UserID) references Users(UserID)
);