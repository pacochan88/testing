/*
Navicat MySQL Data Transfer

Source Server         : task
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mission

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-05-18 16:21:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list_data
-- ----------------------------
DROP TABLE IF EXISTS `list_data`;
CREATE TABLE `list_data` (
  `﻿disuse_id` varchar(255) DEFAULT NULL,
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `bigImg` varchar(255) DEFAULT NULL,
  `backupBigImg` varchar(255) DEFAULT NULL,
  `goodsName` varchar(255) DEFAULT NULL,
  `price` varchar(11) DEFAULT NULL,
  `marketPrice` varchar(11) DEFAULT NULL,
  `salesVolume` varchar(11) DEFAULT NULL,
  `comment` varchar(11) DEFAULT NULL,
  `merchant` varchar(255) DEFAULT NULL,
  `popularity` varchar(11) DEFAULT NULL,
  `collection` varchar(11) DEFAULT NULL,
  `miniImg1` varchar(255) DEFAULT NULL,
  `miniImg2` varchar(255) DEFAULT NULL,
  `miniImg3` varchar(255) DEFAULT NULL,
  `miniImg4` varchar(255) DEFAULT NULL,
  `miniImg5` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=138 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list_data
-- ----------------------------
INSERT INTO `list_data` VALUES (null, '1', '../img/img1-1.jpg', 'img/img1-1.jpg', '冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑黄色 S', '120', '196', '4', '92', '好男孩潮品铺', '64', '109', '../img/img1-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '2', '../img/img2-1.jpg', 'img/img2-1.jpg', '冬季胖子棉衣男士灯芯绒加厚棉服韩版个性外套加肥大码潮男装棉袄 蓝色 S', '78', '387', '41', '80', '好男孩潮品铺', '39', '77', '../img/img2-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '3', '../img/img3-1.jpg', 'img/img3-1.jpg', '冬季情侣连帽面包服男士帅气短款棉衣韩版休闲棉袄潮男装加厚外套 红色 S', '122', '161', '38', '73', '好男孩潮品铺', '10', '88', '../img/img3-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '4', '../img/img4-1.jpg', 'img/img4-1.jpg', '冬季情侣连帽面包服男士帅气短款棉衣韩版宽松加厚棉袄潮男装外套 军绿色 S', '31', '390', '5', '78', '好男孩潮品铺', '21', '135', '../img/img4-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '5', '../img/img5-1.jpg', 'img/img5-1.jpg', '潮男秋冬季裤子男韩版潮流秋季加绒运动男士休闲裤宽松潮牌束脚工装裤 浅灰色 M', '92', '205', '72', '27', '潮男搭配师', '11', '115', '../img/img5-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '6', '../img/img6-1.jpg', 'img/img6-1.jpg', '裤子男韩版潮流秋冬季运动裤男士加绒宽松休闲束脚长裤潮牌工装裤 黑色 M', '86', '296', '62', '31', '潮男搭配师', '113', '114', '../img/img6-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '7', '../img/img7-1.jpg', 'img/img7-1.jpg', '休闲裤男士裤子男冬季修身小脚韩版潮流秋冬款2017学生哈伦束脚裤 宝蓝 28', '96', '265', '26', '72', '顺兴男士潮流', '73', '94', '../img/img7-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '8', '../img/img8-1.jpg', 'img/img8-1.jpg', '2017秋季新款休闲裤男士加肥加大码束脚卫裤韩版青年小脚潮男裤子 黑色 M', '90', '360', '68', '44', '顺潮服装', '69', '103', '../img/img8-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '9', '../img/img9-1.jpg', 'img/img9-1.jpg', '薄款长袖卫衣长裤一套装青少年夏天外套运动衣服装男 白色 M', '97', '258', '40', '13', '原创潮服', '134', '25', '../img/img9-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '10', '../img/img10-1.jpg', 'img/img10-1.jpg', '青少年夏季韩版修身背心男士运动学生短袖套装男潮流无袖T恤夏装 黑色 M', '81', '221', '52', '53', '原创潮服', '66', '179', '../img/img10-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '11', '../img/img11-1.jpg', 'img/img11-1.jpg', '夏天两件套装矮个子清爽褶皱休闲运动短袖系带5分裤 军绿 S', '89', '251', '53', '42', '顺潮服装', '94', '155', '../img/img11-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '12', '../img/img12-1.jpg', 'img/img12-1.jpg', '夏季男士无袖运动睡衣套装休闲背心短裤纯棉夏天背心家居服大码薄 灰色 M', '75', '199', '52', '31', '潮衣格', '118', '174', '../img/img12-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '13', '../img/img13-1.jpg', 'img/img13-1.jpg', '2019春季新款小白鞋男韩版板鞋男士白鞋百搭休闲鞋夏季增高男鞋子 红色 36', '82', '346', '35', '20', '潮男公社', '22', '24', '../img/img13-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '14', '../img/img14-1.jpg', 'img/img14-1.jpg', '2019春季透气阿甘鞋男小白鞋男士休闲帆布板鞋韩版潮流男鞋子潮鞋 白黑 36', '52', '335', '19', '47', '潮男公社', '30', '134', '../img/img14-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '15', '../img/img15-1.jpg', 'img/img15-1.jpg', '2019春季新款小白鞋男士板鞋男韩版潮鞋休闲鞋百搭白鞋男鞋子夏季 白红 36', '108', '178', '27', '72', '潮男公社', '98', '42', '../img/img15-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '16', '../img/img16-1.jpg', 'img/img16-1.jpg', '2019春季新款小白鞋男鞋子韩版夏季板鞋男士百搭白鞋帆布休闲潮鞋 白色 36', '130', '260', '15', '66', '潮男公社', '15', '124', '../img/img16-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '17', '../img/img17-1.jpg', null, '潮男长袖T恤秋冬百搭彩色条纹高领打底衫宽松纯棉T恤男 粉色 M', '44', '359', '7', '90', '潮衣格', '106', '193', '../img/img17-1.jpg', '../img/img17-2.jpg', '../img/img17-3.jpg', '../img/img17-4.jpg', '../img/img17-5.jpg');
INSERT INTO `list_data` VALUES (null, '18', '../img/img18-1.jpg', null, '新款五分袖韩版潮流短袖T恤男士夏季宽松衣服学生体恤半截袖 白色 M', '126', '417', '12', '65', '潮衣格', '144', '141', '../img/img18-1.jpg', '../img/img18-2.jpg', '../img/img18-3.jpg', '../img/img18-4.jpg', null);
INSERT INTO `list_data` VALUES (null, '19', '../img/img19-1.jpg', null, '男装夏季短袖t恤男潮港风条纹印花宽松打底海魂衫半袖衣服男 黑色 M', '103', '388', '13', '40', '潮男公社', '93', '46', '../img/img19-1.jpg', '../img/img19-2.jpg', '../img/img19-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '20', '../img/img20-1.jpg', null, '夏季个性t恤男五分袖网纱外套gd权志龙同款网洞上衣潮体恤衫 白色 M', '40', '369', '59', '93', '潮男搭配师', '140', '113', '../img/img20-1.jpg', '../img/img20-2.jpg', '../img/img20-3.jpg', '../img/img20-4.jpg', null);
INSERT INTO `list_data` VALUES (null, '21', '../img/img21-1.jpg', null, '斯潮 爆款新品大吉大利晚上吃鸡绝地求生短袖宽松潮流体t恤港风男 黑色 M', '76', '246', '30', '37', '潮男公社', '65', '192', '../img/img21-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '22', '../img/img22-1.jpg', null, '视感韩味羽毛字母印花短袖T恤男款宽松时尚半袖t体恤 黑色 M', '104', '363', '42', '18', '潮男公社', '122', '123', '../img/img22-1.jpg', '../img/img22-2.jpg', '../img/img22-3.jpg', '../img/img22-4.jpg', null);
INSERT INTO `list_data` VALUES (null, '23', '../img/img23-1.jpg', null, '新款潮2018春夏男女纯棉情侣印花短袖T恤宽松半袖 港风 黑色 M', '95', '308', '77', '49', '顺兴男士潮流', '139', '62', '../img/img23-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '24', '../img/img24-1.jpg', null, '春季2018新款马甲韩版棉衣背心男士修身棉服潮流冬季羽绒马夹外套 黑色 M', '37', '353', '53', '97', '顺兴男士潮流', '132', '173', '../img/img24-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '25', '../img/img25-1.jpg', null, '夏季欧美风青少年韩版宽松圆领半袖衫潮男日系个性印花短袖T恤 白色 M', '33', '187', '2', '40', '潮男搭配师', '128', '109', '../img/img25-1.jpg', '../img/img25-2.jpg', '../img/img25-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '26', '../img/img26-1.jpg', null, '潮男士百搭polo衫短袖韩版英伦翻领宽松teeT恤薄款男神 黑色 M', '34', '312', '51', '8', '原创潮服', '33', '83', '../img/img26-1.jpg', '../img/img26-2.jpg', '../img/img26-3.jpg', '../img/img26-4.jpg', null);
INSERT INTO `list_data` VALUES (null, '27', '../img/img27-1.jpg', null, '夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 M', '126', '149', '72', '76', '李木子的小店', '15', '86', '../img/img27-1.jpg', '../img/img27-2.jpg', null, null, null);
INSERT INTO `list_data` VALUES (null, '28', '../img/img28-1.jpg', null, '小清新夏季男士短袖POLO衫男韩版潮流半袖贴标上衣T恤学生班服潮 浅蓝色 M', '103', '339', '0', '22', '潮衣格', '26', '38', '../img/img28-1.jpg', '../img/img28-2.jpg', '../img/img28-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '29', '../img/img29-1.jpg', null, '风新款青少年夏季短袖衬衫韩版条纹印花纯色半袖衬衣男士潮 黑色 M', '106', '203', '50', '65', '好男孩潮品铺', '53', '174', '../img/img29-1.jpg', '../img/img29-2.jpg', '../img/img29-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '30', '../img/img30-1.jpg', null, '冬季休闲工装棉服男士宽松拼接棉衣韩版百搭加厚棉袄潮流男装外套 绿色 S', '121', '274', '46', '100', '好男孩潮品铺', '71', '72', '../img/img30-1.jpg', '../img/img30-2.jpg', null, null, null);
INSERT INTO `list_data` VALUES (null, '31', '../img/img31-1.jpg', null, '2018秋季新款港风街头嘻哈加肥大码青少年个性夹克韩版休闲男装潮 花色 M', '69', '278', '21', '66', '衣品家', '147', '7', '../img/img31-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '32', '../img/img32-1.jpg', null, '秋季2017新款休闲运动套装男韩版潮流学生社会小伙男士卫衣两件套 黑色 M', '62', '153', '18', '16', '潮衣格', '88', '89', '../img/img32-1.jpg', '../img/img32-2.jpg', '../img/img32-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '33', '../img/img33-1.jpg', null, '条纹西服套装男三件套修身韩版秋冬男士青年毛呢西装套装英伦休闲 蓝灰色套装 S', '101', '324', '39', '70', '原创潮服', '33', '127', '../img/img33-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '34', '../img/img34-1.jpg', null, '男式休闲套装春季新品时尚韩版青少年圆领套头印花港风套装 黑色 M', '60', '298', '39', '5', '衣品轩', '19', '157', '../img/img34-1.jpg', '../img/img34-2.jpg', '../img/img34-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '35', '../img/img22-1.jpg', null, '视感韩味羽毛字母印花短袖T恤男款宽松时尚半袖t体恤 黑色 M', '77', '264', '22', '13', '潮男公社', '115', '50', '../img/img22-1.jpg', '../img/img22-2.jpg', '../img/img22-3.jpg', '../img/img22-4.jpg', null);
INSERT INTO `list_data` VALUES (null, '36', '../img/img23-1.jpg', null, '新款潮2018春夏男女纯棉情侣印花短袖T恤宽松半袖 港风 黑色 M', '53', '151', '29', '11', '顺兴男士潮流', '69', '54', '../img/img23-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '37', '../img/img24-1.jpg', null, '春季2018新款马甲韩版棉衣背心男士修身棉服潮流冬季羽绒马夹外套 黑色 M', '102', '413', '64', '26', '顺兴男士潮流', '145', '110', '../img/img24-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '38', '../img/img20-1.jpg', null, '夏季个性t恤男五分袖网纱外套gd权志龙同款网洞上衣潮体恤衫 白色 M', '74', '210', '18', '44', '潮男搭配师', '114', '97', '../img/img20-1.jpg', '../img/img20-2.jpg', '../img/img20-3.jpg', '../img/img20-4.jpg', null);
INSERT INTO `list_data` VALUES (null, '39', '../img/img17-1.jpg', null, '潮男长袖T恤秋冬百搭彩色条纹高领打底衫宽松纯棉T恤男 粉色 M', '50', '292', '72', '54', '潮衣格', '68', '160', '../img/img17-1.jpg', '../img/img17-2.jpg', '../img/img17-3.jpg', '../img/img17-4.jpg', '../img/img17-5.jpg');
INSERT INTO `list_data` VALUES (null, '40', '../img/img18-1.jpg', null, '新款五分袖韩版潮流短袖T恤男士夏季宽松衣服学生体恤半截袖 白色 M', '100', '352', '8', '20', '潮衣格', '105', '119', '../img/img18-1.jpg', '../img/img18-2.jpg', '../img/img18-3.jpg', '../img/img18-4.jpg', null);
INSERT INTO `list_data` VALUES (null, '41', '../img/img32-1.jpg', null, '秋季2017新款休闲运动套装男韩版潮流学生社会小伙男士卫衣两件套 黑色 M', '41', '433', '34', '79', '潮衣格', '7', '58', '../img/img32-1.jpg', '../img/img32-2.jpg', '../img/img32-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '42', '../img/img33-1.jpg', null, '条纹西服套装男三件套修身韩版秋冬男士青年毛呢西装套装英伦休闲 蓝灰色套装 S', '86', '268', '32', '82', '原创潮服', '45', '37', '../img/img33-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '43', '../img/img34-1.jpg', null, '男式休闲套装春季新品时尚韩版青少年圆领套头印花港风套装 黑色 M', '108', '364', '52', '25', '衣品轩', '127', '43', '../img/img34-1.jpg', '../img/img34-2.jpg', '../img/img34-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '44', '../img/img25-1.jpg', null, '夏季欧美风青少年韩版宽松圆领半袖衫潮男日系个性印花短袖T恤 白色 M', '45', '225', '8', '70', '潮男搭配师', '135', '117', '../img/img25-1.jpg', '../img/img25-2.jpg', '../img/img25-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '45', '../img/img26-1.jpg', null, '潮男士百搭polo衫短袖韩版英伦翻领宽松teeT恤薄款男神 黑色 M', '123', '237', '64', '27', '原创潮服', '36', '93', '../img/img26-1.jpg', '../img/img26-2.jpg', '../img/img26-3.jpg', '../img/img26-4.jpg', null);
INSERT INTO `list_data` VALUES (null, '46', '../img/img27-1.jpg', null, '夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 M', '43', '416', '62', '18', '李木子的小店', '50', '165', '../img/img27-1.jpg', '../img/img27-2.jpg', null, null, null);
INSERT INTO `list_data` VALUES (null, '47', '../img/img23-1.jpg', null, '新款潮2018春夏男女纯棉情侣印花短袖T恤宽松半袖 港风 黑色 M', '37', '396', '32', '21', '顺兴男士潮流', '71', '127', '../img/img23-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '48', '../img/img24-1.jpg', null, '春季2018新款马甲韩版棉衣背心男士修身棉服潮流冬季羽绒马夹外套 黑色 M', '71', '150', '79', '98', '顺兴男士潮流', '15', '34', '../img/img24-1.jpg', null, null, null, '');
INSERT INTO `list_data` VALUES (null, '49', '../img/img25-1.jpg', null, '夏季欧美风青少年韩版宽松圆领半袖衫潮男日系个性印花短袖T恤 白色 M', '35', '152', '16', '51', '潮男搭配师', '134', '34', '../img/img25-1.jpg', '../img/img25-2.jpg', '../img/img25-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '50', '../img/img31-1.jpg', null, '2018秋季新款港风街头嘻哈加肥大码青少年个性夹克韩版休闲男装潮 花色 M', '97', '347', '37', '48', '衣品家', '66', '123', '../img/img31-1.jpg', null, null, null, '');
INSERT INTO `list_data` VALUES (null, '51', '../img/img32-1.jpg', null, '秋季2017新款休闲运动套装男韩版潮流学生社会小伙男士卫衣两件套 黑色 M', '101', '313', '10', '54', '潮衣格', '35', '112', '../img/img32-1.jpg', '../img/img32-2.jpg', '../img/img32-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '52', '../img/img21-1.jpg', null, '斯潮 爆款新品大吉大利晚上吃鸡绝地求生短袖宽松潮流体t恤港风男 黑色 M', '49', '188', '60', '27', '潮男公社', '106', '53', '../img/img21-1.jpg', null, null, null, '');
INSERT INTO `list_data` VALUES (null, '53', '../img/img22-1.jpg', null, '视感韩味羽毛字母印花短袖T恤男款宽松时尚半袖t体恤 黑色 M', '99', '164', '34', '41', '潮男公社', '54', '38', '../img/img22-1.jpg', '../img/img22-2.jpg', '../img/img22-3.jpg', '../img/img22-4.jpg', '');
INSERT INTO `list_data` VALUES (null, '54', '../img/img23-1.jpg', null, '新款潮2018春夏男女纯棉情侣印花短袖T恤宽松半袖 港风 黑色 M', '109', '237', '43', '50', '顺兴男士潮流', '108', '184', '../img/img23-1.jpg', null, null, null, '');
INSERT INTO `list_data` VALUES (null, '55', '../img/img19-1.jpg', null, '男装夏季短袖t恤男潮港风条纹印花宽松打底海魂衫半袖衣服男 黑色 M', '44', '285', '53', '34', '潮男公社', '137', '135', '../img/img19-1.jpg', '../img/img19-2.jpg', '../img/img19-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '56', '../img/img20-1.jpg', null, '夏季个性t恤男五分袖网纱外套gd权志龙同款网洞上衣潮体恤衫 白色 M', '128', '392', '61', '99', '潮男搭配师', '4', '183', '../img/img20-1.jpg', '../img/img20-2.jpg', '../img/img20-3.jpg', '../img/img20-4.jpg', '');
INSERT INTO `list_data` VALUES (null, '57', '../img/img21-1.jpg', null, '斯潮 爆款新品大吉大利晚上吃鸡绝地求生短袖宽松潮流体t恤港风男 黑色 M', '50', '194', '26', '3', '潮男公社', '131', '131', '../img/img21-1.jpg', null, null, null, '');
INSERT INTO `list_data` VALUES (null, '58', '../img/img34-1.jpg', null, '男式休闲套装春季新品时尚韩版青少年圆领套头印花港风套装 黑色 M', '84', '275', '40', '77', '衣品轩', '149', '92', '../img/img34-1.jpg', '../img/img34-2.jpg', '../img/img34-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '59', '../img/img22-1.jpg', null, '视感韩味羽毛字母印花短袖T恤男款宽松时尚半袖t体恤 黑色 M', '85', '384', '32', '86', '潮男公社', '68', '180', '../img/img22-1.jpg', '../img/img22-2.jpg', '../img/img22-3.jpg', '../img/img22-4.jpg', '');
INSERT INTO `list_data` VALUES (null, '60', '../img/img23-1.jpg', null, '新款潮2018春夏男女纯棉情侣印花短袖T恤宽松半袖 港风 黑色 M', '51', '222', '35', '53', '顺兴男士潮流', '145', '11', '../img/img23-1.jpg', null, null, null, '');
INSERT INTO `list_data` VALUES (null, '61', '../img/img27-1.jpg', null, '夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 M', '49', '313', '7', '19', '李木子的小店', '51', '64', '../img/img27-1.jpg', '../img/img27-2.jpg', null, null, '');
INSERT INTO `list_data` VALUES (null, '62', '../img/img23-1.jpg', null, '新款潮2018春夏男女纯棉情侣印花短袖T恤宽松半袖 港风 黑色 M', '120', '256', '20', '98', '顺兴男士潮流', '44', '88', '../img/img23-1.jpg', null, null, null, '');
INSERT INTO `list_data` VALUES (null, '63', '../img/img27-1.jpg', null, '夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 M', '48', '300', '80', '18', '李木子的小店', '97', '37', '../img/img27-1.jpg', '../img/img27-2.jpg', null, null, '');
INSERT INTO `list_data` VALUES (null, '64', '../img/img28-1.jpg', null, '小清新夏季男士短袖POLO衫男韩版潮流半袖贴标上衣T恤学生班服潮 浅蓝色 M', '69', '413', '78', '43', '潮衣格', '99', '12', '../img/img28-1.jpg', '../img/img28-2.jpg', '../img/img28-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '65', '../img/img29-1.jpg', null, '风新款青少年夏季短袖衬衫韩版条纹印花纯色半袖衬衣男士潮 黑色 M', '60', '167', '44', '59', '好男孩潮品铺', '97', '140', '../img/img29-1.jpg', '../img/img29-2.jpg', '../img/img29-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '66', '../img/img17-1.jpg', null, '潮男长袖T恤秋冬百搭彩色条纹高领打底衫宽松纯棉T恤男 粉色 M', '35', '181', '52', '75', '潮衣格', '67', '11', '../img/img17-1.jpg', '../img/img17-2.jpg', '../img/img17-3.jpg', '../img/img17-4.jpg', '../img/img17-5.jpg');
INSERT INTO `list_data` VALUES (null, '67', '../img/img18-1.jpg', null, '新款五分袖韩版潮流短袖T恤男士夏季宽松衣服学生体恤半截袖 白色 M', '49', '434', '61', '34', '潮衣格', '99', '171', '../img/img18-1.jpg', '../img/img18-2.jpg', '../img/img18-3.jpg', '../img/img18-4.jpg', null);
INSERT INTO `list_data` VALUES (null, '68', '../img/img32-1.jpg', null, '秋季2017新款休闲运动套装男韩版潮流学生社会小伙男士卫衣两件套 黑色 M', '87', '268', '37', '82', '潮衣格', '1', '195', '../img/img32-1.jpg', '../img/img32-2.jpg', '../img/img32-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '69', '../img/img33-1.jpg', null, '条纹西服套装男三件套修身韩版秋冬男士青年毛呢西装套装英伦休闲 蓝灰色套装 S', '50', '354', '59', '14', '原创潮服', '49', '33', '../img/img33-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '70', '../img/img19-1.jpg', null, '男装夏季短袖t恤男潮港风条纹印花宽松打底海魂衫半袖衣服男 黑色 M', '60', '370', '21', '90', '潮男公社', '86', '171', '../img/img19-1.jpg', '../img/img19-2.jpg', '../img/img19-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '71', '../img/img20-1.jpg', null, '夏季个性t恤男五分袖网纱外套gd权志龙同款网洞上衣潮体恤衫 白色 M', '101', '247', '74', '53', '潮男搭配师', '58', '78', '../img/img20-1.jpg', '../img/img20-2.jpg', '../img/img20-3.jpg', '../img/img20-4.jpg', null);
INSERT INTO `list_data` VALUES (null, '72', '../img/img24-1.jpg', null, '春季2018新款马甲韩版棉衣背心男士修身棉服潮流冬季羽绒马夹外套 黑色 M', '50', '344', '3', '78', '顺兴男士潮流', '95', '153', '../img/img24-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '73', '../img/img25-1.jpg', null, '夏季欧美风青少年韩版宽松圆领半袖衫潮男日系个性印花短袖T恤 白色 M', '59', '367', '61', '83', '潮男搭配师', '88', '58', '../img/img25-1.jpg', '../img/img25-2.jpg', '../img/img25-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '74', '../img/img26-1.jpg', null, '潮男士百搭polo衫短袖韩版英伦翻领宽松teeT恤薄款男神 黑色 M', '51', '297', '22', '81', '原创潮服', '96', '9', '../img/img26-1.jpg', '../img/img26-2.jpg', '../img/img26-3.jpg', '../img/img26-4.jpg', null);
INSERT INTO `list_data` VALUES (null, '75', '../img/img26-1.jpg', null, '潮男士百搭polo衫短袖韩版英伦翻领宽松teeT恤薄款男神 黑色 M', '54', '272', '25', '64', '原创潮服', '24', '121', '../img/img26-1.jpg', '../img/img26-2.jpg', '../img/img26-3.jpg', '../img/img26-4.jpg', null);
INSERT INTO `list_data` VALUES (null, '76', '../img/img27-1.jpg', null, '夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 M', '78', '240', '79', '8', '李木子的小店', '8', '52', '../img/img27-1.jpg', '../img/img27-2.jpg', null, null, null);
INSERT INTO `list_data` VALUES (null, '77', '../img/img28-1.jpg', null, '小清新夏季男士短袖POLO衫男韩版潮流半袖贴标上衣T恤学生班服潮 浅蓝色 M', '97', '419', '10', '47', '潮衣格', '54', '118', '../img/img28-1.jpg', '../img/img28-2.jpg', '../img/img28-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '78', '../img/img25-1.jpg', null, '夏季欧美风青少年韩版宽松圆领半袖衫潮男日系个性印花短袖T恤 白色 M', '56', '406', '66', '30', '潮男搭配师', '136', '16', '../img/img25-1.jpg', '../img/img25-2.jpg', '../img/img25-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '79', '../img/img31-1.jpg', null, '2018秋季新款港风街头嘻哈加肥大码青少年个性夹克韩版休闲男装潮 花色 M', '81', '195', '28', '46', '衣品家', '117', '100', '../img/img31-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '80', '../img/img32-1.jpg', null, '秋季2017新款休闲运动套装男韩版潮流学生社会小伙男士卫衣两件套 黑色 M', '86', '248', '28', '11', '潮衣格', '80', '13', '../img/img32-1.jpg', '../img/img32-2.jpg', '../img/img32-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '81', '../img/img26-1.jpg', null, '潮男士百搭polo衫短袖韩版英伦翻领宽松teeT恤薄款男神 黑色 M', '49', '358', '77', '83', '原创潮服', '138', '113', '../img/img26-1.jpg', '../img/img26-2.jpg', '../img/img26-3.jpg', '../img/img26-4.jpg', '');
INSERT INTO `list_data` VALUES (null, '82', '../img/img27-1.jpg', null, '夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 M', '128', '332', '51', '25', '李木子的小店', '49', '200', '../img/img27-1.jpg', '../img/img27-2.jpg', null, null, '');
INSERT INTO `list_data` VALUES (null, '83', '../img/img18-1.jpg', null, '新款五分袖韩版潮流短袖T恤男士夏季宽松衣服学生体恤半截袖 白色 M', '76', '275', '19', '84', '潮衣格', '30', '44', '../img/img18-1.jpg', '../img/img18-2.jpg', '../img/img18-3.jpg', '../img/img18-4.jpg', '');
INSERT INTO `list_data` VALUES (null, '84', '../img/img32-1.jpg', null, '秋季2017新款休闲运动套装男韩版潮流学生社会小伙男士卫衣两件套 黑色 M', '82', '391', '47', '9', '潮衣格', '121', '9', '../img/img32-1.jpg', '../img/img32-2.jpg', '../img/img32-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '85', '../img/img33-1.jpg', null, '条纹西服套装男三件套修身韩版秋冬男士青年毛呢西装套装英伦休闲 蓝灰色套装 S', '42', '221', '33', '34', '原创潮服', '57', '28', '../img/img33-1.jpg', null, null, null, '');
INSERT INTO `list_data` VALUES (null, '86', '../img/img34-1.jpg', null, '男式休闲套装春季新品时尚韩版青少年圆领套头印花港风套装 黑色 M', '80', '176', '50', '10', '衣品轩', '66', '81', '../img/img34-1.jpg', '../img/img34-2.jpg', '../img/img34-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '87', '../img/img18-1.jpg', null, '新款五分袖韩版潮流短袖T恤男士夏季宽松衣服学生体恤半截袖 白色 M', '52', '209', '5', '52', '潮衣格', '132', '62', '../img/img18-1.jpg', '../img/img18-2.jpg', '../img/img18-3.jpg', '../img/img18-4.jpg', '');
INSERT INTO `list_data` VALUES (null, '88', '../img/img19-1.jpg', null, '男装夏季短袖t恤男潮港风条纹印花宽松打底海魂衫半袖衣服男 黑色 M', '75', '421', '39', '14', '潮男公社', '124', '104', '../img/img19-1.jpg', '../img/img19-2.jpg', '../img/img19-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '89', '../img/img25-1.jpg', null, '夏季欧美风青少年韩版宽松圆领半袖衫潮男日系个性印花短袖T恤 白色 M', '114', '426', '14', '47', '潮男搭配师', '90', '87', '../img/img25-1.jpg', '../img/img25-2.jpg', '../img/img25-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '90', '../img/img26-1.jpg', null, '潮男士百搭polo衫短袖韩版英伦翻领宽松teeT恤薄款男神 黑色 M', '116', '359', '34', '38', '原创潮服', '11', '188', '../img/img26-1.jpg', '../img/img26-2.jpg', '../img/img26-3.jpg', '../img/img26-4.jpg', '');
INSERT INTO `list_data` VALUES (null, '91', '../img/img27-1.jpg', null, '夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 M', '53', '209', '43', '63', '李木子的小店', '69', '128', '../img/img27-1.jpg', '../img/img27-2.jpg', null, null, '');
INSERT INTO `list_data` VALUES (null, '92', '../img/img19-1.jpg', null, '男装夏季短袖t恤男潮港风条纹印花宽松打底海魂衫半袖衣服男 黑色 M', '32', '142', '64', '51', '潮男公社', '27', '66', '../img/img19-1.jpg', '../img/img19-2.jpg', '../img/img19-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '93', '../img/img20-1.jpg', null, '夏季个性t恤男五分袖网纱外套gd权志龙同款网洞上衣潮体恤衫 白色 M', '118', '382', '53', '11', '潮男搭配师', '41', '86', '../img/img20-1.jpg', '../img/img20-2.jpg', '../img/img20-3.jpg', '../img/img20-4.jpg', '');
INSERT INTO `list_data` VALUES (null, '94', '../img/img21-1.jpg', null, '斯潮 爆款新品大吉大利晚上吃鸡绝地求生短袖宽松潮流体t恤港风男 黑色 M', '127', '407', '6', '85', '潮男公社', '147', '159', '../img/img21-1.jpg', null, null, null, '');
INSERT INTO `list_data` VALUES (null, '95', '../img/img22-1.jpg', null, '视感韩味羽毛字母印花短袖T恤男款宽松时尚半袖t体恤 黑色 M', '59', '386', '67', '93', '潮男公社', '135', '129', '../img/img22-1.jpg', '../img/img22-2.jpg', '../img/img22-3.jpg', '../img/img22-4.jpg', '');
INSERT INTO `list_data` VALUES (null, '96', '../img/img25-1.jpg', null, '夏季欧美风青少年韩版宽松圆领半袖衫潮男日系个性印花短袖T恤 白色 M', '52', '237', '70', '76', '潮男搭配师', '106', '89', '../img/img25-1.jpg', '../img/img25-2.jpg', '../img/img25-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '97', '../img/img31-1.jpg', null, '2018秋季新款港风街头嘻哈加肥大码青少年个性夹克韩版休闲男装潮 花色 M', '107', '334', '37', '19', '衣品家', '82', '52', '../img/img31-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '98', '../img/img32-1.jpg', null, '秋季2017新款休闲运动套装男韩版潮流学生社会小伙男士卫衣两件套 黑色 M', '92', '370', '42', '93', '潮衣格', '103', '145', '../img/img32-1.jpg', '../img/img32-2.jpg', '../img/img32-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '99', '../img/img20-1.jpg', null, '夏季个性t恤男五分袖网纱外套gd权志龙同款网洞上衣潮体恤衫 白色 M', '31', '190', '50', '59', '潮男搭配师', '48', '152', '../img/img20-1.jpg', '../img/img20-2.jpg', '../img/img20-3.jpg', '../img/img20-4.jpg', null);
INSERT INTO `list_data` VALUES (null, '100', '../img/img21-1.jpg', null, '斯潮 爆款新品大吉大利晚上吃鸡绝地求生短袖宽松潮流体t恤港风男 黑色 M', '103', '263', '35', '94', '潮男公社', '141', '158', '../img/img21-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '101', '../img/img34-1.jpg', null, '男式休闲套装春季新品时尚韩版青少年圆领套头印花港风套装 黑色 M', '112', '412', '46', '24', '衣品轩', '137', '171', '../img/img34-1.jpg', '../img/img34-2.jpg', '../img/img34-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '102', '../img/img25-1.jpg', null, '夏季欧美风青少年韩版宽松圆领半袖衫潮男日系个性印花短袖T恤 白色 M', '82', '230', '9', '5', '潮男搭配师', '112', '114', '../img/img25-1.jpg', '../img/img25-2.jpg', '../img/img25-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '103', '../img/img31-1.jpg', null, '2018秋季新款港风街头嘻哈加肥大码青少年个性夹克韩版休闲男装潮 花色 M', '125', '274', '35', '30', '衣品家', '8', '105', '../img/img31-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '104', '../img/img32-1.jpg', null, '秋季2017新款休闲运动套装男韩版潮流学生社会小伙男士卫衣两件套 黑色 M', '56', '220', '61', '81', '潮衣格', '15', '185', '../img/img32-1.jpg', '../img/img32-2.jpg', '../img/img32-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '105', '../img/img29-1.jpg', null, '风新款青少年夏季短袖衬衫韩版条纹印花纯色半袖衬衣男士潮 黑色 M', '77', '264', '3', '17', '好男孩潮品铺', '60', '14', '../img/img29-1.jpg', '../img/img29-2.jpg', '../img/img29-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '106', '../img/img17-1.jpg', null, '潮男长袖T恤秋冬百搭彩色条纹高领打底衫宽松纯棉T恤男 粉色 M', '44', '190', '27', '36', '潮衣格', '67', '3', '../img/img17-1.jpg', '../img/img17-2.jpg', '../img/img17-3.jpg', '../img/img17-4.jpg', '../img/img17-5.jpg');
INSERT INTO `list_data` VALUES (null, '107', '../img/img18-1.jpg', null, '新款五分袖韩版潮流短袖T恤男士夏季宽松衣服学生体恤半截袖 白色 M', '75', '381', '76', '100', '潮衣格', '84', '97', '../img/img18-1.jpg', '../img/img18-2.jpg', '../img/img18-3.jpg', '../img/img18-4.jpg', null);
INSERT INTO `list_data` VALUES (null, '108', '../img/img26-1.jpg', null, '潮男士百搭polo衫短袖韩版英伦翻领宽松teeT恤薄款男神 黑色 M', '56', '205', '64', '71', '原创潮服', '101', '13', '../img/img26-1.jpg', '../img/img26-2.jpg', '../img/img26-3.jpg', '../img/img26-4.jpg', null);
INSERT INTO `list_data` VALUES (null, '109', '../img/img27-1.jpg', null, '夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 M', '47', '247', '75', '97', '李木子的小店', '124', '134', '../img/img27-1.jpg', '../img/img27-2.jpg', null, null, null);
INSERT INTO `list_data` VALUES (null, '110', '../img/img21-1.jpg', null, '斯潮 爆款新品大吉大利晚上吃鸡绝地求生短袖宽松潮流体t恤港风男 黑色 M', '97', '418', '43', '0', '潮男公社', '131', '134', '../img/img21-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '111', '../img/img34-1.jpg', null, '男式休闲套装春季新品时尚韩版青少年圆领套头印花港风套装 黑色 M', '104', '249', '39', '38', '衣品轩', '40', '54', '../img/img34-1.jpg', '../img/img34-2.jpg', '../img/img34-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '112', '../img/img22-1.jpg', null, '视感韩味羽毛字母印花短袖T恤男款宽松时尚半袖t体恤 黑色 M', '31', '157', '48', '44', '潮男公社', '118', '66', '../img/img22-1.jpg', '../img/img22-2.jpg', '../img/img22-3.jpg', '../img/img22-4.jpg', '');
INSERT INTO `list_data` VALUES (null, '113', '../img/img19-1.jpg', null, '男装夏季短袖t恤男潮港风条纹印花宽松打底海魂衫半袖衣服男 黑色 M', '80', '419', '74', '86', '潮男公社', '122', '129', '../img/img19-1.jpg', '../img/img19-2.jpg', '../img/img19-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '114', '../img/img25-1.jpg', null, '夏季欧美风青少年韩版宽松圆领半袖衫潮男日系个性印花短袖T恤 白色 M', '100', '231', '28', '86', '潮男搭配师', '95', '144', '../img/img25-1.jpg', '../img/img25-2.jpg', '../img/img25-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '115', '../img/img26-1.jpg', null, '潮男士百搭polo衫短袖韩版英伦翻领宽松teeT恤薄款男神 黑色 M', '122', '138', '26', '78', '原创潮服', '149', '156', '../img/img26-1.jpg', '../img/img26-2.jpg', '../img/img26-3.jpg', '../img/img26-4.jpg', '');
INSERT INTO `list_data` VALUES (null, '116', '../img/img34-1.jpg', null, '男式休闲套装春季新品时尚韩版青少年圆领套头印花港风套装 黑色 M', '62', '260', '8', '97', '衣品轩', '21', '21', '../img/img34-1.jpg', '../img/img34-2.jpg', '../img/img34-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '117', '../img/img25-1.jpg', null, '夏季欧美风青少年韩版宽松圆领半袖衫潮男日系个性印花短袖T恤 白色 M', '112', '208', '68', '76', '潮男搭配师', '141', '179', '../img/img25-1.jpg', '../img/img25-2.jpg', '../img/img25-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '118', '../img/img31-1.jpg', null, '2018秋季新款港风街头嘻哈加肥大码青少年个性夹克韩版休闲男装潮 花色 M', '58', '188', '69', '4', '衣品家', '95', '172', '../img/img31-1.jpg', null, null, null, '');
INSERT INTO `list_data` VALUES (null, '119', '../img/img26-1.jpg', null, '潮男士百搭polo衫短袖韩版英伦翻领宽松teeT恤薄款男神 黑色 M', '95', '434', '27', '33', '原创潮服', '47', '183', '../img/img26-1.jpg', '../img/img26-2.jpg', '../img/img26-3.jpg', '../img/img26-4.jpg', '');
INSERT INTO `list_data` VALUES (null, '120', '../img/img27-1.jpg', null, '夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 M', '69', '177', '50', '58', '李木子的小店', '93', '50', '../img/img27-1.jpg', '../img/img27-2.jpg', null, null, '');
INSERT INTO `list_data` VALUES (null, '121', '../img/img28-1.jpg', null, '小清新夏季男士短袖POLO衫男韩版潮流半袖贴标上衣T恤学生班服潮 浅蓝色 M', '126', '192', '42', '53', '潮衣格', '105', '95', '../img/img28-1.jpg', '../img/img28-2.jpg', '../img/img28-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '122', '../img/img25-1.jpg', null, '夏季欧美风青少年韩版宽松圆领半袖衫潮男日系个性印花短袖T恤 白色 M', '52', '161', '44', '73', '潮男搭配师', '5', '199', '../img/img25-1.jpg', '../img/img25-2.jpg', '../img/img25-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '123', '../img/img31-1.jpg', null, '2018秋季新款港风街头嘻哈加肥大码青少年个性夹克韩版休闲男装潮 花色 M', '55', '425', '7', '74', '衣品家', '78', '174', '../img/img31-1.jpg', null, null, null, '');
INSERT INTO `list_data` VALUES (null, '124', '../img/img32-1.jpg', null, '秋季2017新款休闲运动套装男韩版潮流学生社会小伙男士卫衣两件套 黑色 M', '117', '232', '70', '29', '潮衣格', '96', '185', '../img/img32-1.jpg', '../img/img32-2.jpg', '../img/img32-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '125', '../img/img18-1.jpg', null, '新款五分袖韩版潮流短袖T恤男士夏季宽松衣服学生体恤半截袖 白色 M', '35', '355', '30', '32', '潮衣格', '17', '108', '../img/img18-1.jpg', '../img/img18-2.jpg', '../img/img18-3.jpg', '../img/img18-4.jpg', '');
INSERT INTO `list_data` VALUES (null, '126', '../img/img32-1.jpg', null, '秋季2017新款休闲运动套装男韩版潮流学生社会小伙男士卫衣两件套 黑色 M', '111', '224', '7', '71', '潮衣格', '150', '6', '../img/img32-1.jpg', '../img/img32-2.jpg', '../img/img32-3.jpg', null, '');
INSERT INTO `list_data` VALUES (null, '127', '../img/img33-1.jpg', null, '条纹西服套装男三件套修身韩版秋冬男士青年毛呢西装套装英伦休闲 蓝灰色套装 S', '45', '279', '64', '31', '原创潮服', '127', '35', '../img/img33-1.jpg', null, null, null, '');
INSERT INTO `list_data` VALUES (null, '128', '../img/img34-1.jpg', null, '男式休闲套装春季新品时尚韩版青少年圆领套头印花港风套装 黑色 M', '114', '190', '1', '18', '衣品轩', '121', '105', '../img/img34-1.jpg', '../img/img34-2.jpg', '../img/img34-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '129', '../img/img23-1.jpg', null, '新款潮2018春夏男女纯棉情侣印花短袖T恤宽松半袖 港风 黑色 M', '60', '314', '46', '96', '顺兴男士潮流', '3', '130', '../img/img23-1.jpg', null, null, null, null);
INSERT INTO `list_data` VALUES (null, '130', '../img/img27-1.jpg', null, '夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 M', '35', '143', '47', '42', '李木子的小店', '77', '172', '../img/img27-1.jpg', '../img/img27-2.jpg', null, null, null);
INSERT INTO `list_data` VALUES (null, '131', '../img/img28-1.jpg', null, '小清新夏季男士短袖POLO衫男韩版潮流半袖贴标上衣T恤学生班服潮 浅蓝色 M', '79', '434', '59', '24', '潮衣格', '125', '147', '../img/img28-1.jpg', '../img/img28-2.jpg', '../img/img28-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '132', '../img/img29-1.jpg', null, '风新款青少年夏季短袖衬衫韩版条纹印花纯色半袖衬衣男士潮 黑色 M', '73', '157', '59', '84', '好男孩潮品铺', '107', '163', '../img/img29-1.jpg', '../img/img29-2.jpg', '../img/img29-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '133', '../img/img17-1.jpg', null, '潮男长袖T恤秋冬百搭彩色条纹高领打底衫宽松纯棉T恤男 粉色 M', '74', '190', '66', '19', '潮衣格', '137', '99', '../img/img17-1.jpg', '../img/img17-2.jpg', '../img/img17-3.jpg', '../img/img17-4.jpg', '../img/img17-5.jpg');
INSERT INTO `list_data` VALUES (null, '134', '../img/img17-1.jpg', null, '潮男长袖T恤秋冬百搭彩色条纹高领打底衫宽松纯棉T恤男 粉色 M', '125', '376', '9', '40', '潮衣格', '10', '84', '../img/img17-1.jpg', '../img/img17-2.jpg', '../img/img17-3.jpg', '../img/img17-4.jpg', '../img/img17-5.jpg');
INSERT INTO `list_data` VALUES (null, '135', '../img/img18-1.jpg', null, '新款五分袖韩版潮流短袖T恤男士夏季宽松衣服学生体恤半截袖 白色 M', '109', '221', '12', '73', '潮衣格', '8', '146', '../img/img18-1.jpg', '../img/img18-2.jpg', '../img/img18-3.jpg', '../img/img18-4.jpg', null);
INSERT INTO `list_data` VALUES (null, '136', '../img/img32-1.jpg', null, '秋季2017新款休闲运动套装男韩版潮流学生社会小伙男士卫衣两件套 黑色 M', '92', '343', '56', '25', '潮衣格', '83', '139', '../img/img32-1.jpg', '../img/img32-2.jpg', '../img/img32-3.jpg', null, null);
INSERT INTO `list_data` VALUES (null, '137', '../img/img27-1.jpg', null, '夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 M', '68', '292', '25', '80', '李木子的小店', '130', '59', '../img/img27-1.jpg', '../img/img27-2.jpg', null, null, null);

-- ----------------------------
-- Table structure for message_data
-- ----------------------------
DROP TABLE IF EXISTS `message_data`;
CREATE TABLE `message_data` (
  `﻿bugid` varchar(255) DEFAULT NULL,
  `mid` int(1) unsigned NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `dateline` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `comments` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of message_data
-- ----------------------------
INSERT INTO `message_data` VALUES (null, '1', 'test1', '2019-05-17 20:45:22', '留言测试1~');
INSERT INTO `message_data` VALUES (null, '2', 'test1', '2019-05-17 21:02:04', '留言板测试2');

-- ----------------------------
-- Table structure for order_data
-- ----------------------------
DROP TABLE IF EXISTS `order_data`;
CREATE TABLE `order_data` (
  `﻿bugId` varchar(255) DEFAULT NULL,
  `shops` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `goodId` int(11) DEFAULT NULL,
  `goodName` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `counts` int(11) DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_data
-- ----------------------------
INSERT INTO `order_data` VALUES (null, '潮衣格', '../img/img18-1.jpg', '18', '新款五分袖韩版潮流短袖T恤男士夏季宽松衣服学生体恤半截袖 白色 M', '126', '3', 'Tiko123');
INSERT INTO `order_data` VALUES (null, '李木子的小店', '../img/img27-1.jpg', '27', '夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 M', '126', '1', 'Gold123');
INSERT INTO `order_data` VALUES (null, '潮衣格', '../img/img28-1.jpg', '28', '小清新夏季男士短袖POLO衫男韩版潮流半袖贴标上衣T恤学生班服潮 浅蓝色 M', '103', '1', 'Gold123');
INSERT INTO `order_data` VALUES (null, '潮男公社', '../img/img19-1.jpg', '19', '男装夏季短袖t恤男潮港风条纹印花宽松打底海魂衫半袖衣服男 黑色 M', '103', '2', 'Tiko123');

-- ----------------------------
-- Table structure for register_library
-- ----------------------------
DROP TABLE IF EXISTS `register_library`;
CREATE TABLE `register_library` (
  `﻿id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `pwd` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`﻿id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of register_library
-- ----------------------------
INSERT INTO `register_library` VALUES ('1', '13512346789', 'John123', 'qwe123', 'John123@gmail.com');
INSERT INTO `register_library` VALUES ('2', '18523457890', 'Seven123', 'asd123', 'Seven123@yahoo.com');
INSERT INTO `register_library` VALUES ('3', '15834568080', 'Gold123', 'zxc123', 'Gold123@icloud.com');
INSERT INTO `register_library` VALUES ('4', '13734561290', 'Poke123', 'iop123', 'Poke123@ymail.com');
INSERT INTO `register_library` VALUES ('5', '13167823410', 'Cold123', 'rty123', 'Cold123@163.com');
INSERT INTO `register_library` VALUES ('6', '18690462317', 'Tiko123', 'fgh123', 'Tiko123@hotmail.com ');
INSERT INTO `register_library` VALUES ('7', '18812348989', 'test1', 'a12345', 'testing123@inbox.com');
SET FOREIGN_KEY_CHECKS=1;
