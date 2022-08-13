var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "ABOUT ME";
	$scope.updateInfo = "Updated 69 minuted ago";
	$scope.verify = "Verify";
	$scope.des = "i am Dazk !";
	$scope.cv = "JOB";
	$scope.job1 = "📷NHIẾP ẢNH IT HUTECH";
	$scope.job2 = "💸Android Dev (JAVA)";
	$scope.contact = "Thông tin liên lạc";
	$scope.contact1 = "📧quocdan.contact@gmail.com";
	$scope.contact2 = "fb.com/Dazk.Cyber/";
	$scope.contactmi = "CONTACT ME";
	$scope.ifyou = "Nếu có thắc mắc gì thì liên hệ mình !";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal3 = "Youtube";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://fb.com/Dazk.Cyber/";
	$scope.linkzl = "https://zalo.me/0784806372";
	$scope.linksc = "https://www.youtube.com/channel/UCT_aNTdiNGQXyM2aHOVaajQ";
	$scope.linkgm = "quocdan.contact@gmail.com";
	$scope.phonenumber = "0784806372 - MOBIPHONE";
	$scope.email = "quocdan.contact@gmail.com";
	$scope.title2 = "My Story";
	$scope.contentStory1 = "không có gì để kể";
	$scope.contentStory2 = "nhiều câu chuyện để kể nhưng không muốn kể";
	$scope.contentStory3 = "Một năm toàn đại dịch haha cũng không có gì đáng kể";
	$scope.contentStory4 = "hành trình bắt đầu từ đây...";
	$scope.storytitle1 = "Câu chuyện năm nhất";
	$scope.storytitle2 = "Câu chuyện năm hai";
	$scope.storytitle3 = "Câu chuyện năm ba";
	$scope.storytitle4 = "Câu chuyện năm cuối";
	$scope.nothinglikeus = "Thank for watching! ";
	$scope.thankall = "Cảm ơn mọi người đã ghé qua :)";
	$scope.au = "DAZK";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});